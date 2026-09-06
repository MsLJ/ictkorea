import BusinessNav from "@/components/business-nav"
import Image from "next/image"

export default function FunctionsPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-[url('/images/slide2.jpg')] bg-cover bg-center opacity-30" />
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">주요기능</h1>
          <p className="text-base sm:text-lg text-white/90">Novagate V3.0 기능 상세</p>
        </div>
      </div>

      <BusinessNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Function 1 */}
        <div className="mb-20">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              1. 보안관리 - 클라이언트장치 포트 구성 및 포트간 접근제어
            </h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Lef2eIs2m29msM7eWo2W286MhNtLrv.jpg"
              alt="클라이언트장치 포트 구성 및 포트간 접근제어"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Function 2 */}
        <div className="mb-20">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              2. 보안관리 - 클라이언트장치 및 게이트웨이장치 접근 제어
            </h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-sXIpdso9CgbBNkX4kSxigA9CHpc0BN.jpg"
              alt="클라이언트장치 및 게이트웨이장치 접근 제어"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Function 3 */}
        <div className="mb-20">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">3. 네트워크 구성 - 게이트웨이 장치 네트워크 구성</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-PuE12wcyx4NZwpJNQijI7upM9eaKN9.jpg"
              alt="게이트웨이 장치 네트워크 구성"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Function 4 */}
        <div className="mb-20">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">4. 네트워크 구성 - 사용자PC 그룹별 VLAN 구성</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-Sy2CGUqg8Wur0kmANa3sKxl8QkPiW5.jpg"
              alt="사용자PC 그룹별 VLAN 구성"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Function 5 */}
        <div className="mb-20">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">5. 장애 및 운영관리 - 웹 기반 관리환경</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-qEcbsQqLuYVTnbf981M5vBjY0K3jhD.jpg"
              alt="웹 기반 관리환경"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Function 6 */}
        <div className="mb-20">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              6. 장애 및 운영관리 - 보안채널포트에 연결된 장비에 대한 접근제어 및 네트워크 구성
            </h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-tNmkpIuq3WKUZRDrRaD56fNP0eZ4EA.jpg"
              alt="보안채널포트 연결 장비 접근제어"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Function 7 */}
        <div className="mb-20">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 tracking-[-0.06em]">7. 장애 및 운영관리 - 클라이언트장치 장애 시 PC 동작</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-unGrGPbIntZl5gUsYWf5hiWprdf7TT.jpg"
              alt="클라이언트장치 장애 시 PC 동작"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Function 8 */}
        <div className="mb-20">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 tracking-[-0.06em]">8. 장애 및 운영관리 - 클라이언트장치 장치 상태 관리</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-WV9snXzq715MYcOTQpYekhU8onzpZK.jpg"
              alt="클라이언트장치 장치 상태 관리"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Company Info */}
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-wide">세상을 연결하는 기술, 일상의 가치를 만드는 기업</h3>
          <p className="text-gray-700 mb-2">아이씨티코리아 ㈜</p>
          <p className="text-sm text-gray-600">(14055) 경기도 안양시 동안구 시민대로327번길 11-41 206호</p>
          <p className="text-sm text-gray-600">E-Mail : ttykill@hanmail.net</p>
        </div>
      </div>
    </div>
  )
}
