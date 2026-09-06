import postgres from "postgres"

export const sql = postgres(process.env.DATABASE_URL!, {
  ssl: "prefer",
  idle_timeout: 20,
  max_lifetime: 60 * 30,
})

export async function ensureNoticeTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS notices (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `
}
