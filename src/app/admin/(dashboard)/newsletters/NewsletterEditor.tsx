"use client"

import { useEditor, EditorContent, type Editor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Link from "@tiptap/extension-link"
import {
  Bold,
  Italic,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Link as LinkIcon,
  Unlink,
  Undo,
  Redo,
} from "lucide-react"
import { useEffect } from "react"

type Props = {
  value: string
  onChange: (html: string) => void
  disabled?: boolean
}

export default function NewsletterEditor({ value, onChange, disabled }: Props) {
  const editor = useEditor({
    immediatelyRender: false,
    editable: !disabled,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      Link.configure({
        openOnClick: false,
        protocols: ["http", "https", "mailto"],
        HTMLAttributes: {
          rel: "noopener noreferrer",
          target: "_blank",
        },
      }),
    ],
    content: value || "",
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class:
          "tiptap-content focus:outline-none px-4 py-3 min-h-[300px] text-sm text-charcoal",
      },
    },
  })

  useEffect(() => {
    if (!editor) return
    editor.setEditable(!disabled)
  }, [editor, disabled])

  useEffect(() => {
    if (!editor) return
    if (value !== editor.getHTML()) {
      editor.commands.setContent(value || "", { emitUpdate: false })
    }
  }, [editor, value])

  const handleLink = () => {
    if (!editor) return
    const previous = editor.getAttributes("link").href ?? ""
    const input = window.prompt("URL del enlace (https://… o mailto:…):", previous)
    if (input === null) return

    const url = input.trim()
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run()
      return
    }
    if (!/^(https?:\/\/|mailto:)/i.test(url)) {
      window.alert("URL inválida. Debe empezar con https://, http:// o mailto:")
      return
    }

    if (editor.state.selection.empty && !editor.isActive("link")) {
      editor
        .chain()
        .focus()
        .insertContent({
          type: "text",
          text: url,
          marks: [{ type: "link", attrs: { href: url } }],
        })
        .run()
    } else {
      editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run()
    }
  }

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-primaryGreen">
      <Toolbar editor={editor} onLink={handleLink} disabled={disabled} />
      <EditorContent editor={editor} />
      <EditorStyles />
    </div>
  )
}

function Toolbar({
  editor,
  onLink,
  disabled,
}: {
  editor: Editor | null
  onLink: () => void
  disabled?: boolean
}) {
  if (!editor) {
    return (
      <div className="border-b border-gray-200 bg-lightGray h-10" aria-hidden />
    )
  }

  return (
    <div className="flex flex-wrap items-center gap-1 border-b border-gray-200 bg-lightGray px-2 py-1.5">
      <Btn
        active={editor.isActive("bold")}
        disabled={disabled}
        onClick={() => editor.chain().focus().toggleBold().run()}
        label="Negrita"
      >
        <Bold size={14} />
      </Btn>
      <Btn
        active={editor.isActive("italic")}
        disabled={disabled}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        label="Cursiva"
      >
        <Italic size={14} />
      </Btn>

      <Divider />

      <Btn
        active={editor.isActive("heading", { level: 1 })}
        disabled={disabled}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        label="Encabezado 1"
      >
        <Heading1 size={14} />
      </Btn>
      <Btn
        active={editor.isActive("heading", { level: 2 })}
        disabled={disabled}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        label="Encabezado 2"
      >
        <Heading2 size={14} />
      </Btn>
      <Btn
        active={editor.isActive("heading", { level: 3 })}
        disabled={disabled}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        label="Encabezado 3"
      >
        <Heading3 size={14} />
      </Btn>

      <Divider />

      <Btn
        active={editor.isActive("bulletList")}
        disabled={disabled}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        label="Lista con viñetas"
      >
        <List size={14} />
      </Btn>
      <Btn
        active={editor.isActive("orderedList")}
        disabled={disabled}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        label="Lista numerada"
      >
        <ListOrdered size={14} />
      </Btn>

      <Divider />

      <Btn
        active={editor.isActive("link")}
        disabled={disabled}
        onClick={onLink}
        label="Insertar enlace"
      >
        <LinkIcon size={14} />
      </Btn>
      {editor.isActive("link") && (
        <Btn
          disabled={disabled}
          onClick={() =>
            editor.chain().focus().extendMarkRange("link").unsetLink().run()
          }
          label="Quitar enlace"
        >
          <Unlink size={14} />
        </Btn>
      )}

      <div className="ml-auto flex items-center gap-1">
        <Btn
          disabled={disabled || !editor.can().undo()}
          onClick={() => editor.chain().focus().undo().run()}
          label="Deshacer"
        >
          <Undo size={14} />
        </Btn>
        <Btn
          disabled={disabled || !editor.can().redo()}
          onClick={() => editor.chain().focus().redo().run()}
          label="Rehacer"
        >
          <Redo size={14} />
        </Btn>
      </div>
    </div>
  )
}

function Btn({
  active,
  disabled,
  onClick,
  label,
  children,
}: {
  active?: boolean
  disabled?: boolean
  onClick: () => void
  label: string
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={label}
      aria-label={label}
      aria-pressed={!!active}
      className={[
        "h-7 min-w-7 px-1.5 rounded text-xs flex items-center justify-center transition-colors",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        active
          ? "bg-primaryGreen text-white"
          : "text-charcoal hover:bg-white",
      ].join(" ")}
    >
      {children}
    </button>
  )
}

function Divider() {
  return <span className="w-px h-5 bg-gray-300 mx-1" aria-hidden />
}

function EditorStyles() {
  return (
    <style>{`
      .tiptap-content p { margin: 0 0 12px; line-height: 1.6; }
      .tiptap-content p:last-child { margin-bottom: 0; }
      .tiptap-content h1 { font-size: 1.5rem; font-weight: 700; color: #1F4D2B; margin: 16px 0 12px; line-height: 1.3; }
      .tiptap-content h2 { font-size: 1.25rem; font-weight: 700; color: #1F4D2B; margin: 14px 0 10px; line-height: 1.3; }
      .tiptap-content h3 { font-size: 1.05rem; font-weight: 700; color: #1F4D2B; margin: 12px 0 8px; line-height: 1.3; }
      .tiptap-content ul,
      .tiptap-content ol { margin: 0 0 12px; padding-left: 1.5rem; }
      .tiptap-content ul { list-style: disc; }
      .tiptap-content ol { list-style: decimal; }
      .tiptap-content li { margin: 4px 0; }
      .tiptap-content li > p { margin: 0; }
      .tiptap-content a { color: #00A651; text-decoration: underline; }
      .tiptap-content strong { font-weight: 700; }
      .tiptap-content em { font-style: italic; }
      .tiptap-content p.is-editor-empty:first-child::before {
        content: attr(data-placeholder);
        float: left;
        color: #9ca3af;
        pointer-events: none;
        height: 0;
      }
    `}</style>
  )
}
