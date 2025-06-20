"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function ContactHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-6xl mb-6">🎯</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Start Your
              <br />
              <span className="text-gradient">Educational Journey</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our expert counselors are here to guide you through every step of your study abroad journey. Get
              personalized advice tailored to your goals and aspirations.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Call Us</p>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email Us</p>
                  <p className="text-gray-600">info@eduglobal.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Visit Us</p>
                  <p className="text-gray-600">Mumbai, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🌟</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Consultation</h3>
                <p className="text-gray-600">Get expert guidance at no cost</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl">✅</div>
                  <span className="text-gray-700">University Selection</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl">✅</div>
                  <span className="text-gray-700">Application Assistance</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <div className="text-2xl">✅</div>
                  <span className="text-gray-700">Scholarship Guidance</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <div className="text-2xl">✅</div>
                  <span className="text-gray-700">Visa Support</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-200 rounded-full flex items-center justify-center text-2xl"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              🎓
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-4 w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center text-xl"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              🌍
            </motion.div>

            {/* Main Illustration */}
            <div className="flex justify-center mt-8">
              <Image
                src="/placeholder.svg"
                alt="Contact our education experts"
                width={320}
                height={320}
                className="rounded-2xl shadow-xl object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
