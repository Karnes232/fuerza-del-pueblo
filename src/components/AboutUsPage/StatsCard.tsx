"use client"

import { Users, MapPin, Calendar, Heart, LucideIcon } from "lucide-react"
import { useEffect, useState } from "react"

const ICON_MAP: Record<string, LucideIcon> = {
  Users,
  MapPin,
  Calendar,
  Heart,
}

function parseValue(value: string): { number: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/)
  if (!match) return { number: 0, suffix: value }
  return { number: parseInt(match[1], 10), suffix: match[2] ?? "" }
}

const DURATION_MS = 1500

interface StatsCardProps {
  value: string
  label: string
  icon: string
}

export const StatsCard = ({ value, label, icon }: StatsCardProps) => {
  const IconComponent = ICON_MAP[icon]
  const { number: target, suffix } = parseValue(value)
  const [displayNumber, setDisplayNumber] = useState(0)

  useEffect(() => {
    if (target === 0) return
    const start = performance.now()
    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / DURATION_MS, 1)
      // Ease-out so it slows near the end
      const eased = 1 - (1 - progress) ** 2
      setDisplayNumber(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    const id = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(id)
  }, [target])

  const displayValue = `${displayNumber}${suffix}`

  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center group">
      <div className="flex flex-col items-center space-y-4">
        {/* Icon */}
        <div className="w-16 h-16 bg-primaryGreen/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          {IconComponent && (
            <IconComponent className="w-8 h-8 text-primaryGreen" />
          )}
        </div>

        {/* Value */}
        <div className="text-4xl md:text-5xl font-bold text-primaryGreen">
          {displayValue}
        </div>

        {/* Label */}
        <p className="text-lg text-charcoal/70 font-semibold">{label}</p>
      </div>
    </div>
  )
}
