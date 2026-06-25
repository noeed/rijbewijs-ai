import Link from 'next/link'

export default function Les2() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-10 max-w-3xl mx-auto">

      <p className="text-sm text-blue-400 uppercase tracking-wide mb-1">Les 2</p>
      <h1 className="text-3xl font-bold mb-2">De rijstroken, busstrook en verdrijvingsvlak</h1>
      <p className="text-gray-400 mb-10">Rijbewijs B — Deel A: De openbare weg</p>

      {/* Rijstroken */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Rijstroken</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Een rijbaan kan via wegmarkering worden opgedeeld in rijstroken. Die markering is een witte onderbroken of doorlopende streep in het midden van de rijbaan. Zo kan een rijbaan in twee, drie of meer rijstroken worden verdeeld.
        </p>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 mb-3">
          <p className="text-blue-300 font-semibold mb-1">📍 Waar moet je rijden?</p>
          <p className="text-gray-300 text-sm">Ook met rijstroken rijd je in normale omstandigheden zo veel mogelijk op de rechterrijstrook. Zomaar op de linkerrijstrook rijden is een overtreding.</p>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
          <p className="text-blue-300 font-semibold mb-1">🏙️ Uitzondering in bebouwde kom</p>
          <p className="text-gray-300 text-sm">Als er 2 rijstroken in jouw rijrichting zijn, mag je op de linkerrijstrook blijven als die beter aansluit bij je bestemming — bijvoorbeeld als je verder naar links wil afslaan of links wil parkeren.</p>
        </div>
      </section>

      {/* Snelheid */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Maximumsnelheid</h2>
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
        <p className="text-gray-400 text-sm mt-3">Verkeersborden of verkeersregels kunnen een andere snelheid opleggen.</p>
      </section>

      {/* Inhalen */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Inhalen</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Rijdt de bestuurder voor jou trager dan de maximumsnelheid, dan mag je over een witte onderbroken streep rijden om in te halen — tenzij verkeersborden dit verbieden.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>De ingehaalde bestuurder mag zijn snelheid niet verhogen en moet zo veel mogelijk rechts rijden.</li>
          <li>Over een witte doorlopende streep mag je nooit rijden om in te halen.</li>
        </ul>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
          <p className="text-blue-300 font-semibold mb-1">Onderbroken + doorlopende streep naast elkaar</p>
          <p className="text-gray-300 text-sm">Ligt de onderbroken streep aan jouw kant? Dan mag je erover rijden om links in te halen. Na het inhalen rijd je via de doorlopende streep terug naar de rechterrijstrook.</p>
        </div>
      </section>

      {/* Rijstrookvermindering */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Rijstrookvermindering</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Aanwijzingsborden geven aan wanneer het aantal rijstroken vermindert — langs links of langs rechts.
        </p>
      </section>

      {/* Ritsen */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Ritsen</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Ritsen is verplicht wanneer een rijstrook wegvalt bij sterk vertraagd verkeer. Er gelden drie voorwaarden:
        </p>
        <div className="space-y-2 mb-4">
          <div className="bg-gray-800 rounded-xl p-3 flex gap-3">
            <span className="text-blue-400 font-bold">1</span>
            <p className="text-gray-300 text-sm">Er moeten rijstroken zijn.</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-3 flex gap-3">
            <span className="text-blue-400 font-bold">2</span>
            <p className="text-gray-300 text-sm">Het aantal bruikbare rijstroken moet verminderen.</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-3 flex gap-3">
            <span className="text-blue-400 font-bold">3</span>
            <p className="text-gray-300 text-sm">Er moet sterk vertraagd verkeer zijn.</p>
          </div>
        </div>
        <div className="bg-yellow-900/30 border border-yellow-700 rounded-xl p-4 mb-3">
          <p className="text-yellow-300 font-semibold mb-1">⚠️ Belangrijk</p>
          <p className="text-gray-300 text-sm">Bij invoegen op een autosnelweg wordt <strong>niet</strong> geritst. Je mag pas invoegen vlak voor de rijstrookvermindering.</p>
        </div>
        <div className="space-y-3">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Rijstrook valt weg langs één kant</p>
            <p className="text-gray-300 text-sm">Bestuurders op de vrije strook geven beurtelings voorrang aan 1 invoegende bestuurder.</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Rijstrook valt weg langs beide kanten</p>
            <p className="text-gray-300 text-sm">Eerst een auto langs rechts, dan een auto langs links, dan mag de bestuurder op de vrije strook zelf verder.</p>
          </div>
        </div>
      </section>

      {/* Busstrook */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Busstrook</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Een busstrook is geen deel van de rijbaan. Het is een speciale rijstrook voor geregelde openbare vervoersdiensten, aangeduid met brede witte onderbroken strepen en het bord F17.
        </p>
        <div className="bg-red-900/30 border border-red-700 rounded-xl p-4 mb-4">
          <p className="text-red-300 font-semibold mb-2">Op een busstrook mag je niet:</p>
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
            <li>Rijden</li>
            <li>Parkeren</li>
            <li>Stilstaan (sinds 1/4/2023)</li>
          </ul>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 mb-4">
          <p className="text-blue-300 font-semibold mb-1">Uitzondering</p>
          <p className="text-gray-300 text-sm">Je mag de laatste meters voor een kruispunt wel op de busstrook rijden als je naar links of rechts wil afslaan.</p>
        </div>
        <p className="text-gray-300 mb-3">Andere voertuigen die op een busstrook mogen rijden als dit vermeld staat:</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            "Schoolvervoer",
            "Taxi",
            "Fietsers",
            "Bromfietsen",
            "Motorfietsen",
            "Voertuigen met meer dan 8 zitplaatsen",
            "Woon-werkverkeer",
            "Voertuigen met min. 2, 3 of 4 inzittenden",
            "Duurzame mobiliteitsvoertuigen",
            "Vervoer van personen met een handicap",
          ].map((item, i) => (
            <div key={i} className="bg-gray-800 rounded-lg px-3 py-2 text-gray-300 text-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Verdrijvingsvlak */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Verdrijvingsvlak</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Een verdrijvingsvlak zijn brede schuine strepen naast of op een deel van een rijstrook.
        </p>
        <div className="bg-red-900/30 border border-red-700 rounded-xl p-4">
          <p className="text-red-300 font-semibold mb-2">Op een verdrijvingsvlak mag je niet:</p>
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
            <li>Rijden</li>
            <li>Stilstaan</li>
            <li>Parkeren</li>
          </ul>
        </div>
      </section>

      {/* Wegenwerken */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Wegenwerken</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Bij wegenwerken worden tijdelijk oranje wegmarkeringen geschilderd. Deze hebben dezelfde betekenis als de witte.
        </p>
        <div className="bg-yellow-900/30 border border-yellow-700 rounded-xl p-4 mb-3">
          <p className="text-yellow-300 font-semibold mb-1">⚠️ Oranje heeft voorrang op wit</p>
          <p className="text-gray-300 text-sm">Zie je zowel witte als oranje strepen? Volg dan alleen de oranje. Als de oranje markering aangeeft dat je over een pechstrook of verdrijvingsvlak mag rijden, is dat toegelaten.</p>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
          <p className="text-blue-300 font-semibold mb-1">GPS verbod bij wegenwerken</p>
          <p className="text-gray-300 text-sm">Soms zie je bij wegenwerken een bord dat vraagt om de GPS uit te zetten en de aangegeven omleiding te volgen. Dit bord staat niet officieel in de wegcode, maar wordt wel gebruikt om verwarring en ongevallen te vermijden.</p>
        </div>
      </section>

      {/* Verkeersborden */}
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
                ["Aanwijzingsbord", "Pijlen op rijbaan — keuze van rijstrook voorgeschreven (richting links/rechtdoor)"],
                ["Aanwijzingsbord", "Pijlen op rijbaan — keuze van rijstrook voorgeschreven (richting rechts/rechtdoor)"],
                ["Aanwijzingsbord", "Rijstrookvermindering langs rechts"],
                ["Aanwijzingsbord", "Rijstrookvermindering langs links"],
                ["Aanwijzingsbord", "Rijbaan met busstrook — alleen bussen"],
                ["Aanwijzingsbord", "Rijbaan met busstrook — fietsers toegelaten"],
                ["Aanwijzingsbord", "Rijbaan met busstrook — bromfietsen toegelaten"],
                ["Aanwijzingsbord", "Rijbaan met busstrook — motorfietsen toegelaten"],
                ["Gevaarsbord", "Wegenwerken"],
                ["Gevaarsbord", "Verkeer in twee richtingen na eenrichtingsgedeelte"],
                ["Aanwijzingsbord", "Voorwegwijzer: uitwijking"],
                ["Aanwijzingsbord", "Voorwegwijzer: doorsteek van de middenberm"],
                ["Aanwijzingsbord", "Voorwegwijzer: vermindering aantal rijstroken"],
                ["Aanwijzingsbord", "Verkeer in beide richtingen op eenrichtingsgedeelte"],
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

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-800">
        <Link href="/theorie/les-1" className="text-gray-400 hover:text-white transition text-sm">← Les 1</Link>
       <Link href="/theorie/les-3" className="text-gray-400 hover:text-white transition text-sm">Les 3 →</Link>
      </div>

    </main>
  )
}