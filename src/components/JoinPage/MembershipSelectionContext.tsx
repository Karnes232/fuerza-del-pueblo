"use client"

import { createContext, useContext, useState } from "react"

interface MembershipSelectionContextValue {
  selectedTier: string
  setSelectedTier: (tier: string) => void
}

const MembershipSelectionContext =
  createContext<MembershipSelectionContextValue>({
    selectedTier: "simpatizante",
    setSelectedTier: () => {},
  })

export function MembershipSelectionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [selectedTier, setSelectedTier] = useState("simpatizante")
  return (
    <MembershipSelectionContext.Provider value={{ selectedTier, setSelectedTier }}>
      {children}
    </MembershipSelectionContext.Provider>
  )
}

export const useMembershipSelection = () =>
  useContext(MembershipSelectionContext)
