import { NextRequest, NextResponse } from "next/server"
import { sql, ensureNoticeTable } from "@/lib/db"

export const dynamic = "force-dynamic"

function isAuthorized(req: NextRequest) {
  return req.headers.get("x-admin-password") === process.env.ADMIN_PASSWORD
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "관리자 인증이 필요합니다." }, { status: 401 })
  }

  try {
    const { id } = await params
    const { title, content } = await req.json()
    if (!title?.trim() || !content?.trim()) {
      return NextResponse.json({ error: "제목과 내용을 모두 입력해주세요." }, { status: 400 })
    }

    const [notice] = await sql`
      UPDATE notices SET title = ${title.trim()}, content = ${content.trim()}
      WHERE id = ${Number(id)}
      RETURNING id, title, content, created_at
    `
    if (!notice) {
      return NextResponse.json({ error: "공지사항을 찾을 수 없습니다." }, { status: 404 })
    }
    return NextResponse.json({ notice })
  } catch (error) {
    console.error("PATCH /api/notice error:", error)
    return NextResponse.json({ error: "공지사항 수정에 실패했습니다." }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "관리자 인증이 필요합니다." }, { status: 401 })
  }

  try {
    const { id } = await params
    const [notice] = await sql`
      DELETE FROM notices WHERE id = ${Number(id)} RETURNING id
    `
    if (!notice) {
      return NextResponse.json({ error: "공지사항을 찾을 수 없습니다." }, { status: 404 })
    }
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("DELETE /api/notice error:", error)
    return NextResponse.json({ error: "공지사항 삭제에 실패했습니다." }, { status: 500 })
  }
}
