import { Hero } from '@/components/hero'
import { FeaturedProducts } from '@/components/featured-products'
import { TrendingSection } from '@/components/trending-section'
import { CommunityFeed } from '@/components/community-feed'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <FeaturedProducts />
      <TrendingSection />
      <CommunityFeed />
    </main>
  )
} 