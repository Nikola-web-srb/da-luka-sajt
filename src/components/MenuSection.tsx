import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { MENU } from '../data/menu'
import { useReveal } from '../hooks/useReveal'

export default function MenuSection() {
  const sectionRef = useReveal<HTMLElement>()
  const listRef = useRef<HTMLDivElement>(null)
  const [activeId, setActiveId] = useState(MENU[0].id)
  const active = MENU.find((c) => c.id === activeId) ?? MENU[0]

  // Re-stagger the items every time the category changes.
  useEffect(() => {
    const list = listRef.current
    if (!list) return
    const tween = gsap.fromTo(
      list.querySelectorAll('.menu-item'),
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', stagger: 0.035 },
    )
    return () => {
      tween.kill()
    }
  }, [activeId])

  return (
    <section id="meni" ref={sectionRef} className="relative z-30 bg-black/90 py-28 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <p data-reveal className="text-sm font-body font-light tracking-[0.35em] uppercase text-white/50 mb-6 text-center">
          Jelovnik
        </p>
        <h2 data-reveal className="font-heading italic text-5xl md:text-7xl leading-tight mb-12 text-center">
          Meni
        </h2>

        <div data-reveal className="flex flex-wrap justify-center gap-2 mb-4">
          {MENU.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`text-sm font-body rounded px-4 py-2 transition-all duration-200 ${
                cat.id === activeId
                  ? 'bg-white text-black font-medium'
                  : 'liquid-glass text-white/70 hover:text-white font-light'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div data-reveal>
          {active.note && (
            <p className="text-center text-xs font-body font-light text-white/45 italic mb-2">
              * {active.note}
            </p>
          )}
          {active.sizes && (
            <p className="text-right text-xs font-body font-light text-white/45 mb-2 pr-1">
              {active.sizes[0]} / {active.sizes[1]}
            </p>
          )}
          <div ref={listRef} className="grid md:grid-cols-2 gap-x-12 gap-y-7 mt-6">
            {active.items.map((item) => (
              <div key={item.name} className="menu-item">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-body font-medium text-[15px] uppercase tracking-wide shrink-0 max-w-[70%]">
                    {item.name}
                    {item.weight && (
                      <span className="ml-2 text-white/40 font-light normal-case">{item.weight}</span>
                    )}
                  </h3>
                  <span className="flex-1 border-b border-dotted border-white/25 translate-y-[-3px]" />
                  <span className="font-body font-light text-white/85 text-sm whitespace-nowrap">
                    {item.prices ? `${item.prices[0]} / ${item.prices[1]}` : item.price}
                    <span className="text-white/45 text-xs ml-1">rsd</span>
                  </span>
                </div>
                {item.desc && (
                  <p className="text-[13px] font-body font-light text-white/50 leading-relaxed mt-1">
                    {item.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
