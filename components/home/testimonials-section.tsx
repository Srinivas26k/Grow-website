"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Priya Sharma",
    university: "Harvard University",
    country: "USA",
    flag: "🇺🇸",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "Vgrow-Careers made my dream of studying at Harvard a reality. Their guidance was invaluable throughout the entire process.",
    rating: 5,
    sticker: "🎉",
  },
  {
    name: "Rahul Patel",
    university: "University of Oxford",
    country: "UK",
    flag: "🇬🇧",
    image: "/placeholder.svg?height=80&width=80",
    quote: "The team at Vgrow-Careers provided exceptional support for my Oxford application. Highly recommended!",
    rating: 5,
    sticker: "🌟",
  },
  {
    name: "Ananya Singh",
    university: "Technical University Munich",
    country: "Germany",
    flag: "🇩🇪",
    image: "/placeholder.svg?height=80&width=80",
    quote: "Thanks to Vgrow-Careers, I am now pursuing my engineering degree in Germany with a full scholarship.",
    rating: 5,
    sticker: "🚀",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our students who achieved their dreams with our guidance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover border-0 shadow-lg relative overflow-hidden">
                <div className="absolute top-4 right-4 text-3xl">{testimonial.sticker}</div>
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-blue-400 mb-4" />

                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-400 shadow-md">
                      <Image
                        src={testimonial.image || "/placeholder-user.jpg"}
                        alt={testimonial.name + " photo"}
                        width={64}
                        height={64}
                        className="object-cover w-16 h-16"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <span>{testimonial.flag}</span>
                        {testimonial.university}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
