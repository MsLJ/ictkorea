import CompanyFooter from "@/components/company-footer"
import BusinessNav from "@/components/business-nav"
import Image from "next/image"

export default function CompositionPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-[url('/images/slide2.jpg')] bg-cover bg-center opacity-30" />
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">제품구성</h1>
          <p className="text-base sm:text-lg text-white/90">Novagate V3.0 시스템 구성</p>
        </div>
      </div>

      <BusinessNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">시스템 구성</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Novagate V3.0은 게이트웨이 장치와 클라이언트 장치로 구성 됩니다
          </p>
        </div>

        {/* Composition Table Image */}
        <div className="mb-16 bg-white rounded-lg shadow-lg p-4 sm:p-8">
          <Image
            src="/images/products/composition-table.png"
            alt="Novagate V3.0 제품 구성"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* Detailed Components */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">게이트웨이장치</h3>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                <span>고성능 네트워크 프로세서를 탑재한 VPN 기반의 어플라이언스형 장치</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                <span>Novagate 클라이언트장치를 통해서만 접속 가능</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                <span>SSL VPN 보안 채널을 통한 안전한 접속 환경 제공</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                <span>관리자 전용의 보안 채널 포트와 게이트웨이장치간 VPN 터널링 제공</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                <span>Novagate 클라이언트장치 관리 기능(등록, 삭제, 정지)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                <span>보안 감사(조회, 검색) 및 모니터링 기능</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                <span>인증 및 식별 정보 관리 기능</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                <span>시스템 관리 기능(관리자 계정, 관리자 접속 IP 네트워크, 라이선스, 무결성, 인증서 관리등)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                <span>시스템 설정 기능(hostname, Time, NTP서버, Mail서버 등 설정)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                <span>전용OS(NSOS) 및 DBMS 탑재</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                <span>Web기반의 관리 환경 제공</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">클라이언트장치</h3>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                <span>SSL VPN 기반의 어플라이언스형<br /> 클라이언트 전용 장치</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                <span>추가 LAN Cable 공사 없이 안전한 보안 접속 환경 제공</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                <span>보안채널포트를 통해 Novagate 게이트웨이 장치와 VPN 터널 제공</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                <span>일반 포트에 연결되는 장비는 제2네트워크 접속 차단</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                <span>보안채널포트에 연결되는 장비는 게이트웨이 장치를 통하여 제2네트워크 접속만 가능</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                <span>일반 포트 연결 장비와 보안 채널 포트 연결 장비간 네트워크 상호 접속 차단</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                <span>인증 및 식별 기능</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CompanyFooter />
    </div>
  )
}
