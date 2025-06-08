import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Brain } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-teal-400 mr-2" />
              <span className="font-bold text-2xl">BioHack</span>
            </div>
            <p className="text-slate-400 mb-6">
              Cutting-edge biohacking and longevity products to optimize your biology and enhance your life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-teal-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/category/vision" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="/category/breathing" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Breathing
                </Link>
              </li>
              <li>
                <Link href="/category/cognitive" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Cognitive
                </Link>
              </li>
              <li>
                <Link href="/category/longevity" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Longevity
                </Link>
              </li>
              <li>
                <Link href="/category/sleep" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Sleep
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-slate-400 mb-4">
              Subscribe to our newsletter for the latest products and exclusive offers.
            </p>
            <div className="flex mb-4">
              <Input
                placeholder="Your email"
                className="bg-slate-800 border-slate-700 text-white rounded-r-none focus-visible:ring-teal-400"
              />
              <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-l-none">Subscribe</Button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-slate-400">
                <Mail className="h-4 w-4 mr-2" />
                <span>support@biohack.com</span>
              </div>
              <div className="flex items-center text-slate-400">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-slate-400">
                <MapPin className="h-4 w-4 mr-2" />
                <span>123 Innovation St, San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BioHack. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <Link href="/terms" className="hover:text-teal-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-teal-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/shipping" className="hover:text-teal-400 transition-colors">
              Shipping Policy
            </Link>
            <Link href="/returns" className="hover:text-teal-400 transition-colors">
              Returns & Refunds
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
