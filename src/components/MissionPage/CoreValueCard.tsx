// components/MissionPage/CoreValueCard.tsx
import {
    Users,
    Scale,
    TrendingUp,
    Eye,
    Award,
    Lightbulb,
    LucideIcon,
    Check,
  } from "lucide-react"
  import { CoreValue } from "@/types/mission.types"
  
  const ICON_MAP: Record<string, LucideIcon> = {
    Users,
    Scale,
    TrendingUp,
    Eye,
    Award,
    Lightbulb,
  }
  
  interface CoreValueCardProps {
    value: CoreValue
  }
  
  export const CoreValueCard = ({ value }: CoreValueCardProps) => {
    const IconComponent = ICON_MAP[value.icon]
  
    return (
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border-t-4 border-primaryGreen">
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 bg-primaryGreen/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primaryGreen/20 transition-colors">
              {IconComponent && (
                <IconComponent className="w-7 h-7 text-primaryGreen" />
              )}
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-2">
                {value.title}
              </h3>
            </div>
          </div>
  
          <p className="text-charcoal/70 leading-relaxed mb-4">
            {value.description}
          </p>
        </div>
  
        {/* Details List */}
        {value.details && value.details.length > 0 && (
          <div className="px-6 pb-6">
            <div className="space-y-3 pt-4 border-t border-gray-200">
              {value.details.map((detail, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="shrink-0 w-5 h-5 bg-primaryGreen/20 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primaryGreen" />
                  </div>
                  <span className="text-sm text-charcoal/80">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }