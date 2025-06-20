import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "Education Blogs - Tips, News & Insights | EduGlobal Consultancy",
  description:
    "Stay updated with the latest education news, exam tips, scholarship opportunities, and career guidance from our expert consultants.",
}

export default function BlogsPage() {
  return <BlogClientPage />
}
