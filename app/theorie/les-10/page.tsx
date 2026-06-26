import Link from 'next/link'

export default function Les10() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-10 max-w-3xl mx-auto">

      <p className="text-sm text-blue-400 uppercase tracking-wide mb-1">Les 10</p>
      <h1 className="text-3xl font-bold mb-2">Lading, zitplaatsen en veiligheidsgordel</h1>
      <p className="text-gray-400 mb-10">Rijbewijs B — Deel C: De auto</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Afmetingen van een voertuig met lading</h2>
        <div className="grid grid-cols-3 gap-3 text-center mb-4">
          <div className="bg-gray-800 rounded-xl p-4">
            <p className="text-white font-bold text-xl">4m</p>
            <p className="text-gray-400 text-sm">max. hoogte</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-4">
            <p className="text-white font-bold text-xl">2,55m</p>
            <p className="text-gray-400 text-sm">max. breedte</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-4">
            <p className="text-white font-bold text-xl">1m</p>
            <p className="text-gray-400 text-sm">max. uitsteek achter</p>
          </div>
        </div>
        <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
          <li>Lading mag vooraan nooit voorbij de carrosserie uitsteken.</li>
          <li>Lading achteraan mag max. 1 meter uitsteken.</li>
          <li>Ondeelbare lading mag max. 3 meter uitsteken achteraan — mits waarschuwingsbord (50x50cm, 5 rode lijnen).</li>
          <li>Lading mag nooit de achterlichten of nummerplaat bedekken.</li>
          <li>Zware voorwerpen horen in de koffer, niet op het dak.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Zitplaatsen</h2>
        <div className="space-y-2">
          <div className="bg-gray-800 rounded-xl p-4 flex justify-between">
            <span className="text-gray-300 text-sm">Ruimte voor bestuurder</span>
            <span className="text-white font-bold">min. 55 cm</span>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 flex justify-between">
            <span className="text-gray-300 text-sm">Ruimte per passagier vooraan</span>
            <span className="text-white font-bold">min. 40 cm</span>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 flex justify-between">
            <span className="text-gray-300 text-sm">Minimale breedte voorbank (3 personen)</span>
            <span className="text-white font-bold">min. 135 cm</span>
          </div>
        </div>
        <p className="text-gray-300 text-sm mt-3">De hoofdsteun moet zo ingesteld zijn dat de bovenkant ervan op gelijke hoogte is met de kruin van je hoofd.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Veiligheidsgordel</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Elke zitplaats moet voorzien zijn van een gordel. Zowel bestuurder als passagiers moeten die dragen — altijd <strong>boven</strong> de arm, nooit eronder.
        </p>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 mb-3">
          <p className="text-blue-300 font-semibold mb-2">Vrijgesteld van gordeldracht:</p>
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
            <li>Bestuurder die achteruitrijdt</li>
            <li>Taxibestuurders tijdens het vervoer van klanten</li>
            <li>Postbodes die pakjes van huis tot huis brengen</li>
            <li>Bevoegde personen en hulpdiensten als hun job het vereist</li>
            <li>Personen met een medische vrijstelling</li>
          </ul>
          <p className="text-yellow-300 text-sm mt-2">⚠️ Zwangere vrouwen moeten wél een gordel dragen.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Kinderzitje</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Kinderen jonger dan 18 jaar én kleiner dan 1m35 moeten in een aangepast kinderzitje vervoerd worden.
        </p>
        <div className="space-y-3">
          <div className="bg-red-900/30 border border-red-700 rounded-xl p-4">
            <p className="text-red-300 font-semibold mb-1">Verboden vooraan</p>
            <p className="text-gray-300 text-sm">Kinderen jonger dan 18 jaar mogen niet vooraan in een naar achteren gericht kinderzitje, tenzij er geen voorairbag is of deze uitgeschakeld kan worden.</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Uitzondering</p>
            <p className="text-gray-300 text-sm">Kinderen van 3 jaar of ouder en kleiner dan 1m35 mogen bij een korte uitzonderlijke rit (niet met ouder als bestuurder) een gewone gordel dragen — maar alleen achterin.</p>
          </div>
        </div>
        <div className="bg-yellow-900/30 border border-yellow-700 rounded-xl p-4 mt-3">
          <p className="text-yellow-300 font-semibold mb-1">⚠️ Examentip</p>
          <p className="text-gray-300 text-sm">Een fout antwoord over de gordel bij kinderen kost automatisch 5 punten.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Dode hoek</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Elk voertuig heeft dode hoeken — plaatsen naast of achter het voertuig die niet zichtbaar zijn in de spiegels. Moderne voertuigen hebben soms een dode hoek detectiesysteem (blind spot warning) dat een led-lampje laat branden in de buitenspiegel.
        </p>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
          <p className="text-blue-300 font-semibold mb-1">Lampje brandt?</p>
          <p className="text-gray-300 text-sm">Haal niet in. Wacht tot het lampje uitgaat én kijk zelf ook even over je schouder.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Aanhangwagen</h2>
        <div className="space-y-2">
          <div className="bg-red-900/30 border border-red-700 rounded-xl p-3">
            <p className="text-red-300 text-sm"><strong>Voorlopig rijbewijs:</strong> geen aanhangwagen toegelaten.</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-3">
            <p className="text-gray-300 text-sm"><strong>Definitief rijbewijs B:</strong> aanhangwagen tot 750 kg M.T.M. toegelaten. Zwaarder mag als auto + aanhangwagen samen max. 3.500 kg zijn.</p>
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
                ["Verbodsbord", "Verboden toegang voor voertuigen waarvan de hoogte (lading inbegrepen) groter is dan aangeduid"],
                ["Verbodsbord", "Verboden toegang voor voertuigen waarvan de breedte (lading inbegrepen) groter is dan aangeduid"],
                ["Verbodsbord", "Verboden toegang voor voertuigen waarvan de lengte (lading inbegrepen) groter is dan aangeduid"],
                ["Waarschuwingsbord lading", "Bord achteraan ondeelbare lading die 1 tot 3 meter uitsteekt"],
                ["Verbodsbord", "Verboden toegang voor voertuigen die gevaarlijke goederen vervoeren"],
                ["Verbodsbord", "Verboden toegang voor voertuigen die gevaarlijke ontvlambare of ontplofbare goederen vervoeren"],
                ["Verbodsbord", "Verboden toegang voor voertuigen die gevaarlijke verontreinigende goederen vervoeren"],
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
        <Link href="/theorie/les-9" className="text-gray-400 hover:text-white transition text-sm">← Les 9</Link>
        <Link href="/theorie/les-11" className="text-gray-400 hover:text-white transition text-sm">Les 11 →</Link>
      </div>

    </main>
  )
}