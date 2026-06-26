import Link from 'next/link'

export default function Les8() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-10 max-w-3xl mx-auto">

      <p className="text-sm text-blue-400 uppercase tracking-wide mb-1">Les 8</p>
      <h1 className="text-3xl font-bold mb-2">De bestuurders van motorvoertuigen</h1>
      <p className="text-gray-400 mb-10">Rijbewijs B — Deel B: De weggebruikers</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Wie zijn bestuurders?</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Een bestuurder is iemand die een voertuig bestuurt — motorloos of gemotoriseerd — of iemand die trek-, last- of rijdieren op de openbare weg geleidt of bewaakt.
        </p>
        <div className="space-y-3">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Motorfiets duwen = bestuurder</p>
            <p className="text-gray-300 text-sm">Iemand die een motorfiets duwt is een bestuurder — hij moet een rijbewijs hebben, een helm dragen en op de rijbaan lopen.</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Bromfiets duwen = voetganger</p>
            <p className="text-gray-300 text-sm">Iemand die een defecte bromfiets voortduwt is een voetganger — geen rijbewijs of helm vereist, maar wel op het trottoir.</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Auto uit duwen = bestuurder</p>
            <p className="text-gray-300 text-sm">Een bestuurder die uitstapt en zijn auto verder duwt, blijft een bestuurder.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Bestuurders van dieren</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Ook bestuurder zijn: een ruiter, iemand die naast een jonge ruiter stapt, een boer bij koeien op de openbare weg, iemand met een huifkar.
        </p>
        <div className="bg-yellow-900/30 border border-yellow-700 rounded-xl p-4">
          <p className="text-yellow-300 font-semibold mb-1">⚠️ Dieren op de weg</p>
          <p className="text-gray-300 text-sm">Elke bestuurder moet onmiddellijk vertragen wanneer hij trek-, last- of rijdieren of vee nadert. Hij moet stoppen als de dieren tekenen van angst vertonen.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Belangrijk onderscheid</h2>
        <div className="space-y-2">
          <div className="bg-blue-900/30 border border-blue-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Weggebruikers</p>
            <p className="text-gray-300 text-sm">Iedereen die de openbare weg gebruikt — voetgangers én bestuurders.</p>
          </div>
          <div className="bg-blue-900/30 border border-blue-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Bestuurders</p>
            <p className="text-gray-300 text-sm">Alleen wie een voertuig bestuurt of dieren geleidt — voetgangers zijn niet inbegrepen.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Voertuigen met rijbewijs B (MTM tot 3,5 ton)</h2>
        <div className="grid grid-cols-2 gap-2">
          {[
            "Personenauto",
            "Auto voor dubbel gebruik",
            "Minibus (max. 8 passagierszitplaatsen + 1 voor bestuurder)",
            "Lichte vrachtauto",
          ].map((item, i) => (
            <div key={i} className="bg-gray-800 rounded-lg px-3 py-2 text-gray-300 text-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Verkeersborden bij deze les</h2>
        <p className="text-gray-400 text-sm mb-4">Afbeeldingen worden later toegevoegd.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-gray-800 text-gray-300">
                <th className="px-4 py-2 border border-gray-700">Soort</th>
                <th className="px-4 py-2 border border-gray-700">Betekenis</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {[
                ["Gevaarsbord", "Doortocht van vee"],
                ["Verbodsbord", "Verboden toegang voor voetgangers"],
                ["Verbodsbord", "Verboden toegang voor bestuurders van rijwielen"],
                ["Verbodsbord", "Verboden toegang voor bestuurders van bromfietsen"],
                ["Verbodsbord", "Verboden toegang voor bestuurders van motorfietsen"],
                ["Verbodsbord", "Verboden toegang voor bestuurders van voertuigen voor goederenvervoer"],
                ["Verbodsbord", "Verboden toegang voor bestuurders van autocars"],
                ["Verbodsbord", "Verboden toegang voor bestuurders van gespannen"],
              ].map(([soort, betekenis], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-gray-900" : "bg-gray-800/50"}>
                  <td className="px-4 py-2 border border-gray-700 text-blue-300">{soort}</td>
                  <td className="px-4 py-2 border border-gray-700">{betekenis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="flex justify-between items-center pt-6 border-t border-gray-800">
        <Link href="/theorie/les-7" className="text-gray-400 hover:text-white transition text-sm">← Les 7</Link>
        <span className="text-gray-600 text-sm">Les 9 komt binnenkort</span>
      </div>

    </main>
  )
}