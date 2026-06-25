import Link from 'next/link'

export default function Les6() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-10 max-w-3xl mx-auto">

      <p className="text-sm text-blue-400 uppercase tracking-wide mb-1">Les 6</p>
      <h1 className="text-3xl font-bold mb-2">De bebouwde kom, zone, woonerf, speelstraat en fietszone</h1>
      <p className="text-gray-400 mb-10">Rijbewijs B — Deel A: De openbare weg</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">De bebouwde kom</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          De bebouwde kom is een gebied waarvan de invalswegen worden aangeduid door aanwijzingsborden. Je verlaat de bebouwde kom zodra je voorbij het eindebord rijdt.
        </p>
        <div className="bg-yellow-900/30 border border-yellow-700 rounded-xl p-4 mb-3">
          <p className="text-yellow-300 font-semibold mb-1">⚠️ Let op</p>
          <p className="text-gray-300 text-sm">Het gele bord met rode rand geeft enkel het administratieve begin van een gemeente aan — niet het begin van een bebouwde kom. Het heeft geen verkeersrechtelijke betekenis.</p>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center mb-4">
          <div className="bg-gray-800 rounded-xl p-4">
            <p className="text-white font-bold text-xl">50</p>
            <p className="text-gray-400 text-sm">km/u</p>
            <p className="text-gray-300 text-sm mt-1">Vlaanderen</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-4">
            <p className="text-white font-bold text-xl">50</p>
            <p className="text-gray-400 text-sm">km/u</p>
            <p className="text-gray-300 text-sm mt-1">Wallonië</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-4">
            <p className="text-white font-bold text-xl">30</p>
            <p className="text-gray-400 text-sm">km/u</p>
            <p className="text-gray-300 text-sm mt-1">Brussel</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Uitzondering: verkeersbord op of voorbij het beginbord</p>
            <p className="text-gray-300 text-sm">Een verkeersbord kan een andere snelheid opleggen, geldig tot het eerstvolgende kruispunt.</p>
          </div>
          <div className="bg-yellow-900/30 border border-yellow-700 rounded-xl p-4">
            <p className="text-yellow-300 font-semibold mb-1">Speciale regel voor zone 30</p>
            <p className="text-gray-300 text-sm">Staat het bord "30" net boven het beginbord van de bebouwde kom, dan geldt 30 km/u voor de <strong>hele</strong> bebouwde kom — niet alleen tot het eerstvolgende kruispunt. Dit geldt alleen voor "30", niet voor andere snelheden.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Snelheid bij het verlaten van de bebouwde kom</h2>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-gray-800 rounded-xl p-4">
            <p className="text-white font-bold text-xl">70</p>
            <p className="text-gray-400 text-sm">km/u</p>
            <p className="text-gray-300 text-sm mt-1">Vlaams gewest</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-4">
            <p className="text-white font-bold text-xl">90</p>
            <p className="text-gray-400 text-sm">km/u</p>
            <p className="text-gray-300 text-sm mt-1">Waals gewest</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-4">
            <p className="text-white font-bold text-xl">70</p>
            <p className="text-gray-400 text-sm">km/u</p>
            <p className="text-gray-300 text-sm mt-1">Brussels gewest</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Woonerf</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Het begin van een woonerf wordt aangeduid door een aanwijzingsbord, het einde ook. Bestuurders mogen voetgangers op de rijbaan niet in gevaar brengen en moeten extra voorzichtig zijn voor spelende kinderen.
        </p>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gray-800 rounded-xl p-4 text-center">
            <p className="text-white font-bold text-2xl">20</p>
            <p className="text-gray-400 text-sm">km/u maximum</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 text-center">
            <p className="text-blue-300 font-semibold text-sm">Parkeren</p>
            <p className="text-gray-300 text-sm mt-1">Alleen op voorziene parkeerplaatsen — links of rechts van je rijrichting</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Speelstraat</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          In een speelstraat is de volledige breedte van de openbare weg voorbehouden voor spelen.
        </p>
        <p className="text-gray-300 mb-2">Toegelaten zijn:</p>
        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mb-3">
          <li>Bewoners van die straat</li>
          <li>Bestuurders wiens garage in die straat ligt</li>
          <li>Prioritaire voertuigen</li>
        </ul>
        <p className="text-gray-300 text-sm">Iedereen rijdt stapvoets. Fietsers moeten afstappen als ze voetgangers of kinderen hinderen.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Fietszone</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Een fietszone zijn één of meer openbare wegen waar fietsers de belangrijkste weggebruikers zijn. Motorvoertuigen zijn toegelaten maar zijn "te gast".
        </p>
        <div className="grid grid-cols-1 gap-3 mb-3">
          <div className="bg-gray-800 rounded-xl p-4 flex justify-between items-center">
            <span className="text-gray-300">Maximumsnelheid</span>
            <span className="text-white font-bold text-xl">30 km/u</span>
          </div>
        </div>
        <p className="text-gray-300 text-sm">Motorvoertuigen mogen fietsers, speedpedelecs en rijwielen tot 1m breed niet inhalen. De zone eindigt bij het bord "EINDE ZONE".</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Zone</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Een zone bestaat uit één of meerdere openbare wegen, aangeduid door een beginbord en een eindebord. Zolang je binnen een zone rijdt, geldt de verplichting dag en nacht.
        </p>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 mb-3">
          <p className="text-blue-300 font-semibold mb-1">Elektronisch zonebord</p>
          <p className="text-gray-300 text-sm">De verplichting geldt alleen als het bord oplicht.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Schoolomgeving en schoolstraat</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Een schoolomgeving is een zone rond een school, aangeduid door specifieke borden. Een schoolstraat wordt twee keer per dag afgesloten voor motorvoertuigen.
        </p>
        <p className="text-gray-300 mb-2">Toegelaten in een schoolstraat:</p>
        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mb-3">
          <li>Voetgangers, fietsers en speedpedelecs</li>
          <li>Bewoners met vergunning</li>
          <li>Prioritaire voertuigen</li>
          <li>Voertuigen met vergunning</li>
        </ul>
        <p className="text-gray-300 text-sm">Wie er mag rijden, doet dat stapvoets — of aan de snelheid op het bord. Voorrang verlenen aan voetgangers en fietsers.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Bijzondere overrijdbare bedding</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Een bijzondere overrijdbare bedding is voorbehouden voor trams en bussen. Andere voertuigen mogen er niet op rijden, behalve om een hindernis te omrijden of als onderborden dit toelaten.
        </p>
        <p className="text-gray-300 text-sm">Andere voertuigen mogen de bedding wel dwarsen om een parkeerplaats in te nemen of te verlaten, een eigendom op te rijden of te verlaten, of op kruispunten.</p>
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
                ["Aanwijzingsbord", "Begin van een bebouwde kom (variant 1)"],
                ["Aanwijzingsbord", "Begin van een bebouwde kom (variant 2)"],
                ["Aanwijzingsbord", "Einde van een bebouwde kom (variant 1)"],
                ["Aanwijzingsbord", "Einde van een bebouwde kom (variant 2)"],
                ["Aanwijzingsbord", "Begin van een woonerf (max. 20 km/u tot einde woonerf)"],
                ["Aanwijzingsbord", "Einde van een woonerf"],
                ["Aanwijzingsbord", "Begin van een Zone 30 (max. 30 km/u tot einde zone)"],
                ["Aanwijzingsbord", "Weg voorbehouden voor bepaalde weggebruikers (max. 30 km/u)"],
                ["Aanwijzingsbord", "Bijzondere overrijdbare bedding — enkel trams en bussen"],
                ["Aanwijzingsbord", "Bijzondere overrijdbare bedding — bromfietsen ook toegelaten"],
                ["Aanwijzingsbord", "Bijzondere overrijdbare bedding — motorfietsen ook toegelaten"],
                ["Aanwijzingsbord", "Bijzondere overrijdbare bedding — fietsers ook toegelaten"],
                ["Aanwijzingsbord", "Begin van een fietsstraat (max. 30 km/u)"],
                ["Aanwijzingsbord", "Begin van een fietszone"],
                ["Aanwijzingsbord", "Einde van een fietszone"],
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
        <Link href="/theorie/les-5" className="text-gray-400 hover:text-white transition text-sm">← Les 5</Link>
        <span className="text-gray-600 text-sm">Les 7 komt binnenkort</span>
      </div>

    </main>
  )
}