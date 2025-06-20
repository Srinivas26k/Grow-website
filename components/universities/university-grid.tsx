"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, DollarSign, Users, BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface University {
  id: number
  name: string
  slug: string
  country: string
  flag: string
  logo: string
  fees: string
  feeRange: string
  rating: number
  students: string
  programs: string
  tags: string[]
  description: string
  color: string
  category: string
  region: string
}

interface UniversityGridProps {
  universities: University[]
}

export function UniversityGrid({ universities }: UniversityGridProps) {
  if (universities.length === 0) {
    return (
      <div className="text-center py-12 text-gray-600 text-xl">
        No universities found matching your criteria. Try adjusting your filters!
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {universities.map((university, index) => (
        <motion.div
          key={university.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Card className={`card-hover ${university.color} border-2 h-full`}>
            <CardContent className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <div className="text-2xl">{university.flag}</div>
                </div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-semibold text-gray-700">{university.rating}</span>
                </div>
              </div>

              {/* University Logo */}
              <div className="flex justify-center mb-4">
                <Image
                  src={university.logo || "/placeholder-logo.png"}
                  alt={university.name + " logo"}
                  width={64}
                  height={64}
                  className="rounded-lg object-contain bg-white shadow-md"
                  priority={index < 3}
                />
              </div>

              {/* University Info */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{university.name}</h3>

              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600">{university.country}</span>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{university.description}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{university.students}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{university.programs}</span>
                </div>
              </div>

              {/* Fees */}
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600 font-medium">{university.fees}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {university.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {university.tags.length > 2 && (
                  <Badge variant="outline" className="text-xs">
                    +{university.tags.length - 2} more
                  </Badge>
                )}
              </div>

              {/* Action Button */}
              <Button asChild className="w-full" variant="outline">
                <Link href={`/universities/${university.slug}`}>
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Details
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
