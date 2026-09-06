"use client"

import Image from "next/image"
import BusinessNav from "@/components/business-nav"
import { useLanguage } from "@/lib/i18n"

export default function ArchitecturePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-16 text-white sm:px-10 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Business · Novagate V3</p>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">{t.architecture.heroTitle}</h1>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-slate-300 sm:text-lg">{t.architecture.heroSub}</p>
        </div>
      </section>

      <BusinessNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.architecture.compositionTitle}</h2>
          <p className="text-lg text-gray-700 tracking-widest">{t.architecture.compositionDesc}</p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 lg:p-12 mb-12">
          <div className="flex justify-center mb-8">
            <Image
              src={t.architecture.image}
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
