"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, User, Search, Menu, X, Heart, Brain } from "lucide-react"
import { usePathname } from "next/navigation"
import { useMobile } from "@/hooks/use-mobile"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop All" },
  { href: "/category/vision", label: "Vision" },
  { href: "/category/breathing", label: "Breathing" },
  { href: "/category/cognitive", label: "Cognitive" },
  { href: "/category/longevity", label: "Longevity" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Brain className="h-8 w-8 text-teal-500 mr-2" />
            <span className="font-bold text-xl md:text-2xl">BioHack</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium hover:text-teal-600 transition-colors ${pathname === link.href ? "text-teal-600" : "text-slate-700"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <Search className="h-5 w-5 text-slate-700" />
            </button>
            <Link href="/wishlist" className="p-2 rounded-full hover:bg-slate-100 transition-colors">
              <Heart className="h-5 w-5 text-slate-700" />
            </Link>
            <Link href="/account" className="p-2 rounded-full hover:bg-slate-100 transition-colors">
              <User className="h-5 w-5 text-slate-700" />
            </Link>
            <Link href="/cart">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                <ShoppingCart className="h-5 w-5 mr-2" />
                <span>Cart (2)</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <Link href="/cart" className="p-2 rounded-full hover:bg-slate-100 transition-colors">
              <ShoppingCart className="h-5 w-5 text-slate-700" />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-slate-700" />
              ) : (
                <Menu className="h-5 w-5 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-slate-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input placeholder="Search products..." className="pl-10" autoFocus />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2 text-base font-medium ${pathname === link.href ? "text-teal-600" : "text-slate-700"}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-200 flex flex-col space-y-4">
              <Link href="/account" className="py-2 text-base font-medium text-slate-700 flex items-center">
                <User className="h-5 w-5 mr-2" /> My Account
              </Link>
              <Link href="/wishlist" className="py-2 text-base font-medium text-slate-700 flex items-center">
                <Heart className="h-5 w-5 mr-2" /> Wishlist
              </Link>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input placeholder="Search products..." className="pl-10" />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
