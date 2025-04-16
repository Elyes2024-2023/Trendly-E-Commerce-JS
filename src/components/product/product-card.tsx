'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { StarIcon } from '@heroicons/react/20/solid'

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  rating: number
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <Link href={`/products/${product.id}`}>
        <div className="aspect-square relative overflow-hidden rounded-t-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">{product.category}</span>
            <div className="flex items-center">
              <StarIcon className="h-4 w-4 text-yellow-400" />
              <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {product.name}
          </h3>
          <p className="text-xl font-bold text-primary-600">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </Link>
      <div className="p-4 pt-0">
        <Button className="w-full">Add to Cart</Button>
      </div>
    </motion.div>
  )
} 