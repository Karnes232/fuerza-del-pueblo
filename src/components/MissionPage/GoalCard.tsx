// components/MissionPage/GoalCard.tsx
import {
    Users,
    Wrench,
    TrendingUp,
    BookOpen,
    Globe,
    Smartphone,
    LucideIcon,
  } from "lucide-react"
  import { GoalItem } from "@/types/mission.types"
  
  const ICON_MAP: Record<string, LucideIcon> = {
    Users,
    Wrench,
    TrendingUp,
    BookOpen,
    Globe,
    Smartphone,
  }
  
  interface GoalCardProps {
    goal: GoalItem
  }
  
  export const GoalCard = ({ goal }: GoalCardProps) => {
    const IconComponent = ICON_MAP[goal.icon]
  
    // Determine color based on category
    const getCategoryColor = () => {
      if (goal.category.includes("Corto")) return "bg-blue-500"
      if (goal.category.includes("Mediano")) return "bg-orange-500"
      return "bg-purple-500"
    }
  
    const getCategoryBorderColor = () => {
      if (goal.category.includes("Corto")) return "border-blue-500"
      if (goal.category.includes("Mediano")) return "border-orange-500"
      return "border-purple-500"
    }
  
    return (
      <div
        className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 ${getCategoryBorderColor()}`}
      >
        <div className="flex flex-col space-y-4">
          {/* Category Badge */}
          <span
            className={`inline-block w-fit px-3 py-1 ${getCategoryColor()} text-white text-xs font-semibold rounded-full`}
          >
            {goal.category}
          </span>
  
          {/* Icon and Title */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primaryGreen/10 rounded-full flex items-center justify-center shrink-0">
              {IconComponent && (
                <IconComponent className="w-6 h-6 text-primaryGreen" />
              )}
            </div>
            <h3 className="text-lg font-bold text-charcoal flex-1">
              {goal.title}
            </h3>
          </div>
  
          {/* Description */}
          <p className="text-charcoal/70 text-sm leading-relaxed">
            {goal.description}
          </p>
        </div>
      </div>
    )
  }