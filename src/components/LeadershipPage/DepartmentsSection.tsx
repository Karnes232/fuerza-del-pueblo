// components/LeadershipPage/DepartmentsSection.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { DepartmentCard } from "@/components/LeadershipPage/DepartmentCard"
import { DepartmentsProps } from "@/types/leadership.types"

export const DepartmentsSection = ({
  title,
  subtitle,
  departments,
}: DepartmentsProps) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map(department => (
            <DepartmentCard key={department.id} department={department} />
          ))}
        </div>
      </Container>
    </section>
  )
}
