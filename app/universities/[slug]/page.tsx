import { universities } from "@/lib/data"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, DollarSign, Users, BookOpen, Globe, GraduationCap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"

interface UniversityPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return universities.map((university) => ({
    slug: university.slug,
  }))
}

export async function generateMetadata({ params }: UniversityPageProps): Promise<Metadata> {
  const university = universities.find((u) => u.slug === params.slug)

  if (!university) {
    return {
      title: "University Not Found",
      description: "The requested university could not be found.",
    }
  }

  return {
    title: `${university.name} - Study in ${university.country} | Vgrow-Careers Consultancy`,
    description: university.description,
    keywords: `${university.name}, ${university.country}, study abroad, university, education, ${university.tags.join(", ")}`,
    openGraph: {
      title: `${university.name} - Study in ${university.country} | Vgrow-Careers Consultancy`,
      description: university.description,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${university.name} - Study in ${university.country} | Vgrow-Careers Consultancy`,
      description: university.description,
    },
  }
}

export default function UniversityDetailPage({ params }: UniversityPageProps) {
  const university = universities.find((u) => u.slug === params.slug)

  if (!university) {
    notFound()
  }

  const affiliateBannerUrl = process.env.NEXT_PUBLIC_AFFILIATE_BANNER_URL || "/placeholder.jpg"

  return (
    <>
      <Head>
        <title>{university.name} - {university.country} | Vgrow-Careers Consultancy</title>
        <meta name="description" content={university.description} />
        <meta property="og:title" content={university.name + ' - ' + university.country} />
        <meta property="og:description" content={university.description} />
        <meta property="og:image" content={university.logo || '/placeholder-logo.png'} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={university.name + ' - ' + university.country} />
        <meta name="twitter:description" content={university.description} />
        <meta name="twitter:image" content={university.logo || '/placeholder-logo.png'} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CollegeOrUniversity',
          'name': university.name,
          'description': university.description,
          'address': university.country,
          'url': `https://yourdomain.com/universities/${university.slug}`,
          'logo': university.logo || '/placeholder-logo.png',
        }) }} />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 lg:p-16">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-100 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                <div className="text-6xl">{university.flag}</div>
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{university.name}</h1>
                <p className="text-xl text-gray-600 mb-4 flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  {university.country}
                </p>
                <div className="flex items-center justify-center md:justify-start gap-1 text-yellow-500 mb-4">
                  {[...Array(Math.floor(university.rating))].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                  <span className="text-lg font-semibold text-gray-700 ml-1">{university.rating}</span>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {university.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-sm px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Affiliate Banner */}
            <div className="my-8 flex justify-center">
              <a href="https://your-affiliate-link.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src={affiliateBannerUrl}
                  alt="Study abroad with our partner"
                  width={728}
                  height={90}
                  className="rounded shadow-lg object-contain"
                />
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">About {university.name}</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">{university.details}</p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg">
                      <DollarSign className="h-6 w-6 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-900">Estimated Fees</p>
                        <p className="text-gray-700">{university.fees}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-green-50 p-4 rounded-lg">
                      <Users className="h-6 w-6 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-900">Total Students</p>
                        <p className="text-gray-700">{university.students}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-purple-50 p-4 rounded-lg">
                      <BookOpen className="h-6 w-6 text-purple-600" />
                      <div>
                        <p className="font-semibold text-gray-900">Programs Offered</p>
                        <p className="text-gray-700">{university.programs}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-orange-50 p-4 rounded-lg">
                      <Globe className="h-6 w-6 text-orange-600" />
                      <div>
                        <p className="font-semibold text-gray-900">Region</p>
                        <p className="text-gray-700">{university.region}</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose {university.name}?</h2>
                  <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                    <li>Consistently ranked among the top universities globally.</li>
                    <li>Strong emphasis on research and innovation.</li>
                    <li>Diverse and multicultural student body.</li>
                    <li>Excellent career opportunities post-graduation.</li>
                    <li>World-class faculty and state-of-the-art facilities.</li>
                  </ul>
                </section>
              </div>

              <aside className="lg:col-span-1 space-y-8">
                <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md text-center">
                  <GraduationCap className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Ready to Apply?</h3>
                  <p className="mb-6">Get personalized guidance for your application to {university.name}.</p>
                  <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold w-full">
                    <Link href="/contact">Book Free Counseling</Link>
                  </Button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Related Universities</h3>
                  <ul className="space-y-3">
                    {universities
                      .filter((u) => u.country === university.country && u.slug !== university.slug)
                      .slice(0, 3)
                      .map((relatedUni) => (
                        <li key={relatedUni.id}>
                          <Link
                            href={`/universities/${relatedUni.slug}`}
                            className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-md transition-colors"
                          >
                            <div className="text-2xl">{relatedUni.flag}</div>
                            <div>
                              <p className="font-semibold text-gray-900">{relatedUni.name}</p>
                              <p className="text-sm text-gray-600">{relatedUni.country}</p>
                            </div>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
