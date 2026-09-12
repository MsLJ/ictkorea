import CompanyFooter from "@/components/company-footer"
const methodologyItems = [
  { label: "품질관리", description: "품질활동계획 수립\n산출물 품질검토 활동\n테스트 및 투입" },
  { label: "의사소통\n관리", description: "의사결정자 식별\n보고 / 검토 계획 수립\n보고 검토 실행 / 시정조치" },
  { label: "조달관리", description: "" },
  { label: "비용관리", description: "사업대상량 추정, 예상\n예산확보 및 통제\n예산확보 절차구축, 관리" },
  { label: "자원관리", description: "인력 수급 계획\n인력 투입 모니터링" },
  { label: "통합관리", description: "전체 구성요소 조정\n통합 변경 통제" },
  { label: "범위관리", description: "요구사항 / 업무범위 정의\n변경 / 추적 관리\n요구사항 검증 / 승인" },
  { label: "일정관리", description: "공정 계획 수립\n진척 실적 등록\n성과 통제" },
  { label: "위험관리", description: "위험 식별 / 분석\n대응 계획 수립\n위험 통제" },
]

export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-20 text-white sm:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">ICT Korea methodology</p>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">사업관리 방법론</h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-slate-300 sm:text-lg">
            체계적인 계획과 통합된 관리로 프로젝트의 품질, 일정, 비용을 균형 있게 완성합니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.25em] text-cyan-600">PROJECT MANAGEMENT FRAMEWORK</p>
          <h2 className="text-balance text-3xl font-bold text-slate-900 sm:text-4xl">사업관리 방법론</h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty leading-7 text-slate-600">
            프로젝트 전 과정의 핵심 관리 영역을 유기적으로 연결하여 안정적인 사업 수행과 지속적인 성과를 지원합니다.
          </p>
        </div>

        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.45)] sm:p-10">
          <div className="relative mx-auto aspect-square max-w-3xl">
            <div className="absolute inset-[20%] rounded-[2rem] border-[5px] border-cyan-500/90 bg-cyan-50/35 sm:inset-[22%]" />
            <div className="absolute inset-[29%] z-10 flex items-center justify-center rounded-full border border-cyan-200 bg-white px-5 text-center shadow-sm sm:inset-[32%]">
              <span className="text-xl font-bold leading-tight text-cyan-700 sm:text-3xl">사업관리<br />방법론</span>
            </div>

            {methodologyItems.map((item, index) => {
              const angle = index * 40 - 90
              const radians = (angle * Math.PI) / 180
              const x = 50 + Math.cos(radians) * 40
              const y = 50 + Math.sin(radians) * 40
              return (
                <div key={item.label} className="absolute z-20" style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-blue-600 bg-white px-2 text-center text-sm font-semibold leading-tight text-blue-700 shadow-[0_8px_25px_-14px_rgba(30,64,175,0.9)] sm:h-28 sm:w-28 sm:text-base">
                    {item.label.split("\n").map((line) => <span key={line} className="block">{line}</span>)}
                  </div>
                  {item.description && (
                    <p className={`absolute hidden w-40 text-xs leading-5 text-slate-500 sm:block ${x < 50 ? "right-full mr-4 text-right" : "left-full ml-4 text-left"}`} style={{ top: "50%", transform: "translateY(-50%)" }}>
                      {item.description.split("\n").map((line) => <span key={line} className="block">{line}</span>)}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-3 lg:hidden">
          {methodologyItems.filter((item) => item.description).map((item) => (
            <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-blue-700">{item.label.replace("\n", " ")}</h3>
              <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <CompanyFooter />
    </main>
  )
}
