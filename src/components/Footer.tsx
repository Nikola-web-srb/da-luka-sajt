import { ADDRESS, HOURS, PHONE, PHONE_HREF } from './Contact'

const LINKS = [
  { label: 'O nama', href: '#o-nama' },
  { label: 'Meni', href: '#meni' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Footer() {
  return (
    <footer className="relative z-30 bg-[#070403] py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-heading italic text-3xl">Da Luca</p>
        <nav className="flex items-center gap-5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body font-light text-white/60 hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="text-center md:text-right">
          <p className="text-xs font-body font-light text-white/45">{ADDRESS}</p>
          <a href={PHONE_HREF} className="text-xs font-body font-light text-white/45 hover:text-white/80 transition-colors">
            {PHONE}
          </a>
          <p className="text-xs font-body font-light text-white/45">{HOURS}</p>
        </div>
      </div>
      <p className="text-center text-xs font-body font-light text-white/30 mt-10">
        © {new Date().getFullYear()} Da Luca. Sva prava zadržana.
      </p>
    </footer>
  )
}
