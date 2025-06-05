"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const brands = [
  { name: "Bosch", logo: "/images/bosch-logo.png" },
  { name: "Whirlpool", logo: "/images/whirlpool-logo.png" },
  { name: "Indesit", logo: "/images/indesit-logo.png" },
  { name: "LG", logo: "/images/lg-logo.png" },
  { name: "Electrolux", logo: "/images/electrolux-logo.png" },
  { name: "Zanussi", logo: "/images/zanussi-logo.png" },
  { name: "Samsung", logo: "/images/samsung-logo.png" },
  { name: "Candy", logo: "/images/candy-logo.png" },
  { name: "Ariston", logo: "/images/ariston-logo.png" },
  { name: "Beko", logo: "/images/beko-logo.png" },
  { name: "Gorenje", logo: "/images/gorenje-logo.png" },
  { name: "Ardo", logo: "/images/ardo-logo.png" },
]

export function BrandCarousel() {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-wide text-center" style={{ color: "#1B6568" }}>
          Ремонтируем все марки
        </h2>
        <p className="text-lg text-gray-600 text-center font-light">
          Профессиональный ремонт стиральных машин любых брендов
        </p>
      </div>

      <div className="relative">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 min-w-max"
            animate={{
              x: [0, -1600],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-4 border border-gray-200 flex items-center justify-center min-w-[160px] h-20 group hover:border-transparent hover:bg-gradient-to-br hover:from-teal-50 hover:to-cyan-50 hover:shadow-[0_0_0_2px] hover:shadow-teal-200/50"
              >
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  width={100}
                  height={50}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none"></div>
      </div>
    </div>
  )
}
