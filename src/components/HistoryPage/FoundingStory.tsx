// components/HistoryPage/FoundingStory.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { FoundingStoryProps } from "@/types/history.types"
import { Calendar, Target, Users, CheckCircle } from "lucide-react"

export const FoundingStory = ({
  title,
  subtitle,
  year,
  context,
  founders,
  objectives,
}: FoundingStoryProps) => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F4F4]">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="max-w-4xl mx-auto">
          {/* Year Badge */}
          <div className="flex justify-center mb-8">
            <div className="bg-linear-to-r from-primaryGreen to-darkGreen text-white px-8 py-4 rounded-full shadow-lg flex items-center gap-3">
              <Calendar className="w-6 h-6" />
              <span className="text-2xl font-bold">{year}</span>
            </div>
          </div>

          {/* Context */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-primaryGreen/10 rounded-full flex items-center justify-center">
                <Target className="w-5 h-5 text-primaryGreen" />
              </div>
              Contexto de Fundación
            </h3>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              {context}
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Founders */}
            {founders && founders.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primaryGreen" />
                  Fundadores
                </h4>
                <ul className="space-y-3">
                  {founders.map((founder, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-charcoal/70"
                    >
                      <CheckCircle className="w-5 h-5 text-primaryGreen shrink-0 mt-0.5" />
                      <span>{founder}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Objectives */}
            {objectives && objectives.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primaryGreen" />
                  Objetivos Fundacionales
                </h4>
                <ul className="space-y-3">
                  {objectives.map((objective, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-charcoal/70"
                    >
                      <CheckCircle className="w-5 h-5 text-primaryGreen shrink-0 mt-0.5" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
