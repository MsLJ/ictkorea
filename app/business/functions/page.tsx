"use client"

import Image from "next/image"
import BusinessNav from "@/components/business-nav"
import { useLanguage } from "@/lib/i18n"

export default function FunctionsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-[url('/images/slide2.jpg')] bg-cover bg-center opacity-30" />
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{t.functions.heroTitle}</h1>
          <p className="text-base sm:text-lg text-white/90">{t.functions.heroSub}</p>
        </div>
      </div>

      <BusinessNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {t.functions.titles.map((title, index) => (
          <div key={index} className="mb-20">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{title}</h2>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={t.functions.images[index]}
                alt={title}
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        ))}

        {/* Company Info */}
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-wide">{t.company.slogan}</h3>
          <p className="text-gray-700 mb-2">{t.company.name}</p>
          <p className="text-sm text-gray-600">{t.company.address}</p>
          <p className="text-sm text-gray-600">{t.company.email}</p>
        </div>
      </div>
    </div>
  )
}
