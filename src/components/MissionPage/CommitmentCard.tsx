// components/MissionPage/CommitmentCard.tsx
import {
    GraduationCap,
    Heart,
    Shield,
    Building2,
    Briefcase,
    Leaf,
    LucideIcon,
  } from "lucide-react"
  import { CommitmentItem } from "@/types/mission.types"
  
  const ICON_MAP: Record<string, LucideIcon> = {
    GraduationCap,
    Heart,
    Shield,
    Building2,
    Briefcase,
    Leaf,
  }
  
  interface CommitmentCardProps {
    commitment: CommitmentItem
  }
  
  export const CommitmentCard = ({ commitment }: CommitmentCardProps) => {
    const IconComponent = ICON_MAP[commitment.icon]
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primaryGreen group">
        <div className="flex flex-col space-y-4">
          {/* Icon */}
          <div className="w-12 h-12 bg-primaryGreen/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            {IconComponent && (
              <IconComponent className="w-6 h-6 text-primaryGreen" />
            )}
          </div>
  
          {/* Title */}
          <h3 className="text-lg font-bold text-charcoal">{commitment.title}</h3>
  
          {/* Description */}
          <p className="text-charcoal/70 text-sm leading-relaxed">
            {commitment.description}
          </p>
        </div>
      </div>
    )
  }