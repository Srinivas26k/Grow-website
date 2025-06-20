import { getBlogs } from "@/lib/server/data"
import BlogsSectionClient from "./blogs-section-client"

export default async function BlogsSection() {
  const blogs = getBlogs();
  return <BlogsSectionClient blogs={blogs} />
}
