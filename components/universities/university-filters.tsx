"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Filter, X } from "lucide-react"
import type { Dispatch, SetStateAction } from "react"

interface UniversityFiltersProps {
  selectedCountry: string
  setSelectedCountry: Dispatch<SetStateAction<string>>
  selectedRegion: string
  setSelectedRegion: Dispatch<SetStateAction<string>>
  selectedFee: string
  setSelectedFee: Dispatch<SetStateAction<string>>
  selectedCategories: string[]
  setSelectedCategories: Dispatch<SetStateAction<string[]>>
}

const filterOptions = {
  countries: ["All", "India", "USA", "UK", "Germany", "Japan", "Australia", "Canada", "Singapore"],
  regions: ["All", "India", "Abroad"],
  fees: ["All", "Low (< $10k)", "Medium ($10k-$30k)", "High (> $30k)"],
  categories: ["Engineering", "Business", "Medicine", "Arts", "Science", "Law"],
}

export function UniversityFilters({
  selectedCountry,
  setSelectedCountry,
  selectedRegion,
  setSelectedRegion,
  selectedFee,
  setSelectedFee,
  selectedCategories,
  setSelectedCategories,
}: UniversityFiltersProps) {
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const clearAllFilters = () => {
    setSelectedCountry("All")
    setSelectedRegion("All")
    setSelectedFee("All")
    setSelectedCategories([])
  }

  const hasActiveFilters =
    selectedCountry !== "All" || selectedRegion !== "All" || selectedFee !== "All" || selectedCategories.length > 0

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Filter Universities</h3>
        </div>
        {hasActiveFilters && (
          <Button variant="outline" size="sm" onClick={clearAllFilters}>
            <X className="h-4 w-4 mr-2" />
            Clear All
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {/* Country Filter */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Country</h4>
          <div className="flex flex-wrap gap-2">
            {filterOptions.countries.map((country) => (
              <Button
                key={country}
                variant={selectedCountry === country ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCountry(country)}
                className="rounded-full"
              >
                {country}
              </Button>
            ))}
          </div>
        </div>

        {/* Region Filter */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Region</h4>
          <div className="flex flex-wrap gap-2">
            {filterOptions.regions.map((region) => (
              <Button
                key={region}
                variant={selectedRegion === region ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedRegion(region)}
                className="rounded-full"
              >
                {region}
              </Button>
            ))}
          </div>
        </div>

        {/* Fee Range Filter */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Fee Range</h4>
          <div className="flex flex-wrap gap-2">
            {filterOptions.fees.map((fee) => (
              <Button
                key={fee}
                variant={selectedFee === fee ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFee(fee)}
                className="rounded-full"
              >
                {fee}
              </Button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Categories</h4>
          <div className="flex flex-wrap gap-2">
            {filterOptions.categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategories.includes(category) ? "default" : "outline"}
                className="cursor-pointer hover:bg-blue-100 transition-colors"
                onClick={() => toggleCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Active Filters:</h4>
          <div className="flex flex-wrap gap-2">
            {selectedCountry !== "All" && <Badge variant="secondary">Country: {selectedCountry}</Badge>}
            {selectedRegion !== "All" && <Badge variant="secondary">Region: {selectedRegion}</Badge>}
            {selectedFee !== "All" && <Badge variant="secondary">Fee: {selectedFee}</Badge>}
            {selectedCategories.map((category) => (
              <Badge key={category} variant="secondary">
                Category: {category}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
