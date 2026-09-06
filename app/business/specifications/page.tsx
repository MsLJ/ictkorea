"use client"

import Image from "next/image"
import BusinessNav from "@/components/business-nav"
import { useLanguage } from "@/lib/i18n"

export default function SpecificationsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-16 text-white sm:px-10 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Business · Novagate V3</p>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">{t.specifications.heroTitle}</h1>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-slate-300 sm:text-lg">{t.specifications.heroSub}</p>
        </div>
      </section>

      <BusinessNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <div className="overflow-hidden rounded-lg bg-white shadow-lg">
            <Image
              src={t.specifications.image}
              alt={t.specifications.heroTitle}
              width={1200}
              height={900}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">{t.specifications.itemHeader}</th>
                  <th className="px-6 py-4 text-left font-semibold">{t.specifications.specHeader}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {t.specifications.rows.map(([item, spec]) => (
                  <tr key={item} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{item}</td>
                    <td className="px-6 py-4 text-gray-700">{spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Company Info */}
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{t.company.slogan}</h3>
          <p className="text-gray-700 mb-2">{t.company.name}</p>
          <p className="text-sm text-gray-600">{t.company.address}</p>
          <p className="text-sm text-gray-600">{t.company.email}</p>
        </div>
      </div>
    </div>
  )
}
