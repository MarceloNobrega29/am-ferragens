import { useEffect, useRef, useState } from 'react'

const WA = 'https://wa.me/558332711743?text=Ol%C3%A1%21+Quero+saber+o+pre%C3%A7o+de+'

const categories = [
  {
    label: 'Ferragens',
    desc: 'Parafusos, pregos, porcas, arruelas, buchas, fixadores e muito mais para sua obra.',
    color: '#001250',
    icon: (
      <svg viewBox="0 0 48 48" width="38" height="38" fill="none">
        <circle cx="24" cy="24" r="22" fill="rgba(0,18,80,0.12)" stroke="rgba(0,18,80,0.4)" strokeWidth="1.5"/>
        <circle cx="24" cy="24" r="7" fill="none" stroke="#001250" strokeWidth="3"/>
        <circle cx="24" cy="24" r="2.5" fill="#001250"/>
        <path d="M24 12 L24 16 M24 32 L24 36 M12 24 L16 24 M32 24 L36 24" stroke="#001250" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    tag: 'Ferragens',
    tagColor: '#001250',
  },
  {
    label: 'Ferramentas Manuais',
    desc: 'Alicates, martelos, chaves de fenda, chaves Philips, trenas, serrotes e kits completos.',
    color: '#FCBC37',
    icon: (
      <svg viewBox="0 0 48 48" width="38" height="38" fill="none">
        <circle cx="24" cy="24" r="22" fill="rgba(252,188,55,0.12)" stroke="rgba(252,188,55,0.4)" strokeWidth="1.5"/>
        <path d="M14 34 L22 26 L26 30 L18 38 C16 40 12 38 14 34Z" fill="#FCBC37" stroke="#e0a820" strokeWidth="1"/>
        <path d="M22 26 L28 14 C30 10 36 10 36 10 C36 10 36 16 32 18 L26 30" fill="rgba(252,188,55,0.4)" stroke="#FCBC37" strokeWidth="1.5"/>
      </svg>
    ),
    tag: 'Manuais',
    tagColor: '#e0a820',
  },
  {
    label: 'Ferramentas Elétricas',
    desc: 'Furadeiras, parafusadeiras, esmerilhadeiras, lixadeiras, serra mármore e muito mais.',
    color: '#EF4444',
    icon: (
      <svg viewBox="0 0 48 48" width="38" height="38" fill="none">
        <circle cx="24" cy="24" r="22" fill="rgba(239,68,68,0.12)" stroke="rgba(239,68,68,0.4)" strokeWidth="1.5"/>
        <path d="M30 10 C34 10 38 14 38 18 C38 19.5 37.5 20.8 36.5 21.8 L22 36 C20.5 37.5 18 37.5 16.5 36 L12 31.5 C10.5 30 10.5 27.5 12 26 L26.2 11.5 C27.2 10.5 28.5 10 30 10Z" fill="#EF4444"/>
        <path d="M33 13 L35 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="36" r="3" fill="rgba(239,68,68,0.3)" stroke="#EF4444" strokeWidth="1.5"/>
      </svg>
    ),
    tag: 'Elétricas',
    tagColor: '#EF4444',
  },
  {
    label: 'Materiais Elétricos',
    desc: 'Fios elétricos, cabos, tomadas, interruptores, disjuntores, extensões e mais.',
    color: '#F59E0B',
    icon: (
      <svg viewBox="0 0 48 48" width="38" height="38" fill="none">
        <circle cx="24" cy="24" r="22" fill="rgba(245,158,11,0.12)" stroke="rgba(245,158,11,0.4)" strokeWidth="1.5"/>
        <path d="M26 8l-10 16h10l-4 16 14-20H26L26 8z" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1" strokeLinejoin="round"/>
      </svg>
    ),
    tag: 'Elétrico',
    tagColor: '#F59E0B',
  },
  {
    label: 'Acessórios para Janelas e Portas',
    desc: 'Puxadores, braços articulados, guias, cadarços para persianas e motores para persianas.',
    color: '#10B981',
    icon: (
      <svg viewBox="0 0 48 48" width="38" height="38" fill="none">
        <circle cx="24" cy="24" r="22" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.4)" strokeWidth="1.5"/>
        <rect x="12" y="12" width="10" height="24" rx="2" fill="rgba(16,185,129,0.3)" stroke="#10B981" strokeWidth="2"/>
        <rect x="26" y="12" width="10" height="24" rx="2" fill="rgba(16,185,129,0.3)" stroke="#10B981" strokeWidth="2"/>
        <circle cx="21" cy="24" r="2" fill="#10B981"/>
        <circle cx="27" cy="24" r="2" fill="#10B981"/>
      </svg>
    ),
    tag: 'Janelas & Portas',
    tagColor: '#10B981',
  },
]

function ProductCard({ cat, i, vis }: { cat: typeof categories[0]; i: number; vis: boolean }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: 'var(--white)', borderRadius: 16,
        border: `1.5px solid ${hov ? cat.color : 'var(--gray-light)'}`,
        padding: '1.6rem 1.4rem',
        boxShadow: hov ? `0 12px 36px ${cat.color}22` : 'var(--shadow-sm)',
        transition: 'all var(--transition)',
        transform: hov ? 'translateY(-4px)' : 'translateY(0)',
        opacity: vis ? 1 : 0,
        transitionDelay: `${i * 0.06}s`,
        display: 'flex', flexDirection: 'column', gap: '0.9rem',
        cursor: 'default',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ transition: 'transform var(--transition)', transform: hov ? 'scale(1.12) rotate(-4deg)' : 'scale(1)' }}>
          {cat.icon}
        </div>
        <span style={{
          fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.62rem',
          letterSpacing: '0.08em', textTransform: 'uppercase',
          color: cat.tagColor, background: `${cat.tagColor}18`,
          padding: '0.25rem 0.7rem', borderRadius: '100px',
        }}>{cat.tag}</span>
      </div>
      <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--dark)', lineHeight: 1.3 }}>{cat.label}</h3>
      <p style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '0.8rem', color: 'var(--gray)', lineHeight: 1.7, flexGrow: 1 }}>{cat.desc}</p>
      <a href={`${WA}${encodeURIComponent(cat.label)}`} target="_blank" rel="noreferrer" style={{
        fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.76rem',
        color: hov ? cat.tagColor : 'var(--gray)',
        display: 'flex', alignItems: 'center', gap: '0.35rem',
        transition: 'color var(--transition)',
      }}>
        Consultar preço
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
      </a>
    </div>
  )
}

export default function Products() {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.05 })
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [])

  return (
    <section id="produtos" style={{ padding: 'clamp(5rem,7vw,7rem) clamp(1.5rem,5vw,4rem)', background: 'var(--off-white)' }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          textAlign: 'center', marginBottom: 'clamp(2.5rem,4vw,4rem)',
          opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(28px)',
          transition: 'all 0.8s ease',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
            <div style={{ width: 32, height: 4, background: 'var(--yellow)', borderRadius: 99 }} />
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--blue)' }}>O que temos para você</span>
            <div style={{ width: 32, height: 4, background: 'var(--yellow)', borderRadius: 99 }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 'clamp(2rem,3.5vw,3rem)', color: 'var(--dark)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '1rem' }}>
            Ferragens, ferramentas e elétrico,<br/>
            <span style={{ color: 'var(--blue)' }}>tudo em um só lugar.</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '1rem', color: 'var(--gray)', maxWidth: 540, margin: '0 auto', lineHeight: 1.8 }}>
            Mais de <strong style={{ color: 'var(--dark)' }}>5 categorias</strong> de produtos para pedreiros, eletricistas, marceneiros e clientes residenciais.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.1rem' }}>
          {categories.map((cat, i) => (
            <ProductCard key={i} cat={cat} i={i} vis={vis} />
          ))}
        </div>
      </div>
    </section>
  )
}
