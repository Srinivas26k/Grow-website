import { BlogCategories } from "@/components/blogs/blog-categories"
import { BlogGrid } from "@/components/blogs/blog-grid"
import { getBlogs } from "@/lib/server/data"
import { useState } from "react"

export default async function BlogClientPage() {
  const blogs = getBlogs();
  // For filtering, you can use client-side state if needed, or filter on the server
  // Here, we show all blogs by default
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

        {/* You can implement category filtering as a client component if needed */}
        {/* <BlogCategories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} /> */}
        <BlogGrid blogs={blogs} />
      </div>
    </div>
  )
}
