import CompanyFooter from "@/components/company-footer"
const serviceCards = [
  { title: "엑세스망\n솔루션", tone: "blue" },
  { title: "코어망\n솔루션", tone: "orange" },
  { title: "전송망\n솔루션", tone: "blue" },
]

const capabilityCards = [
  { title: "네트워크\n컨설팅", detail: "유·무선 통신망\n구성방식 설치 및\n유지보수", tone: "blue" },
  { title: "네트워크\n구축", detail: "네트워크 설계, 진단\n통신망 자문 서비스\n통신망 구축/운용\n서비스", tone: "orange" },
  { title: "네트워크\n응용", detail: "통신망 S/W\n과금/인증/보안 시스템\n구축", tone: "blue" },
]

function SolutionCard({ title, tone }: { title: string; tone: "blue" | "orange" }) {
  return (
    <div className={`flex min-h-32 items-center justify-center border px-5 text-center ${tone === "orange" ? "border-orange-400 text-orange-500" : "border-blue-700 text-blue-800"}`}>
      <h3 className="whitespace-pre-line text-xl font-bold leading-tight">{title}</h3>
    </div>
  )
}

export default function CommunicationPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-16">
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-16 text-white sm:px-10 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Business · Network</p>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">통신인프라 구축 및 컨설팅</h1>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-slate-300 sm:text-lg">
            네트워크 시스템과 구성요소들을 순차적으로 결합하여 하나의 전체 네트워크를 설계하고 구축합니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-cyan-600">NETWORK INFRASTRUCTURE</p>
            <h2 className="mt-3 text-balance text-3xl font-bold text-slate-900 sm:text-4xl">통신망의 시작부터 운영까지</h2>
            <p className="mt-6 whitespace-pre-line text-pretty text-base leading-8 text-slate-600 sm:text-lg">
              {`네트워크 시스템과 구성요소들을 순차적으로 결합\n하여 하나의 전체 네트워크를 설계 및 구축하는\n사업으로 프레임릴레이/LTE/5G 등을 활용한 네트워크\n컨설팅, 통신망 구축 및 네트워크 응용 시스템 구축을\n수행합니다.`}
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="grid gap-1 sm:grid-cols-3">
            {serviceCards.map((card) => <SolutionCard key={card.title} {...card} />)}
          </div>
          <div className="mx-auto h-20 w-1/2 bg-[linear-gradient(180deg,transparent_0%,transparent_45%,#94a3b8_46%,#94a3b8_48%,transparent_49%,transparent_100%)] [clip-path:polygon(0_0,100%_0,50%_100%)]" aria-hidden="true" />
          <div className="grid gap-1 sm:grid-cols-3">
            {capabilityCards.map((card) => (
              <div key={card.title} className={`border ${card.tone === "orange" ? "border-orange-400" : "border-blue-700"}`}>
                <div className={`flex min-h-20 items-center justify-center px-4 text-center text-white ${card.tone === "orange" ? "bg-orange-500" : "bg-blue-800"}`}>
                  <h3 className="whitespace-pre-line text-xl font-bold leading-tight">{card.title}</h3>
                </div>
                <p className="flex min-h-32 items-center justify-center whitespace-pre-line px-4 py-5 text-center text-sm leading-6 text-slate-700">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CompanyFooter />
    </main>
  )
}
