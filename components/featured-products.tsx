"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

// Mock product data
const featuredProducts = [
  {
    id: 1,
    name: "OptiView Glasses",
    description: "Blue light blocking glasses that reduce eye strain and improve sleep quality",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "vision",
  },
  {
    id: 2,
    name: "BreathePro Device",
    description: "Advanced breathing trainer to optimize lung capacity and respiratory function",
    price: 129.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "breathing",
  },
  {
    id: 3,
    name: "NeuroPeak Supplement",
    description: "Nootropic formula designed to enhance cognitive function and mental clarity",
    price: 59.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "cognitive",
  },
  {
    id: 4,
    name: "LongeviTea Blend",
    description: "Proprietary herbal tea blend with antioxidants that support cellular health",
    price: 34.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "longevity",
  },
]

export default function FeaturedProducts() {
  const { toast } = useToast()
  const [wishlist, setWishlist] = useState<number[]>([])

  const addToCart = (productId: number, productName: string) => {
    toast({
      title: "Added to cart",
      description: `${productName} has been added to your cart.`,
    })
  }

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredProducts.map((product) => (
        <div
          key={product.id}
          className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all"
        >
          <div className="relative overflow-hidden">
            <Link href={`/products/${product.id}`}>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            <button
              onClick={() => toggleWishlist(product.id)}
              className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
            >
              <Heart
                className={`h-5 w-5 ${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-slate-600"}`}
              />
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
            <p className="text-slate-600 text-sm mb-3 line-clamp-2">{product.description}</p>

            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
              <Button
                size="sm"
                onClick={() => addToCart(product.id, product.name)}
                className="bg-teal-500 hover:bg-teal-600 text-white"
              >
                <ShoppingCart className="h-4 w-4 mr-1" /> Add
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
