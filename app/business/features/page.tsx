import Image from "next/image"

export default function IntegratedSecurityPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-16">
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-20 text-white sm:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-cyan-300">BUSINESS AREA</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">통합보안솔루션</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            개별 보안시스템의 최적화 연동을 통한 내·외부 보안위협 대응과 통합관리 환경을 구축합니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.45)] sm:p-10">
          <p className="text-sm font-semibold tracking-[0.25em] text-cyan-600">INTEGRATED SECURITY</p>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
            개별 보안시스템의 최적화 연동을 통한 내/외부 보안위협에 효과적으로 대응하고 통합관리 할 수 있는 보안 아키텍처를 구축하고 컨설팅을 수행합니다.
          </p>
          <p className="mt-5 text-lg font-semibold text-blue-700">고객사 : 알티넷㈜ / ㈜이젠시스 외</p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.45)] sm:p-8">
          <Image
            src="/images/products/integrated-security.png"
            alt="통합보안 구축 및 컨설팅 업무 영역"
            width={588}
            height={696}
            className="mx-auto h-auto w-full max-w-3xl"
          />
        </div>
      </section>
    </main>
  )
}
