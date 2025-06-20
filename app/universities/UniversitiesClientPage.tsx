"use client"

import { useState, useMemo } from "react"
import { UniversityFilters } from "@/components/universities/university-filters"
import { UniversityGrid } from "@/components/universities/university-grid"
import { universities as allUniversities } from "@/lib/data"

export default function UniversitiesClientPage() {
  const [selectedCountry, setSelectedCountry] = useState("All")
  const [selectedRegion, setSelectedRegion] = useState("All")
  const [selectedFee, setSelectedFee] = useState("All")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const filteredUniversities = useMemo(() => {
    return allUniversities.filter((university) => {
      const matchesCountry = selectedCountry === "All" || university.country === selectedCountry
      const matchesRegion = selectedRegion === "All" || university.region === selectedRegion
      const matchesFee = selectedFee === "All" || university.feeRange === selectedFee
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(university.category)

      return matchesCountry && matchesRegion && matchesFee && matchesCategory
    })
  }, [selectedCountry, selectedRegion, selectedFee, selectedCategories])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Universities in <span className="text-gradient">India & Abroad</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover world-class universities and find the perfect match for your academic journey
          </p>
        </div>

        <UniversityFilters
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          selectedFee={selectedFee}
          setSelectedFee={setSelectedFee}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <UniversityGrid universities={filteredUniversities} />
      </div>
    </div>
  )
}
