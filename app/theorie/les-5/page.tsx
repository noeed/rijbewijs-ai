import Link from 'next/link'

export default function Les5() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-10 max-w-3xl mx-auto">

      <p className="text-sm text-blue-400 uppercase tracking-wide mb-1">Les 5</p>
      <h1 className="text-3xl font-bold mb-2">Autoweg, snelheid, verkeersborden en regels</h1>
      <p className="text-gray-400 mb-10">Rijbewijs B — Deel A: De openbare weg</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Wat is een autoweg?</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Een autoweg is een openbare weg waarvan het begin en einde worden aangeduid door aanwijzingsborden. Belangrijk verschil met een autosnelweg: op een autoweg kunnen kruispunten en verkeerslichten voorkomen.
        </p>
        <div className="bg-red-900/30 border border-red-700 rounded-xl p-4">
          <p className="text-red-300 font-semibold mb-2">Niet toegelaten op de autoweg:</p>
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
            <li>Bromfietsen</li>
            <li>Landbouwvoertuigen</li>
            <li>Vierwielers zonder passagiersruimte</li>
            <li>Slepen van kermisvoertuigen</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Snelheid op de autoweg</h2>
        <div className="space-y-3">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-2">Rijrichtingen gescheiden door een middenberm — buiten bebouwde kom</p>
            <p className="text-white font-bold text-xl mb-1">120 km/u</p>
            <p className="text-gray-300 text-sm">Als elke rijrichting minstens 2 rijstroken heeft en gescheiden is door een middenberm.</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-2">Rijrichtingen gescheiden door wegmarkering — buiten bebouwde kom</p>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-white font-bold">70</p>
                <p className="text-gray-400 text-xs">km/u — Vlaams</p>
              </div>
              <div>
                <p className="text-white font-bold">90</p>
                <p className="text-gray-400 text-xs">km/u — Waals</p>
              </div>
              <div>
                <p className="text-white font-bold">70</p>
                <p className="text-gray-400 text-xs">km/u — Brussels</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-2">Binnen bebouwde kom</p>
            <div className="grid grid-cols-2 gap-2 text-center">
              <div>
                <p className="text-white font-bold">50</p>
                <p className="text-gray-400 text-xs">km/u — Vlaanderen & Wallonië</p>
              </div>
              <div>
                <p className="text-white font-bold">30</p>
                <p className="text-gray-400 text-xs">km/u — Brussels gewest</p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-900/30 border border-yellow-700 rounded-xl p-4">
            <p className="text-yellow-300 font-semibold mb-1">Minimumsnelheid</p>
            <p className="text-gray-300 text-sm">Op een autoweg geldt geen minimumsnelheid. Maar te traag rijden zodat je anderen hindert is ook een overtreding.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Pech of ongeval</h2>
        <div className="space-y-3">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">🔺 Gevarendriehoek</p>
            <p className="text-gray-300 text-sm">Op een autoweg: minstens <strong>30 meter</strong> voor de auto. Op een autosnelweg: 100 meter. Altijd zichtbaar vanop 50 meter.</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">🦺 Fluojasje</p>
            <p className="text-gray-300 text-sm">Als je auto op een plek staat waar je niet mag parkeren, moet de bestuurder een fluojasje dragen zodra hij uitstapt. Verplicht aanwezig in de auto, samen met gevarendriehoek, verbanddoos en brandblustoestel.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Inhalen</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Ook op een autoweg rijd je zo veel mogelijk rechts. Inhalen doe je altijd links. Rechts inhalen is een zware overtreding. Bij file geldt het niet als inhalen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Verboden op de autoweg</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Stoppen of parkeren op de rijbaan of pechstrook (ook niet op in- en uitritten)</li>
          <li>Rijden op de middenberm of dwarsverbindingen</li>
          <li>Achteruitrijden</li>
          <li>Spookrijden</li>
          <li>Slepen met een noodoplossing (op gewone weg mag dit wel, max. 25 km/u)</li>
        </ul>
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
                ["Aanwijzingsbord", "Begin van een autoweg"],
                ["Aanwijzingsbord", "Einde van een autoweg"],
                ["Aanwijzingsbord", "Begin of oprit van een autosnelweg"],
                ["Aanwijzingsbord", "Einde of afrit van een autosnelweg"],
                ["Aanwijzingsbord", "Begin van een bebouwde kom (variant 1)"],
                ["Aanwijzingsbord", "Begin van een bebouwde kom (variant 2)"],
                ["Aanwijzingsbord", "Einde van een bebouwde kom (variant 1)"],
                ["Aanwijzingsbord", "Einde van een bebouwde kom (variant 2)"],
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
        <Link href="/theorie/les-4" className="text-gray-400 hover:text-white transition text-sm">← Les 4</Link>
        <Link href="/theorie/les-6" className="text-gray-400 hover:text-white transition text-sm">Les 6 →</Link>
      </div>

    </main>
  )
}