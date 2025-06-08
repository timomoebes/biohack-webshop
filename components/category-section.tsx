import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Mock category data
const categories = [
  {
    id: "cognitive",
    title: "Cognitive Enhancement",
    description: "Products designed to improve focus, memory, and mental clarity",
    image: "/placeholder.svg?height=400&width=600",
    count: 12,
  },
  {
    id: "vision",
    title: "Vision Optimization",
    description: "Solutions for better eyesight and reduced digital eye strain",
    image: "/placeholder.svg?height=400&width=600",
    count: 8,
  },
  {
    id: "breathing",
    title: "Respiratory Health",
    description: "Tools and supplements to enhance breathing and lung capacity",
    image: "/placeholder.svg?height=400&width=600",
    count: 10,
  },
]

export default function CategorySection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Shop by Category</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.id} href={`/category/${category.id}`} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end">
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-white mb-1">{category.title}</h3>
                      <span className="text-sm text-slate-200">{category.count} products</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-slate-600 mb-3">{category.description}</p>
                  <div className="flex items-center text-teal-600 font-medium group-hover:text-teal-700 transition-colors">
                    Browse products{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
