// components/EventPage/EventSchedule.tsx
import { Container } from "@/components/HomePage/Container"
import { EventScheduleProps } from "@/types/event.types"
import { Clock } from "lucide-react"

export const EventSchedule = ({ title, schedule }: EventScheduleProps) => {
  if (schedule.length === 0) return null

  return (
    <section className="py-12 md:py-16 bg-[#F4F4F4]">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-8">
            {title}
          </h2>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primaryGreen/30 hidden md:block" />

            {/* Schedule Items */}
            <div className="space-y-6">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-6 bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  {/* Time Badge */}
                  <div className="shrink-0">
                    <div className="relative z-10 w-12 h-12 bg-primaryGreen rounded-full flex items-center justify-center shadow-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex flex-wrap items-baseline gap-3 mb-2">
                      <span className="text-xl font-bold text-primaryGreen">
                        {item.time}
                      </span>
                      <h3 className="text-lg font-bold text-charcoal">
                        {item.activity}
                      </h3>
                    </div>
                    {item.description && (
                      <p className="text-charcoal/70">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
