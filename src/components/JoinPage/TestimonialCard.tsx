// components/TestimonialCard.tsx
import { Quote } from "lucide-react"
import { TestimonialCardProps } from "@/types/unete.types"

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-[#F4F4F4] p-6 rounded-lg shadow-md">
      {/* Author Info */}
      <div className="flex items-center gap-4 mb-4">
        {testimonial.photo ? (
          <img
            src={testimonial.photo}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-[#00A651] flex items-center justify-center text-white font-bold text-2xl">
            {testimonial.name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-bold text-[#1F4D2B]">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
          {testimonial.location && (
            <p className="text-xs text-gray-500">{testimonial.location}</p>
          )}
        </div>
      </div>

      {/* Quote */}
      <div className="relative">
        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#00A651]/20" />
        <p className="text-gray-700 italic pl-6">{testimonial.quote}</p>
      </div>
    </div>
  )
}
