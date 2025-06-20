"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, DollarSign, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function UniversitiesSectionClient({ featuredUniversities }: { featuredUniversities: any[] }) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-gradient">Universities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover top-ranked universities across the globe with comprehensive program offerings
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredUniversities.map((university, index) => (
            <motion.div
              key={university.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`card-hover border-2`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
                      <div className="text-2xl">{university.flag}</div>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-semibold text-gray-700">{university.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{university.title}</h3>

                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">{university.country}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600 font-medium">{university.fees_range}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {(university.tags ? university.tags.split(',') : []).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
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
          className="text-center mt-12"
        >
          <Link
            href="/universities"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors"
          >
            View All Universities
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 