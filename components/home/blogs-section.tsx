"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { blogs } from "@/lib/data" // Import from centralized data

export function BlogsSection() {
  // Take a subset of blogs for the home page, prioritizing featured ones
  const featuredBlogs = blogs.filter((blog) => blog.featured).slice(0, 4)
  const otherBlogs = blogs.filter((blog) => !blog.featured)
  const blogsToShow = featuredBlogs.length > 0 ? featuredBlogs : otherBlogs.slice(0, 4)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest education news, tips, and expert advice
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {blogsToShow.map((blog, index) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{blog.emoji}</div>

                  <Badge className={`${blog.color} mb-3`}>{blog.category}</Badge>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{blog.title}</h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{blog.description}</p>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{blog.date}</span>
                    </div>
                    <span>{blog.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors"
          >
            View All Articles
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
