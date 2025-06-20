import { HeroSection } from "@/components/home/hero-section"
import { CountriesSection } from "@/components/home/countries-section"
import UniversitiesSection from "@/components/home/universities-section"
import BlogsSection from "@/components/home/blogs-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"
import type { Metadata } from "next"
import UniversitiesSectionClient from "@/app/universities/UniversitiesClientPage"

export const metadata: Metadata = {
  title: "Vgrow-Careers Consultancy - Premier Education Consultancy for India & Abroad",
  description:
    "Transform your educational journey with Vgrow-Careers Consultancy. Expert guidance for studying in India, USA, UK, Germany, Japan, and Australia. Free counseling available.",
}

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <CountriesSection />
      <UniversitiesSection />
      <BlogsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
