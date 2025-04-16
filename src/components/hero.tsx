'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useVoiceSearch } from '@/hooks/use-voice-search'

export function Hero() {
  const { startListening, isListening } = useVoiceSearch()

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-gray-900">
              Where trends meet{' '}
              <span className="text-primary-600">tech</span>
            </h1>
            <p className="text-xl text-gray-600">
              Shop smart, shop together. Discover trending products powered by AI and
              join our vibrant community of fashion enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg">
                Start Shopping
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg"
                onClick={startListening}
              >
                {isListening ? 'Listening...' : 'Voice Search'}
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-primary-100/50 absolute -top-20 -right-20 w-64 h-64" />
            <div className="aspect-square rounded-full bg-secondary-100/50 absolute -bottom-20 -left-20 w-64 h-64" />
            <img
              src="/hero-image.png"
              alt="Trendly Shopping"
              className="relative z-10 w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 