'use client'
import React, { useEffect, useState } from "react"

let TinaEditProvider: any = null
try {
  // @ts-ignore
  TinaEditProvider = require("@tinacms/app").TinaEditProvider
} catch (e) {
  TinaEditProvider = null
}

function hasNetlifyIdentity(win: any): win is typeof window & { netlifyIdentity: any } {
  return typeof win !== "undefined" && typeof win.netlifyIdentity !== "undefined"
}

const mockSubmissions = [
  { name: "Priya Sharma", email: "priya@email.com", form: "Contact", date: "2024-06-01" },
  { name: "Rahul Patel", email: "rahul@email.com", form: "Webinar", date: "2024-06-02" },
  { name: "Ananya Singh", email: "ananya@email.com", form: "Download", date: "2024-06-03" },
]

export default function AdminPage() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (hasNetlifyIdentity(window)) {
      window.netlifyIdentity.on("login", () => setIsAuth(true))
      window.netlifyIdentity.on("logout", () => setIsAuth(false))
      setIsAuth(!!window.netlifyIdentity.currentUser())
    }
  }, [])

  if (!isAuth) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold mb-6">Admin Portal</h1>
        <p className="mb-4 text-lg text-gray-700">Login to manage content (TinaCMS self-hosted)</p>
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700"
          onClick={() => hasNetlifyIdentity(window) && window.netlifyIdentity.open()}
        >
          Login with Netlify Identity
        </button>
      </div>
    )
  }

  if (!TinaEditProvider) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold mb-6">TinaCMS Not Installed</h1>
        <p className="mb-4 text-lg text-gray-700">The admin dashboard requires @tinacms/app. Please install TinaCMS or contact your developer.</p>
      </div>
    )
  }

  // Analytics
  const totalLeads = mockSubmissions.length
  const conversionRate = ((totalLeads / 1000) * 100).toFixed(2) // Example: 1000 visitors

  return (
    <TinaEditProvider>
      <div className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-4xl font-bold mb-6">TinaCMS Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{totalLeads}</div>
            <div className="text-gray-700">Total Leads</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{conversionRate}%</div>
            <div className="text-gray-700">Conversion Rate</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
            <div className="text-gray-700">Active Forms</div>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Recent Form Submissions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Form</th>
                <th className="py-2 px-4 border-b">Date</th>
              </tr>
            </thead>
            <tbody>
              {mockSubmissions.map((s, i) => (
                <tr key={i}>
                  <td className="py-2 px-4 border-b">{s.name}</td>
                  <td className="py-2 px-4 border-b">{s.email}</td>
                  <td className="py-2 px-4 border-b">{s.form}</td>
                  <td className="py-2 px-4 border-b">{s.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </TinaEditProvider>
  )
} 