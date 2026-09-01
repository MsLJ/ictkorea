import BusinessNav from "@/components/business-nav"
import Image from "next/image"

export default function SpecificationsPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-[url('/images/slide2.jpg')] bg-cover bg-center opacity-30" />
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">제품규격</h1>
          <p className="text-base sm:text-lg text-white/90">Novagate V3.0 상세 사양</p>
        </div>
      </div>

      <BusinessNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">제품 규격</h2>
          <p className="text-sm text-gray-600 sm:hidden">이미지를 좌우로 스크롤하여 전체 내용을 확인하세요</p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Novagate V3.0 클라이언트장치</h3>
          <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
            <div className="min-w-[800px]">
              <Image
                src="/images/design-mode/%EA%B7%B8%EB%A6%BC9-1.jpg"
                alt="Novagate V3.0 클라이언트장치 규격"
                width={1200}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Novagate V3.0 게이트웨이장치</h3>
          <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
            <div className="min-w-[800px]">
              <Image
                src="/images/design-mode/%EA%B7%B8%EB%A6%BC9-2.jpg"
                alt="Novagate V3.0 게이트웨이장치 규격"
                width={1200}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">항목</th>
                  <th className="px-6 py-4 text-left font-semibold">사양</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">제품명</td>
                  <td className="px-6 py-4 text-gray-700">Novagate V3.0</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">암호화 방식</td>
                  <td className="px-6 py-4 text-gray-700">SSL/TLS 기반 VPN</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 font-medium text-gray-900 py-4 tracking-normal">지원 프로토콜</td>
                  <td className="px-6 py-4 text-gray-700">TCP/IP, SSL/TLS, VPN</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">포트 구성</td>
                  <td className="px-6 py-4 text-gray-700">일반포트, 보안채널포트</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">네트워크 지원</td>
                  <td className="px-6 py-4 text-gray-700">제1네트워크, 제2네트워크 분리 지원</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">관리 방식</td>
                  <td className="px-6 py-4 text-gray-700">게이트웨이 중앙집중식 관리</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">적용 환경</td>
                  <td className="px-6 py-4 text-gray-700">보안영역 접속, 망분리 환경</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Company Info */}
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">세상을 연결하는 기술, 일상의 가치를 만드는 기업</h3>
          <p className="text-gray-700 mb-2">아이씨티코리아 ㈜</p>
          <p className="text-sm text-gray-600">(14055) 경기도 안양시 동안구 시민대로327번길 11-41 206호</p>
          <p className="text-sm text-gray-600">E-Mail : ttykill@hanmail.net</p>
        </div>
      </div>
    </div>
  )
}
