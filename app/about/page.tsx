import CompanyFooter from "@/components/company-footer"
const services = [
  { title: "망분리\n환경 구축", tone: "bg-blue-600" },
  { title: "정보시스템\n통합 및 구축", tone: "bg-blue-700" },
  { title: "네트워크 및\n보안환경 구축", tone: "bg-blue-800" },
  { title: "Consulting\n&\nPlanning", tone: "bg-slate-900" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-20 text-white sm:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">ICT Korea company</p>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">회사소개</h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-slate-300 sm:text-lg">
            따뜻한 네트워크 세상을 열어가는 통신·보안 기술 기업입니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.45)] sm:p-10">
            <p className="mb-3 text-sm font-semibold tracking-[0.25em] text-cyan-600">WHO WE ARE</p>
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              우리는 따뜻한 네트워크 세상을<br />열어가는 회사입니다.
            </h2>
            <div className="mt-8 border-t border-slate-200 pt-7">
              <h3 className="text-2xl font-bold text-blue-700">통신기술 강소기업</h3>
              <ul className="mt-5 space-y-4 text-slate-600">
                <li>정보통신공사 설계부터 구축까지</li>
                <li>내수부터 수출까지</li>
                <li>제품 납품부터 커스터마이징까지</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.45)] sm:p-10">
            <p className="mb-3 text-sm font-semibold tracking-[0.25em] text-cyan-600">OUR SERVICES</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">서비스</h2>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
              {services.map((service) => (
                <div key={service.title} className={`${service.tone} flex min-h-36 items-center justify-center rounded-2xl p-5 text-center shadow-lg transition-transform duration-300 hover:-translate-y-1 sm:min-h-44`}>
                  <p className="whitespace-pre-line text-sm font-semibold leading-relaxed text-white sm:text-base">{service.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CompanyFooter />
    </main>
  )
}
