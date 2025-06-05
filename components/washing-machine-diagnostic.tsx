"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Washing machine brands
const brands = [
  "Indesit",
  "LG",
  "Zanussi",
  "Candy",
  "Electrolux",
  "Ardo",
  "Miele",
  "Whirlpool",
  "Siemens",
  "Atlant",
  "Beko",
  "AEG",
  "Hansa",
  "Gorenje",
  "Brandt",
  "Vestel",
  "Daewoo",
  "Kaiser",
]

// Age options
const ageOptions = ["до 3 лет", "3-5 лет", "5-7 лет", "7-10 лет", "более 10 лет"]

// Problems list
const problems = [
  "Течет вода (натекает небольшая лужа)",
  "Течет вода (большая лужа)",
  "Не открывается люк",
  "Машина не греет воду",
  "Не сливает воду",
  "Не отжимает",
  "Шум и вибрация",
  "Не включается",
  "Не набирается вода",
  "Не вращается барабан",
  "Звук постороннего предмета",
  "Выбивает пробки (автоматы)",
  "Бьется током или искрит",
  "Не закрывается",
  "Не работают программы (все или частично)",
  "Мигают все индикаторы",
  "Стирка не останавливается",
  "Стиральная машина зависает",
  "Не выключается",
]

// Problem causes and prices
const problemCauses = {
  "Течет вода (натекает небольшая лужа)": [
    { cause: "Повреждение манжеты люка", probability: 45, price: "800-1200" },
    { cause: "Засорение сливного фильтра", probability: 30, price: "300-500" },
    { cause: "Повреждение патрубков", probability: 15, price: "600-900" },
    { cause: "Поломка помпы", probability: 10, price: "1200-1800" },
  ],
  "Не сливает воду": [
    { cause: "Засорение сливного фильтра", probability: 50, price: "300-500" },
    { cause: "Поломка сливного насоса", probability: 25, price: "1200-1800" },
    { cause: "Засорение сливного шланга", probability: 15, price: "400-600" },
    { cause: "Неисправность модуля управления", probability: 10, price: "2000-3500" },
  ],
  "Не вращается барабан": [
    { cause: "Износ приводного ремня", probability: 45, price: "400-700" },
    { cause: "Поломка двигателя", probability: 25, price: "2500-4000" },
    { cause: "Неисправность подшипников", probability: 20, price: "1800-2800" },
    { cause: "Поломка модуля управления", probability: 10, price: "2000-3500" },
  ],
}

export function WashingMachineDiagnostic() {
  const [brand, setBrand] = useState<string>("")
  const [age, setAge] = useState<string>("")
  const [problem, setProblem] = useState<string>("")
  const [showResults, setShowResults] = useState(false)

  const handleSubmit = () => {
    if (brand && age && problem) {
      setShowResults(true)
    }
  }

  const resetForm = () => {
    setShowResults(false)
    setBrand("")
    setAge("")
    setProblem("")
  }

  return (
    <Card className="w-full max-w-4xl mx-auto bg-white border-gray-200 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-t-lg">
        <CardTitle className="text-3xl md:text-5xl font-semibold text-center">
          Онлайн-діагностика стиральної машини
        </CardTitle>
        <CardDescription className="text-gray-200 text-center text-xl">
          Просто заполните форму и узнайте примерную поломку и цену ремонта
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        {!showResults ? (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xl font-medium">1. Марка стиральной машины</label>
                <Select value={brand} onValueChange={setBrand}>
                  <SelectTrigger className="bg-white border-gray-300 text-lg h-12">
                    <SelectValue placeholder="Выберите марку" />
                  </SelectTrigger>
                  <SelectContent>
                    {brands.map((b) => (
                      <SelectItem key={b} value={b} className="text-lg">
                        {b}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <label className="text-xl font-medium">2. Возраст (лет)</label>
                <Select value={age} onValueChange={setAge}>
                  <SelectTrigger className="bg-white border-gray-300 text-lg h-12">
                    <SelectValue placeholder="Выберите возраст" />
                  </SelectTrigger>
                  <SelectContent>
                    {ageOptions.map((a) => (
                      <SelectItem key={a} value={a} className="text-lg">
                        {a}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xl font-medium">3. Выберите проблему из списка</label>
              <Select value={problem} onValueChange={setProblem}>
                <SelectTrigger className="bg-white border-gray-300 text-lg h-12">
                  <SelectValue placeholder="Выберите проблему" />
                </SelectTrigger>
                <SelectContent>
                  {problems.map((p) => (
                    <SelectItem key={p} value={p} className="text-lg">
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="pt-6 flex justify-center">
              <Button
                onClick={handleSubmit}
                disabled={!brand || !age || !problem}
                className="bg-gray-800 hover:bg-gray-900 text-white px-16 py-6 text-xl font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                УЗНАТЬ
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Результаты диагностики</h3>
              <div className="space-y-3 mb-8">
                <p className="text-lg">
                  <span className="font-medium">Марка:</span> {brand}
                </p>
                <p className="text-lg">
                  <span className="font-medium">Возраст:</span> {age}
                </p>
                <p className="text-lg">
                  <span className="font-medium">Проблема:</span> {problem}
                </p>
              </div>

              <h4 className="text-xl font-semibold mb-4">Возможные причины поломки:</h4>
              <div className="space-y-4">
                {(
                  problemCauses[problem as keyof typeof problemCauses] ||
                  problemCauses["Течет вода (натекает небольшая лужа)"]
                ).map((cause, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-lg">{cause.cause}</p>
                      <div className="flex items-center mt-3">
                        <div className="w-full bg-gray-200 rounded-full h-3 mr-4">
                          <div
                            className="bg-gray-700 h-3 rounded-full transition-all duration-1000"
                            style={{ width: `${cause.probability}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 font-medium">{cause.probability}%</span>
                      </div>
                    </div>
                    <div className="ml-6 text-right">
                      <span className="text-2xl font-semibold text-green-600">{cause.price} ₴</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex justify-center">
                <Button onClick={resetForm} className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 text-lg">
                  Новая диагностика
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
