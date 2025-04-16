'use client'

import { motion } from 'framer-motion'
import { ProductCard } from './product/product-card'

const featuredProducts = [
  {
    id: 1,
    name: 'Smart Watch Pro',
    price: 199.99,
    image: '/products/smart-watch.jpg',
    category: 'Electronics',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Wireless Earbuds',
    price: 149.99,
    image: '/products/earbuds.jpg',
    category: 'Electronics',
    rating: 4.3,
  },
  {
    id: 3,
    name: 'Fitness Tracker',
    price: 89.99,
    image: '/products/fitness-tracker.jpg',
    category: 'Electronics',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Smart Home Hub',
    price: 129.99,
    image: '/products/smart-hub.jpg',
    category: 'Smart Home',
    rating: 4.4,
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of trending products that our
            community loves.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
} 