"use client"

import Image from "next/image"
import BusinessNav from "@/components/business-nav"
import { useLanguage } from "@/lib/i18n"

export default function FunctionsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-16 text-white sm:px-10 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Business · Novagate V3</p>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">{t.functions.heroTitle}</h1>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-slate-300 sm:text-lg">{t.functions.heroSub}</p>
        </div>
      </section>

      <BusinessNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {t.functions.images.map((image, index) => (
          <div key={index} className="mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={image}
                alt={t.functions.titles[index]}
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
