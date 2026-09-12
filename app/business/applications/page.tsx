import Image from "next/image"
import CompanyFooter from "@/components/company-footer"

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-16">
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-16 text-white sm:px-10 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Business · Transport</p>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">ITS 및 BIS 구축사업</h1>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-slate-300 sm:text-lg">도시의 교통 흐름을 개선하고 시민의 이동 편의를 높이는 통합첨단교통관리시스템을 구축합니다.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-cyan-600">INTELLIGENT TRANSPORT SYSTEM</p>
            <h2 className="mt-3 text-balance text-3xl font-bold text-slate-900 sm:text-4xl">교통체계의 효율화와 시민 편의 향상</h2>
            <p className="mt-6 text-pretty text-base leading-8 text-slate-600 sm:text-lg">교통체계 효율화법 시행에 의거 시민들의 교통편의를 제공하고 상시 교통 혼잡이 발생하고 있는 주요 교차로 및 간선도로의 교통여건을 개선하는 사업입니다. UTIS와 유기적인 연계체계로 통합첨단교통관리시스템(ATMS)을 구축하고 있습니다.</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.45)] sm:p-5">
              <Image src="/images/business-its1.png" alt="U-통합상황실 기반 ITS 및 BIS 구축 구조도" width={600} height={340} className="h-auto w-full" priority />
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.45)] sm:p-5">
              <Image src="/images/business-its2.png" alt="스마트 교차로와 지능형 교통 시스템 구성도" width={1009} height={568} className="h-auto w-full" />
            </div>
          </div>
        </div>
      </section>
      <CompanyFooter />
    </main>
  )
}
