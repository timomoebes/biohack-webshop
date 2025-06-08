import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Filter, Search, ShoppingCart, Heart, SlidersHorizontal } from "lucide-react"
import Link from "next/link"

// Mock product data
const products = [
  {
    id: 1,
    name: "OptiView Glasses",
    description: "Blue light blocking glasses that reduce eye strain and improve sleep quality",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vision",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "BreathePro Device",
    description: "Advanced breathing trainer to optimize lung capacity and respiratory function",
    price: 129.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "breathing",
    rating: 4.7,
    reviews: 89,
  },
  {
    id: 3,
    name: "NeuroPeak Supplement",
    description: "Nootropic formula designed to enhance cognitive function and mental clarity",
    price: 59.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "cognitive",
    rating: 4.5,
    reviews: 210,
  },
  {
    id: 4,
    name: "LongeviTea Blend",
    description: "Proprietary herbal tea blend with antioxidants that support cellular health",
    price: 34.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "longevity",
    rating: 4.6,
    reviews: 76,
  },
  {
    id: 5,
    name: "CircaSync Sleep Mask",
    description: "Smart sleep mask that optimizes your circadian rhythm for better sleep quality",
    price: 79.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "sleep",
    rating: 4.9,
    reviews: 53,
  },
  {
    id: 6,
    name: "MindfulBreath Sensor",
    description: "Wearable device that monitors breathing patterns and provides real-time feedback",
    price: 149.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "breathing",
    rating: 4.4,
    reviews: 42,
  },
  {
    id: 7,
    name: "VitalityPlus Capsules",
    description: "Comprehensive supplement designed to support overall longevity and cellular health",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "longevity",
    rating: 4.7,
    reviews: 118,
  },
  {
    id: 8,
    name: "FocusLens Contacts",
    description: "Specialized contact lenses that reduce digital eye strain and enhance focus",
    price: 199.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vision",
    rating: 4.6,
    reviews: 31,
  },
]

// Categories for filter
const categories = [
  { id: "all", name: "All Categories" },
  { id: "vision", name: "Vision" },
  { id: "breathing", name: "Breathing" },
  { id: "cognitive", name: "Cognitive" },
  { id: "longevity", name: "Longevity" },
  { id: "sleep", name: "Sleep" },
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">All Products</h1>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-6">
          <div className="flex items-center">
            <Filter className="mr-2 h-5 w-5 text-slate-500" />
            <h2 className="text-xl font-semibold">Filters</h2>
          </div>

          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input placeholder="Search products..." className="pl-10 w-full md:w-80" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <label className="text-sm font-medium text-slate-700 mb-1 block">Category</label>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 mb-1 block">Sort By</label>
            <Select defaultValue="featured">
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium text-slate-700 mb-1 block">Price Range</label>
            <div className="pt-4 px-2">
              <Slider defaultValue={[0, 200]} max={300} step={1} />
              <div className="flex justify-between mt-2 text-sm text-slate-600">
                <span>$0</span>
                <span>$300</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <Button variant="outline" size="sm" className="mr-2">
            Reset
          </Button>
          <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white">
            <SlidersHorizontal className="mr-2 h-4 w-4" /> Apply Filters
          </Button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <nav className="flex items-center space-x-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </nav>
      </div>
    </div>
  )
}

function ProductCard({ product }: { product: any }) {
  return (
    <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all">
      <div className="relative overflow-hidden">
        <Link href={`/products/${product.id}`}>
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
          <Heart className="h-5 w-5 text-slate-600" />
        </button>
        <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-slate-900/80 to-transparent">
          <span className="text-xs font-medium text-white uppercase tracking-wider px-2 py-1 rounded bg-teal-500/80">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-lg mb-1 hover:text-teal-600 transition-colors">{product.name}</h3>
        </Link>
        <p className="text-slate-600 text-sm mb-2 line-clamp-2">{product.description}</p>

        <div className="flex items-center mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-slate-300"}`}
              />
            ))}
          </div>
          <span className="text-xs text-slate-600 ml-1">({product.reviews})</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
          <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white">
            <ShoppingCart className="h-4 w-4 mr-1" /> Add
          </Button>
        </div>
      </div>
    </div>
  )
}

function Star(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
