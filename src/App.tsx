import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import woodBg from './assets/wood.webp'
import pizzaImg from './assets/pizza.png'
import logoImg from './assets/logo.png'
import About from './components/About'
import MenuSection from './components/MenuSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

const NAV_LINKS = [
  { label: 'Početna', href: '#top' },
  { label: 'O nama', href: '#o-nama' },
  { label: 'Meni', href: '#meni' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null)
  const videoBgRef = useRef<HTMLDivElement>(null)
  const pizzaRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const bottomInnerRef = useRef<HTMLDivElement>(null)

  // Scroll-driven entrance: the pizza drops in from above the viewport,
  // spinning slightly, and settles dead-center while the hero copy fades in.
  useEffect(() => {
    const pizza = pizzaRef.current
    const hero = heroRef.current
    if (!pizza || !hero) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    })

    tl.fromTo(
      pizza,
      {
        y: () => -(window.innerHeight / 2 + pizza.offsetHeight / 2 + 40),
        rotation: -150,
        scale: 0.7,
      },
      { y: 0, rotation: 0, scale: 1, ease: 'none', duration: 0.7 },
      0,
    )

    // Copy does not exist until the pizza has settled — fromTo's
    // immediateRender hides it from first paint, scroll reveals it.
    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: -40 },
        { opacity: 1, y: 0, ease: 'none', duration: 0.25 },
        0.75,
      )
    }
    if (bottomInnerRef.current) {
      tl.fromTo(
        bottomInnerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, ease: 'none', duration: 0.25 },
        0.75,
      )
    }

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [])

  // Parallax: lerp toward the cursor so the background drifts, not snaps.
  useEffect(() => {
    const strength = 20
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let rafId = 0

    const onMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      targetX = ((e.clientX - cx) / cx) * strength
      targetY = ((e.clientY - cy) / cy) * strength
    }

    const tick = () => {
      currentX += (targetX - currentX) * 0.06
      currentY += (targetY - currentY) * 0.06
      if (videoBgRef.current) {
        gsap.set(videoBgRef.current, { x: currentX, y: currentY })
      }
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMouseMove)
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div id="top" className="min-h-screen bg-black text-white font-body overflow-x-clip">
      <div
        ref={videoBgRef}
        className="fixed top-0 left-0 w-full h-full z-0 scale-[1.08] origin-center"
      >
        <img src={woodBg} alt="" className="w-full h-full object-cover" draggable={false} />
      </div>

      <nav className="fixed top-4 left-2 md:left-1/2 md:-translate-x-1/2 z-50 whitespace-nowrap">
        <div className="liquid-glass flex items-center rounded px-3.5 py-2.5 md:px-[26px] md:py-[13px]">
          <div className="flex items-center gap-[15px] md:gap-[26px]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] md:text-lg font-body font-light text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <a href="#top" className="fixed top-4 right-2 md:right-6 z-50">
        <img
          src={logoImg}
          alt="Da Luca Pizzeria logo"
          draggable={false}
          className="h-12 md:h-24 w-auto select-none drop-shadow-[0_0_10px_rgba(255,255,255,0.75)] transition-transform duration-200 hover:scale-[1.05]"
        />
      </a>

      <div ref={heroRef} className="relative h-[200vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <img
              ref={pizzaRef}
              src={pizzaImg}
              alt="Da Luca pica"
              draggable={false}
              onLoad={() => ScrollTrigger.refresh()}
              className="w-[70vmin] max-w-[560px] h-auto select-none drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
            />
          </div>

          <div className="absolute left-0 right-0 z-20 w-full px-4" style={{ top: '126px' }}>
            <h1 ref={titleRef} className="hero-title select-none">
              Da Luca
            </h1>
          </div>

          <div className="absolute bottom-12 left-0 right-0 px-10 z-20">
            <div ref={bottomInnerRef} className="relative flex items-end justify-between">
              <p className="text-sm font-body font-light text-white/75 max-w-[220px] leading-relaxed">
                Ukusne priče: tradicija, kvalitet i svežina na jednom mestu.
              </p>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-24 flex items-center">
                <a
                  href="#meni"
                  className="group relative bg-white text-black text-sm font-body font-medium rounded px-7 py-3 overflow-hidden active:scale-[0.97] transition-all duration-200 shadow-[0_0_24px_4px_rgba(255,255,255,0.25)] hover:shadow-[0_0_32px_8px_rgba(255,255,255,0.4)] hover:scale-[1.03]"
                >
                  <span className="relative z-10">Pogledaj meni</span>
                  <span className="absolute inset-0 bg-gradient-to-b from-white to-white/85 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </div>
              <p className="text-sm font-body font-light text-white/75 max-w-[220px] leading-relaxed text-right">
                Pica kao epicentar priče — Pančevački put 56, Beograd.
              </p>
            </div>
          </div>
        </div>
      </div>

      <About />
      <MenuSection />
      <Contact />
      <Footer />
    </div>
  )
}
