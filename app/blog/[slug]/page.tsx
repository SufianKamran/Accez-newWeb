import BlogPostClient from '@/components/BlogPostClient'
import { blogPosts } from '@/lib/blog-data'

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  return <BlogPostClient slug={slug} />
}
