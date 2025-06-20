"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function ContactForm() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Book Your <span className="text-gradient">Free Consultation</span>
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and our expert counselors will get back to you within 24 hours
            </p>
          </div>

          <Card className="shadow-2xl border-0">
            <CardContent className="p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Personalized Guidance</h3>
                <p className="text-gray-600">
                  Our counselors will help you choose the right university and program based on your profile and goals.
                </p>
              </div>

              {/* Google Form Embed */}
              <div className="w-full">
                {/* IMPORTANT: Replace 'YOUR_GOOGLE_FORM_EMBED_URL' with your actual Google Form embed URL */}
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSf_example_form_id/viewform?embedded=true"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-lg"
                  title="Contact Form"
                >
                  Loading…
                </iframe>
              </div>

              {/* Alternative Contact Methods */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Prefer to contact us directly?</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-2">📞</div>
                    <p className="font-semibold text-gray-900">Call Us</p>
                    <p className="text-blue-600">+91 98765 43210</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl mb-2">💬</div>
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <p className="text-green-600">Quick Response</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl mb-2">📧</div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-purple-600">info@eduglobal.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
