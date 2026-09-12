"use client"

import { useLanguage } from "@/lib/i18n"

export default function CompanyFooter() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-12 text-center sm:px-6">
      <h3 className="text-balance text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">{t.company.slogan}</h3>
      <p className="mt-3 text-lg font-semibold text-blue-700">{t.company.name}</p>
      <div className="mt-3 space-y-1 text-sm leading-6 text-slate-500">
        <p>{t.company.address}</p>
        <p>{t.company.email}</p>
      </div>
    </footer>
  )
}
