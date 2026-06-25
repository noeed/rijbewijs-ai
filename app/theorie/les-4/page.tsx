import Link from 'next/link'

export default function Les4() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-10 max-w-3xl mx-auto">

      <p className="text-sm text-blue-400 uppercase tracking-wide mb-1">Les 4</p>
      <h1 className="text-3xl font-bold mb-2">Autosnelweg, oprit, afrit, pechstrook en spitsstrook</h1>
      <p className="text-gray-400 mb-10">Rijbewijs B — Deel A: De openbare weg</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Wat is een autosnelweg?</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Een autosnelweg is een openbare weg zonder verkeerslichten of voorrangskruispunten. Het begin wordt aangeduid door een aanwijzingsbord, het einde ook.
        </p>
        <div className="bg-red-900/30 border border-red-700 rounded-xl p-4">
          <p className="text-red-300 font-semibold mb-2">Niet toegelaten op de autosnelweg:</p>
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
            <li>Bromfietsen</li>
            <li>Landbouwvoertuigen</li>
            <li>Vierwielers zonder passagiersruimte</li>
            <li>Slepen van kermisvoertuigen</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Snelheid op de autosnelweg</h2>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gray-800 rounded-xl p-4 text-center">
            <p className="text-white font-bold text-2xl">120</p>
            <p className="text-gray-400 text-sm">km/u maximum</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 text-center">
            <p className="text-white font-bold text-2xl">70</p>
            <p className="text-gray-400 text-sm">km/u minimum</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="bg-yellow-900/30 border border-yellow-700 rounded-xl p-4">
            <p className="text-yellow-300 font-semibold mb-1">⚠️ Smog</p>
            <p className="text-gray-300 text-sm">Bij smog kan tijdelijk een maximumsnelheid van 90 km/u worden opgelegd via elektronische borden of een bord C43 met onderbord SMOG.</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Spijkerbanden</p>
            <p className="text-gray-300 text-sm">Toegelaten van 1 november tot en met 31 maart op voertuigen tot 3,5 ton. Op autosnelwegen en wegen met 2x2 rijstroken: max. 90 km/u. Op gewone wegen: max. 60 km/u.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Te snel rijden: gevolgen</h2>
        <div className="space-y-3">
          <div className="bg-red-900/30 border border-red-700 rounded-xl p-4">
            <p className="text-red-300 font-semibold mb-2">Onmiddellijke intrekking door de POLITIE</p>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
              <span>Autosnelweg</span><span className="font-bold">+30 km/u</span>
              <span>Gewone weg</span><span className="font-bold">+30 km/u</span>
              <span>Bebouwde kom</span><span className="font-bold">+20 km/u</span>
              <span>Zone 30</span><span className="font-bold">+20 km/u</span>
              <span>Woonerf</span><span className="font-bold">+20 km/u</span>
            </div>
          </div>
          <div className="bg-red-900/30 border border-red-700 rounded-xl p-4">
            <p className="text-red-300 font-semibold mb-2">Vervallenverklaring door de RECHTER (min. 8 dagen tot max. 5 jaar)</p>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
              <span>Autosnelweg</span><span className="font-bold">+40 km/u</span>
              <span>Gewone weg</span><span className="font-bold">+40 km/u</span>
              <span>Bebouwde kom</span><span className="font-bold">+30 km/u</span>
              <span>Zone 30</span><span className="font-bold">+30 km/u</span>
              <span>Woonerf</span><span className="font-bold">+30 km/u</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">De pechstrook</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          De pechstrook ligt naast de rechterrijstrook, afgebakend door een dikke witte doorlopende streep.
        </p>
        <div className="bg-red-900/30 border border-red-700 rounded-xl p-4 mb-3">
          <p className="text-red-300 font-semibold mb-2">Op de pechstrook mag je niet:</p>
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
            <li>Rijden</li>
            <li>Stilstaan</li>
            <li>Parkeren (ook niet om een kaart te bekijken of je gsm te gebruiken)</li>
          </ul>
        </div>
        <p className="text-gray-300 text-sm mb-3">De pechstrook mag enkel gebruikt worden bij pech of een ongeval. Wacht achter de vangrails op de hulpdiensten.</p>
        <div className="space-y-3">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">🔺 Gevarendriehoek</p>
            <p className="text-gray-300 text-sm">Op de autosnelweg: minstens <strong>100 meter</strong> voor je auto plaatsen. Op gewone wegen: minstens 30 meter. Altijd zichtbaar vanop 50 meter.</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">🦺 Fluojasje</p>
            <p className="text-gray-300 text-sm">De bestuurder moet een fluojasje dragen zodra hij uitstapt. Passagiers moeten dat niet, maar doen het best ook. Het jasje moet verplicht in de auto aanwezig zijn.</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">📞 Alarmnummer</p>
            <p className="text-gray-300 text-sm">Bel het internationaal alarmnummer <strong>112</strong>.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Reddingsstrook</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Bij file moeten bestuurders preventief een reddingsstrook vormen voor hulpdiensten — nog voor het verkeer stilstaat.
        </p>
        <div className="space-y-2">
          <div className="bg-gray-800 rounded-xl p-3 flex gap-3">
            <span className="text-blue-400 font-bold">2 rijstroken</span>
            <p className="text-gray-300 text-sm">Reddingsstrook tussen linker en rechterrijstrook</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-3 flex gap-3">
            <span className="text-blue-400 font-bold">3 rijstroken</span>
            <p className="text-gray-300 text-sm">Reddingsstrook tussen linker en middenrijstrook</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Spookrijders</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Een spookrijder rijdt in de verkeerde richting op de autosnelweg. Bij een ontmoeting:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Rij op de <strong>rechterrijstrook</strong> (in uiterste nood de pechstrook)</li>
          <li>Knipperlichter pas wanneer je de spookrijder kruist — niet eerder</li>
          <li>Meld de spookrijder aan de politie</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">De spitsstrook</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Een spitsstrook is een extra rijstrook die niet altijd mag gebruikt worden. Een lange witte streeplijn (10m strepen, 2,5m tussenruimte) scheidt ze van de gewone rijstroken.
        </p>
        <div className="space-y-2">
          <div className="bg-green-900/30 border border-green-700 rounded-xl p-3">
            <p className="text-green-300 text-sm">🟢 <strong>Groene pijl</strong> boven de strook → je mag erop rijden</p>
          </div>
          <div className="bg-red-900/30 border border-red-700 rounded-xl p-3">
            <p className="text-red-300 text-sm">🔴 <strong>Rood kruis</strong> boven de strook → je mag er niet op rijden</p>
          </div>
        </div>
        <p className="text-gray-300 text-sm mt-3">Bij pech op de spitsstrook: rij door tot een vluchthaven naast de spitsstrook.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Inhalen op de autosnelweg</h2>
        <div className="space-y-3">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Altijd links inhalen</p>
            <p className="text-gray-300 text-sm">Rechts inhalen is een zware overtreding. Bij file en druk verkeer geldt dit niet als inhalen.</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">🏍️ Motorfietsen bij file</p>
            <p className="text-gray-300 text-sm">Mogen tussen de twee linkse rijstroken rijden, max. 20 km/u sneller dan het andere verkeer en max. 50 km/u.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Invoegstrook en afrit</h2>
        <div className="space-y-3">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Invoegstrook</p>
            <p className="text-gray-300 text-sm">Versnel tot je even snel rijdt als het verkeer op de rechterrijstrook. Verleen voorrang aan bestuurders al op de snelweg. Niet ritsen bij invoegen.</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Afrit</p>
            <p className="text-gray-300 text-sm">Rij de afrit zo vroeg mogelijk op. Rem pas af als je op de afrit rijdt — niet nog op de rijstrook.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Verboden op de autosnelweg</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Parkeren op de rijstrook of pechstrook (ook niet op oprit of afrit)</li>
          <li>Over de dwarsverbinding of middenberm rijden</li>
          <li>Achteruitrijden</li>
          <li>Spookrijden</li>
          <li>Slepen met noodkoppeling</li>
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
                ["Aanwijzingsbord", "Begin of oprit van een autosnelweg"],
                ["Aanwijzingsbord", "Einde of afrit van een autosnelweg"],
                ["Aanwijzingsbord", "Twee linkerrijstroken max. 90 km/u — rechterrijstrook max. 70 km/u"],
                ["Aanwijzingsbord", "1500m verder: twee linkerrijstroken max. 90 km/u — rechterrijstrook max. 70 km/u"],
                ["Verbodsbord", "Maximaal toegelaten snelheid op de afrit: 90 km/u"],
                ["Aanwijzingsbord", "Nummer van een internationale weg"],
                ["Aanwijzingsbord", "Nummer van een ring"],
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
        <Link href="/theorie/les-3" className="text-gray-400 hover:text-white transition text-sm">← Les 3</Link>
        <Link href="/theorie/les-5" className="text-gray-400 hover:text-white transition text-sm">Les 5 →</Link>
      </div>

    </main>
  )
}