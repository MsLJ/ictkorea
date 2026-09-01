import Image from "next/image"

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen bg-background pt-16">
      <section className="relative overflow-hidden bg-primary px-6 py-20 text-primary-foreground sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.28em] text-primary-foreground/70">ICT Korea · Business</p>
          <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">ITS 및 BIS 구축사업</h1>
          <p className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">도시의 교통 흐름을 개선하고 시민의 이동 편의를 높이는 통합첨단교통관리시스템 구축</p>
        </div>
      </section>
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">Intelligent Transport System</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">교통체계의 효율화와 시민 편의 향상</h2>
            </div>
            <p className="text-pretty text-base leading-8 text-muted-foreground sm:text-lg">교통체계 효율화법 시행에 의거 시민들의 교통편의를 제공하고 상시 교통 혼잡이 발생하고 있는 주요 교차로 및 간선도로의 교통여건을 개선하는 사업입니다. UTIS와 유기적인 연계체계로 통합첨단교통관리시스템(ATMS)을 구축하고 있습니다.</p>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="text-sm font-semibold tracking-wide text-primary">고객사</p>
              <p className="mt-3 leading-7 text-foreground">안양시 / 안산시 / 포항시 / 영주시 외</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"><Image src="/images/products/its-bis-control-room.png" alt="U-통합상황실 기반 ITS 및 BIS 구축 구조도" width={600} height={340} className="h-auto w-full" priority /></div>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"><Image src="/images/products/its-bis-system.png" alt="스마트 교차로와 지능형 교통 시스템 구성도" width={1009} height={568} className="h-auto w-full" /></div>
          </div>
        </div>
      </section>
    </main>
  )
}
