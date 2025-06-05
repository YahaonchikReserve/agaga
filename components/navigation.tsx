"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Phone } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Главная" },
    { href: "/buyback", label: "Выкуп б/у машин" },
    { href: "/articles", label: "Статьи" },
    { href: "/reviews", label: "Отзывы" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-2 border-[#1B6568] shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm font-cormorant">РМ</span>
            </div>
            <span className="font-semibold text-gray-900 text-lg tracking-wide font-cormorant">
              Ремонт Машин
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium tracking-wide",
                  pathname === item.href && "text-blue-600 font-semibold",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Call Button */}
          <Link
            href="tel:+380671234567"
            className="flex items-center space-x-2 bg-[#1B6568] hover:bg-[#14514b] text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">+38 (067) 123-45-67</span>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium",
                  pathname === item.href && "text-blue-600 font-semibold",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}