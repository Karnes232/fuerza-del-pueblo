// components/FormTextarea.tsx
import { FormTextareaProps } from "@/types/contact.types"

export const FormTextarea = ({
  name,
  label,
  placeholder,
  required = false,
  value,
  onChange,
  error,
  rows = 5,
}: FormTextareaProps) => {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-darkGreen"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryGreen transition-all resize-y ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:border-primaryGreen"
        }`}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}
