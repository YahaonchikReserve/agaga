"use client"

import { motion } from "framer-motion"
import { WaterTextAnimation } from "@/components/water-text-animation"
import { CheckCircle, Phone, Wrench, Shield, Clock, Users, Star, Zap } from "lucide-react"

const advantages = [
  {
    icon: <Phone className="w-7 h-7" />,
    title: "Низкие цены на весь сервисный диапазон услуг",
    description: "Доступные цены благодаря большому количеству клиентов и оптимизированным процессам",
  },
  {
    icon: <Star className="w-7 h-7" />,
    title: "Лучшие мастера с многолетним стажем 7-10 лет",
    description: "Опытные профессионалы с подтвержденной квалификацией",
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    title: "Современное оборудование по диагностике",
    description: "Высокотехнологичное оборудование для точной диагностики",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Гарантийный срок до 24 месяцев",
    description: "Официальная гарантия на детали и услуги",
  },
  {
    icon: <CheckCircle className="w-7 h-7" />,
    title: "Налаженные связи с поставщиками",
    description: "Оригинальные запчасти и европейские аналоги любых комплектующих",
  },
  {
    icon: <Clock className="w-7 h-7" />,
    title: "Сложный ремонт двигателей",
    description: "Специалисты и оборудование для ремонта современных стиральных машин",
  },
]

const serviceHighlights = [
  {
    title: "Профессиональная диагностика",
    description: "Используем современное оборудование для точного определения неисправностей",
    icon: "🔍",
  },
  {
    title: "Качественный ремонт",
    description: "Восстанавливаем все функции техники с использованием оригинальных запчастей",
    icon: "🔧",
  },
  {
    title: "Профилактическое обслуживание",
    description: "Проводим чистку и смазку всех узлов для предотвращения будущих поломок",
    icon: "🛡️",
  },
  {
    title: "Гарантия результата",
    description: "Предоставляем официальную гарантию до 24 месяцев на все виды работ",
    icon: "✅",
  },
]

export function ServiceAdvantagesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <WaterTextAnimation
            text="Чем мы гордимся"
            className="text-3xl md:text-5xl font-semibold mb-6 tracking-wide"
            color="#1B6568"
          />
          <p className="text-xl text-gray-600 font-light">
            Мастерские по ремонту стиральных машин в Одессе многочисленны, однако не все могут гордиться нашими
            преимуществами
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <div className="text-teal-600 mb-4">{advantage.icon}</div>
              <h3 className="text-lg font-semibold mb-3 leading-tight" style={{ color: "#1B6568" }}>
                {advantage.title}
              </h3>
              <p className="text-gray-600 font-light text-base leading-relaxed">{advantage.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Service Process */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-8 md:p-16 text-white mb-16 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1B6568 0%, #2A8F93 50%, #1B6568 100%)",
          }}
        >
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-4xl font-semibold mb-4 leading-tight">
                Профессиональный сервисный ремонт
              </h3>
              <p className="text-lg md:text-xl font-light max-w-4xl mx-auto leading-relaxed text-teal-100">
                Наш сервисный центр предоставляет комплексные услуги по диагностике и ремонту
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl mb-4">{highlight.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                      <p className="text-teal-100 font-light text-base leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg shadow-lg border border-white/10">
                <CheckCircle className="w-5 h-5" />
                <span>Диагностика БЕСПЛАТНО при оформлении заказа!</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}