"use client"

import Image from "next/image"
import BusinessNav from "@/components/business-nav"
import { useLanguage } from "@/lib/i18n"

export default function ArchitecturePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-[url('/images/slide2.jpg')] bg-cover bg-center opacity-30" />
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{t.architecture.heroTitle}</h1>
          <p className="text-base sm:text-lg text-white/90">{t.architecture.heroSub}</p>
        </div>
      </div>

      <BusinessNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.architecture.compositionTitle}</h2>
          <p className="text-lg text-gray-700 tracking-widest">{t.architecture.compositionDesc}</p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 lg:p-12 mb-12">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/products/architecture-diagram.png"
              alt="Novagate V3.0 Architecture Diagram"
              width={1200}
              height={500}
              className="w-full max-w-6xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {t.architecture.cards.map(([title, description], index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 ml-3">{title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-wider">{t.company.slogan}</h3>
          <p className="text-gray-700 mb-2">{t.company.name}</p>
          <p className="text-sm text-gray-600">{t.company.address}</p>
          <p className="text-sm text-gray-600">{t.company.email}</p>
        </div>
      </div>
    </div>
  )
}
