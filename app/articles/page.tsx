"use client"

import { motion } from "framer-motion"
import { WaterTextAnimation } from "@/components/water-text-animation"
import Image from "next/image"
import Link from "next/link"

const articles = [
  {
    title: "Как почистить стиральную машину?",
    description: "Пошаговая инструкция по очистке стиральной машины от накипи и загрязнений",
    image: "/images/washing-machine-cleaning.jpg",
    slug: "how-to-clean-washing-machine",
  },
  {
    title: "Как правильно пользоваться стиральной машиной?",
    description: "Советы по эффективному использованию и продлению срока службы вашей стиральной машины",
    image: "/images/washing-machine-usage.jpg",
    slug: "how-to-use-washing-machine",
  },
  {
    title: "Частые поломки стиральных машин",
    description: "Обзор самых распространенных неисправностей и способы их устранения",
    image: "/images/washing-machine-repairs.jpg",
    slug: "common-washing-machine-problems",
  },
  {
    title: "Застряла жена в стиральной машине что делать?",
    description: "Юмористическая статья о безопасности использования стиральной машины",
    image: "/images/washing-machine-safety.jpg",
    slug: "washing-machine-safety",
  },
]

export default function ArticlesPage() {
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
              text="Полезные статьи"
              className="text-4xl md:text-7xl font-semibold mb-6 tracking-wide"
              color="#1B6568"
            />
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
              Полезные советы и рекомендации по ремонту и обслуживанию стиральных машин
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group"
              >
                <div className="relative h-64">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-teal-600 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 font-light leading-relaxed">{article.description}</p>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors duration-300"
                  >
                    Читать далее
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}