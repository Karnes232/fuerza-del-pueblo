// components/MembershipTierCard.tsx
import { Check, Circle } from 'lucide-react';
import { MembershipTierCardProps } from '@/types/unete.types';

export const MembershipTierCard = ({ tier, onSelect }: MembershipTierCardProps) => {
  return (
    <div
      className={`bg-white p-8 rounded-lg shadow-lg border-2 transition-all duration-300 hover:shadow-2xl relative ${
        tier.recommended 
          ? 'border-[#00A651] transform md:-translate-y-4' 
          : 'border-gray-200'
      }`}
    >
      {/* Recommended Badge */}
      {tier.recommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#00A651] text-white px-4 py-1 rounded-full text-sm font-semibold">
          Recomendado
        </div>
      )}
      
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-[#1F4D2B] mb-2">
          {tier.name}
        </h3>
        <p className="text-gray-600 mb-4">
          {tier.description}
        </p>
        <div className="text-3xl font-bold" style={{ color: tier.color }}>
          {tier.price}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 mb-6">
        {/* Benefits */}
        <div>
          <h4 className="font-semibold text-[#1F4D2B] mb-2">Beneficios:</h4>
          <ul className="space-y-2">
            {tier.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-[#00A651] shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div>
          <h4 className="font-semibold text-[#1F4D2B] mb-2">Requisitos:</h4>
          <ul className="space-y-2">
            {tier.requirements.map((req, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                <Circle 
                  className="w-2 h-2 shrink-0 mt-1.5" 
                  style={{ color: tier.color }} 
                />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Select Button */}
      <a
        href="#registro"
        onClick={onSelect}
        className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors ${
          tier.recommended
            ? 'bg-[#00A651] text-white hover:bg-[#008d45]'
            : 'bg-gray-100 text-[#1F4D2B] hover:bg-gray-200'
        }`}
      >
        Seleccionar
      </a>
    </div>
  );
};