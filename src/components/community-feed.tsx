'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/20/solid'

const communityPosts = [
  {
    id: 1,
    user: {
      name: 'Sarah Johnson',
      avatar: '/avatars/sarah.jpg',
    },
    product: {
      name: 'Smart Watch Pro',
      image: '/products/smart-watch.jpg',
    },
    rating: 5,
    comment:
      'Absolutely love this smartwatch! The battery life is incredible and the health tracking features are spot on.',
    likes: 24,
    date: '2 days ago',
  },
  {
    id: 2,
    user: {
      name: 'Mike Chen',
      avatar: '/avatars/mike.jpg',
    },
    product: {
      name: 'Wireless Earbuds',
      image: '/products/earbuds.jpg',
    },
    rating: 4,
    comment:
      'Great sound quality and comfortable to wear. The noise cancellation is impressive for the price.',
    likes: 18,
    date: '3 days ago',
  },
  {
    id: 3,
    user: {
      name: 'Emma Davis',
      avatar: '/avatars/emma.jpg',
    },
    product: {
      name: 'Fitness Tracker',
      image: '/products/fitness-tracker.jpg',
    },
    rating: 5,
    comment:
      'This fitness tracker has completely changed my workout routine. The app is intuitive and the tracking is accurate.',
    likes: 32,
    date: '4 days ago',
  },
]

export function CommunityFeed() {
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
            Community Reviews
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our community members are saying about their favorite
            products.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden mr-4">
                  <Image
                    src={post.user.avatar}
                    alt={post.user.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {post.user.name}
                  </h3>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
              </div>
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={post.product.image}
                  alt={post.product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i < post.rating
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {post.product.name}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{post.comment}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>{post.likes} likes</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 