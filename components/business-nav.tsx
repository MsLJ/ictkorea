"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/lib/i18n"

export default function BusinessNav() {
  const pathname = usePathname()
  const { t } = useLanguage()

  const menuItems = [
    { href: "/business/functions", label: t.businessNav.functions },
    { href: "/business/specifications", label: t.businessNav.specifications },
    { href: "/business/architecture", label: t.businessNav.architecture },
  ]

  return (
    <div className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex overflow-x-auto">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 sm:px-6 py-4 text-sm sm:text-base font-medium whitespace-nowrap transition-colors border-b-2 ${
                pathname === item.href
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-600 border-transparent hover:text-blue-600 hover:border-blue-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
