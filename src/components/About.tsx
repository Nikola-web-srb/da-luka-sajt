import { Pizza, Leaf, Flame } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { ADDRESS, PHONE, PHONE_HREF } from './Contact'
import awardBelaReka from '../assets/award-belareka.png'
import awardGuru2025 from '../assets/award-guru2025.png'
import awardRg2024 from '../assets/award-rg2024.png'
import awardGramina from '../assets/award-gramina.png'

const FEATURES = [
  {
    icon: Pizza,
    title: 'Pica kao epicentar priče',
    text: 'Napolitansko testo, pelat i mozzarella — svaka pica izlazi iz peći kao mali komad Italije.',
  },
  {
    icon: Leaf,
    title: 'Svežina na prvom mestu',
    text: 'Burrata, stracciatella, rukola i sušeni paradajz — sastojci koje biramo svakog jutra.',
  },
  {
    icon: Flame,
    title: 'Tradicija i kvalitet',
    text: 'Recepti italijanskih majstora, spremljeni sa pažnjom i služeni na jednom mestu — u Krnjači.',
  },
]

const AWARDS = [
  { src: awardBelaReka, alt: 'Bela Reka — nacionalni restoran', light: true },
  { src: awardGuru2025, alt: 'Restaurant Guru 2025 — Recommended', light: false },
  { src: awardRg2024, alt: 'Restaurant Guru 2024 — Recommended, Da Luca Pizzeria Due', light: false },
  { src: awardGramina, alt: 'Gramina — farm cheese, Homolje Mountains', light: true },
]

export default function About() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="o-nama" ref={ref} className="relative z-30 bg-[#0b0705]/95 py-28 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <p data-reveal className="text-sm font-body font-light tracking-[0.35em] uppercase text-white/50 mb-6">
          O nama
        </p>
        <h2 data-reveal className="font-heading italic text-5xl md:text-7xl leading-tight mb-8">
          Da Luca Krnjača
        </h2>

        <div className="max-w-3xl mx-auto space-y-5 text-base md:text-lg font-body font-light text-white/70 leading-relaxed">
          <p data-reveal>
            Pica kao epicentar priče, dok se oko nje vrte sendviči, salate i slatkiši. Naš moderni
            pristup italijanskim jelima čini nas posebno autentičnim. Uživajte u iskustvu koje
            prevazilazi granice klasične pice i otkrijte šta znači kada se strast prema hrani i
            inovacije stopi u jedinstveno kulinarstvo.
          </p>
          <p data-reveal>
            Naša jela nisu samo obroci, već iskustva koja nas povezuju sa drevnim tradicijama, dok
            istovremeno otkrivaju modernu interpretaciju ukusa. Svaka komponenta na tanjiru nosi
            priču, od pažljivo odabranih sastojaka do stručno izrađenih jela koje ostavljaju
            nezaboravan utisak.
          </p>
          <p data-reveal>
            Ovde se kultura, ukus i gostoprimstvo spajaju u jedno. Bilo da dolazite sa porodicom,
            prijateljima ili sami, Da Luca Krnjača je mesto gde se ukusi susreću i stvaraju
            trenutke radosti. Doživite uživanje u hrani na potpuno novom nivou, gde svaki zalogaj
            podseća na to koliko ljubav prema hrani može biti inspirativna i izuzetna.
          </p>
        </div>

        <div data-reveal className="mt-8">
          <p className="text-sm font-body font-light text-white/60">{ADDRESS}</p>
          <a
            href={PHONE_HREF}
            className="text-sm font-body font-light text-white/60 hover:text-white transition-colors duration-200"
          >
            {PHONE}
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16 text-left">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              data-reveal
              className="liquid-glass rounded-[28px] p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              <Icon size={28} strokeWidth={1.5} className="text-white/80 mb-5" />
              <h3 className="font-heading italic text-2xl mb-3">{title}</h3>
              <p className="text-sm font-body font-light text-white/60 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {AWARDS.map((award) => (
            <div
              key={award.alt}
              data-reveal
              className={`rounded-[28px] flex items-center justify-center p-6 h-36 transition-transform duration-300 hover:-translate-y-1 ${
                award.light ? 'bg-white/95' : 'liquid-glass'
              }`}
            >
              <img
                src={award.src}
                alt={award.alt}
                draggable={false}
                className="max-h-full max-w-full object-contain select-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
