import Link from 'next/link'

export default function Les11() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-10 max-w-3xl mx-auto">

      <p className="text-sm text-blue-400 uppercase tracking-wide mb-1">Les 11</p>
      <h1 className="text-3xl font-bold mb-2">Dimlichten, grootlichten en mistlichten</h1>
      <p className="text-gray-400 mb-10">Rijbewijs B — Deel C: De auto</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">De 4 soorten lichten</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { naam: "Dimlichten", info: "Meest gebruikt bij duisternis" },
            { naam: "Grootlichten", info: "Ook wel verstralers genoemd" },
            { naam: "Mistlichten", info: "Voor én achter beschikbaar" },
            { naam: "Standlichten", info: "Geven het minste licht" },
          ].map((l, i) => (
            <div key={i} className="bg-gray-800 rounded-xl p-3">
              <p className="text-blue-300 font-semibold text-sm">{l.naam}</p>
              <p className="text-gray-400 text-xs mt-1">{l.info}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-300 text-sm mt-3">Als de dim- of grootlichten branden, branden tegelijkertijd ook: vooraan de twee standlichten, achteraan twee rode lampen.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Wanneer dim- of grootlichten verplicht?</h2>
        <div className="space-y-2">
          <div className="bg-gray-800 rounded-xl p-3">
            <p className="text-blue-300 font-semibold text-sm mb-1">Bij duisternis</p>
            <p className="text-gray-300 text-sm">Tussen het vallen van de avond en het aanbreken van de dag.</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-3">
            <p className="text-blue-300 font-semibold text-sm mb-1">Overdag — bij zicht minder dan 200 meter</p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Bij regen</li>
              <li>Bij mist</li>
              <li>Bij sneeuwval</li>
              <li>Bij andere omstandigheden (bv. rook)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Wanneer mogen grootlichten NIET branden?</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Als de weg onafgebroken verlicht is zodat je 100 meter kunt zien</li>
          <li>Als je een tegemoetkomende weggebruiker zou verblinden</li>
          <li>Als er dichter dan 50 meter voor jou een auto rijdt die je niet onmiddellijk inhaalt</li>
          <li>Als je een spoorvoertuig of vaartuig nadert</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Mistlichten</h2>
        <div className="space-y-3">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Voorste mistlichten</p>
            <p className="text-gray-300 text-sm">Niet verplicht aanwezig. Mogen gebruikt worden bij mist, regen of sneeuwval — samen met of zonder dimlichten.</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Achterste mistlichten</p>
            <p className="text-gray-300 text-sm">Verplicht aan te zetten bij zichtbaarheid minder dan 100 meter door mist of sneeuwval. Bij hevige regen in België altijd verplicht.</p>
          </div>
          <div className="bg-yellow-900/30 border border-yellow-700 rounded-xl p-4">
            <p className="text-yellow-300 font-semibold mb-1">⚠️ Mistbank</p>
            <p className="text-gray-300 text-sm">Kom je plots in een mistbank? Rem geleidelijk af — druk niet hevig op het rempedaal.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Lichten bij stilstaan en parkeren</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Bij het parkeren op de rijbaan of berm — bij duisternis of zicht onder 200 meter — moeten branden: vooraan één of twee witte/gele standlichten, achteraan één of twee rode lichten.
        </p>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
          <p className="text-blue-300 font-semibold mb-1">Binnen bebouwde kom</p>
          <p className="text-gray-300 text-sm">Standlichten mogen vervangen worden door een parkeerlicht, als het voertuig evenwijdig met de rijbaan staat en er geen aanhangwagen is. Alleen het parkeerlicht aan de kant van de aslijn mag branden.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Vier waarschuwingslichten</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          De vier knipperlichten mogen enkel branden:
        </p>
        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mb-3">
          <li>Als je auto defect is</li>
          <li>Om anderen te waarschuwen voor een ongeval, file of lading op de weg</li>
          <li>Door een schoolbuschauffeur terwijl kinderen in- of uitstappen</li>
        </ul>
        <div className="bg-red-900/30 border border-red-700 rounded-xl p-4">
          <p className="text-red-300 font-semibold mb-1">Foutief gebruik</p>
          <p className="text-gray-300 text-sm">De vier knipperlichten gebruiken om fout te parkeren is een extra overtreding.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Rijden in een tunnel</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          In een tunnel moeten de dimlichten branden (tenzij zichtbaarheid meer dan 200 meter). Zet ook je zonnebril af.
        </p>
        <div className="bg-red-900/30 border border-red-700 rounded-xl p-4">
          <p className="text-red-300 font-semibold mb-1">Brand of rook in tunnel</p>
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
            <li>Parkeer op de rechterrijstrook</li>
            <li>Laat de contactsleutel in het slot</li>
            <li>Verlaat de tunnel zelf via een nooduitgang</li>
            <li>Achteruitrijden of keren is verboden</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">De claxon</h2>
        <div className="space-y-3">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Overdag — binnen en buiten bebouwde kom</p>
            <p className="text-gray-300 text-sm">Enkel om anderen te waarschuwen en een ongeval te voorkomen. Buiten bebouwde kom ook om een in te halen bestuurder te waarschuwen.</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Tussen avond en dag</p>
            <p className="text-gray-300 text-sm">Enkel bij dreigend gevaar. Anders: knipperlichter gebruiken in plaats van claxon.</p>
          </div>
        </div>
      </section>

      <div className="flex justify-between items-center pt-6 border-t border-gray-800">
        <Link href="/theorie/les-10" className="text-gray-400 hover:text-white transition text-sm">← Les 10</Link>
        <span className="text-gray-600 text-sm">Les 12 komt binnenkort</span>
      </div>

    </main>
  )
}