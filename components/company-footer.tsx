"use client"

import { useLanguage } from "@/lib/i18n"

export default function CompanyFooter() {
  const { t } = useLanguage()

  return (
    <footer className="px-4 pb-12 pt-2 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-lg bg-gray-100 p-8 text-center">
        <h3 className="text-xl font-bold text-gray-900 tracking-wide">{t.company.slogan}</h3>
        <p className="text-gray-700 mt-4 mb-2">{t.company.name}</p>
        <p className="text-sm text-gray-600">{t.company.address}</p>
        <p className="text-sm text-gray-600">{t.company.email}</p>
      </div>
    </footer>
  )
}
