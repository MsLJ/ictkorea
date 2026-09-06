"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navigation = [
  {
    id: "about",
    label: "About",
    url: "/about/company",
    children: [
      { label: "회사소개", url: "/about/company" },
      { label: "사업관리 방법론", url: "/business" },
    ],
  },
  {
    id: "business",
    label: "Business",
    url: "/business",
    children: [
      { label: "통신인프라 구축 및 컨설팅", url: "/business/communication" },
      { label: "NI / SI", url: "/business/ni-si" },
      { label: "통합보안솔루션", url: "/business/features" },
      { label: "ITS 및 BIS 구축사업", url: "/business/applications" },
      { label: "Novagate V3", url: "/business/architecture" },
    ],
  },
  {
    id: "customers",
    label: "Customers",
    url: "/customers",
    children: [{ label: "주요고객사", url: "/customers" }],
  },
  { id: "news", label: "News", url: "/news" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

          {/* Mobile Menu Button - Right aligned */}
          <div className="flex justify-end">
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
