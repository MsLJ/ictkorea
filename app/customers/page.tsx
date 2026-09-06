"use client"

import { useState } from "react"

export default function CustomersPage() {
  const majorClients = [
    {
      name: "과천시",
      logo: "/images/clients/gwacheon-city.png",
      category: "지방자치단체",
      description: "스마트시티 통합관제시스템 구축",
    },
    {
      name: "영주시",
      logo: "/images/clients/yeongju-city.png",
      category: "지방자치단체",
      description: "도시통합운영센터 구축",
    },
    {
      name: "안양시",
      logo: "/images/clients/anyang-city.png",
      category: "지방자치단체",
      description: "U-통합상황실 구축 및 운영",
    },
    {
      name: "안양산업진흥원",
      logo: "/images/clients/anyang-industrial-promotion.png",
      category: "공공기관",
      description: "산업단지 통합관리시스템",
    },
    {
      name: "안양도시공사",
      logo: "/images/clients/anyang-urban-corporation.png",
      category: "공공기관",
      description: "도시개발 정보시스템",
    },
    {
      name: "포항시",
      logo: "/images/clients/pohang-city.png",
      category: "지방자치단체",
      description: "스마트시티 인프라 구축",
    },
    {
      name: "안산시",
      logo: "/images/clients/ansan-city.png",
      category: "지방자치단체",
      description: "통합관제센터 운영",
    },
    {
      name: "RTNET",
      logo: "/images/clients/rtnet.png",
      category: "민간기업",
      description: "네트워크 인프라 솔루션",
    },
    {
      name: "도로교통공단",
      logo: "/images/clients/road-traffic-authority.png",
      category: "공공기관",
      description: "교통관리시스템 구축",
    },
    {
      name: "EZEN TECH",
      logo: "/images/clients/ezen-tech.png",
      category: "민간기업",
      description: "ICT 솔루션 파트너십",
    },
  ]

  const categories = ["전체", "지방자치단체", "공공기관", "민간기업"]
  const [selectedCategory, setSelectedCategory] = useState("전체")

  const filteredClients =
    selectedCategory === "전체" ? majorClients : majorClients.filter((client) => client.category === selectedCategory)

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 lg:h-96">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/customers-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 to-purple-900/50" />
        <div className="relative h-full flex flex-col items-center justify-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center">주요고객사</h1>
          <p className="text-sm sm:text-base lg:text-lg text-white/90 mt-4 text-center">
            아이씨티코리아와 함께하는 주요 고객사를 소개합니다.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">주요 고객사</h2>
            <p className="text-gray-600 text-lg">{"함께하는 시간이 우리의 신뢰가 되었습니다."}</p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Client Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredClients.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center mb-4 h-20">
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{client.name}</h3>
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full mb-3">
                    {client.category}
                  </span>
                  <p className="text-sm text-gray-600 leading-relaxed">{client.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Client Statistics */}
          <div className="bg-white rounded-lg shadow-md p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">고객사 현황</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {majorClients.filter((c) => c.category === "지방자치단체").length}+
                </div>
                <div className="text-gray-600 font-medium">지방자치단체</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {majorClients.filter((c) => c.category === "공공기관").length}+
                </div>
                <div className="text-gray-600 font-medium">공공기관</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {majorClients.filter((c) => c.category === "민간기업").length}+
                </div>
                <div className="text-gray-600 font-medium">민간기업</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Info Footer */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
            세상을 연결하는 기술, 일상의 가치를 만드는 기업
          </p>
          <p className="text-base sm:text-lg font-bold text-gray-900 mb-4">아이씨티코리아 ㈜</p>
          <p className="text-sm sm:text-base text-gray-600 mb-2">
            (14055) 경기도 안양시 동안구 시민대로327번길 11-41 206호
          </p>
          <p className="text-sm sm:text-base text-gray-600">E-Mail : ttykill@hanmail.net</p>
        </div>
      </div>
    </div>
  )
}
