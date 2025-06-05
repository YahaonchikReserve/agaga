"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Star } from "lucide-react"
import { WaterTextAnimation } from "@/components/water-text-animation"

export default function ReviewsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const reviews = [
    {
      name: "Анна Петрова",
      rating: 5,
      text: "Отличный сервис! Мастер приехал вовремя, быстро определил проблему и качественно отремонтировал машинку. Теперь работает как новая!",
      date: "2024-03-15",
    },
    {
      name: "Игорь Сидоров",
      rating: 5,
      text: "Профессиональный подход и честные цены. Рекомендую всем, кто ищет надежный ремонт стиральных машин.",
      date: "2024-03-10",
    },
    {
      name: "Мария Иванова",
      rating: 4,
      text: "Хороший сервис, мастер очень вежливый и компетентный. Единственное - хотелось бы более точного определения времени приезда.",
      date: "2024-03-05",
    },
  ]

  const [name, setName] = useState("")
  const [rating, setRating] = useState(5)
  const [review, setReview] = useState("")
  const [hoveredStar, setHoveredStar] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, rating, review })
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setName("")
      setRating(5)
      setReview("")
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <WaterTextAnimation
              text="Отзывы наших клиентов"
              className="text-4xl md:text-7xl font-semibold mb-6 tracking-wide"
              color="#1B6568"
            />
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
              Узнайте, что говорят о нас довольные клиенты
            </p>
          </motion.div>

          {/* Review Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto mb-20"
          >
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold mb-6" style={{ color: "#1B6568" }}>
                Оставить отзыв
              </h3>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-teal-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2" style={{ color: "#1B6568" }}>
                    Спасибо за ваш отзыв!
                  </h4>
                  <p className="text-gray-600">Ваше мнение очень важно для нас.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-lg">
                      Ваше имя
                    </Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label className="text-lg">Оценка</Label>
                    <div className="flex gap-2 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onMouseEnter={() => setHoveredStar(star)}
                          onMouseLeave={() => setHoveredStar(0)}
                          onClick={() => setRating(star)}
                          className="text-2xl transition-colors duration-200"
                        >
                          <Star
                            className={`w-8 h-8 ${
                              star <= (hoveredStar || rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="review" className="text-lg">
                      Ваш отзыв
                    </Label>
                    <textarea
                      id="review"
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full text-white text-lg py-6"
                    style={{ backgroundColor: "#1B6568" }}
                  >
                    Отправить отзыв
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Reviews List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 font-light leading-relaxed">{review.text}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span className="font-medium">{review.name}</span>
                  <span>{new Date(review.date).toLocaleDateString()}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}