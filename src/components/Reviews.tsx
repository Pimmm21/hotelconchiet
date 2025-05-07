import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import Basfoto from '../assets/reviews/Basreview.jpg';
import Axelfoto from '../assets/reviews/Axelreview.jpg';
import Diannefoto from '../assets/reviews/Diannereview.jpeg';
import Marijkebramfoto from '../assets/reviews/Marijkebramreview.jpg';
import Basekfoto from '../assets/reviews/Basekreview.jpg';
import Everdienfoto from '../assets/reviews/Everdienreview.jpg';
import Theokarinfoto from '../assets/reviews/Theokarinreview.jpg';
import Famfoto from '../assets/reviews/Famreview.jpeg';
import Sanderfoto from '../assets/reviews/Sanderreview.jpg';
import Petrafoto from '../assets/reviews/Petrareview.jpg';
import Chrisfoto from '../assets/reviews/Chrisreview.jpg';
import Louisfoto from '../assets/reviews/Louisreview.png';

export const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Bas Trago",
      relation: "Verkade Zoon",
      comment: " Haar unieke combinatie van voortreffelijk geplaatste humor, tomeloze liefde, onvoorwaardelijke vrolijkheid en oprechte interesse maken van Hotel Conchiet een etablissement dat ik iedereen kan aanraden.",
      fullReview:[
         "Zonder twijfel: Vijf sterren! De afgelopen 20 jaar heb ik het geluk gehad om verschillende vestigingen van 'Hotel Conchiet' te kunnen bezoeken. Eigenares Conchita weet als geen ander hoe ze een diner, overnachting, ontbijt, kopje koffie en/of borrel keer op keer tot een heerlijk festijn om te toveren. Haar unieke combinatie van voortreffelijk geplaatste humor, tomeloze liefde, onvoorwaardelijke vrolijkheid en oprechte interesse maken van Hotel Conchiet een etablissement dat ik iedereen kan aanraden. Ze geeft het gevoel dat de deur altijd open staat. Ik hoop er dan ook nog vele jaren over de vloer te komen."],
      rating: 5,
      image: Basfoto
    },
    {
      id: 2,
      name: "Axel Damen",
      relation: "Bonus Zoon",
      comment: "Conchita, altijd al mijn favoriete moeder van de Verkade-meisjes, liet mij voor één dag ervaren hoe het is om haar zoon te zijn.",
      fullReview: [
        "Het was een zachte zondagochtend in de magie van carnaval, toen de lucht nog net een beetje fris was, de mensen wat minder fris en de straten zich vulden met verwachtingen. Café de Unie diende als verzamelpunt voor de Verkade-groep, een hecht gezelschap van vrienden, moeders en tradities.",
        "Tot dan toe was mijn toegang tot dit kleurrijke gezelschap vooral te danken aan mijn rol als het vriendje van Britt. Een geliefde bijrol, waardoor ik mij zonder veel vragen tussen het vertrouwde moeder-geweld kon voegen, ook al had ik zelf geen moeder in het kringetje van de hechte mama's en hun kroos.",
        "Jarenlang was ik al bevriend met deze knappe zonen, waardoor ik geen onbekende was binnen de groep. Maar dit jaar was anders. Single. Zonder titel. Zonder vanzelfsprekende uitnodiging. Ik twijfelde of ik nog wel een plekje had binnen het warme geheel.",
        "Toch verzamelde ik de moed en stond stipt om 11:11 op de stoep. Als een eenzaam kuikentje tussen trotse hanen werd ik begroet door de jongens, maar de warmte die ik kende, voelde dit jaar wat verder weg.",
        "Tot daar Conchita was.",
        "Haar zoon schitterde dit jaar in afwezigheid, en waar een lege plek viel, opende een vacature voor een ruimte in haar hart. Zonder aarzeling sloot ze mij in haar armen, als alleen een moeder dat kan. Vanaf dat moment was ik niet langer verdwaald, maar gevonden",
        "Conchita, altijd al mijn favoriete moeder van de Verkade-meisjes, liet mij voor één dag ervaren hoe het is om haar zoon te zijn. Ze vertroetelde me met liefde en lachte mijn onzekerheid weg. Ze voorzag me van eten, bier, aandacht: alles wat een twijfelende single op carnavalszondag nodig heeft om zich weer mens te voelen.",
        "Haar warmte was geen toevallige vlaag, maar een constante stroom. Een anker in het Oeteldonkse hossen en gedweil, waar zelfs de meest doorgewinterde Bosschenaar nog weleens de weg kwijt is.",
        "Conchita verdient daarom vijf sterren — niet alleen voor haar grenzeloze gastvrijheid, maar voor haar vanzelfsprekende liefde. Voor het zien van wie even over het hoofd werd gezien. Voor het vullen van een leegte zonder iets terug te vragen.",
        "En bovenal omdat zij, voor mij persoonlijk, altijd mijn reserve moeder zal zijn."],
        rating: 5,
      image: Axelfoto
    },
    {
      id: 3,
      name: "Dianne",
      relation: "Vriendin",
      comment: "Conchita die de lekkerste gerechten op tafel zet! Heb geen favoriet recept, alles is een feestje zo lekker!",
      fullReview: [
        "Wat delen Conchita & ik? Randstad, delen lief & leed, zetten samen de schouders eronder, gezelligheid, wijn en vooral lekker eten. En Conchita die de lekkerste gerechten op tafel zet! Heb geen favoriet recept, alles is een feestje zo lekker!",
        "En nog mooier dat onze mannen hier ook zo van houden!",
        "Het meest bijzondere wat ik nooit vergeet is dat Pim geboren werd. Conchita belde naar Randstad, Rox nam de telefoon op en schreeuwde door het hele kantoor: 'WE HEBBEN EEN ZOON'"
      ],
      rating: 5,
      image: Diannefoto
    },
    {
      id: 4,
      name: "Marijke & Bram",
      relation: "Verkade familie",
      comment: "Conchita, je bent betrokken, een doorzetter en altijd benaderbaar! En je kunt koken als de beste! Niets  is jou te veel!",
      fullReview: [
        "We leerden elkaar kennen door de vriendschap van onze jongens. Die speelden bij elkaar en zodoende raakten we aan de praat. Onze poes Sammie kreeg jongen en jij wilde ook wel een kitten. Met de Verkade meisjes en jongens maken we mooie herinneringen, zeker al 24 jaar! Soms mogen de mannen er ook bij zijn ;}",
        "Conchita, je bent betrokken, een doorzetter en altijd benaderbaar! En je kunt koken als de beste! Niets  is jou te veel! Bas, Bram en ik wensen je nog vele mooie jaren met je gezin, familie en vrienden!"
      ],
      rating: 5,
      image: Marijkebramfoto
    },
    {
      id: 5,
      name: "Bas van Ek",
      relation: "Verkade Zoon",
      comment: " Mijn favoriete dag was dan ook de woensdag, niet alleen omdat school dan maar tot 13u duurde, maar ook omdat Tante Conchita weer satékroketjes ging maken voor de Verkade jongens",
      fullReview: [
        "Doordat ik Pim al vroeg leerde kennen in groep ½, had ik ook al snel het geluk dat ik jou tante mocht noemen. Vaak stond tijdens de prachtige Aquamarijn periode de deur bij jullie ook altijd open. Mijn favoriete dag was dan ook de woensdag, niet alleen omdat school dan maar tot 13u duurde, maar ook omdat Tante Conchita weer satékroketjes ging maken voor de Verkade jongens. 13:30 uur zaten we dan bij jou aan tafel bij op de Tweeberg. We vraten onszelf helemaal vol om uiteindelijk met een veel te volle maag op de trampoline te gaan springen.",
        "Wat me meteen brengt naar de laatste schooldag van Groep 8. Het afscheid van de Verkade jongens, Natuurlijk was dat weer bij jullie thuis, en alle families waren daar, weer iets wat tante Conchita allemaal goed geregeld had. Echter, stonden Verkade jongens, Hintham en trampolines gelijk aan veel kattenkwaad en gingen wij op boevenpad. Wat eindigde in raketijsjes bij de karpers van de buren, rosébiertjes die stiekem opgedronken worden werden en vele wc-rollen en kliko's die door de straten werden gebonjourd. Zeker geen fijne avond voor jou, maar ja zonder jou hadden we deze herinneringen nooit gehad. En kijk eens waar we allemaal zijn terechtgekomen ;). Je bent een top tante Conchita! Ik kan niet wachten op je recepten voor bij het volgende moeder zonen weekend!",
        "PS: Ik wacht nog steeds op het recept van de Ravioli met Salieboter"
      ],
      rating: 5,
      image: Basekfoto
    },
    {
      id: 6,
      name: "Everdien",
      relation: "Vriendin",
      comment: "Je bent al een vijf uit vijfsterrenvriendin vanaf het moment dat we veertig jaar geleden met elkaar aan de HEAO begonnen.",
      fullReview: [
        "Je bent al een vijf uit vijfsterrenvriendin vanaf het moment dat we veertig jaar geleden met elkaar aan de HEAO begonnen.",
        "In de pauze thee drinken en voor feesten eten en logeren op de Koningsweg. Je spaghetti Bolognese van toen maak ik nog steeds: met chilipepertjes en geklutste eieren erdoor.",
        "Samen in de feestcommissie. Feesten in King's Cross en als hoogtepunt 350 glazen sangria naar jouw recept voor een Spaans feest in de werfkelder van Hotel Central. ",
        "Goede tijden, slechte tijden: eten en gezelligheid helpt. Van vrijgezellenfeest tot verhuizing, van overlijdens van dierbaren tot overgang: bij diepe tegenslagen laat je je niet uit het veld slaan en ga je op zoek naar het positieve, en blijf je belangstelling houden en zorgen voor anderen.",
        "Na het afstuderen wellnessuitjes en door het hele land en met Hedwig erbij winkelweekenden en etentjes in alle delen van het land: van Amsterdam tot Maastricht. Altijd gezellig en in het teken van culinaire uitspattingen. Kijk al uit naar het vieren van ons vriendschapsjubileum in Rockanje."
      ],
      rating: 5,
      image: Everdienfoto
    },
    {
      id: 7,
      name: "Theo & Karin",
      relation: "Vrienden",
      comment: "Een ontmoeting met Conchita is altijd veel klets, veel lachen, openheid en het delen van lief en leed met elkaar.",
      fullReview: [
        "Een van onze oudste vrienden !",
        "Al 33 jaar lang (!) hebben we een eet-clubje met 3 stellen waar Conchita altijd aanwezig was. De samenstelling van de 6 mensen in het clubje is licht veranderd, maar Conchita was er altijd en had ook heel vaak de meeste verhalen aan tafel.",
        "Speciaal voor mij (Theo) een heel bijzonder contact, want Conchita en ik kennen elkaar al vanaf de brugklas, dus al bijna 50 jaar. Wie kan dat tegenwoordig zeggen !",
        "Altijd gezellig, en gezelligheidsdier !",
        "Een ontmoeting met Conchita is altijd veel klets, veel lachen, openheid en het delen van lief en leed met elkaar. Tijdens alle etentjes samen, op alle verschillende thuislokaties, volgden en steunden we elkaar in onze levens.",
        "Richard kwam erbij en dat was ook fijn, en het voelde alsof hij er altijd was geweest, Conchita ging er zelfs op vooruit denken we =) ",
        "Hieronder vind jullie al een foto van het meest recente etentje, die keer bij ons in Soest, genietend van de zon en de gezelligheid samen. ",
        "Topkok en top gastvrouw !",
        "Als Conchita kookt is het altijd wat bijzonders, en altijd tot in de puntjes verzorgd. Ze zit nooit stil en ook al heeft ze geen tijd, toch besteed ze uren aan voorbereiding en liefdevolle verzorging van een gezellig samenzijn. Ze staat altijd klaar voor anderen, ook al is ze doodvermoeid.  Ze heeft in ieder geval een energie waar wij zelf doodmoe van zouden worden, dus chapeau voor Conchita als gastvrouw en vriendin !",
        "Gelukkig nu gelukkiger (en iets meer rust hopelijk)",
        "Eindelijk lukt het Conchita nu wat om minder te gaan werken en iets meer rust te hebben om te kunnen genieten, van de nu inmiddels 2 paleisjes en de vele mensen om haar heen (en niet te vergeten Buddy..=)  en dat is haar ook helemaal gegund, die tijd om ook zelf gelukkig te zijn, en de rust te nemen hiervoor. ",
        "En we hebben geen illusies hoor… Conchita je blijft altijd bezig of het nu in Rockanje of Den Bosch is, en er is altijd wel wat op te knappen, schilderen, opnieuw in te richten, of lekker voor te bereiden en te koken, want dat blijft jou typeren: een hartstochtelijke doener die graag en goed zorgt voor anderen met raad, daad, lekker eten en heerlijke klets. ",
        "Heel veel liefs van je vrienden uit Soest, het is zeker dat we de rest van ons hele leven elkaar nog heel vaak zullen zien, als het mag in goede gezondheid en sowieso met een lach (en een lekker glaasje wijn of bier of zo ;-)"
      ],
      rating: 5,
      image: Theokarinfoto
    },
    {
      id: 8,
      name: "Paul & Marisol en Mitch & Evi",
      relation: "Favoriete feestmakers",
      comment: "Als wij denken aan Conchita, dan denken we aan gastvrijheid, gezelligheid, ontzettend lekker eten, wijn en een super lieve, zorgzame vrouw.",
      fullReview: [
        "Als wij denken aan Conchita, dan denken we aan gastvrijheid, gezelligheid, ontzettend lekker eten, wijn en een super lieve, zorgzame vrouw. Wanneer je bij Conchita thuis komt is er altijd een warm welkom. Er staat altijd een kop koffie, glas wijn, 'cola zero' en iets lekkers te eten klaar. Conchita staat altijd voor je klaar en wil altijd het beste voor iedereen zorgen. Bij Conchita kom je niks tekort!",
        "Wanneer je met Conchita op stap gaat, ben je verzekerd van een gezellige avond. Uiteraard alcoholvrij, *kuchkuch*.... Of het nu Carnaval is of een uit de hand gelopen borrelavond, het is altijd gezellig en Conchita danst altijd mee! Het liefst staat ze dan met allebei de handen in de lucht volledig los te gaan op 'Year of Summer', dat is echt helemaal haar nummer.",
        "Daarnaast geniet Conchita er ontzettend van om samen met haar zus, Marisol, mee te zingen met Tino Martin en 'Emma Heesters'.... of was het toch 'Maan'? Ze weten het zelf niet altijd even goed, maar gelukkig kan DJ Paul ondertussen goed overweg met het spelletje 'hints' als het gaat om de liedjes-aanvragen van de zusjes.",
        "Iets waar wij altijd veel waarde aan hechten, zijn de zomervakanties in Empuriabrava. Hoe gezellig en ontspannen deze vakanties zijn; ze zijn echt goud waard. We hebben elke keer zoveel lol met elkaar en kunnen genieten van de kleine dingen, zoals de lekkere Spaanse asperges of een gezellig (iets te fanatiek) potje Hitster. Dat gaan we dit jaar gelukkig weer mooi even over doen!",
        "En dit is míj́n zus! Precies zoals wij hierboven al omschreven hebben. Conchita, je hebt een hart van goud.",
        "Jij geniet als anderen genieten, je bent altijd in voor een feestje, maar je staat ook altijd voor iedereen klaar. Ik ben trots dat jij mijn zus bent.",
        "Ik hou van jou!",
        "Lieve Conchiet, van harte gefeliciteerd met jouw 60e verjaardag. Je bent een prachtig mens en deelt jouw liefde, zorgzaamheid en culinaire specialiteiten graag met iedereen. We wensen jou een geweldige avond toe. Proost op jou! Op nog vele jaren."
      ],
      rating: 5,
      image: Famfoto
    },
    {
      id: 9,
      name: "Sander",
      relation: "Verkade Zoon",
      comment: "Met 'hotel' doen we het tekort… Het is een oase van warmhartigheid, gastvrijheid en zorgzaamheid - zonder vast adres.",
      fullReview: [
        "Met 'hotel' doen we het tekort… Het is een oase van warmhartigheid, gastvrijheid en zorgzaamheid - zonder vast adres.",
        "Van jongs af aan heeft het mij veel gegeven. Hopelijk heb ik genoeg kunnen teruggeven om mijn waardering te onderstrepen - ook ter compensatie van alle jeugdige ellende. Goed, we kunnen wel concluderen dat het staat als een huis. Het scala aan arrangementen dat Conchiet te bieden heeft, is indrukwekkend. Voor elk seizoen heeft Conchiet wel een troef. Zelfs met kerst schuwt ze het niet om met haar special guests te toasten. Dank voor het verrijken van de levens van al je gasten. Op nog vele jaren!"
      ],
      rating: 5,
      image: Sanderfoto
    },
    {
      id: 10,
      name: "Petra",
      relation: "Vriendin",
      comment: "Conchita is een 'mooi mens', in alle betekenissen van het woord.  Twee van haar eigenschappen waar ik zeker jaloers op ben: tomeloze energie en veerkracht.",
      fullReview: [
        "Conchita is een ‘mooi mens’, in alle betekenissen van het woord.  Twee van haar eigenschappen waar ik zeker jaloers op ben: tomeloze energie en veerkracht",
        "We spreken een paar keer per jaar af, samen met Marijke. Dat zijn altijd gezellige avonden, die voelen alsof we elkaar kort daarvoor nog hebben gezien/gesproken.",
        "Hoe makkelijk ze na een werkdag ‘even’ een origineel en superlekker etentje in elkaar draait, weet waarschijnlijk iedereen.",
        "Sinds het begin dat we elkaar kennen (en dat meer dan dertig jaar geleden) inspireert ze mij vaak. Eén van de eerste recepten die ik van Conchita kreeg is de Massaman curry van Lai Thai.",
        "En die heb ik nog steeds!"
      ],
      rating: 5,
      image: Petrafoto
    },
    {
      id: 11,
      name: "Chris",
      relation: "Bonus Dochter",
      comment: " Een onvergetelijk verblijf in Hotel Conchiet - al 9 jaar lang!",
      fullReview: [
        "Negen jaar geleden stapte ik voor het eerst binnen bij Hotel Conchiet - een charmant familiehotel met een warm ontvangst zoals je die zelden meemaakt. Geen incheckbalie, geen sleutelkaart, maar wel open armen, een hart van goud en een gevoel van thuiskomen dat je nergens anders vindt. Vanaf dag één heeft de eigenaresse, een absolute powervrouw, ervoor gezorgd dat ik me volledig onderdeel voel van de familie. Daar ben ik haar nog elke dag dankbaar voor.",
        "Wat Hotel Conchiet écht uniek maakt? De 24/7 kledingcrisis-hulpdienst. Geen paniek bij kapotte ritsen of (thema)kledingstress (zoals een regenjas voor op het strand in Rockanje) - en al helemaal niet in aanloop naar carnaval. De directrice herself heeft inmiddels al twee (!) schitterende carnavalsjasjes voor me gemaakt. Niet alleen stijlvol, maar ook met liefde en precisie in elkaar gezet en aangepast op al mijn wensen (zoals Conchiet die natuurlijk zo goed kent).",
        "Ook op culinair vlak scoort Hotel Mama moeiteloos een Michelinster (of twee of drie). Of het nu een heerlijk verzorgd ontbijt is waar alles tot in de puntjes klopt, of een onverwachte pesto pasta die Conchiet in een handomdraai om 2 uur 's nachts na een avond carnaval voor mij op tafel heeft gezet - de gastvrijheid kent geen grenzen en de maag blijft nooit leeg.",
        "Wat deze plek nóg bijzonderder maakt: zelfs zonder haar familie ben ik welkom. Met Pasen een aantal jaar geleden kon Pim helaas niet mee. Toch stapte ik zonder Pim de trein in naar Den Bosch en wat volgde was een onvergetelijke Pasen met de familie. Flink wat wijntjes verder, dansend in de kroeg, ben ik met een volle maag en drie (!) flessen wijn onder de arm weer terug naar Amsterdam gereisd. Een klassieke ten out of ten ervaring.",
        "Kortom: Hotel Conchiet is een plek waar je altijd welkom bent, waar je liefde in alles terugvindt (bijvoorbeeld in de fris gewassen handdoeken die altijd voor je klaar liggen op het heerlijk opgemaakte bed) en waar je wordt behandeld alsof je er altijd al bij hoorde. Niet te vergeten: het hotel beschikt over een hele lieve hond Buddy die altijd in is voor knuffelen! Een verblijf om nooit te vergeten en gelukkig hoef ik nog lang niet uit te checken.",
        "Liefste Conchiet, dank je wel voor alles. Op naar nog vele jaren in dit prachtige hotel. ❤️"
      ],
      rating: 5,
      image: Chrisfoto
    },
    {
      id: 12,
      name: "Louis",
      relation: "Favourite Australian",
      comment: "Needless to say, my life has changed forever after such a warm and generous stay",
      fullReview: [
        "Before staying at Hotel Conchiet for Carnaval, I always thought Jägermeister was strictly for regrettable nights out - not a breakfast staple. How wrong I was. Needless to say, my life has changed forever after such a warm and generous stay. 5 stars. Highly recommend!"
      ],
      rating: 5,
      image: Louisfoto
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [showFullReview, setShowFullReview] = useState<number | null>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="py-20 bg-rose-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Wat onze gasten zeggen" 
          subtitle="Ervaringen van Hotel Conchiet bezoekers" 
        />
        
        <div className="max-w-4xl mx-auto mt-12 relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 p-4">
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full border-4 border-rose-200">
                      <img 
                        src={review.image} 
                        alt={review.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6">"{review.comment}"</p>
                    <h4 className="font-bold text-gray-800">{review.name}</h4>
                    <p className="text-rose-500 mb-4">{review.relation}</p>
                    <button
                      onClick={() => setShowFullReview(review.id)}
                      className="text-rose-500 hover:text-rose-600 transition-colors font-medium flex items-center justify-center mx-auto"
                    >
                      Lees meer
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white p-2 rounded-full shadow-lg text-rose-500 hover:text-rose-600 focus:outline-none"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white p-2 rounded-full shadow-lg text-rose-500 hover:text-rose-600 focus:outline-none"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-rose-500' : 'bg-gray-300'}`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Full Review Modal */}
      {showFullReview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] flex flex-col relative">
            <button
              onClick={() => setShowFullReview(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <X className="h-6 w-6" />
            </button>

            {reviews.find(r => r.id === showFullReview) && (
              <>
                <div className="p-8 border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="w-24 h-24 overflow-hidden rounded-full border-4 border-rose-200 mr-4">
                      <img 
                        src={reviews.find(r => r.id === showFullReview)?.image} 
                        alt={reviews.find(r => r.id === showFullReview)?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {reviews.find(r => r.id === showFullReview)?.name}
                      </h3>
                      <p className="text-rose-500">
                        {reviews.find(r => r.id === showFullReview)?.relation}
                      </p>
                      <div className="flex mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${i < (reviews.find(r => r.id === showFullReview)?.rating || 0) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 overflow-y-auto">
                  <div className="prose max-w-none">
                    {reviews.find(r => r.id === showFullReview)?.fullReview.map((paragraph, index) => (
                      <p key={index} className="text-gray-600 text-lg leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};