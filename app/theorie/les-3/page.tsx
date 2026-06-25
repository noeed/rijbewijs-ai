import Link from 'next/link'

export default function Les3() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-10 max-w-3xl mx-auto">

      <p className="text-sm text-blue-400 uppercase tracking-wide mb-1">Les 3</p>
      <h1 className="text-3xl font-bold mb-2">Fietspad, fietssuggestiestrook en oversteekplaats voor fietsers</h1>
      <p className="text-gray-400 mb-10">Rijbewijs B — Deel A: De openbare weg</p>

      {/* Fietspad */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Het fietspad</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Een fietspad is een onderdeel van de openbare weg waarop fietsers en bromfietsers klasse A verplicht moeten rijden. Bakfietsen en drie- en vierwielers worden gelijkgesteld met fietsen als ze minder dan 1 meter breed zijn.
        </p>
        <p className="text-gray-300 leading-relaxed mb-3">
          Een fietspad wordt aangeduid door een gebodsbord of door twee evenwijdige onderbroken strepen waartussen geen autoverkeer mogelijk is. Het kan links of rechts van de rijbaan liggen en is soms rood gekleurd — maar dat is niet verplicht.
        </p>
        <div className="bg-red-900/30 border border-red-700 rounded-xl p-4 mb-3">
          <p className="text-red-300 font-semibold mb-1">Verboden voor auto's</p>
          <p className="text-gray-300 text-sm">Het fietspad is geen deel van de rijbaan. Je mag er met een auto niet op rijden, niet stilstaan om een passagier in of uit te laten stappen.</p>
        </div>

        <div className="space-y-3">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Gebodsbord: fietsers + voetgangers naast elkaar</p>
            <p className="text-gray-300 text-sm">Fietsers, bromfietsers klasse A én voetgangers moeten dit deel gebruiken. Bromfietsen klasse B mogen hierop niet rijden.</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Gebodsbord: fietsers + voetgangers onder elkaar</p>
            <p className="text-gray-300 text-sm">Fietsers en voetgangers moeten dit deel gebruiken. Bromfietsen klasse A én klasse B mogen hierop niet rijden.</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Onderbord</p>
            <p className="text-gray-300 text-sm">Een wit onderbord kan aangeven wanneer bromfietsen klasse B verplicht op het fietspad moeten rijden, of wanneer ze er helemaal niet op mogen.</p>
          </div>
        </div>
      </section>

      {/* Mogen fietsers op voetpad */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Mogen fietsers op het voetpad?</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Als er een fietspad is, moet een fietser daarop rijden — tenzij het niet berijdbaar is. Binnen de bebouwde kom is het verboden op het trottoir te fietsen.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Kinderen jonger dan 10 jaar mogen altijd op het trottoir of de verhoogde berm rijden.</li>
          <li>Buiten de bebouwde kom mogen fietsers (kinderen én volwassenen) op het trottoir of verhoogde berm rijden als er geen berijdbaar fietspad is — op voorwaarde dat ze rechts in de rijrichting rijden.</li>
        </ul>
      </section>

      {/* Gelijkgestelden */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Gelijkgestelden aan fietsers</h2>
        <div className="space-y-3">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Niet-gemotoriseerd voortbewegingstoestel</p>
            <p className="text-gray-300 text-sm mb-2">Geen rijwiel, geen motor, voortbewogen door spierkracht. Voorbeelden: handbewogen rolstoel, rolschaatsen, steps, skateboards, éénwielers.</p>
            <p className="text-gray-300 text-sm">Rijden ze sneller dan stapvoets, dan worden ze gelijkgesteld met fietsers.</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Gemotoriseerd voortbewegingstoestel</p>
            <p className="text-gray-300 text-sm">Elk toestel waarmee maximaal 25 km/u kan gereden worden. Voorbeelden: gemotoriseerde steps, elektrische rolstoelen, scootmobielen, segways.</p>
          </div>
        </div>
      </section>

      {/* Oversteekplaats */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Oversteekplaats voor fietsers en bromfietsers</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Twee borden duiden een oversteekplaats aan: een blauw aanwijzingsbord vlakbij de oversteekplaats, en een rood gevaarsbord op ongeveer 150 meter ervoor.
        </p>
        <div className="space-y-3 mb-4">
          <div className="bg-yellow-900/30 border border-yellow-700 rounded-xl p-4">
            <p className="text-yellow-300 font-semibold mb-1">⚠️ Voorrang op de oversteekplaats</p>
            <p className="text-gray-300 text-sm">Een fietser die de oversteekplaats wil oprijden maar er nog niet op staat, heeft geen voorrang. Eenmaal hij op de oversteekplaats staat, heeft hij wel voorrang — je mag hem dan niet omverrijden.</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Nader altijd met voorzichtigheid</p>
            <p className="text-gray-300 text-sm">Bestuurders moeten een oversteekplaats altijd met de nodige voorzichtigheid naderen — een fietser kan op elk moment oprijden.</p>
          </div>
        </div>
        <div className="bg-red-900/30 border border-red-700 rounded-xl p-4 mb-3">
          <p className="text-red-300 font-semibold mb-2">Verboden op en voor de oversteekplaats:</p>
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
            <li>Stilstaan of parkeren <strong>op</strong> de oversteekplaats</li>
            <li>Parkeren op de rijbaan binnen <strong>5 meter voor</strong> de oversteekplaats</li>
            <li>Inhalen van een bestuurder die vertraagt of stopt vóór de oversteekplaats</li>
          </ul>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
          <p className="text-blue-300 font-semibold mb-1">Voorbij de oversteekplaats</p>
          <p className="text-gray-300 text-sm">Na de oversteekplaats mag je wel stilstaan en parkeren, tenzij borden of wegmarkeringen dit verbieden.</p>
        </div>
      </section>

      {/* Fietssuggestiestrook */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Fietssuggestiestrook</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Een fietssuggestiestrook is een gekleurde strook (roze, groen, beige...) op een deel van de rijbaan. Het is <strong>geen fietspad</strong> — er zijn geen twee onderbroken strepen of verkeersborden die een fietspad aangeven.
        </p>
        <div className="bg-yellow-900/30 border border-yellow-700 rounded-xl p-4">
          <p className="text-yellow-300 font-semibold mb-1">Let op!</p>
          <p className="text-gray-300 text-sm">Een fietssuggestiestrook is gewoon een geverfd stuk rijbaan. Je mag er met een auto op rijden, stilstaan en parkeren.</p>
        </div>
      </section>

      {/* Fietspad eindigt */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Wanneer het fietspad eindigt</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Het gevaarsbord voor de oversteekplaats heeft ook een tweede betekenis: het geeft aan dat fietsers of bromfietsers de rijbaan oprijden omdat het fietspad ophoudt.
        </p>
        <div className="space-y-3">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Voorrang voor fietsers</p>
            <p className="text-gray-300 text-sm">Wanneer een fietser de rijbaan oprijdt omdat het fietspad ophoudt, heeft hij voorrang op auto's en motorfietsen op de rijbaan.</p>
          </div>
          <div className="bg-red-900/30 border border-red-700 rounded-xl p-4">
            <p className="text-red-300 font-semibold mb-1">Parkeerverbod</p>
            <p className="text-gray-300 text-sm">Niet stilstaan en niet parkeren op de rijbaan én op de berm, tot 5 meter voor én voorbij de plaats waar het fietspad ophoudt.</p>
          </div>
        </div>
      </section>

      {/* Fietsers in groep */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Fietsers in groep</h2>
        <div className="space-y-3">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Groep van 15 tot 50 deelnemers</p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mt-2">
              <li>Niet verplicht fietspad te volgen</li>
              <li>Mogen met twee naast elkaar op de rijbaan rijden</li>
              <li>Alleen op de rechterrijstrook</li>
              <li>Mogen begeleid worden door 1 begeleidingswagen (voor of achter, op ~30 meter)</li>
            </ul>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <p className="text-blue-300 font-semibold mb-1">Groep van 51 tot 150 deelnemers</p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mt-2">
              <li>Niet verplicht fietspad te volgen</li>
              <li>Mogen met twee naast elkaar rijden</li>
              <li>Verplicht 2 wegkapiteins</li>
              <li>Twee begeleidingswagens (voor en achter, op ~30 meter)</li>
              <li>Blauw bord met verkeersbord A51 en fietssymbool op dak van begeleidingswagens</li>
              <li>Op kruispunten zonder verkeerslichten mag een wegkapitein het dwarsverkeer stilleggen</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fietszone */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-300 mb-3">Fietszone</h2>
        <p className="text-gray-300 leading-relaxed mb-3">
          Een fietszone is een straat waar fietsers de belangrijkste weggebruikers zijn. Motorvoertuigen zijn er wel toegelaten, maar zijn er "te gast".
        </p>
        <div className="grid grid-cols-1 gap-3 mb-4">
          <div className="bg-gray-800 rounded-xl p-4 flex justify-between items-center">
            <span className="text-gray-300">Maximumsnelheid</span>
            <span className="text-white font-bold text-xl">30 km/u</span>
          </div>
        </div>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>Fietsers, speedpedelecs en rijwielen tot 1m breed mogen de volledige rijbaanbreedte gebruiken.</li>
          <li>Op een rijbaan in twee richtingen mogen ze enkel de rechterhelft gebruiken.</li>
          <li>Motorvoertuigen mogen fietsers, steps en gelijkgestelden <strong>niet</strong> inhalen.</li>
          <li>Andere voertuigen (zoals bromfietsen) mogen wel links ingehaald worden, als de maximumsnelheid niet wordt overschreden.</li>
        </ul>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
          <p className="text-blue-300 font-semibold mb-1">Borden</p>
          <p className="text-gray-300 text-sm">Een fietszone begint bij het bord "BEGIN zone" en eindigt bij het bord "EINDE zone".</p>
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
                ["Gebodsbord", "Verplicht fietspad"],
                ["Gebodsbord", "Voorbehouden voor voetgangers, fietsers en bromfietsers klasse A (klasse B niet toegelaten)"],
                ["Gebodsbord", "Voorbehouden voor voetgangers en fietsers (bromfietsen klasse A en B niet toegelaten)"],
                ["Gebodsbord", "Bromfietsers klasse B verplicht op het fietspad"],
                ["Gebodsbord", "Bromfietsers klasse B niet toegelaten op het fietspad"],
                ["Aanwijzingsbord", "Weg voorbehouden voor voetgangers, fietsers en ruiters"],
                ["Verbodsbord", "Verboden toegang voor bestuurders van rijwielen"],
                ["Gevaarsbord", "Oversteekplaats voor fietsers en bromfietsers (150m voor de oversteekplaats) / fietspad houdt op"],
                ["Aanwijzingsbord", "Oversteekplaats voor fietsers en bromfietsers (bij de oversteekplaats)"],
                ["Aanwijzingsbord", "Doodlopende weg voor alle weggebruikers"],
                ["Aanwijzingsbord", "Doodlopende weg — uitgezonderd fietsers en voetgangers"],
                ["Aanwijzingsbord", "Fietsstraat (geschrapt uit wegcode maar borden mogen nog 9 jaar staan)"],
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

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-800">
        <Link href="/theorie/les-2" className="text-gray-400 hover:text-white transition text-sm">← Les 2</Link>
       <Link href="/theorie/les-4" className="text-gray-400 hover:text-white transition text-sm">Les 4 →</Link>
      </div>

    </main>
  )
}