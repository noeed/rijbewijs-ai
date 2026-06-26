import Link from 'next/link'

const chapters = [
  {
    deel: 'A. De openbare weg',
    lessen: [
      { nr: 1, titel: 'De rijbaan', klaar: true },
      { nr: 2, titel: 'De rijstroken', klaar: true },
      { nr: 3, titel: 'Het fietspad', klaar: true },
      { nr: 4, titel: 'De autosnelweg', klaar: true },
      { nr: 5, titel: 'De autoweg', klaar: true },
      { nr: 6, titel: 'Speciale plaatsen', klaar: true },
    ],
  },
  {
    deel: 'B. De weggebruikers',
    lessen: [
      { nr: 7, titel: 'De voetgangers', klaar: true },
      { nr: 8, titel: 'De bestuurders', klaar: true },
    ],
  },
  {
    deel: 'C. De auto',
    lessen: [
      { nr: 9, titel: 'De personenauto', klaar: true },
      { nr: 10, titel: 'Lading - zitplaatsen', klaar: true },
      { nr: 11, titel: 'De lichten en de claxon', klaar: true },
    ],
  },
  {
    deel: 'D. De snelheid',
    lessen: [
      { nr: 12, titel: 'Snelheid', klaar: false },
      { nr: 13, titel: 'Stopafstand', klaar: false },
    ],
  },
  {
    deel: 'E. Kruisen en inhalen',
    lessen: [
      { nr: 14, titel: 'Kruisen', klaar: false },
      { nr: 15, titel: 'Inhalen (1)', klaar: false },
      { nr: 16, titel: 'Inhalen (2)', klaar: false },
    ],
  },
  {
    deel: 'F. De voorrang',
    lessen: [
      { nr: 17, titel: 'Bevoegde personen', klaar: false },
      { nr: 18, titel: 'Verkeerslichten', klaar: false },
      { nr: 19, titel: 'Kruispunten borden', klaar: false },
      { nr: 20, titel: 'Voorrang van rechts', klaar: false },
      { nr: 21, titel: 'Voorrang - afslaan', klaar: false },
      { nr: 22, titel: 'Trein - tram - bus', klaar: false },
    ],
  },
  {
    deel: 'G. Waar rijden',
    lessen: [
      { nr: 23, titel: 'Verboden rijrichting', klaar: false },
      { nr: 24, titel: 'Verplichte rijrichting', klaar: false },
    ],
  },
  {
    deel: 'H. Stilstaan en parkeren',
    lessen: [
      { nr: 25, titel: 'Parkeren (1)', klaar: false },
      { nr: 26, titel: 'Parkeren (2)', klaar: false },
      { nr: 27, titel: 'Parkeren (3)', klaar: false },
    ],
  },
  {
    deel: 'I. Varia',
    lessen: [
      { nr: 28, titel: 'Alcohol - drugs', klaar: false },
      { nr: 29, titel: 'Ongeval - EHBO', klaar: false },
      { nr: 30, titel: 'Milieu', klaar: false },
      { nr: 31, titel: 'Techniek', klaar: false },
    ],
  },
  {
    deel: 'De verkeersborden',
    lessen: [
      { nr: 33, titel: 'De borden', klaar: false },
    ],
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-10 max-w-3xl mx-auto">

      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-blue-400 mb-2">RijbewijsAI</h1>
        <p className="text-gray-400">Leer theorie voor je rijbewijs B op je eigen tempo.</p>
      </div>

      {chapters.map((deel) => (
        <div key={deel.deel} className="mb-8">
          <div className="bg-blue-900/40 border border-blue-700 rounded-xl px-4 py-3 mb-3">
            <h2 className="text-blue-300 font-bold text-sm uppercase tracking-wide">{deel.deel}</h2>
          </div>
          <div className="space-y-2">
            {deel.lessen.map((les) => (
              les.klaar ? (
                <Link
                  key={les.nr}
                  href={`/theorie/les-${les.nr}`}
                  className="flex items-center gap-4 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-blue-700 rounded-xl px-4 py-3 transition group"
                >
                  <span className="text-blue-400 font-bold text-sm w-8 shrink-0">{les.nr}</span>
                  <span className="text-gray-200 group-hover:text-white text-sm">{les.titel}</span>
                  <span className="ml-auto text-gray-600 group-hover:text-blue-400 transition">→</span>
                </Link>
              ) : (
                <div
                  key={les.nr}
                  className="flex items-center gap-4 bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3 opacity-50 cursor-not-allowed"
                >
                  <span className="text-gray-600 font-bold text-sm w-8 shrink-0">{les.nr}</span>
                  <span className="text-gray-500 text-sm">{les.titel}</span>
                  <span className="ml-auto text-gray-700 text-xs">binnenkort</span>
                </div>
              )
            ))}
          </div>
        </div>
      ))}

    </main>
  )
}