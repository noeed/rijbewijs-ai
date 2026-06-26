import Link from 'next/link'

export default function Les7() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-10 max-w-3xl mx-auto">

      <p className="text-sm text-blue-400 uppercase tracking-wide mb-1">Les 7</p>
      <h1 className="text-3xl font-bold mb-2">Voetpad en oversteekplaats voor voetgangers</h1>
      <p className="text-gray-400 mb-10">Rijbewijs B — Deel B: De weggebruikers</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Wat zijn weggebruikers?</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Een weggebruiker is elke persoon die gebruik maakt van de openbare weg. Een dier of een voertuig is geen weggebruiker. Weggebruikers zijn voetgangers en bestuurders van voertuigen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Wie zijn voetgangers?</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Een voetganger is iemand die zich te voet op de openbare weg verplaatst. Voetgangers lopen op het trottoir, voetpad of de berm. Is er geen voetpad of berm, dan mogen ze bij voorkeur op het fietspad of anders op de rijbaan.
        </p>
        <p className="text-gray-300 mb-2">Ook voetgangers zijn:</p>
        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mb-4">
          <li>Iemand die een winkelkarretje of kruiwagen voortduwt</li>
          <li>Iemand met een rolstoel of voortbewegingstoestel die stapvoets rijdt</li>
          <li>Iemand die een defecte bromfiets of fiets voortduwt</li>
        </ul>
        <div className="bg-yellow-900/30 border border-yellow-700 rounded-xl p-4">
          <p className="text-yellow-300 font-semibold mb-1">⚠️ Let op</p>
          <p className="text-gray-300 text-sm">Een ruiter of iemand die een paard begeleidt is <strong>geen</strong> voetganger, maar een bestuurder.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Oversteekplaats voor voetgangers (zebrapad)</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Als er binnen 20 meter een zebrapad is, moeten voetgangers dat gebruiken. Een blauw aanwijzingsbord staat bij de oversteekplaats, een rood gevaarsbord staat op ongeveer 150 meter ervoor.
        </p>
        <div className="space-y-3">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Gevleugeld zebrapad</p>
            <p className="text-gray-300 text-sm">Sommige zebrapaden in Vlaanderen zijn 8 tot 9 meter breed (gewone: 3 tot 4 meter). Dit maakt oversteken veiliger en maakt voetgangers beter zichtbaar voor hoger zittende bestuurders.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">3 belangrijke regels bij het zebrapad</h2>
        <div className="space-y-3">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">1. Voorrang</p>
            <p className="text-gray-300 text-sm">Voetgangers die op het zebrapad stappen of het willen gebruiken, moet je <strong>altijd</strong> voorrang geven. Nader een zebrapad altijd voorzichtig.</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">2. Inhalen verboden</p>
            <p className="text-gray-300 text-sm">Je mag nooit een bestuurder inhalen die vertraagt of stopt voor een zebrapad. Dit is een ernstige overtreding.</p>
          </div>
          <div className="bg-red-900/30 border border-red-700 rounded-xl p-4">
            <p className="text-red-300 font-semibold mb-2">3. Stilstaan en parkeren</p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Niet stilstaan of parkeren <strong>op</strong> de oversteekplaats</li>
              <li>Niet parkeren op de rijbaan binnen <strong>5 meter voor</strong> de oversteekplaats</li>
              <li>Voorbij de oversteekplaats mag je wel parkeren en stilstaan</li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-900/30 border border-yellow-700 rounded-xl p-4 mt-3">
          <p className="text-yellow-300 font-semibold mb-1">⚠️ Bij file</p>
          <p className="text-gray-300 text-sm">Stopt de auto voor jou net na de oversteekplaats, dan stop jij <strong>voor</strong> de oversteekplaats — nooit erop.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Geen zebrapad?</h2>
        <p className="text-gray-300 leading-relaxed">
          Een voetganger die oversteekt zonder zebrapad moet zelf voorrang verlenen aan het verkeer. Wees als bestuurder altijd voorzichtig.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Voetgangerszone</h2>
        <p className="text-gray-300 leading-relaxed mb-3">Bestuurders die een voetgangerszone mogen inrijden:</p>
        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
          <li>Moeten stapvoets rijden</li>
          <li>Moeten de doorgang vrijlaten voor voetgangers en indien nodig stoppen</li>
          <li>Mogen voetgangers niet in gevaar brengen of hinderen</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Tram of bus aan halteplaats</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Als een tram of bus stopt op de rijbaan zonder vluchtheuvel, moet de bestuurder aan de kant van de instappende reizigers stoppen, de reizigers de kans geven veilig over te steken, en daarna met matige snelheid vertrekken.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Schoolbus</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Schoolbussen zijn herkenbaar aan een geel bord (min. 0,40m) aan voor- en achterzijde. Dit bord moet verwijderd worden als het voertuig niet voor schoolvervoer gebruikt wordt.
        </p>
        <div className="bg-yellow-900/30 border border-yellow-700 rounded-xl p-4">
          <p className="text-yellow-300 font-semibold mb-1">Hoe reageren?</p>
          <p className="text-gray-300 text-sm">Verminder je snelheid en stop indien nodig wanneer een schoolbus zijn richtingaanwijzer aanzet — kinderen gaan in- of uitstappen.</p>
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
                ["Gevaarsbord", "Plaats waar veel kinderen komen"],
                ["Verbodsbord", "Verboden toegang voor voetgangers"],
                ["Aanwijzingsbord", "Oversteekplaats voor voetgangers"],
                ["Gevaarsbord", "Oversteekplaats voor voetgangers (150m voor de oversteekplaats)"],
                ["Gebodsbord", "Voorbehouden voor voetgangers, fietsers en bromfietsers klasse A"],
                ["Gebodsbord", "Voorbehouden voor voetgangers en fietsers"],
                ["Aanwijzingsbord", "Doodlopende weg voor alle weggebruikers"],
                ["Aanwijzingsbord", "Doodlopende weg — uitgezonderd fietsers en voetgangers"],
                ["Aanwijzingsbord", "Begin voetgangerszone"],
                ["Aanwijzingsbord", "Einde voetgangerszone"],
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
        <Link href="/theorie/les-6" className="text-gray-400 hover:text-white transition text-sm">← Les 6</Link>
        <Link href="/theorie/les-8" className="text-gray-400 hover:text-white transition text-sm">Les 8 →</Link>
      </div>

    </main>
  )
}