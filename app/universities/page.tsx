import type { Metadata } from "next"
import UniversitiesClientPage from "./UniversitiesClientPage"

// Metadata is static and can be defined outside the client component
export const metadata: Metadata = {
  title: "Universities - Explore Top Universities in India & Abroad | Vgrow-Careers",
  description:
    "Discover top universities in India, USA, UK, Germany, Japan, and Australia. Compare fees, rankings, and programs to find your perfect match.",
}

export default function UniversitiesPage() {
  return <UniversitiesClientPage />
}
