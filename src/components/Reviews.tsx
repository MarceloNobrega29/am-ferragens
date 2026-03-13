import { useEffect, useRef, useState } from 'react'

const WA = 'https://wa.me/558332711743?text=Ol%C3%A1%21+Vim+pelo+site+da+AM+Ferragens+%F0%9F%94%A8'

const reviews = [
  {
    name: 'Rosi',
    badge: 'Local Guide · 47 avaliações · 1 foto',
    rating: 5,
    time: '3 anos atrás',
    text: 'Sempre que vou na Am Ferragens, sou muito bem atendido. A loja é grande com excelente variedades de produtos, ainda tem aquele cafezinho para os clientes.',
    initials: 'RO',
    color: '#001250',
  },
  {
    name: 'Felipe Batista',
    badge: 'Local Guide · 20 avaliações · 21 fotos',
    rating: 5,
    time: '2 anos atrás',
    text: 'A melhor loja de materiais e ferramentas de Guarabira. Ótimo atendimento e preço justo. Onde você encontra de tudo.',
    initials: 'FB',
    color: '#FCBC37',
  },
  {
    name: 'Givanildo Marinho',
    badge: '1 avaliação',
    rating: 5,
    time: '4 anos atrás',
    text: 'Muito bom o atendimento pelos seus profissionais, e um preço satisfatório. Parabéns a todos que faz AM FERRAGENS!',
    initials: 'GM',
    color: '#059669',
  },
]

const Stars = ({ n }: { n: number }) => (
  <div style={{ display:'flex', gap:2 }}>
    {Array(n).fill(0).map((_,i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F4B400">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
      </svg>
    ))}
  </div>
)

const GoogleLogo = () => (
  <svg width="18" height="18" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
  </svg>
)

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.1 })
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [])

  return (
    <section id="avaliacoes" style={{ padding: 'clamp(5rem,7vw,7rem) clamp(1.5rem,5vw,4rem)', background: 'var(--off-white)' }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          textAlign: 'center', marginBottom: 'clamp(2.5rem,4vw,4rem)',
          opacity: vis?1:0, transform: vis?'translateY(0)':'translateY(28px)',
          transition: 'all 0.8s ease',
        }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'0.6rem', marginBottom:'0.8rem' }}>
            <div style={{ width:32, height:4, background:'var(--yellow)', borderRadius:99 }} />
            <span style={{ fontFamily:'var(--font-body)', fontWeight:600, fontSize:'0.72rem', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--blue)' }}>Avaliações Google</span>
            <div style={{ width:32, height:4, background:'var(--yellow)', borderRadius:99 }} />
          </div>
          <h2 style={{ fontFamily:'var(--font-body)', fontWeight:800, fontSize:'clamp(2rem,3.5vw,3rem)', color:'var(--dark)', letterSpacing:'-0.02em', lineHeight:1.1, marginBottom:'1rem' }}>
            Quem comprou,<br/>
            <span style={{ color:'var(--blue)' }}>aprovou e voltou.</span>
          </h2>

          <div style={{
            display:'inline-flex', alignItems:'center', gap:'0.8rem',
            background:'var(--white)', border:'1.5px solid var(--gray-light)',
            borderRadius:'100px', padding:'0.55rem 1.5rem', marginTop:'1rem',
            boxShadow:'0 2px 16px rgba(0,18,80,0.08)',
          }}>
            <GoogleLogo />
            <Stars n={5} />
            <span style={{ fontFamily:'var(--font-body)', fontWeight:700, fontSize:'0.9rem', color:'var(--dark)' }}>5.0</span>
            <span style={{ fontFamily:'var(--font-body)', fontWeight:400, fontSize:'0.75rem', color:'var(--gray)' }}>no Google</span>
          </div>
        </div>

        {/* Cards */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:'1.1rem', marginBottom:'2.5rem' }}>
          {reviews.map((r, i) => {
            const [hov, setHov] = useState(false)
            return (
              <div key={i}
                onMouseEnter={() => setHov(true)}
                onMouseLeave={() => setHov(false)}
                style={{
                  background:'var(--white)', borderRadius:14, padding:'1.5rem',
                  border:`1.5px solid ${hov ? r.color : 'var(--gray-light)'}`,
                  boxShadow: hov ? `0 8px 32px ${r.color}22` : 'var(--shadow-sm)',
                  transition:'all var(--transition)',
                  opacity: vis?1:0,
                  transitionDelay:`${i*0.09}s`,
                  display:'flex', flexDirection:'column', gap:'0.9rem',
                }}
              >
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:'0.7rem' }}>
                    <div style={{
                      width:40, height:40, borderRadius:'50%', background:r.color,
                      display:'flex', alignItems:'center', justifyContent:'center',
                      fontFamily:'var(--font-body)', fontWeight:700, fontSize:'0.82rem', color:'#fff', flexShrink:0,
                    }}>{r.initials}</div>
                    <div>
                      <p style={{ fontFamily:'var(--font-body)', fontWeight:700, fontSize:'0.88rem', color:'var(--dark)', lineHeight:1.2 }}>{r.name}</p>
                      <p style={{ fontFamily:'var(--font-body)', fontWeight:400, fontSize:'0.68rem', color:'var(--gray)', marginTop:'0.1rem' }}>{r.badge}</p>
                    </div>
                  </div>
                  <GoogleLogo />
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:'0.6rem' }}>
                  <Stars n={r.rating} />
                  <span style={{ fontFamily:'var(--font-body)', fontWeight:400, fontSize:'0.7rem', color:'var(--gray)' }}>{r.time}</span>
                </div>
                <p style={{ fontFamily:'var(--font-body)', fontWeight:400, fontSize:'0.87rem', lineHeight:1.75, color:'var(--dark)', borderLeft:`3px solid ${r.color}`, paddingLeft:'0.85rem' }}>
                  "{r.text}"
                </p>
              </div>
            )
          })}
        </div>

        {/* CTAs */}
        <div style={{ display:'flex', justifyContent:'center', gap:'1rem', flexWrap:'wrap', opacity:vis?1:0, transition:'opacity 0.9s ease 0.5s' }}>
          <a href="https://www.google.com/maps/place/Am+Ferragens/" target="_blank" rel="noreferrer" style={{
            fontFamily:'var(--font-body)', fontWeight:600, fontSize:'0.82rem',
            color:'var(--dark)', border:'1.5px solid var(--gray-light)',
            padding:'0.65rem 1.5rem', borderRadius:'8px', background:'var(--white)',
            display:'flex', alignItems:'center', gap:'0.5rem',
            transition:'all var(--transition)',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor='var(--blue)'; (e.currentTarget as HTMLElement).style.color='var(--blue)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor='var(--gray-light)'; (e.currentTarget as HTMLElement).style.color='var(--dark)' }}
          >
            <GoogleLogo />
            Ver todas no Google
          </a>
          <a href={WA} target="_blank" rel="noreferrer">
            <button style={{
              background:'var(--yellow)', color:'var(--blue-dark)',
              padding:'0.65rem 1.8rem', fontFamily:'var(--font-body)',
              fontWeight:700, fontSize:'0.82rem', borderRadius:'8px',
              display:'flex', alignItems:'center', gap:'0.5rem',
              transition:'all var(--transition)', boxShadow:'0 4px 16px rgba(252,188,55,0.4)',
            }}
              onMouseEnter={e => { e.currentTarget.style.background='var(--yellow-dark)'; e.currentTarget.style.transform='translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background='var(--yellow)'; e.currentTarget.style.transform='translateY(0)' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Quero comprar aqui
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
