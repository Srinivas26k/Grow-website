"use client"

import { useState, useMemo } from "react"
import { BlogCategories } from "@/components/blogs/blog-categories"
import { BlogGrid } from "@/components/blogs/blog-grid"
import { blogs as allBlogs } from "@/lib/data"

export default function BlogClientPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredBlogs = useMemo(() => {
    if (selectedCategory === "All") {
      return allBlogs
    }
    return allBlogs.filter((blog) => blog.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education <span className="text-gradient">Insights & Tips</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice, latest news, and valuable insights to guide your educational journey
          </p>
        </div>

        <BlogCategories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <BlogGrid blogs={filteredBlogs} />
      </div>
    </div>
  )
}
