import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-blue-400 mb-2">RijbewijsAI</h1>
      <p className="text-gray-400 mb-10 text-center">Leer theorie voor je rijbewijs B op je eigen tempo.</p>
      <Link
        href="/theorie/les-1"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition"
      >
        Start met Les 1 →
      </Link>
    </main>
  )
}