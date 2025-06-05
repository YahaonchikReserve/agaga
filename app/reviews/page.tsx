"use client"

import { motion } from "framer-motion"

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-7xl font-semibold text-gray-900 mb-6 tracking-wide">Отзывы</h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
              Отзывы наших довольных клиентов о качестве ремонта стиральных машин
            </p>
            <div className="mt-12 text-gray-500">
              <p className="text-lg">Раздел в разработке...</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
