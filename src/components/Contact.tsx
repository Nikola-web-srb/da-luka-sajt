import { MapPin, Phone, Clock, CalendarCheck } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export const PHONE = '+381 62 880 5159'
export const PHONE_HREF = 'tel:+381628805159'
export const ADDRESS = 'Pančevački put 56, Beograd 11060'
export const HOURS = 'Svakog dana 08:00 – 00:00'

export const LOCATIONS = [
  {
    name: 'Da Luca Due',
    place: 'Pančevački put 56, Beograd 11060',
    maps: 'https://www.google.com/maps/place/Da+Luca+Due/@44.8474955,20.5208216,17z/data=!3m1!4b1!4m6!3m5!1s0x475a7b9a736c945f:0xc0886ae104e115c1!8m2!3d44.8474955!4d20.5233965!16s%2Fg%2F11ry5ydjjv?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    name: 'Da Luca Pizzeria',
    place: 'Batajnica, Beograd',
    maps: 'https://www.google.com/maps/place/Da+Luca+Pizzeria/@44.8964083,20.2856752,17.5z/data=!4m6!3m5!1s0x475a675f955bc6e1:0xb31ee1a1c9f06cf0!8m2!3d44.8957049!4d20.2897106!16s%2Fg%2F11b70hkhm_?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D',
  },
]

export default function Contact() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="kontakt" ref={ref} className="relative z-30 bg-black/90 py-28 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <p data-reveal className="text-sm font-body font-light tracking-[0.35em] uppercase text-white/50 mb-6">
          Kontakt
        </p>
        <h2 data-reveal className="font-heading italic text-5xl md:text-7xl leading-tight mb-14">
          Rezerviši svoj sto
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-left mb-14">
          <div
            data-reveal
            className="liquid-glass rounded-[28px] p-8 flex items-start gap-5 transition-transform duration-300 hover:-translate-y-1"
          >
            <MapPin size={26} strokeWidth={1.5} className="text-white/80 shrink-0 mt-1" />
            <div>
              <h3 className="font-heading italic text-2xl mb-2">Gde smo</h3>
              <div className="space-y-4">
                {LOCATIONS.map((loc) => (
                  <a key={loc.name} href={loc.maps} target="_blank" rel="noreferrer" className="block group">
                    <p className="text-sm font-body font-medium text-white/85 group-hover:text-white transition-colors duration-200">
                      {loc.name}
                    </p>
                    <p className="text-sm font-body font-light text-white/60 leading-relaxed">
                      {loc.place}
                    </p>
                    <p className="text-xs font-body font-light text-white/40 mt-1 group-hover:text-white/70 transition-colors duration-200">
                      Otvori u Google mapama →
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <a
            data-reveal
            href={PHONE_HREF}
            className="liquid-glass rounded-[28px] p-8 flex items-start gap-5 transition-transform duration-300 hover:-translate-y-1"
          >
            <Phone size={26} strokeWidth={1.5} className="text-white/80 shrink-0 mt-1" />
            <div>
              <h3 className="font-heading italic text-2xl mb-2">Pozovi nas</h3>
              <p className="text-sm font-body font-light text-white/60 leading-relaxed">{PHONE}</p>
              <p className="text-xs font-body font-light text-white/40 mt-2">
                Rezervacije i porudžbine
              </p>
            </div>
          </a>
          <div
            data-reveal
            className="liquid-glass rounded-[28px] p-8 flex items-start gap-5 transition-transform duration-300 hover:-translate-y-1"
          >
            <Clock size={26} strokeWidth={1.5} className="text-white/80 shrink-0 mt-1" />
            <div>
              <h3 className="font-heading italic text-2xl mb-2">Radno vreme</h3>
              <p className="text-sm font-body font-light text-white/60 leading-relaxed">{HOURS}</p>
              <p className="text-xs font-body font-light text-white/40 mt-2">
                Ponedeljak – nedelja
              </p>
            </div>
          </div>
        </div>

        <a
          data-reveal
          href={PHONE_HREF}
          className="group relative inline-flex items-center gap-2.5 bg-white text-black text-sm font-body font-medium rounded px-8 py-4 overflow-hidden active:scale-[0.97] transition-all duration-200 hover:shadow-[0_0_24px_4px_rgba(255,255,255,0.25)] hover:scale-[1.03]"
        >
          <span className="relative z-10 flex items-center gap-2.5">
            <CalendarCheck size={18} strokeWidth={2} />
            Rezerviši sto
          </span>
          <span className="absolute inset-0 bg-gradient-to-b from-white to-white/85 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </a>
      </div>
    </section>
  )
}
