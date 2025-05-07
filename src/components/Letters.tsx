import React, { useState } from 'react';
import { Mail, X } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import Franscekabrief from '../assets/letters/Franscekabrief.png';
import Moniquevgbrief from '../assets/letters/Moniquevgbrief.png';
import Nancybrief from '../assets/letters/Nancybrief.png';
import Petulabrief from '../assets/letters/Petulabrief.png';
import Tonibrief from '../assets/letters/ToniBrief.png';

export const Letters = () => {
  const [selectedLetter, setSelectedLetter] = useState<number | null>(null);

  const letters = [
    {
      id: 1,
      sender: 'Lieve Vriendin',
      preview: 'Hierboven een woorden wolk waarin ik de voor mijn meest sprekende karaktereigenschappen van jou heb proberen te vangen.',
      content:
        'Lieve vriendin,\n\n Hierboven een woorden wolk waarin ik de voor mijn meest sprekende karaktereigenschappen van jou heb proberen te vangen. Je bent een geweldig mens! We kunnen lekker kletsen en lachen maar ook elkaar troosten en inspireren want we hebben veel overeenkomsten. \n Zo is onze gezamenlijke liefde voor de zee nu nog meer versterkt door je prachtige aankoop in Rockanje. Zo stoer dat je dat gedaan hebt! En zo mooi om te zien en horen hoeveel rust en plezier het je nu al brengt. Relaxed genieten van niks moeten, hapje, drankje en een prachtige omgeving en chalet. Helemaal passend bij je 60e!!\n En daar bedoel ik nadrukkelijk niks oubolligs mee. Want ingedut en saai ben je absoluut niet en zal je ook nooit worden. Jij blijft altijd je lieve, gezellige, energieke, sprankelende zelf.\n In vrijwel alle fases van je leven heb ik je meegemaakt. Ik was nog een kind toen je als vriendin van mijn zus vaak bij ons thuis kwam. 33 jaar terug kwam meteen onze eigen klik toen we elkaar weer ontmoette via onze mannen. De geboorte van de kinderen en vele gezamenlijke gezellige familie uitstapjes deelde we. Later het lief en leed van de scheiding. Gevolgd door de mooie avonturen in ons vrijgezelle bestaan. Dit alles leerde ons veel over onszelf en onze gewenste toekomst. \n Bezegeld door een fijn nieuw leven met een geweldige liefde, die perfect past bij de mensen die we inmiddels zijn. Ik vind het heel mooi en kostbaar dat we dit alles met elkaar hebben meegemaakt en nog zo vaak het leven samen kunnen vieren. Ik ben enorm trots op jou en heel dankbaar voor onze vriendschap. Op naar de volgende 33 jaar!! Van harte gefeliciteerd met je 60e verjaardag!!\n\n Liefs Moniqie,\n Ook namens Job.',
      image: Moniquevgbrief
    },
    {
      id: 2,
      sender: 'Jolanda en Harry',
      preview: 'lk leerde Conchita kennen op de lagere school in de 3 de klas ...',
      content:
        "Conchita,\n\n lk leerde Conchita kennen op de lagere school in de 3 de klas ( nu zou dat groep 5 zijn ). Het was een spannende dag want in ons kleine dorpje kregen we nooit nieuwe kinderen in de klas en nu op 1 dag 2 meisjes Conchita was er een van. Toen ik Conchita zag was ik onder de indruk zo'n mooie meid echt een plaatje. Al gauw werd ze in ons vriendinnengroep opgenomen. En ik was stiekem wel trots dat ik zo'n mooie vriendin had. Zelf had ze dat helemaal niet in de gaten. Ze was erg verlegen en als iemand iets tegen haar zei, die ze niet goed kende, dan moest ze erg blozen ze bloosde sowieso erg snel. Wat ze zelf vreselijk vond. We hebben veel gedaan met ons groepje gedanst touwtje gesprongen spelletjes gedaan gefietst gekletst en heel veel keer brotherhood of men geïmiteerd en geplaybackt. We hebben zelfs nog bij elkaar gewerkt bij Bally een exclusieve schoenenwinkel in de binnenstad We zijn samen opgegroeid en deelde alles met elkaar ook toen onze interesse meer naar de jongens gingen we hadden het over wie in de smaak vielen en hadden het over de eerste echte kus. Na wat rond gekeken te hebben en na wat jongens uit het dorp en een Frans vakantievriendje kwam Mark in beeld. Al vroeg waren jullie een stel. Altijd was het gezellig en als we een feestje hadden bij Conchita wisten we dat we van tevoren niets moesten eten. Want er staat altijd zoveel lekkers dat je alles wilde proeven. Niet te vergeten de inktvis op Spaanse wijze en de heerlijke champignons. En niet alleen het eten maakte de feestjes leuk. Tot diep in de nacht hebben we gefeest gelachen tot we in ons broek deden. Net als de keer dat we op meidenkamp gingen gebeurde het regelmatig dat iemand het in zijn broek deed van het lachen. Soms was dat erg gênant want had je een broek van je vriendin aan die je nat pieste. Heel veel feestjes, vakanties, oud en nieuw eerst zonder daarna met kinderen. Of gewoon borrelen het was altijd gezellig. We zijn allemaal Bourgondiërs dus dat komt goed uit. Maar ook ons verdriet deelde we met elkaar we verloren een jaar na elkaar mijn moeder en haar vader op jonge leeftijd dat was heftig . Maar ook daar hadden we steun aan elkaar soms zonder iets te zeggen. Na een verdrietige periode van de scheiding heeft Conchita haar geluk weer gevonden. En is ze heel gelukkig met Richard een man met een hart van goud. En die het niet vervelend vindt dat Conchita heerlijk kan koken en bakken. Samen met beide gezinnen zijn ze helemaal gelukkig en wonen ze sinds vorig jaar op een prachtige plek vlak bij de binnenstad. Zo fijn om te zien hoe gelukkig dat ze weer is. Nu is ze alweer 60 al zou je dat niet zeggen ze nog steeds die mooie vriendin waar ik zo trots op ben. En niet alleen haar uiterlijk ook haar innerlijk. Zo zorgzaam altijd voor haar familie haar moeder die ze altijd liefdevol verzorgd heeft. Haar zus , kinderen en iedereen die het nodig heeft . En soms spreken we elkaar een aantal weken niet maar als we elkaar weer zien is het altijd goed want mochten we elkaar nodig hebben weten we van elkaar dat we er zullen zijn. Conchita je bent een schat en wens jou met Richard de kinderen en iedereen die je lief hebt nog een lange en mooie toekomst.\n\n Love you en dank je wel voor je trouwe vriendschap.\n\n Liefs Jolanda en Harry",
      image: null
    },
    {
      id: 3,
      sender: 'Fransceska, Paola en Ieke',
      preview: 'Conchita heeft vele clubjes waarmee ze gezellige weekendjes, dagjes of etentjes heeft, zo ook met ons...',
      content:
        "Conchita heeft vele clubjes waarmee ze gezellige weekendjes, dagjes of etentjes heeft, zo ook met ons.\n\n Conchita, Paola, Franceska en Ieke gaan zo al jaren, rond de 20 jaar schat ik, een dagje winkelen . We gaan twee keer per jaar, in juni en januari, als de uitverkoop begint, veelal in Antwerpen shoppen. Er wordt koffie en thee gedronken, heerlijk geluncht en natuurlijk sluiten we de dag af met een diner, immers eten en drinken is net zo belangrijk, of misschien wel belangrijker, dan het shoppen. We hebben steevast tijd te kort op zo'n dag, dus om 18:00 uur nog rennen voor de laatste aankopen. Ondanks dat we elkaar maar twee keer per jaar zin of misschien juist daarom, wordt er over van alles en nog wat gekletst, nou is dat met Conchita erbij ook veelal geen enkel probleem.\n\n Onze laatste shopdag was onlangs en Oisterwijk, want er moest een feest outfit gekocht worden. Het werd een gouden plaatje, we zijn benieuwd wat jullie ervan vinden \n\n Voor ons zeker dagen om te koesteren en hopelijk zetten we deze traditie nog jaren voort.\n\n Liefs, Franceska, Paola en Ieke.",
      image: Franscekabrief
    },
    {
      id: 4,
      sender: 'Lieve nicht (Petula)',
      preview: 'Mijn grote, knappe nicht… Geweldig vond ik het vroeger als je kwam oppassen...',
      content:
        "Mijn grote, knappe nicht… Geweldig vond ik het vroeger als je kwam oppassen. Ik volgde elke stap en het liefst deed ik je ook continue na. Ik wilde zijn zoals jij. Als jullie naar Spanje waren, mochten wij logeren bij opa en oma in jullie huis. Natuurlijk wilde ik dan het liefst in jouw slaapkamer slapen 😊. En in jouw hotel zijn de kamers nog steeds top!\n\n Jaren later hielp je me aan mijn bijbaantjes. Met als kers op de taart je collega bij Randstad. Dat was natuurlijk helemaal geweldig! Dus zoek je een baan? Ik kan zeker deze werkgever aanbevelen!\n\n En de volgende vestiging van Hotel Conchiet wordt ongetwijfeld in Nerja! Een plek waar we allebei hele fijne herinneringen aan hebben. Zo leuk dat jullie ons kwamen op zoeken toen jullie in de buurt waren. Heerlijk samen geluncht!\n\n Lieve nicht, nog heel veel liefdevolle, gezellige en gezonde jaren toegewenst. Fijn dat we familie zijn! ",
      image: Petulabrief
    },
    {      
        id: 5,
        sender: 'Rob, Nancy, Suze & Julie',
        preview: 'The clouds have gone away...',
        content:"The clouds have gone away\n To start a brighter day\n We have waited for too long\n It's time to let it out\n You know what it's about\n I've waited all to feel the sun\n The harder it gets, the faster we seem to fall in love\n The deeper we fall, the more we lose control\n Set your mind free, it's the Year of Summer\n 60 jaar... het jaar van de zomer!\n\n Wat een kippenvel steeds als we met de hele familie luidkeels staan mee te zingen. Niet meer gewoon een liedje, maar vooral een symbool voor onze familieband. We zijn er voor elkaar als er gezongen kan worden, ook als het leven ons even wat minder toelacht. Maar vandaag proosten we met elkaar! En daar is onze Bourgondische familie stiekem heel erg goed in 😀 \n\n Geniet van de lieve mensen om je heen. Geniet van het leven. Geniet met volle teugen! En wij zingen, borrelen en genieten heel graag met jullie mee \n\n Veel liefs, \n Rob, Nancy, Suze & Julie",
        image: Nancybrief
    },
    {      
        id: 6,
        sender: 'Erik',
        preview: 'Toch zijn er twee momenten die ik graag met je deel...',
        content:"Hi Sietske,\n\n Wat leuk dat je vraagt naar herinneringen aan Conchita! Ik denk er met een grote glimlach aan terug, al zijn het vooral de sfeer en de gezelligheid die me bijblijven. Toch zijn er twee momenten die ik graag met je deel.\n\n Ruim veertig jaar geleden- nog voordat Phil in beeld was en Marika geen idee had wie René Vreugdenhil was – kwamen we regelmatig bij elkaar. En altijd stond daar Conchita’s beroemde mosselen met pittige tomatensaus op tafel. In die tijd was dat echt een culinaire belevenis; de friettent was voor de meesten het hoogst haalbare, dus voor Spaans eten moest je goed zoeken. Maar als wij samen waren, waanden we ons even in het zonnige zuiden. Je likte je vingers erbij af!\n\n Dan is er die onvergetelijke duiktrip in de jaren tachtig naar Portugal. We verbleven in een prachtig hotel aan de baai Concha Azul in São Martinho do Porto. Met mede duikclub vrienden op één verdieping, maar ieder een eigen kamer. ’s Ochtends aan het ontbijt hing er direct een mysterieuze spanning: wat was er vannacht toch allemaal gebeurd? De wildste verhalen deden de ronde – van inbraken, ongelukken tot paranormale verschijnselen. Totdat Mark, met zijn gebruikelijke nuchterheid, opbiechtte dat het gewoon Conchita was geweest, die midden in de nacht begon te schreeuwen. Of Mark daar misschien een handje bij had geholpen? Hij bleef het stellig ontkennen, maar de lachsalvo’s aan tafel waren niet van de lucht.\n\n Eén minder leuke herinnering heb ik ook, al kan ik er inmiddels om lachen. Tijdens een feest aan de Maastrichtseweg - ik weet niet eens meer wie er jarig was - viel het precies samen met een Formule 1-race. Voor voetbalfans mocht de tv altijd aan, dus ik ging ervan uit dat dat nu ook wel kon. Maar Conchita hield voet bij stuk: geen race op haar feestje. Na wat aandringen heb ik de handdoek in de ring gegooid, ben naar huis gereden om de race te kijken, en later gewoon weer teruggekomen. Uiteindelijk is het natuurlijk helemaal goed gekomen tussen ons.\n\n Kortom, Conchita staat voor mij symbool voor warmte, gezelligheid en een tikje eigenwijsheid - en dat alles overgoten met een heerlijke saus van vriendschap en lekker eten!",
        image: null
    },
    {      
        id: 7,
        sender: 'Monique, Coby & Rick',
        preview: 'Van ❤️ Gefeliciteerd met je 60e verjaardag!!...',
        content:"Lieve Conchita,\n\n Van ❤️ Gefeliciteerd met je 60e verjaardag!! \n Wat hebben wij het altijd leuk met jou erbij.\n Altijd gezellig samen Carnaval vieren met jou en de familie.\n Jij bent lief, zorgzaam en heel gastvrij voor iedereen.\n  Wij gaan er een supermooi feestje van maken!\n Samen proosten op jou en op het leven 🍾🥂💃🕺\n Dat we nog maar veel feestjes en Carnaval samen mogen vieren!! 🫶\n\n Veel liefs,\n\n Coby, Monique en Rick",
        image: null
    },
    {      
        id: 8,
        sender: 'Lieve kookvriendin, (Monique van Rooij)',
        preview: 'We gaan samen al een tijdje terug...',
        content:"Lieve kookvriendin,\n\n Van harte gefeliciteerd met je 60e verjaardag🥳🥳🥳 We gaan samen al een tijdje terug, we hebben elkaar leren kennen bij onze gezamenlijke vriendin Paola, daarna zijn we beide aangesloten bij ons kookclubje de Koesteeg, waar we al behoorlijk wat gezellige en mooie uurtjes met elkaar hebben doorgebracht.\n Jij doet ook bij ons clubje waar je zó goed in bent, het regelen van vanalles en nog wat, daar draai jij je hand niet voor om naast je drukke leventje, of het nu gaat om een datum plannen, een gastkok uitnodigen of recepten zoeken en zelfs de boodschappen doe jij nog even tussendoor.\n Maar naast ons kookclubje hebben we ook veel met elkaar gedeeld bij mij in mijn salon, gelachen en soms ook samen een traantje gelaten maar altijd zeer waardevol! Ik bewonder jou omdat jij altijd alle ballen in de lucht houdt, waar en wanneer dan ook, nu wordt het tijd om misschien wat rustiger aan te doen en samen met Richard lekker te genieten van jullie mooie plekje in de goudenregen straat en jullie tweede mooie plekje aan zee, je hebt het toch allemaal maar mooi gefixt.\n\n Lieve Conchita, weer een jaar wijzer, maar nog steeds jong genoeg om de blits te maken op de dansvloer.\n ik kan helaas niet op je feestje aanwezig zijn, maar jij gaat er zeker van genieten want ook voor een feestje ben jij altijd in, of het nu oeteldonks is of niet!\n Wij gaan snel een datum plannen om samen alsnog een borreltje te drinken op je verjaardag!\n\n Have fun!!💕🍀",
        image: null
    },
    {      
        id: 9,
        sender: 'Nicole Smit',
        preview: 'Waar moet ik beginnen… onze vriendschap al 36 jaar...',
        content:"Lieve Conchita,\n\n Jeetje, 60 jaar! Gefeliciteerd met je verjaardag! 🥳\n\n Waar moet ik beginnen… onze vriendschap al 36 jaar…\n We hebben heel veel lief gedeeld, heel veel drama gedeeld, samen gesport, enorm vaak gelachen, gezellige telefoontjes, wat belde we veel… 🙈, zonvakanties, weekendjes weg, skivakanties, avondjes uit, spelletjesavonden, sauna,sauna avondjes bij jou thuis, stapavonden, gesprekken tot diep in de nacht, oppassen op elkaars kinderen, feestjes overal, oud & nieuw… taarten gebakken, heel veel recepten gedeeld, ( jij hebt er veeeeel meer…😳) lunchafspraken, naar t strand, alles kunnen we met elkaar. Wat bijzonder & wat waardevol.\n Even was er een paar jaar wat stilte, dat hebben we samen ontzettend respectvol weer opgepakt, dat kon ook, omdat we elkaar al zolang lief hadden. En nu is er weer een waardevol samen zijn met elkaar, met Richard & Arnoud.\n We hebben een hele bijzondere spontane nieuwe vriendschap gevonden, in al deze jaren. En weer iedere keer als we elkaar spreken of zien, kunnen we nog steeds niet stoppen met kletsen.\n\n Wat maakt jou uniek:\n * interesse in iedereen\n * de liefde voor Pim & Sietske\n * de liefde voor Richard\n * graag samen zijn met je familie\n * ongelooflijk hard werken\n * heel veel soorten diëten proberen, teveel om op te noemen 😇\n * lekker, niet normaal uitgebreid eten\n * onuitputtelijke gastvrijheid\n * je perfectionisme\n * weet hoe jij t graag wil\n * t zorgen voor mensen & dieren\n * jezelf af & toe voorbij lopen\n * al je zegeningen tellen\n * heel intens, tussen al je verplichtingen door, genieten van alles\n\n Ik denk dat jij vandaag op je 60e enorm blij mag zijn om wie je bent, wat je doet & hoe jij bent.\n Eén ❤️ van goud, onthoudt dat, je bent prachtig! En ben super blij met onze vriendschap. Je bent heel belangrijk voor mij.\n\n Heel veel liefs Nicole & Arnoud💋🥰",
        image: null
    },
    {      
        id: 10,
        sender: 'Paola',
        preview: 'Onze vriendschap is al zolang een geweldige vriendschap...',
        content:"Lieve Conchita, lieve vriendin,\n\n Onze vriendschap is al zolang een geweldige vriendschap. Eigenlijk vanaf het moment dat we naar het Jeroen Bosch College gingen. Van te voren gingen we al wel met elkaar om maar we waren ongeveer de enigen die naar het JBC gingen. Ik weet nog dat we samen Carnaval vierden, ik in papa’s rode pyama en jij had de blauwe. Samen naar de kapper in Rosmalen op de fiets, onze mooie lange krullen eraf. We moesten lachen om elkaar maar eigenlijk stond het huilen ons nader dan het lachen op de terugweg.\n\n En wat waren we blij toen bleek dat Paul en Mark elkaar ook mochten en uiteindelijk ook vrienden voor het leven zijn geworden. De fijne herinneringen aan de vakanties, de eerste met zijn vieren in de Mercedes en travelsleeper naar Spanje toen we 19 waren. \n\n En wat we ook nooit gaan vergeten zijn de etentjes op zondagavond met zijn vieren, eerst bij la Romana, daarna de Tent en dan af en toe de Opera. Heerlijk, geweldige tijden. Maar daarnaast natuurlijk ook onze kookclubjes en jouw geweldige kookkunst met voor mij het hoogtepunt, de tortilla! Jouw Spaanse afkomst komt daarmee volledig tot zijn recht!\n\n We hebben dus heel veel heel mooie herinneringen maar we waren er ook voor je toen de scheiding aandiende. Echt met elkaar zoveel verdriet gehad. Toen probeerde ik je gerust te stellen en heb gezegd dat je er sterker en weer gelukkig uit zou komen. Dat is ook goed gekomen met die lieve Ries aan jouw zijde. Gelukkig klikt het ook daar weer zo goed mee en daarom durf ik ook te zeggen dat onze vriendschap voor eeuwig is!\n\n Bedankt lieve vriendin, voor deze zeker al 50 jaar vriendschap!",
        image: null
    },
    {      
        id: 11,
        sender: 'Toni & Dini',
        preview: 'Ge bent oom geworre,………ons Jes heeft un dochter!! ...',
        content:"“Ge bent oom geworre,………ons Jes heeft un dochter!!” Dat zei mijn moeder op 28 april 1965 toen ze voor de eerste keer 'oma' was geworden.\n\n Het was even wennen die middag, bij mijn zus op het Taxandriaplein. Zij lag daar in bed met een  kind in haar armen. Ik was 12 jaar en mocht toen voor het eerst in m'n leven een baby vasthouden. Ik  durfde zelfs niet meer te bewegen. Mijn moeder zei; “dan ben je vanaf nu voortaan “ome  Tony”….nou dat zag ik toen al niet zo zitten…..gewoon “Tony”, is ook prima!\n In het begin ging ik weleens oppassen als Jessy en Candido weg moesten, maar omdat ik op jonge  leeftijd in een bandje ging spelen, ging dat al snel niet meer.\n\n Toen Conchita 5-jaar was en inmiddels ook haar zusje Marisol was geboren, kreeg ik verkering met Dini, die ook meteen liet weten geen ‘tante’ genoemd te willen worden. Tot op de dag van vandaag zijn we dan ook nog steeds gewoon Tony & Dini. Later was jij vaak de oppas voor onze kinderen. Op die manier kon je mooi alleen zijn met je eerste vriendje. \n\n Vele gezellige feestjes, kerstdagen en oud & nieuw gevierd. Met de hele familie spelletjes doen, veel lachen, maar vooral altijd lekker eten. Gelukkig heeft Conchita die kookkunsten van haar moeder overgenomen en weet ze altijd vele lekkere gerechten op tafel te toveren. \n Gastvrijheid staat bij haar hoog in het vaandel. Hartelijkheid is wat ze uitstraalt en als maar niemand iets te kort komt. Het maken van lekkere dingen is haar passie en voor ons een genot! Als ze ergens voor gaat, gaat ze er ook echt voor! Het openen van een eigen “Taartwinkel” was dan ook een van haar hoogtepunten. \n\n In de loop der jaren hebben we samen met haar zus Marisol, onze eigen dochters en alle wederzijdse partners, een meer dan fantastische familieband opgebouwd. Een band die in de loop der jaren, zeker na het overlijden van Candido en Jessy, alleen maar sterker en hechter is geworden. Mede door de geboorte van Pim, Sietske en nichtje Evi, wordt deze tak van de ‘Femmelie’ gestaag groter. \n\n In die 60-jaar heeft Conchita zeker haar ‘ups en downs’ gehad, maar ze heeft zich er fantastisch doorheen geslagen. Daarom dient dit ‘kroonjaar’ groots gevierd te worden. \n\n Van harte gefeliciteerd lieve nicht, en nog vele jaren van gezondheid, wijsheid en geluk. We  hopen nog vaak van die onvergetelijke momenten met je te mogen beleven en dat wij nog lang  jouw ‘oom & tante’ mogen zijn!",
        image: Tonibrief
    }
  ];

  return (
    <section id="letters" className="py-20 bg-rose-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Lieve Woorden"
          subtitle="Brieven van onze gasten"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {letters.map((letter) => (
            <div
              key={letter.id}
              onClick={() => setSelectedLetter(letter.id)}
              className="bg-white rounded-lg shadow-lg p-6 cursor-pointer transform transition-transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-rose-100 text-rose-600 rounded-full mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {letter.sender}
                </h3>
              </div>
              {letter.image && (
                <div className="mb-4 h-40 overflow-hidden rounded-lg">
                  <img 
                    src={letter.image} 
                    alt={`Foto bij brief van ${letter.sender}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <p className="text-gray-600 line-clamp-2">{letter.preview}</p>
              <p className="text-rose-500 mt-4 text-sm">Klik om te lezen →</p>
            </div>
          ))}
        </div>

        {/* Letter Modal */}
        {selectedLetter && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white p-8 border-b border-gray-200">
                <button
                  onClick={() => setSelectedLetter(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>

                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Van: {letters.find((l) => l.id === selectedLetter)?.sender}
                </h3>
              </div>

              <div className="p-8">
                {letters.find((l) => l.id === selectedLetter)?.image && (
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={letters.find((l) => l.id === selectedLetter)?.image || ''} 
                      alt="Bijgevoegde foto"
                      className="w-full h-auto"
                    />
                  </div>
                )}
                <div className="prose max-w-none">
                  <p className="text-gray-600 whitespace-pre-line">
                    {letters.find((l) => l.id === selectedLetter)?.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};