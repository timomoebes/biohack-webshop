import type React from "react"
import Link from "next/link"
import { ArrowRight, Brain, TreesIcon as Lungs, Eye, Heart, Zap } from "lucide-react"
import FeaturedProducts from "@/components/featured-products"
import TestimonialSection from "@/components/testimonial-section"
import NewsletterSection from "@/components/newsletter-section"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      {/* Categories */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Optimize Your <span className="text-teal-600">Performance</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <CategoryCard
              icon={<Brain className="h-8 w-8 text-purple-600" />}
              title="Cognitive"
              description="Enhance mental clarity and focus"
              href="/category/cognitive"
            />
            <CategoryCard
              icon={<Eye className="h-8 w-8 text-blue-600" />}
              title="Vision"
              description="Improve eyesight and reduce strain"
              href="/category/vision"
            />
            <CategoryCard
              icon={<Lungs className="h-8 w-8 text-teal-600" />}
              title="Breathing"
              description="Optimize respiratory function"
              href="/category/breathing"
            />
            <CategoryCard
              icon={<Heart className="h-8 w-8 text-red-600" />}
              title="Longevity"
              description="Extend healthspan and vitality"
              href="/category/longevity"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Products</h2>
            <Link href="/products" className="flex items-center text-teal-600 hover:text-teal-700 transition-colors">
              View all <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <FeaturedProducts />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-teal-400">BioHack</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-teal-400" />}
              title="Science-Backed"
              description="All products are rigorously tested and backed by scientific research"
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-teal-400" />}
              title="Premium Quality"
              description="We source only the highest quality ingredients and materials"
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-teal-400" />}
              title="Expert Support"
              description="Our team of biohacking experts is available to guide your journey"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Newsletter */}
      <NewsletterSection />
    </main>
  )
}

function CategoryCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}) {
  return (
    <Link href={href} className="group">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 text-center h-full border border-slate-100 group-hover:border-teal-100">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>
    </Link>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="font-semibold text-xl mb-3">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  )
}
