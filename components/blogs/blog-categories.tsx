"use client"

import { Button } from "@/components/ui/button"
import { BookOpen, Award, Briefcase, Lightbulb, Newspaper } from "lucide-react"
import type { Dispatch, SetStateAction } from "react"

interface BlogCategoriesProps {
  selectedCategory: string
  setSelectedCategory: Dispatch<SetStateAction<string>>
}

const categories = [
  { name: "All", icon: BookOpen, color: "bg-gray-100 text-gray-800" },
  { name: "Exams", icon: BookOpen, color: "bg-blue-100 text-blue-800" },
  { name: "Scholarships", icon: Award, color: "bg-green-100 text-green-800" },
  { name: "Jobs", icon: Briefcase, color: "bg-purple-100 text-purple-800" },
  { name: "Tips", icon: Lightbulb, color: "bg-orange-100 text-orange-800" },
  { name: "News", icon: Newspaper, color: "bg-red-100 text-red-800" },
]

export function BlogCategories({ selectedCategory, setSelectedCategory }: BlogCategoriesProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((category) => {
        const Icon = category.icon
        return (
          <Button
            key={category.name}
            variant={selectedCategory === category.name ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.name)}
            className="rounded-full flex items-center gap-2"
          >
            <Icon className="h-4 w-4" />
            {category.name}
          </Button>
        )
      })}
    </div>
  )
}
