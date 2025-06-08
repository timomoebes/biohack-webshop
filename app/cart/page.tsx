"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react"
import Link from "next/link"

// Mock cart data
const initialCartItems = [
  {
    id: 1,
    name: "OptiView Glasses",
    price: 89.99,
    image: "/placeholder.svg?height=200&width=200",
    quantity: 1,
  },
  {
    id: 2,
    name: "BreathePro Device",
    price: 129.99,
    image: "/placeholder.svg?height=200&width=200",
    quantity: 1,
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [promoCode, setPromoCode] = useState("")
  const [promoApplied, setPromoApplied] = useState(false)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "biohack10") {
      setPromoApplied(true)
    }
  }

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = promoApplied ? subtotal * 0.1 : 0
  const shipping = subtotal > 100 ? 0 : 9.99
  const total = subtotal - discount + shipping

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-xl font-semibold">Cart Items ({cartItems.length})</h2>
              </div>

              <div className="divide-y divide-slate-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center">
                    <div className="flex-shrink-0 w-24 h-24 bg-slate-100 rounded-lg overflow-hidden mr-6 mb-4 sm:mb-0">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex-grow">
                      <Link href={`/products/${item.id}`}>
                        <h3 className="font-semibold text-lg mb-1 hover:text-teal-600 transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-slate-600 mb-4">${item.price.toFixed(2)}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-slate-200 rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 text-slate-600 hover:bg-slate-100"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-3 py-1 border-x border-slate-200">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 text-slate-600 hover:bg-slate-100"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-600 flex items-center"
                        >
                          <Trash2 className="h-4 w-4 mr-1" /> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Link href="/products" className="text-teal-600 hover:text-teal-700 flex items-center">
                <ShoppingBag className="mr-2 h-4 w-4" /> Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden sticky top-6">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-xl font-semibold">Order Summary</h2>
              </div>

              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>

                  {promoApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount (10%)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-slate-600">Shipping</span>
                    <span className="font-medium">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>

                  <div className="border-t border-slate-200 pt-4 flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold text-xl">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Promo Code</label>
                  <div className="flex">
                    <Input
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter promo code"
                      className="rounded-r-none"
                    />
                    <Button
                      onClick={applyPromoCode}
                      className="rounded-l-none bg-teal-500 hover:bg-teal-600 text-white"
                    >
                      Apply
                    </Button>
                  </div>
                  {promoApplied && <p className="text-green-600 text-sm mt-2">Promo code applied successfully!</p>}
                </div>

                <Button size="lg" className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                  Checkout <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-xs text-slate-500 text-center mt-4">
                  Free shipping on orders over $100. 30-day returns.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-xl shadow-sm">
          <div className="max-w-md mx-auto">
            <ShoppingBag className="h-16 w-16 text-slate-300 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-slate-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white">
              <Link href="/products">Start Shopping</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
