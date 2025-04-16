'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const trendingCategories = [
  {
    id: 1,
    name: 'Electronics',
    image: '/categories/electronics.jpg',
    count: 150,
  },
  {
    id: 2,
    name: 'Fashion',
    image: '/categories/fashion.jpg',
    count: 200,
  },
  {
    id: 3,
    name: 'Home & Living',
    image: '/categories/home.jpg',
    count: 120,
  },
  {
    id: 4,
    name: 'Sports',
    image: '/categories/sports.jpg',
    count: 80,
  },
]

export function TrendingSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trending Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most popular categories and discover what's trending right
            now.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingCategories.map((category) => (
            <Link
              key={category.id}
              href={`/products/${category.name.toLowerCase()}`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {category.name}
                    </h3>
                    <p className="text-white/80">
                      {category.count} products
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  )
} 