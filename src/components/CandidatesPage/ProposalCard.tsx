// components/CandidatesPage/ProposalCard.tsx
import {
  GraduationCap,
  Heart,
  Building2,
  Briefcase,
  Shield,
  Leaf,
  Users,
  Palmtree,
  LucideIcon,
  CheckCircle,
} from "lucide-react"
import { CampaignProposal } from "@/types/candidates.types"

const ICON_MAP: Record<string, LucideIcon> = {
  GraduationCap,
  Heart,
  Building2,
  Briefcase,
  Shield,
  Leaf,
  Users,
  Palmtree,
}

interface ProposalCardProps {
  proposal: CampaignProposal
}

export const ProposalCard = ({ proposal }: ProposalCardProps) => {
  const IconComponent = ICON_MAP[proposal.icon]

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Header with gradient */}
      <div className="bg-linear-to-r from-primaryGreen to-darkGreen p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
            {IconComponent && <IconComponent className="w-6 h-6" />}
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide opacity-90">
              {proposal.category}
            </p>
            <h3 className="text-xl font-bold">{proposal.title}</h3>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Description */}
        <p className="text-charcoal/70 leading-relaxed mb-6">
          {proposal.description}
        </p>

        {/* Objectives */}
        {proposal.objectives && proposal.objectives.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-charcoal mb-3 uppercase tracking-wide">
              Objetivos:
            </h4>
            <ul className="space-y-2">
              {proposal.objectives.map((objective, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-charcoal/70"
                >
                  <CheckCircle className="w-4 h-4 text-primaryGreen shrink-0 mt-0.5" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
