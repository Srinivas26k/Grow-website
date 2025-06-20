"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Blog {
  id: number
  title: string
  slug: string
  description: string
  category: string
  emoji: string
  date: string
  readTime: string
  views: string
  color: string
  borderColor: string
  featured: boolean
  content: string
  image?: string
}

interface BlogGridProps {
  blogs: Blog[]
}

export function BlogGrid({ blogs }: BlogGridProps) {
  const featuredBlogs = blogs.filter((blog) => blog.featured)
  const allOtherBlogs = blogs.filter((blog) => !blog.featured)

  return (
    <div className="space-y-8">
      {/* Featured Blogs */}
      {featuredBlogs.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {featuredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`card-hover border-2 ${blog.borderColor} h-full`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{blog.emoji}</div>
                      <Badge className={blog.color}>{blog.category}</Badge>
                    </div>

                    {/* Blog Featured Image */}
                    <div className="flex justify-center mb-4">
                      <Image
                        src={blog.image || "/placeholder.jpg"}
                        alt={blog.title + " featured image"}
                        width={400}
                        height={200}
                        className="rounded-lg object-cover w-full h-40"
                        priority={index < 2}
                      />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{blog.title}</h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">{blog.description}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{blog.views}</span>
                      </div>
                    </div>

                    <Button asChild className="w-full" variant="outline">
                      <Link href={`/blogs/${blog.slug}`}>
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* All Blogs */}
      {allOtherBlogs.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">All Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allOtherBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 6) * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`card-hover border-2 ${blog.borderColor} h-full`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{blog.emoji}</div>
                      <Badge className={blog.color} variant="secondary">
                        {blog.category}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{blog.title}</h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{blog.description}</p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{blog.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>{blog.views}</span>
                        </div>
                      </div>
                    </div>

                    <Button asChild size="sm" variant="outline" className="w-full">
                      <Link href={`/blogs/${blog.slug}`}>Read Article</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {blogs.length === 0 && (
        <div className="text-center py-12 text-gray-600 text-xl">
          No blogs found matching your criteria. Try adjusting your filters!
        </div>
      )}
    </div>
  )
}
