import { NextRequest, NextResponse } from "next/server"
import { sql, ensureNoticeTable } from "@/lib/db"

export const dynamic = "force-dynamic"

function isAuthorized(req: NextRequest) {
  return req.headers.get("x-admin-password") === process.env.ADMIN_PASSWORD
}

export async function GET() {
  try {
    await ensureNoticeTable()
    const notices = await sql`
      SELECT id, title, content, created_at FROM notices ORDER BY created_at DESC, id DESC
    `
    return NextResponse.json({ notices })
  } catch (error) {
    console.error("GET /api/notice error:", error)
    return NextResponse.json({ error: "공지사항을 불러오지 못했습니다." }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "관리자 인증이 필요합니다." }, { status: 401 })
  }

  try {
    const { title, content } = await req.json()
    if (!title?.trim() || !content?.trim()) {
      return NextResponse.json({ error: "제목과 내용을 모두 입력해주세요." }, { status: 400 })
    }

    await ensureNoticeTable()
    const [notice] = await sql`
      INSERT INTO notices (title, content)
      VALUES (${title.trim()}, ${content.trim()})
      RETURNING id, title, content, created_at
    `
    return NextResponse.json({ notice }, { status: 201 })
  } catch (error) {
    console.error("POST /api/notice error:", error)
    return NextResponse.json({ error: "공지사항 등록에 실패했습니다." }, { status: 500 })
  }
}
