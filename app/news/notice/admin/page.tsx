"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Lock, LogOut, Pencil, Trash2 } from "lucide-react"

type Notice = {
  id: number
  title: string
  content: string
  created_at: string
}

export default function NoticeAdminPage() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [authorized, setAuthorized] = useState(false)
  const [notices, setNotices] = useState<Notice[]>([])
  const [editing, setEditing] = useState<Notice | null>(null)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [message, setMessage] = useState("")
  const [busy, setBusy] = useState(false)

  const authHeaders = () => ({ "x-admin-password": localStorage.getItem("notice-admin-pw") ?? "" })

  const loadNotices = () => {
    fetch("/api/notice")
      .then((res) => res.json())
      .then((data) => setNotices(data.notices ?? []))
      .catch(() => setNotices([]))
  }

  useEffect(() => {
    const saved = localStorage.getItem("notice-admin-pw")
    if (saved) {
      setPassword(saved)
      fetch("/api/admin-login", { headers: { "x-admin-password": saved } })
        .then((res) => setAuthorized(res.ok))
      loadNotices()
    }
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setBusy(true)
    setMessage("")
    try {
      const res = await fetch("/api/admin-login", { headers: { "x-admin-password": password } })
      if (res.ok) {
        localStorage.setItem("notice-admin-pw", password)
        setAuthorized(true)
        loadNotices()
      } else {
        setMessage("비밀번호가 올바르지 않습니다.")
      }
    } finally {
      setBusy(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("notice-admin-pw")
    setAuthorized(false)
    setPassword("")
    router.push("/news/notice")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) {
      setMessage("제목과 내용을 모두 입력해주세요.")
      return
    }
    setBusy(true)
    setMessage("")
    try {
      const res = await fetch(editing ? `/api/notice/${editing.id}` : "/api/notice", {
        method: editing ? "PATCH" : "POST",
        headers: { "content-type": "application/json", ...authHeaders() },
        body: JSON.stringify({ title, content }),
      })
      const data = await res.json()
      if (!res.ok) {
        setMessage(data.error ?? "저장에 실패했습니다.")
        return
      }
      setTitle("")
      setContent("")
      setEditing(null)
      loadNotices()
    } finally {
      setBusy(false)
    }
  }

  const handleEdit = (notice: Notice) => {
    setEditing(notice)
    setTitle(notice.title)
    setContent(notice.content)
  }

  const handleDelete = async (id: number) => {
    if (!confirm("이 공지사항을 삭제하시겠습니까?")) return
    await fetch(`/api/notice/${id}`, { method: "DELETE", headers: authHeaders() })
    loadNotices()
  }

  return (
    <div className="min-h-screen pt-16 bg-slate-50">
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-14 text-white sm:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">News</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">공지사항 관리</h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        {!authorized ? (
          <form onSubmit={handleLogin} className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-2 text-slate-700">
              <Lock size={18} />
              <span className="font-medium">관리자 로그인</span>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="관리자 비밀번호"
              className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-800 focus:border-blue-600 focus:outline-none"
            />
            <button
              type="submit"
              disabled={busy}
              className="mt-4 w-full rounded-md bg-blue-600 px-4 py-2.5 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
            >
              로그인
            </button>
            {message && <p className="mt-3 text-sm text-red-600">{message}</p>}
          </form>
        ) : (
          <div className="space-y-8">
            <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="mb-4 text-lg font-bold text-slate-900">{editing ? "공지사항 수정" : "새 공지사항 작성"}</h2>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목"
                className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-800 focus:border-blue-600 focus:outline-none"
              />
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="내용"
                rows={8}
                className="mt-3 w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-800 focus:border-blue-600 focus:outline-none"
              />
              <div className="mt-4 flex gap-2">
                <button
                  type="submit"
                  disabled={busy}
                  className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
                >
                  {editing ? "수정" : "등록"}
                </button>
                {editing && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditing(null)
                      setTitle("")
                      setContent("")
                    }}
                    className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-slate-400"
                  >
                    취소
                  </button>
                )}
              </div>
              {message && <p className="mt-3 text-sm text-red-600">{message}</p>}
            </form>

            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <table className="w-full">
                <thead className="bg-slate-100 text-slate-600">
                  <tr>
                    <th className="px-5 py-3 text-left text-sm font-semibold">제목</th>
                    <th className="w-28 px-5 py-3 text-left text-sm font-semibold">관리</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {notices.map((notice) => (
                    <tr key={notice.id}>
                      <td className="px-5 py-3 text-slate-800">{notice.title}</td>
                      <td className="px-5 py-3">
                        <div className="flex gap-2">
                          <button onClick={() => handleEdit(notice)} className="text-slate-500 hover:text-blue-600" aria-label="수정">
                            <Pencil size={16} />
                          </button>
                          <button onClick={() => handleDelete(notice.id)} className="text-slate-500 hover:text-red-600" aria-label="삭제">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-right">
              <button onClick={handleLogout} className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-red-600">
                <LogOut size={14} /> 로그아웃
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
