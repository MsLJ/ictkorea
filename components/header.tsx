"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Globe, Check } from "lucide-react"
import { useLanguage, langNames, type Lang } from "@/lib/i18n"

const languages: Lang[] = ["ko", "en", "es"]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  const navigation =
    lang === "ko"
      ? [
          {
            id: "about",
            label: t.nav.about,
            url: "/about/company",
            children: t.nav.aboutChildren,
          },
          {
            id: "business",
            label: t.nav.business,
            url: "/business",
            children: t.nav.businessChildren,
          },
          {
            id: "customers",
            label: t.nav.customers,
            url: "/customers",
            children: t.nav.customersChildren,
          },
          {
            id: "news",
            label: t.nav.news,
            url: "/news/notice",
            children: t.nav.newsChildren,
          },
        ]
      : [
          { id: "home", label: t.nav.home, url: "/" },
          {
            id: "novagate",
            label: t.nav.novagate,
            url: "/business/functions",
            children: [
              { label: t.businessNav.functions, url: "/business/functions" },
              { label: t.businessNav.specifications, url: "/business/specifications" },
              { label: t.businessNav.architecture, url: "/business/architecture" },
            ],
          },
        ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex md:grid md:grid-cols-3 items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-start">
            <Image src="/images/logo.png" alt="ICT KOREA" width={240} height={80} className="h-16 w-auto" priority />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center gap-8" aria-label="주요 메뉴">
            {navigation.map((item) => (
              <div key={item.id} className="relative group">
                <Link
                  href={item.url}
                  className="inline-flex items-center py-5 text-gray-700 hover:text-[#0066CC] focus-visible:text-[#0066CC] font-medium transition-colors"
                  aria-haspopup={item.children ? "menu" : undefined}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-1/2 top-full w-52 -translate-x-1/2 translate-y-2 rounded-b-md border border-gray-200 bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100" role="menu">
                    {item.children.map((child) => (
                      <Link
                        key={child.url}
                        href={child.url}
                        role="menuitem"
                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#0066CC] focus-visible:bg-blue-50 focus-visible:text-[#0066CC]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                className="inline-flex items-center gap-1.5 rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:border-[#0066CC] hover:text-[#0066CC] transition-colors"
                onClick={() => setLangOpen(!langOpen)}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                aria-label="Select language"
              >
                <Globe size={16} />
                <span className="hidden sm:inline">{langNames[lang]}</span>
                <span className="sm:hidden uppercase">{lang}</span>
              </button>
              {langOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                  <div className="absolute right-0 top-full z-20 mt-1 w-40 rounded-md border border-gray-200 bg-white py-1 shadow-lg" role="listbox">
                    {languages.map((code) => (
                      <button
                        key={code}
                        role="option"
                        aria-selected={lang === code}
                        className="flex w-full items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#0066CC]"
                        onClick={() => {
                          setLang(code)
                          setLangOpen(false)
                          setMobileMenuOpen(false)
                        }}
                      >
                        {langNames[code]}
                        {lang === code && <Check size={14} className="text-[#0066CC]" />}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-gray-200 py-4" aria-label="모바일 주요 메뉴">
            {navigation.map((item) => (
              <div key={item.id}>
                <Link
                  href={item.url}
                  className="block py-2 text-gray-700 hover:text-[#0066CC] font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 border-l border-blue-100 pl-4" role="menu">
                    {item.children.map((child) => (
                      <Link
                        key={child.url}
                        href={child.url}
                        role="menuitem"
                        className="block py-2 text-sm text-gray-600 hover:text-[#0066CC]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
