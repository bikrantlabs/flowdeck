import { db } from "@/lib/db"

export const dynamic = "force-dynamic"

const responseHeaders = {
  "Cache-Control": "no-store",
  "Content-Type": "text/plain; charset=utf-8",
}

export async function GET() {
  try {
    const probe = await db.cronProbe.findUnique({
      where: { id: "flowdeck-uptime" },
      select: { id: true },
    })

    if (!probe) {
      return new Response("unavailable", {
        status: 503,
        headers: responseHeaders,
      })
    }

    return new Response("ok", { headers: responseHeaders })
  } catch {
    return new Response("unavailable", {
      status: 503,
      headers: responseHeaders,
    })
  }
}
