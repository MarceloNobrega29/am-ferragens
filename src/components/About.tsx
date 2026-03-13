import { useEffect, useRef, useState } from 'react'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true) }, { threshold: 0.5 })
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [])
  useEffect(() => {
    if (!started) return
    let frame = 0; const total = 60
    const step = () => { frame++; setCount(Math.round((frame/total)*target)); if(frame<total) requestAnimationFrame(step) }
    requestAnimationFrame(step)
  }, [started, target])
  return <span ref={ref}>{count}{suffix}</span>
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.1 })
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [])

  const brands = ['Tramontina','Worker','Atlas','WEG','Intelbras','Vonder','Black+Decker','Bosch','Makita','Tekna']

  return (
    <section id="sobre" style={{ padding: 'clamp(5rem,7vw,7rem) clamp(1.5rem,5vw,4rem)', background: 'var(--white)' }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="about-grid">

          {/* LEFT */}
          <div style={{ opacity: vis?1:0, transform: vis?'translateX(0)':'translateX(-32px)', transition: 'all 0.9s ease' }}>
            <div style={{
              background: 'linear-gradient(135deg, var(--blue-dark) 0%, var(--blue) 100%)',
              borderRadius: 24, padding: '3rem 2rem', marginBottom: '1.5rem',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position:'absolute', top:'-20%', right:'-10%', width:200, height:200, borderRadius:'50%', background:'rgba(252,188,55,0.08)' }} />
              {/* Tools illustration */}
              <svg viewBox="0 0 120 100" width="180" height="150" fill="none">
                <rect x="10" y="40" width="100" height="50" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" strokeWidth="2"/>
                <path d="M30 40 L30 20 C30 18 32 16 34 16 L40 16 C42 16 44 18 44 20 L44 40" fill="rgba(252,188,55,0.3)" stroke="rgba(252,188,55,0.6)" strokeWidth="1.5"/>
                <path d="M55 40 L55 25 L65 15 L75 25 L75 40" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
                <circle cx="37" cy="58" r="8" fill="none" stroke="#FCBC37" strokeWidth="2"/>
                <path d="M37 53 L37 63 M32 58 L42 58" stroke="#FCBC37" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M78 52 L90 52 L90 68 L78 68 Z" fill="rgba(252,188,55,0.2)" stroke="#FCBC37" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M80 60 L88 60 M80 56 L88 56" stroke="#FCBC37" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <p style={{ fontFamily:'var(--font-body)', fontWeight:600, fontSize:'0.85rem', color:'rgba(255,255,255,0.8)', textAlign:'center', lineHeight:1.7, maxWidth:260 }}>
                "Referência em ferragens, ferramentas e materiais elétricos <span style={{ color:'var(--yellow)', fontWeight:700 }}>em Guarabira e região.</span>"
              </p>
            </div>

            {/* Stats grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { n:5, suf:'+', label:'Categorias', desc:'Ferragens, Elétricas e mais' },
                { n:5, suf:'.0★', label:'Google', desc:'Nota máxima dos clientes' },
                { n:3, suf:'+', label:'Anos', desc:'Servindo Guarabira – PB' },
                { n:100, suf:'%', label:'Satisfação', desc:'Clientes que voltam sempre' },
              ].map((s, i) => (
                <div key={i} style={{
                  background: 'var(--off-white)', borderRadius: 12,
                  padding: '1.2rem', border: '1.5px solid var(--gray-light)',
                  transition: 'all var(--transition)',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor='var(--yellow)'; (e.currentTarget as HTMLElement).style.background='rgba(252,188,55,0.06)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor='var(--gray-light)'; (e.currentTarget as HTMLElement).style.background='var(--off-white)' }}
                >
                  <p style={{ fontFamily:'var(--font-body)', fontWeight:900, fontSize:'1.8rem', color:'var(--blue)', lineHeight:1 }}>
                    <Counter target={s.n} suffix={s.suf} />
                  </p>
                  <p style={{ fontFamily:'var(--font-body)', fontWeight:700, fontSize:'0.82rem', color:'var(--dark)', marginTop:'0.3rem' }}>{s.label}</p>
                  <p style={{ fontFamily:'var(--font-body)', fontWeight:400, fontSize:'0.72rem', color:'var(--gray)', marginTop:'0.15rem' }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: copy */}
          <div style={{ opacity: vis?1:0, transform: vis?'translateX(0)':'translateX(32px)', transition: 'all 0.9s ease 0.15s' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
              <div style={{ width: 28, height: 4, background: 'var(--yellow)', borderRadius: 99 }} />
              <span style={{ fontFamily:'var(--font-body)', fontWeight:600, fontSize:'0.72rem', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--blue)' }}>Nossa história</span>
            </div>

            <h2 style={{ fontFamily:'var(--font-body)', fontWeight:800, fontSize:'clamp(2rem,3vw,2.8rem)', color:'var(--dark)', letterSpacing:'-0.02em', lineHeight:1.1, marginBottom:'1.5rem' }}>
              Referência em ferragens<br/>
              <span style={{ color:'var(--blue)' }}>no coração de Guarabira.</span>
            </h2>

            <div style={{ display:'flex', flexDirection:'column', gap:'1.1rem', marginBottom:'2rem' }}>
              {[
                'A AM Ferragens é uma loja especializada em ferragens, fios elétricos, máquinas e ferramentas para construção e reforma, localizada na Av. Rui Barbosa, 212 – Centro, Guarabira – PB.',
                'Atendemos pedreiros, eletricistas, marceneiros, construtores e clientes residenciais com um amplo estoque de produtos de qualidade e preço justo.',
                'Nossa equipe é reconhecida pelo excelente atendimento — e aquele cafezinho que não pode faltar. Avaliação 5 estrelas no Google comprova o carinho que temos por nossos clientes.',
                'Seja para uma grande obra ou uma pequena reforma, na AM Ferragens você encontra tudo que precisa, sem precisar sair de Guarabira.',
              ].map((p, i) => (
                <p key={i} style={{ fontFamily:'var(--font-body)', fontWeight:400, fontSize:'0.92rem', color:'var(--gray)', lineHeight:1.85, paddingLeft:'1rem', borderLeft:'2px solid var(--yellow)' }}>{p}</p>
              ))}
            </div>

            {/* Brands */}
            <div>
              <p style={{ fontFamily:'var(--font-body)', fontWeight:700, fontSize:'0.78rem', letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--dark)', marginBottom:'0.8rem' }}>Marcas que trabalhamos:</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem' }}>
                {brands.map((b, i) => (
                  <span key={i} style={{
                    fontFamily:'var(--font-body)', fontWeight:600, fontSize:'0.72rem',
                    color:'var(--blue)', background:'rgba(0,18,80,0.07)',
                    border:'1px solid rgba(0,18,80,0.18)',
                    padding:'0.3rem 0.75rem', borderRadius:'100px',
                    letterSpacing:'0.04em',
                  }}>{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .about-grid { grid-template-columns:1fr !important; gap:3rem !important; }
        }
      `}</style>
    </section>
  )
}
