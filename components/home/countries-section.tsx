"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const countries = [
  {
    name: "India",
    flag: "🇮🇳",
    description: "Premier institutions with affordable education",
    universities: "500+ Universities",
    color: "from-orange-400 to-green-400",
  },
  {
    name: "United States",
    flag: "🇺🇸",
    description: "World-class research universities",
    universities: "200+ Universities",
    color: "from-blue-400 to-red-400",
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    description: "Historic institutions with global recognition",
    universities: "150+ Universities",
    color: "from-blue-600 to-purple-600",
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    description: "Engineering excellence with low tuition",
    universities: "100+ Universities",
    color: "from-red-400 to-yellow-400",
  },
  {
    name: "Japan",
    flag: "🇯🇵",
    description: "Innovation hub with cutting-edge technology",
    universities: "80+ Universities",
    color: "from-red-500 to-pink-500",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    description: "Quality education with work opportunities",
    universities: "120+ Universities",
    color: "from-green-400 to-blue-400",
  },
]

export function CountriesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Study Destinations We <span className="text-gradient">Support</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore world-class education opportunities across multiple countries with our expert guidance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover border-0 shadow-lg overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${country.color}`} />
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-6xl mb-4">{country.flag}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{country.name}</h3>
                    <p className="text-gray-600 mb-4">{country.description}</p>
                    <div
                      className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${country.color} text-white font-semibold text-sm`}
                    >
                      {country.universities}
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
