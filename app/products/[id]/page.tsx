import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, Share2, Check, Star, ChevronRight, Truck, ShieldCheck, RotateCcw } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RelatedProducts from "@/components/related-products"

// Mock product data
const products = [
  {
    id: "1",
    name: "OptiView Glasses",
    description:
      "Blue light blocking glasses that reduce eye strain and improve sleep quality. Designed with advanced lens technology that filters out harmful blue light emitted by digital screens, these glasses help prevent digital eye strain, headaches, and sleep disruption.",
    price: 89.99,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    category: "vision",
    rating: 4.8,
    reviews: 124,
    stock: 15,
    features: [
      "Blocks 90% of harmful blue light",
      "Anti-glare coating",
      "Lightweight frame for all-day comfort",
      "Reduces eye strain and fatigue",
      "Improves sleep quality",
    ],
    specifications: {
      Material: "High-quality acetate frame",
      Lens: "CR-39 with blue light filtering technology",
      Weight: "18g",
      Dimensions: "145mm temple length, 51mm lens width",
      Includes: "Protective case, cleaning cloth, and user guide",
    },
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id) || products[0]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-slate-600 mb-8">
        <Link href="/" className="hover:text-teal-600">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link href="/products" className="hover:text-teal-600">
          Products
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link href={`/category/${product.category}`} className="hover:text-teal-600 capitalize">
          {product.category}
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-slate-900 font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="bg-slate-100 rounded-xl overflow-hidden">
            <img
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-auto object-contain aspect-square"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`bg-slate-100 rounded-lg overflow-hidden ${index === 0 ? "ring-2 ring-teal-500" : ""}`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - view ${index + 1}`}
                  className="w-full h-auto object-contain aspect-square"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-slate-300"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-slate-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <p className="text-2xl font-bold text-slate-900 mb-4">${product.price.toFixed(2)}</p>
            <p className="text-slate-700 mb-6">{product.description}</p>
          </div>

          {/* Stock Status */}
          <div className="flex items-center mb-6">
            <div className="flex items-center text-emerald-600 mr-2">
              <Check className="h-5 w-5 mr-1" />
              <span className="font-medium">In Stock</span>
            </div>
            <span className="text-sm text-slate-600">({product.stock} available)</span>
          </div>

          {/* Add to Cart */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="mr-2 h-5 w-5" /> Add to Wishlist
            </Button>
            <Button size="lg" variant="outline">
              <Share2 className="mr-2 h-5 w-5" /> Share
            </Button>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-3">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Shipping Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center p-4 bg-slate-50 rounded-lg">
              <Truck className="h-6 w-6 text-teal-500 mr-3" />
              <div>
                <h4 className="font-medium text-sm">Free Shipping</h4>
                <p className="text-xs text-slate-600">On orders over $100</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-slate-50 rounded-lg">
              <ShieldCheck className="h-6 w-6 text-teal-500 mr-3" />
              <div>
                <h4 className="font-medium text-sm">2-Year Warranty</h4>
                <p className="text-xs text-slate-600">Full coverage</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-slate-50 rounded-lg">
              <RotateCcw className="h-6 w-6 text-teal-500 mr-3" />
              <div>
                <h4 className="font-medium text-sm">30-Day Returns</h4>
                <p className="text-xs text-slate-600">Hassle-free returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs defaultValue="description" className="mb-16">
        <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
          <TabsTrigger
            value="description"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-teal-500 data-[state=active]:bg-transparent text-base py-3 px-6"
          >
            Description
          </TabsTrigger>
          <TabsTrigger
            value="specifications"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-teal-500 data-[state=active]:bg-transparent text-base py-3 px-6"
          >
            Specifications
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-teal-500 data-[state=active]:bg-transparent text-base py-3 px-6"
          >
            Reviews
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="pt-6">
          <div className="prose max-w-none">
            <p>
              The OptiView Glasses are designed with cutting-edge blue light filtering technology to protect your eyes
              from the harmful effects of digital screens. In today's digital age, we spend countless hours in front of
              screens, exposing our eyes to blue light that can cause eye strain, headaches, and disrupt our sleep
              patterns.
            </p>
            <p>
              Our proprietary lens technology blocks up to 90% of harmful blue light while maintaining crystal clear
              vision. The anti-glare coating further reduces eye strain by minimizing reflections and glare from screens
              and artificial lighting.
            </p>
            <p>
              The lightweight, ergonomic frame is designed for all-day comfort, making these glasses perfect for
              professionals, gamers, students, or anyone who spends significant time in front of digital screens.
            </p>
            <h3>Benefits:</h3>
            <ul>
              <li>Reduced digital eye strain and fatigue</li>
              <li>Decreased headaches from screen use</li>
              <li>Improved sleep quality by reducing blue light exposure before bedtime</li>
              <li>Enhanced visual comfort during long screen sessions</li>
              <li>Stylish design that complements any face shape</li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="specifications" className="pt-6">
          <div className="bg-slate-50 rounded-xl p-6">
            <table className="w-full">
              <tbody>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <tr key={key} className="border-b border-slate-200 last:border-0">
                    <td className="py-3 font-medium text-slate-900 w-1/3">{key}</td>
                    <td className="py-3 text-slate-700">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="pt-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Customer Reviews</h3>
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-slate-300"}`}
                    />
                  ))}
                </div>
                <span className="text-slate-700">Based on {product.reviews} reviews</span>
              </div>
            </div>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white">Write a Review</Button>
          </div>

          {/* Sample Reviews */}
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-6">
              <div className="flex justify-between mb-2">
                <h4 className="font-semibold">James Wilson</h4>
                <span className="text-sm text-slate-500">2 weeks ago</span>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < 5 ? "text-yellow-400 fill-yellow-400" : "text-slate-300"}`} />
                ))}
              </div>
              <p className="text-slate-700">
                These glasses have been a game-changer for me. I work as a software developer and spend 10+ hours daily
                in front of screens. Since using these, my eye fatigue has significantly decreased and I'm sleeping
                better at night.
              </p>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <div className="flex justify-between mb-2">
                <h4 className="font-semibold">Emily Rodriguez</h4>
                <span className="text-sm text-slate-500">1 month ago</span>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-slate-300"}`} />
                ))}
              </div>
              <p className="text-slate-700">
                The quality of these glasses is excellent. They're lightweight and comfortable to wear all day. I've
                noticed fewer headaches after long work sessions. The only reason for 4 stars instead of 5 is that
                they're a bit pricey, but worth the investment.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
        <RelatedProducts category={product.category} currentProductId={product.id} />
      </div>
    </div>
  )
}
