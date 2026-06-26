import Link from 'next/link'

export default function Les9() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-10 max-w-3xl mx-auto">

      <p className="text-sm text-blue-400 uppercase tracking-wide mb-1">Les 9</p>
      <h1 className="text-3xl font-bold mb-2">Maximaal toegelaten massa (M.T.M.) en massa beladen toestand (M.B.T.)</h1>
      <p className="text-gray-400 mb-10">Rijbewijs B — Deel C: De auto</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Welke voertuigen mag je met rijbewijs B besturen?</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Met een voorlopig of definitief rijbewijs B mag je rijden met een personenauto, auto voor dubbel gebruik, minibus of lichte vrachtauto — op voorwaarde dat de M.T.M. niet hoger is dan <strong>3.500 kg</strong>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Maximaal toegelaten massa (M.T.M.)</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          De M.T.M. is het maximale totaalgewicht dat een auto mag wegen — inclusief brandstof, bestuurder, passagiers en lading. Dit gewicht wordt bepaald door de fabrikant. Overschrijd je het, dan voldoet het voertuig niet meer aan de veiligheidsnormen.
        </p>
        <div className="bg-yellow-900/30 border border-yellow-700 rounded-xl p-4 mb-3">
          <p className="text-yellow-300 font-semibold mb-1">💡 Geheugensteuntje: PICS</p>
          <p className="text-gray-300 text-sm">Borden over <strong>P</strong>arkeren, <strong>I</strong>nhalen, <strong>C</strong>amion (vrachtwagen) en <strong>S</strong>nelheid hebben betrekking op M.T.M.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Massa in beladen toestand (M.B.T.)</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          De M.B.T. is het werkelijke gewicht van de auto op een bepaald moment — inclusief de bestuurder, passagiers en lading. Dit is altijd lager dan of gelijk aan de M.T.M.
        </p>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 mb-3">
          <p className="text-blue-300 font-semibold mb-1">Voorbeeld</p>
          <p className="text-gray-300 text-sm">M.T.M. = 2.200 kg. Lege auto + benzine = 1.500 kg. Bestuurder = 75 kg. Passagier = 40 kg. Lading = 50 kg. M.B.T. = <strong>1.665 kg</strong> — ruim onder de M.T.M.</p>
        </div>
        <div className="bg-yellow-900/30 border border-yellow-700 rounded-xl p-4">
          <p className="text-yellow-300 font-semibold mb-1">💡 Onthoud</p>
          <p className="text-gray-300 text-sm">Borden die een richting of toegang verbieden gaan over M.B.T.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Aanhangwagen</h2>
        <div className="space-y-3">
          <div className="bg-red-900/30 border border-red-700 rounded-xl p-4">
            <p className="text-red-300 font-semibold mb-1">Voorlopig rijbewijs</p>
            <p className="text-gray-300 text-sm">Je mag geen aanhangwagen trekken.</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Definitief rijbewijs B</p>
            <p className="text-gray-300 text-sm">Je mag een aanhangwagen trekken met M.T.M. tot <strong>750 kg</strong>. Bij een zwaardere aanhangwagen mag je hem toch trekken als de M.T.M. van auto + aanhangwagen samen maximaal 3.500 kg is.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Verplicht in de auto</h2>
        <div className="grid grid-cols-2 gap-2">
          {["Gevarendriehoek", "Verbanddoos", "Brandblustoestel", "Fluovestje"].map((item, i) => (
            <div key={i} className="bg-blue-900/30 border border-blue-700 rounded-lg px-3 py-2 text-gray-300 text-sm font-semibold">
              ✓ {item}
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm mt-3">Niet verplicht maar handig: trekkabel, krik, gps, reservewiel, parkeerschijf, handsfree kit.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Verplichte documenten</h2>
        <div className="space-y-2">
          <div className="bg-gray-800 rounded-xl p-3">
            <p className="text-blue-300 text-sm font-semibold mb-1">Voor de bestuurder</p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Identiteitskaart (origineel)</li>
              <li>Rijbewijs (origineel)</li>
            </ul>
          </div>
          <div className="bg-gray-800 rounded-xl p-3">
            <p className="text-blue-300 text-sm font-semibold mb-1">In de auto</p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Inschrijvingsbewijs (origineel)</li>
              <li>Gelijkvormigheidsattest (origineel)</li>
              <li>Verzekeringsbewijs (origineel, kopie of beeld op telefoon)</li>
              <li>Keuringsbewijs (origineel) — verplicht vanaf 4 jaar oud</li>
            </ul>
          </div>
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
                ["Parkeer/stilstaanbord", "Parkeren toegestaan"],
                ["Parkeer/stilstaanbord", "Parkeren toegestaan voor voertuigen met M.T.M. meer dan 3,5 ton"],
                ["Verbodsbord", "Verbod voertuigen voor goederenvervoer (M.T.M. > 3.500 kg) links in te halen"],
                ["Verbodsbord", "Verbod te rijden met meer dan de aangeduide snelheid"],
                ["Verbodsbord", "Verbod voor voertuigen met M.T.M. > 3,5 ton om sneller te rijden dan aangeduid"],
                ["Verbodsbord", "Verbod voor voertuigen M.T.M. > 3,5 ton: max. 50 km/u — anderen max. 70 km/u"],
                ["Verbodsbord", "Verboden toegang voor voertuigen waarvan M.B.T. hoger is dan aangeduid"],
                ["Verbodsbord", "Verbod rechts af te slaan aan volgend kruispunt"],
                ["Verbodsbord", "Verbod voor M.B.T. > 3,5 ton rechts af te slaan"],
                ["Verbodsbord", "Verbod links af te slaan aan volgend kruispunt"],
                ["Verbodsbord", "Verbod voor M.B.T. > 3,5 ton links af te slaan"],
                ["Verbodsbord", "Verboden toegang voor voertuigen voor goederenvervoer"],
                ["Verbodsbord", "Verboden toegang voor voertuigen voor goederenvervoer met M.T.M. > 3,5 ton"],
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
        <Link href="/theorie/les-8" className="text-gray-400 hover:text-white transition text-sm">← Les 8</Link>
        <Link href="/theorie/les-10" className="text-gray-400 hover:text-white transition text-sm">Les 10 →</Link>
      </div>

    </main>
  )
}