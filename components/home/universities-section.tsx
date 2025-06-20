import { getUniversities } from "@/lib/server/data"
import UniversitiesSectionClient from "./universities-section-client"

export default async function UniversitiesSection() {
  const allUniversities = getUniversities();
  const featuredUniversities = allUniversities.filter((u) => u.featured).slice(0, 6)
  return <UniversitiesSectionClient featuredUniversities={featuredUniversities} />
}
