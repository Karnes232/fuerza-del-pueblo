// components/FormCheckbox.tsx
import { FormCheckboxProps } from '@/types/unete.types';

export const FormCheckbox = ({
  name,
  label,
  checked,
  onChange,
  required = false,
}: FormCheckboxProps) => {
  return (
    <div className="flex items-start gap-3">
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        required={required}
        className="w-5 h-5 mt-0.5 text-[#00A651] border-gray-300 rounded focus:ring-2 focus:ring-[#00A651] cursor-pointer"
      />
      <label htmlFor={name} className="text-sm text-gray-700 cursor-pointer">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
    </div>
  );
};