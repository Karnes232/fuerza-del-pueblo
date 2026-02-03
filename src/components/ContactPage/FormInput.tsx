// components/FormInput.tsx
import { FormInputProps } from "@/types/contact.types"

export const FormInput = ({
  name,
  label,
  type = "text",
  placeholder,
  required = false,
  value,
  onChange,
  error,
}: FormInputProps) => {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-darkGreen"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryGreen transition-all ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:border-primaryGreen"
        }`}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}
