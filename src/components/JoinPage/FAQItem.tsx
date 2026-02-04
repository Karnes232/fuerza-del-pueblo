// components/FAQItem.tsx
import { ChevronDown } from "lucide-react"
import { FAQItemProps } from "@/types/unete.types"

export const FAQItem = ({ faq, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-darkGreen pr-4">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-primaryGreen shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  )
}
