'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

// Import blog data statically
import { blogPosts, blogCategories, blogTags } from '@/lib/blog-data'

export default function BlogPage() {
  const { language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedTag, setSelectedTag] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const content = {
    en: {
      title: 'Blog',
      subtitle: 'Insights, tips, and updates about property management',
      searchPlaceholder: 'Search articles...',
      allCategories: 'All Categories',
      allTags: 'All Tags',
      readMore: 'Read More',
      minRead: 'min read',
      noPosts: 'No blog posts found.',
      by: 'By',
    },
    ar: {
      title: 'المدونة',
      subtitle: 'رؤى ونصائح وتحديثات حول إدارة العقارات',
      searchPlaceholder: 'البحث في المقالات...',
      allCategories: 'جميع الفئات',
      allTags: 'جميع الوسوم',
      readMore: 'اقرأ المزيد',
      minRead: 'دقيقة قراءة',
      noPosts: 'لم يتم العثور على مقالات.',
      by: 'بواسطة',
    },
  }

  const t = content[language]

  const filteredPosts = useMemo(() => {
    let result = blogPosts

    if (selectedCategory !== 'all') {
      result = result.filter((post) => post.category === selectedCategory)
    }

    if (selectedTag !== 'all') {
      result = result.filter((post) => post.tags.includes(selectedTag))
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.titleAr.includes(searchQuery) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.excerptAr.includes(searchQuery)
      )
    }

    return result
  }, [selectedCategory, selectedTag, searchQuery])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="w-full md:w-1/3">
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 outline-none text-gray-900 bg-white"
              />
            </div>

            {/* Category Filter */}
            <div className="w-full md:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 outline-none text-gray-900 bg-white"
              >
                <option value="all">{t.allCategories}</option>
                {blogCategories.map((category) => (
                  <option key={category.en} value={category.en}>
                    {language === 'ar' ? category.ar : category.en}
                  </option>
                ))}
              </select>
            </div>

            {/* Tag Filter */}
            <div className="w-full md:w-auto">
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 outline-none text-gray-900 bg-white"
              >
                <option value="all">{t.allTags}</option>
                {blogTags.map((tag) => (
                  <option key={tag.en} value={tag.en}>
                    {language === 'ar' ? tag.ar : tag.en}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-xl">{t.noPosts}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                >
                  {/* Cover Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
                    <Image
                      src={post.coverImage}
                      alt={language === 'ar' ? post.titleAr : post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full">
                        {language === 'ar' ? post.categoryAr : post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span>{formatDate(post.date)}</span>
                      <span>•</span>
                      <span>{post.readingTime.replace('min read', t.minRead)}</span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {language === 'ar' ? post.titleAr : post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {language === 'ar' ? post.excerptAr : post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {t.by} {language === 'ar' ? post.authorAr : post.author}
                      </span>
                      <span className="text-gray-900 font-medium group-hover:underline">
                        {t.readMore} →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
