import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const q = searchParams.get('q')

  if (!q) {
    return NextResponse.json({ error: 'Query required' }, { status: 400 })
  }

  try {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&limit=1`
    console.log('[geocode] fetching:', url)

    const res = await fetch(url, {
      headers: { 'User-Agent': 'SiteSync/1.0', 'Accept-Language': 'en' },
    })

    console.log('[geocode] status:', res.status)

    if (!res.ok) {
      const text = await res.text()
      console.error('[geocode] response:', text.slice(0, 500))
      return NextResponse.json({ error: 'Geocoding service returned an error' }, { status: 502 })
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    console.error('[geocode] error:', err)
    return NextResponse.json({ error: 'Geocoding failed' }, { status: 502 })
  }
}
