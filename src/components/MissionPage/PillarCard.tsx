// components/MissionPage/PillarCard.tsx
import {
    Users,
    DollarSign,
    Leaf,
    Building,
    LucideIcon,
    CheckCircle,
  } from "lucide-react"
  
  const ICON_MAP: Record<string, LucideIcon> = {
    Users,
    DollarSign,
    Leaf,
    Building,
  }
  
  interface PillarCardProps {
    pillar: {
      id: string
      title: string
      description: string
      icon: string
      keyPoints: string[]
    }
  }
  
  export const PillarCard = ({ pillar }: PillarCardProps) => {
    const IconComponent = ICON_MAP[pillar.icon]
  
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
        {/* Header with gradient */}
        <div className="bg-linear-to-br from-primaryGreen to-darkGreen p-6 text-white">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
            </div>
            <h3 className="text-2xl font-bold">{pillar.title}</h3>
          </div>
          <p className="text-white/90 leading-relaxed">{pillar.description}</p>
        </div>
  
        {/* Key Points */}
        <div className="p-6">
          <h4 className="text-sm font-semibold text-charcoal/60 uppercase tracking-wide mb-4">
            Áreas Clave
          </h4>
          <ul className="space-y-3">
            {pillar.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primaryGreen shrink-0 mt-0.5" />
                <span className="text-charcoal/80">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }