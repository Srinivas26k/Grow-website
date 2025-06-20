"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useMemo } from "react"

export function CTASection() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/your-link"

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Start Your
            <br />
            <span className="text-yellow-300">Educational Journey?</span>
          </h2>

          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Get personalized guidance from our expert counselors and take the first step towards your dream university
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg rounded-full"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Book Free Counseling
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg rounded-full"
            >
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Book on Calendly
                </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="text-lg font-semibold mb-2">Personalized Guidance</h3>
              <p className="text-gray-200 text-sm">Tailored advice based on your profile and goals</p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-2">🌍</div>
              <h3 className="text-lg font-semibold mb-2">Global Network</h3>
              <p className="text-gray-200 text-sm">Partnerships with top universities worldwide</p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-2">✅</div>
              <h3 className="text-lg font-semibold mb-2">Proven Success</h3>
              <p className="text-gray-200 text-sm">10,000+ students successfully placed</p>
            </div>
          </motion.div>
        </motion.div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
          <Image
            src="/placeholder.svg"
            alt="Students celebrating success"
            width={320}
            height={320}
            className="rounded-2xl shadow-xl object-contain"
            priority={false}
          />
        </div>
      </div>
    </section>
  )
}
