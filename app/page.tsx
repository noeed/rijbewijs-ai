import Link from 'next/link'

const chapters = [
  {
    deel: 'A. De openbare weg',
    color: 'blue',
    lessen: [
      { nr: 1, titel: 'De openbare weg en de rijbaan' },
      { nr: 2, titel: 'De rijstroken, busstrook en verdrijvingsvlak' },
      { nr: 3, titel: 'Fietspad, fietssuggestiestrook en oversteekplaats' },
      { nr: 4, titel: 'Autosnelweg, oprit, afrit, pechstrook en spitsstrook' },
      { nr: 5, titel: 'Autoweg, snelheid, verkeersborden en regels' },
      { nr: 6, titel: 'Bebouwde kom, zone, woonerf, speelstraat en fietszone' },
    ],
  },
  {
    deel: 'B. De weggebruikers',
    color: 'blue',
    lessen: [
      { nr: 7, titel: 'Voetpad en oversteekplaats voor voetgangers' },
      { nr: 8, titel: 'De bestuurders van motorvoertuigen' },
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
              <Link
                key={les.nr}
                href={`/theorie/les-${les.nr}`}
                className="flex items-center gap-4 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-blue-700 rounded-xl px-4 py-3 transition group"
              >
                <span className="text-blue-400 font-bold text-sm w-8 shrink-0">
                  {les.nr}
                </span>
                <span className="text-gray-200 group-hover:text-white text-sm">
                  {les.titel}
                </span>
                <span className="ml-auto text-gray-600 group-hover:text-blue-400 transition">→</span>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <p className="text-center text-gray-600 text-sm mt-10">Meer lessen worden binnenkort toegevoegd.</p>

    </main>
  )
}