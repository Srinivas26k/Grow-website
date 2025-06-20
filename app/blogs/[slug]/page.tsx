import { blogs } from "@/lib/data"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Calendar, Clock, Eye, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Head from "next/head"

interface BlogPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const blog = blogs.find((b) => b.slug === params.slug)

  if (!blog) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${blog.title} | EduGlobal Consultancy Blog`,
    description: blog.description,
    keywords: `${blog.title}, ${blog.category}, education blog, study abroad tips, ${blog.tags?.join(", ")}`,
    openGraph: {
      title: `${blog.title} | EduGlobal Consultancy Blog`,
      description: blog.description,
      type: "article",
      locale: "en_US",
      publishedTime: new Date(blog.date).toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | EduGlobal Consultancy Blog`,
      description: blog.description,
    },
  }
}

export default function BlogDetailPage({ params }: BlogPageProps) {
  const blog = blogs.find((b) => b.slug === params.slug)

  if (!blog) {
    notFound()
  }

  return (
    <>
      <Head>
        <title>{blog.title} | EduGlobal Consultancy</title>
        <meta name="description" content={blog.description} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:image" content={blog.image || '/placeholder.jpg'} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.description} />
        <meta name="twitter:image" content={blog.image || '/placeholder.jpg'} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          'headline': blog.title,
          'description': blog.description,
          'image': blog.image || '/placeholder.jpg',
          'author': 'EduGlobal Consultancy',
          'datePublished': blog.date,
          'url': `https://yourdomain.com/blogs/${blog.slug}`,
        }) }} />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 lg:p-16">
            <div className="mb-8">
              <Link href="/blogs" passHref>
                <Button variant="outline" className="mb-6 flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blogs
                </Button>
              </Link>

              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">{blog.emoji}</div>
                <Badge className={`${blog.color} text-lg px-4 py-2`}>{blog.category}</Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">{blog.title}</h1>

              <p className="text-xl text-gray-600 mb-6">{blog.description}</p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{blog.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>{blog.views} Views</span>
                </div>
              </div>
            </div>

            <article className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
              {/* Dangerously set inner HTML for blog content */}
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </article>

            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready for Your Global Education?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Book a free counseling session with our experts to discuss your study abroad plans.
              </p>
              <Link href="/contact" passHref>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full"
                >
                  Book Free Counseling
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
