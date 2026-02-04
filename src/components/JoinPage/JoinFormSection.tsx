// sections/JoinFormSection.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { JoinForm } from "@/components/JoinPage/JoinForm"
import { JoinFormSectionProps } from "@/types/unete.types"

export const JoinFormSection = ({
  title,
  subtitle,
  onSubmit,
}: JoinFormSectionProps) => {
  return (
    <section id="registro" className="py-16 md:py-24 bg-[#F4F4F4]">
      <Container size="md">
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <JoinForm onSubmit={onSubmit} />
        </div>
      </Container>
    </section>
  )
}
