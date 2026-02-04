// components/AboutPage/Timeline.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { TimelineProps } from "@/types/about.types"
import { Calendar } from "lucide-react"

export const Timeline = ({ title, subtitle, items }: TimelineProps) => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F4F4]">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primaryGreen/30 transform md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative flex items-start ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  } flex-col md:gap-8`}
                >
                  {/* Year Badge */}
                  <div className="shrink-0 w-full md:w-1/2 flex items-center">
                    <div
                      className={`flex items-center gap-4 ${
                        index % 2 === 0
                          ? "md:justify-end md:flex-row"
                          : "md:justify-start md:flex-row-reverse"
                      }`}
                    >
                      <div className="relative z-10 bg-primaryGreen text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        {item.year}
                      </div>
                      {/* Dot on timeline */}
                      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primaryGreen rounded-full border-4 border-white shadow-md" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="shrink-0 w-full md:w-1/2 mt-4 md:mt-0">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ml-12 md:ml-0">
                      <h3 className="text-xl font-bold text-charcoal mb-3">
                        {item.title}
                      </h3>
                      <p className="text-charcoal/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
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