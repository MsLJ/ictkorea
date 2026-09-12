"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import CompanyFooter from "@/components/company-footer"
import { useLanguage } from "@/lib/i18n"

type Notice = {
  id: number
  title: string
  content: string
  created_at: string
}

const texts = {
  ko: { title: "공지사항", sub: "아이씨티코리아의 새로운 소식을 알려드립니다", notice: "공지사항", date: "등록일", empty: "등록된 공지사항이 없습니다.", back: "목록으로", admin: "관리자" },
  en: { title: "Notice", sub: "Stay up to date with the latest news from ICT KOREA", notice: "Notice", date: "Date", empty: "No notices posted yet.", back: "Back to list", admin: "Admin" },
  es: { title: "Avisos", sub: "Manténgase al día con las últimas noticias de ICT KOREA", notice: "Aviso", date: "Fecha", empty: "Aún no hay avisos publicados.", back: "Volver a la lista", admin: "Admin" },
}

export default function NoticePage() {
  const { lang } = useLanguage()
  const text = texts[lang]
  const [notices, setNotices] = useState<Notice[]>([])
  const [selected, setSelected] = useState<Notice | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch("/api/notice")
      .then((res) => res.json())
      .then((data) => setNotices(data.notices ?? []))
      .catch(() => setNotices([]))
      .finally(() => setLoaded(true))
  }, [])

  return (
    <div className="min-h-screen pt-16 bg-slate-50">
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-16 text-white sm:px-10 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">News</p>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">{text.title}</h1>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-slate-300 sm:text-lg">{text.sub}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {selected ? (
          <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm p-6 sm:p-10">
            <h2 className="text-2xl font-bold text-slate-900">{selected.title}</h2>
            <p className="mt-3 border-b border-slate-200 pb-6 text-sm text-slate-500">
              {text.date}: {new Date(selected.created_at).toLocaleDateString("ko-KR")}
            </p>
            <div className="mt-6 whitespace-pre-line text-base leading-8 text-slate-700">{selected.content}</div>
            <button
              onClick={() => setSelected(null)}
              className="mt-8 rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:border-blue-600 hover:text-blue-600"
            >
              {text.back}
            </button>
          </article>
        ) : (
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            {loaded && notices.length === 0 ? (
              <p className="p-10 text-center text-slate-500">{text.empty}</p>
            ) : (
              <table className="w-full">
                <thead className="bg-slate-100 text-slate-600">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">{text.notice}</th>
                    <th className="w-40 px-6 py-4 text-left text-sm font-semibold">{text.date}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {notices.map((notice) => (
                    <tr key={notice.id} className="cursor-pointer hover:bg-blue-50" onClick={() => setSelected(notice)}>
                      <td className="px-6 py-4 text-slate-800">{notice.title}</td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        {new Date(notice.created_at).toLocaleDateString("ko-KR")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        <div className="mt-6 text-right">
          <Link href="/news/notice/admin" className="text-sm text-slate-400 hover:text-blue-600">
            {text.admin}
          </Link>
        </div>
      </section>

      <CompanyFooter />
    </div>
  )
}
