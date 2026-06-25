import Link from 'next/link'

export default function Les1() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-10 max-w-3xl mx-auto">

      <p className="text-sm text-blue-400 uppercase tracking-wide mb-1">Les 1</p>
      <h1 className="text-3xl font-bold mb-2">De openbare weg en de rijbaan</h1>
      <p className="text-gray-400 mb-10">Rijbewijs B — Deel A: De openbare weg</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Wat is een openbare weg?</h2>
        <p className="text-gray-300 leading-relaxed">
          Een openbare weg — zoals een straat, brug, tunnel, pad, plein of autosnelweg — is een plaats waar je vrij met je voertuig mag rijden. Je hoeft aan niemand te verklaren waarom je daar rijdt.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Openbaar terrein</h2>
        <p className="text-gray-300 leading-relaxed">
          Een openbaar terrein, zoals de parking van een restaurant of een tankstation, is een plek waar je normaal gezien enkel komt als je er iets te doen hebt.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Niet-openbaar terrein</h2>
        <p className="text-gray-300 leading-relaxed">
          Op een niet-openbaar terrein — zoals een oefenterrein van een rijschool of een fabrieksparking — mag je enkel rijden als je daarvoor een speciale toelating of vergunning hebt.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Waar geldt het verkeersreglement?</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Het verkeersreglement geldt in principe alleen op de openbare weg. Overtredingen daar leiden tot een bekeuring.
        </p>
        <p className="text-gray-300 leading-relaxed mb-3">
          Maar ook op openbare en niet-openbare terreinen ben je niet straffeloos: zware inbreuken kunnen alsnog beboet of strafrechtelijk vervolgd worden.
        </p>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 mb-3">
          <p className="text-yellow-300 font-semibold mb-1">⚠️ Privatewegen</p>
          <p className="text-gray-300 text-sm">Wegen met het bord "privaat" zijn geen openbare wegen. Het verkeersreglement geldt er niet — tenzij de privéweg toch voor iedereen toegankelijk is.</p>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
          <p className="text-blue-300 font-semibold mb-1">🚃 Trambestuurders</p>
          <p className="text-gray-300 text-sm">Trambestuurders op de openbare weg hoeven de verkeersregels niet te volgen. Ze moeten enkel de bevelen van bevoegde personen en de verkeerslichten respecteren. Een tram heeft altijd voorrang.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Onderdelen van de openbare weg</h2>
        <p className="text-gray-300 leading-relaxed">
          De openbare weg is meer dan alleen het deel waarop auto's rijden. Ook het fietspad, de berm en het voetpad horen erbij. De openbare weg loopt tot aan een gracht of een privé-eigendom.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">De rijbaan</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          De rijbaan is het verharde deel van de openbare weg, bestemd voor voertuigen zoals auto's, autobussen, motorfietsen en tractors.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>Zonder fietspad mogen ook tweewielige bromfietsen en fietsers op de rijbaan rijden.</li>
          <li>Zonder berm of voetpad mogen voetgangers ook de rijbaan gebruiken.</li>
          <li>Een dunne witte streep op de rand geeft enkel de buitenrand aan — verder geen betekenis.</li>
          <li>Een verharde aardeweg blijft een aardeweg — het wordt geen rijbaan.</li>
        </ul>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
          <p className="text-blue-300 font-semibold mb-1">📍 Waar moet je rijden?</p>
          <p className="text-gray-300 text-sm">Bestuurders rijden zo veel mogelijk rechts. In het midden of links rijden zonder reden is een overtreding. Op een weg met gescheiden rijbanen mag je de linker rijbaan niet volgen, tenzij een agent of bord dit toelaat.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Maximumsnelheid op de rijbaan</h2>
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
        <h2 className="text-xl font-semibold text-blue-300 mb-3">De middenrijbaan</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Een middenrijbaan is een centrale rijstrook voor gemotoriseerd verkeer, herkenbaar aan twee evenwijdige witte onderbroken strepen aan weerszijden.
        </p>
        <div className="bg-yellow-900/30 border border-yellow-700 rounded-xl p-4">
          <p className="text-yellow-300 font-semibold mb-1">Let op!</p>
          <p className="text-gray-300 text-sm">Op een middenrijbaan geldt in alle gewesten <strong>70 km/u</strong> — ook in het Waals gewest waar de gewone rijbaan 90 km/u toelaat.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">De zijdelingse strook</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          De zijdelingse strook ligt naast de middenrijbaan maar maakt er geen deel van uit. Met een gewone auto mag je er niet op rijden.
        </p>
        <p className="text-gray-300 mb-2">Wie mag er wel op rijden:</p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Fietsers, speedpedelecs en tweewielige bromfietsen</li>
          <li>Bestuurders van niet-ingespannen trekdieren, last- of rijdieren of vee</li>
        </ul>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 mt-4">
          <p className="text-blue-300 font-semibold mb-1">🐴 Dieren op de rijbaan</p>
          <p className="text-gray-300 text-sm">Nadert een bestuurder dieren op de weg, dan moet hij onmiddellijk vertragen. Steigert een paard, dan moet de bestuurder stoppen en geen plotse bewegingen maken.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Te snel rijden: gevolgen</h2>
        <div className="space-y-3">
          <div className="bg-red-900/30 border border-red-700 rounded-xl p-4">
            <p className="text-red-300 font-semibold mb-1">Rijbewijs B</p>
            <p className="text-gray-300 text-sm">Meer dan 40 km/u boven de toegelaten snelheid → verval van het recht tot sturen voor minimaal 8 dagen tot maximaal 5 jaar.</p>
          </div>
          <div className="bg-red-900/30 border border-red-700 rounded-xl p-4">
            <p className="text-red-300 font-semibold mb-1">Voorlopig rijbewijs B</p>
            <p className="text-gray-300 text-sm">Je zal normaal gezien opnieuw theorie- en praktijkexamen moeten afleggen.</p>
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
                ["Gevaarsbord", "Gevaarlijke bocht naar rechts"],
                ["Gevaarsbord", "Gevaarlijke bocht naar links"],
                ["Gevaarsbord", "Dubbele bocht, eerste naar links"],
                ["Gevaarsbord", "Dubbele bocht, eerste naar rechts"],
                ["Gevaarsbord", "Gevaarlijke daling"],
                ["Gevaarsbord", "Steile helling"],
                ["Gevaarsbord", "Vallende stenen"],
                ["Gevaarsbord", "Kiezelprojectie"],
                ["Gevaarsbord", "Rijbaanversmalling"],
                ["Gevaarsbord", "Rijbaanversmalling langs links"],
                ["Gevaarsbord", "Rijbaanversmalling langs rechts"],
                ["Gevaarsbord", "Hobbelige weg"],
                ["Gevaarsbord", "Verhoogde inrichting(en)"],
                ["Gevaarsbord", "Beweegbare brug"],
                ["Gevaarsbord", "Uitweg op een kaai of oever"],
                ["Gevaarsbord", "Glibberige rijbaan"],
                ["Gevaarsbord", "Glibberige rijbaan door sneeuw of ijzel"],
                ["Gevaarsbord", "Werken"],
                ["Gevaarsbord", "Overtocht van vliegtuigen op geringe hoogte"],
                ["Gevaarsbord", "Zijwind"],
                ["Gevaarsbord", "Doortocht van vee"],
                ["Gevaarsbord", "Doortocht van groot wild"],
                ["Gevaarsbord", "Algemeen gevaar"],
                ["Gevaarsbord", "Spoorovergang in de rijbaan"],
                ["Gevaarsbord", "File"],
                ["Aanwijzingsbord", "Doodlopende weg"],
                ["Aanwijzingsbord", "Doodlopende weg — uitgezonderd fietsers en voetgangers"],
                ["Aanwijzingsbord", "N-weg: gewone weg"],
              ].map(([soort, betekenis], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-gray-900" : "bg-gray-800/50"}>
                  <td className="px-4 py-2 border border-gray-700 text-blue-300">{soort}</td>
                  <td className="px-4 py-2 border border-gray-700">{betekenis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 mt-4">
          <p className="text-gray-300 text-sm">⚠️ Gevaarsborden staan normaal <strong>150 meter</strong> voor het gevaar. Een blauw onderbord kan een andere afstand of zone aangeven.</p>
        </div>
      </section>

      <div className="flex justify-between items-center pt-6 border-t border-gray-800">
        <Link href="/" className="text-gray-400 hover:text-white transition text-sm">← Terug naar home</Link>
        <Link href="/theorie/les-2" className="text-gray-400 hover:text-white transition text-sm">Les 2 →</Link>
      </div>

    </main>
  )
}