import Image from "next/image"
import CompanyFooter from "@/components/company-footer"

export default function NiSiPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-16">
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-20 text-white sm:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-cyan-300">BUSINESS AREA</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">NI / SI</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            일반 기업체 및 공공기관의 정보 자원 인프라 구축을 위한 컨설팅, 전산실 구축, 시스템 이전 및 가상화 기반의 자원통합, 운영 및 유지보수 사업을 수행합니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.45)] sm:p-10">
          <p className="text-sm font-semibold tracking-[0.25em] text-cyan-600">NI / SI SERVICE</p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-700 sm:text-lg">
            일반 기업체 및 공공기관의 정보 자원 인프라 구축을 위한 컨설팅, 전산실 구축, 시스템 이전 및 가상화 기반의 자원통합, 운영 및 유지보수 사업을 수행합니다.
          </p>
        </div>
        <div className="mb-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.45)] sm:p-10">
          <p className="text-sm font-semibold tracking-[0.25em] text-cyan-600">CUSTOMERS</p>
          <p className="mt-3 text-lg font-semibold text-blue-700">안양시 / 안양산업진흥원 / 포항시 / 알티넷㈜ 외</p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.45)] sm:p-8">
          <Image
            src="/images/business-nisi.png"
            alt="NI/SI 사업 수행 영역: ISP 컨설팅, 정보시스템 이전, 인프라 및 전산실 구축, 정보자원 통합 구축, 통합보안 및 망분리 구축, 운영 및 유지보수"
            width={646}
            height={728}
            className="mx-auto h-auto w-full max-w-3xl"
          />
        </div>
      </section>
      <CompanyFooter />
    </main>
  )
}
