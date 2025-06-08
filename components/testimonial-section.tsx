import { Star } from "lucide-react"

// Mock testimonial data
const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Fitness Coach",
    content:
      "The BreathePro device has completely transformed my training. My lung capacity has increased by 20% in just two months!",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Software Developer",
    content:
      "As someone who spends 10+ hours in front of screens, the OptiView glasses have been a game-changer for reducing my eye strain and headaches.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Biohacker",
    content:
      "I've tried dozens of nootropics, but NeuroPeak is in a league of its own. The mental clarity I experience is unmatched.",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-slate-50 rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-300"}`}
                  />
                ))}
              </div>

              <p className="text-slate-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
