// sections/FAQSection.tsx
"use client"

import { useState } from "react"
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { FAQItem } from "@/components/JoinPage/FAQItem"
import { FAQSectionProps } from "@/types/unete.types"

export const FAQSection = ({ title, subtitle, faqs }: FAQSectionProps) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null)

  return (
    <section className="py-16 md:py-24 bg-[#F4F4F4]">
      <Container size="md">
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="space-y-4">
          {faqs.map(faq => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openFaqId === faq.id}
              onToggle={() =>
                setOpenFaqId(openFaqId === faq.id ? null : faq.id)
              }
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
