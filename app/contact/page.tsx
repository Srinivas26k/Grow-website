'use client'
import React, { useEffect, useState } from "react"
import { ContactHero } from "@/components/contact/contact-hero"

export default function ContactPage() {
  const [formToken, setFormToken] = useState("")
  useEffect(() => {
    setFormToken(Math.random().toString(36).substring(2) + Date.now())
  }, [])

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <form name={process.env.NEXT_PUBLIC_NETLIFY_FORM_CONTACT} method="POST" data-netlify="true" className="space-y-4 bg-white p-6 rounded-lg shadow-md max-w-lg">
        <input type="hidden" name="form-name" value={process.env.NEXT_PUBLIC_NETLIFY_FORM_CONTACT} />
        <input type="hidden" name="form-token" value={formToken} />
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input name="name" required className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input name="email" type="email" required className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea name="message" required className="w-full border rounded px-3 py-2" rows={4} />
        </div>
        {/* Honeypot */}
        <div style={{ display: 'none' }}>
          <label>Don't fill this out if you're human: <input name="bot-field" /></label>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Send Message</button>
      </form>
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Google Form Fallback</h3>
        <iframe src={process.env.NEXT_PUBLIC_GOOGLE_FORM_CONTACT_URL} width="100%" height="600" frameBorder="0" title="Contact Form" className="rounded-lg" />
      </div>
    </div>
  )
}
