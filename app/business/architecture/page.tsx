import Image from "next/image"
import BusinessNav from "@/components/business-nav"

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-[url('/images/slide2.jpg')] bg-cover bg-center opacity-30" />
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">제품아키텍처</h1>
          <p className="text-base sm:text-lg text-white/90">Novagate V3.0 시스템 구조</p>
        </div>
      </div>

      <BusinessNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">제품 구성</h2>
          <p className="text-lg text-gray-700 tracking-widest">Novagate V3.0은 게이트웨이 장치와 클라이언트 장치로 구성 됩니다</p>
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
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 ml-3">전용 OS 탑재</h3>
            </div>
            <p className="text-gray-700 leading-relaxed tracking-wider">
              Novagate는 전용OS가 탑재된 Appliance 제품으로 구성되어 안정적이고 최적화된 성능을 제공합니다.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 ml-3">보안 콘솔 관리</h3>
            </div>
            <p className="text-gray-700 leading-relaxed tracking-tighter">
              클라이언트장치는 Client Console 포트를 통해서만 네트워크 설정이 가능하며, 보안 정책은 Admin Console을 통해
              관리 가능합니다.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 ml-3">로그 중앙 관리</h3>
            </div>
            <p className="text-gray-700 leading-relaxed tracking-tight">
              게이트웨이 장치와 클라이언트장치의 로그는 게이트웨이 장치에 저장되어 중앙에서 통합 관리됩니다.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 ml-3">웹 기반 관리</h3>
            </div>
            <p className="text-gray-700 leading-relaxed tracking-tight">
              관리자PC는 웹 브라우저 기반의 관리 콘솔을 통해 게이트웨이장치에 대한 시스템 모니터링, 보안정책 설정 및
              클라이언트장치 관리가 가능합니다.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                5
              </div>
              <h3 className="text-lg font-bold text-gray-900 ml-3">LED 상태 표시</h3>
            </div>
            <p className="text-gray-700 leading-relaxed tracking-wide">
              클라이언트장치는 외부 LED를 통해 장치 상태 확인이 가능하여 직관적인 모니터링을 제공합니다.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                6
              </div>
              <h3 className="text-lg font-bold text-gray-900 ml-3">모듈형 구조</h3>
            </div>
            <p className="text-gray-700 leading-relaxed tracking-wide">
              VPN, Monitoring, Bridge, Log 등 다양한 모듈로 구성되어 확장성과 유지보수성이 뛰어납니다.
            </p>
          </div>
        </div>

        {/* Company Info */}
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-wider">세상을 연결하는 기술, 일상의 가치를 만드는 기업</h3>
          <p className="text-gray-700 mb-2">아이씨티코리아 ㈜</p>
          <p className="text-sm text-gray-600">(14055) 경기도 안양시 동안구 시민대로327번길 11-41 206호</p>
          <p className="text-sm text-gray-600">E-Mail : ttykill@hanmail.net</p>
        </div>
      </div>
    </div>
  )
}
