import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star } from "lucide-react"

// Mock product data
const allProducts = [
  {
    id: "2",
    name: "BreathePro Device",
    description: "Advanced breathing trainer to optimize lung capacity and respiratory function",
    price: 129.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "breathing",
    rating: 4.7,
    reviews: 89,
  },
  {
    id: "3",
    name: "NeuroPeak Supplement",
    description: "Nootropic formula designed to enhance cognitive function and mental clarity",
    price: 59.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "cognitive",
    rating: 4.5,
    reviews: 210,
  },
  {
    id: "4",
    name: "LongeviTea Blend",
    description: "Proprietary herbal tea blend with antioxidants that support cellular health",
    price: 34.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "longevity",
    rating: 4.6,
    reviews: 76,
  },
  {
    id: "5",
    name: "FocusLens Contacts",
    description: "Specialized contact lenses that reduce digital eye strain and enhance focus",
    price: 199.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vision",
    rating: 4.6,
    reviews: 31,
  },
]

export default function RelatedProducts({
  category,
  currentProductId,
}: {
  category: string
  currentProductId: string
}) {
  // Filter products by category and exclude current product
  const relatedProducts = allProducts
    .filter(
      (product) =>
        (product.category === category || product.category === "longevity") && product.id !== currentProductId,
    )
    .slice(0, 4)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {relatedProducts.map((product) => (
        <div
          key={product.id}
          className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all"
        >
          <div className="relative overflow-hidden">
            <Link href={`/products/${product.id}`}>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
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
      ))}
    </div>
  )
}
