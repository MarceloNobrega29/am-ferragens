import { useEffect, useState } from 'react'
import logo from '../assets/logo.jpg'

const WA = 'https://wa.me/558332711743?text=Ol%C3%A1%21+Vim+pelo+site+da+AM+Ferragens+e+quero+um+or%C3%A7amento+%F0%9F%94%A8'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let frame = 0
    const total = 60
    const step = () => {
      frame++
      setCount(Math.round((frame / total) * target))
      if (frame < total) requestAnimationFrame(step)
    }
    const t = setTimeout(() => requestAnimationFrame(step), 600)
    return () => clearTimeout(t)
  }, [target])
  return <>{count}{suffix}</>
}

export default function Hero() {
  const [vis, setVis] = useState(false)
  useEffect(() => { const t = setTimeout(() => setVis(true), 100); return () => clearTimeout(t) }, [])

  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--blue-dark) 0%, var(--blue) 60%, #0d1f6b 100%)',
      paddingTop: 'clamp(7rem,12vw,10rem)',
      paddingBottom: 'clamp(4rem,7vw,6rem)',
      paddingLeft: 'clamp(1.5rem,5vw,4rem)',
      paddingRight: 'clamp(1.5rem,5vw,4rem)',
      position: 'relative', overflow: 'hidden', minHeight: '100vh',
      display: 'flex', alignItems: 'center',
    }}>
      {/* Decorative BG */}
      <div style={{ position:'absolute', top:'-10%', right:'-5%', width:'45vw', maxWidth:600, aspectRatio:'1', borderRadius:'50%', background:'rgba(252,188,55,0.05)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-15%', left:'-8%', width:'40vw', maxWidth:550, aspectRatio:'1', borderRadius:'50%', background:'rgba(252,188,55,0.07)', pointerEvents:'none' }} />
      {/* Yellow accent top bar */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:4, background:'linear-gradient(90deg, var(--yellow) 0%, #ffd97d 50%, var(--yellow) 100%)' }} />

      <div style={{ maxWidth:1200, margin:'0 auto', width:'100%', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center' }}>
        {/* LEFT: copy */}
        <div style={{ opacity: vis?1:0, transform: vis?'translateX(0)':'translateX(-40px)', transition:'all 0.9s ease' }}>
          {/* Badge */}
          <div style={{
            display:'inline-flex', alignItems:'center', gap:'0.5rem',
            background:'rgba(252,188,55,0.15)', border:'1px solid rgba(252,188,55,0.35)',
            padding:'0.35rem 1rem', borderRadius:'100px', marginBottom:'1.5rem',
          }}>
            <div style={{ width:7, height:7, borderRadius:'50%', background:'var(--yellow)', animation:'pulse-yellow 1.5s infinite' }} />
            <span style={{ fontFamily:'var(--font-body)', fontWeight:600, fontSize:'0.72rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(255,255,255,0.9)' }}>
              A ferragem mais completa de Guarabira
            </span>
          </div>

          <h1 style={{
            fontFamily:'var(--font-body)', fontWeight:900,
            fontSize:'clamp(2.4rem,5vw,4.2rem)',
            color:'var(--white)', lineHeight:1.05,
            letterSpacing:'-0.02em', marginBottom:'1.5rem',
          }}>
            Tudo para sua<br />
            <span style={{ color:'var(--yellow)', position:'relative' }}>
              obra e reforma.
              <svg style={{ position:'absolute', bottom:'-6px', left:0, width:'100%' }} viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                <path d="M2 6 Q100 1 198 6" stroke="#FCBC37" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6"/>
              </svg>
            </span>
            <br />
            <span style={{ color:'rgba(255,255,255,0.85)', fontSize:'0.72em', fontWeight:700 }}>
              Fios, máquinas e ferramentas.
            </span>
          </h1>

          <p style={{
            fontFamily:'var(--font-body)', fontWeight:400, fontSize:'clamp(0.95rem,1.8vw,1.1rem)',
            color:'rgba(255,255,255,0.78)', lineHeight:1.8, marginBottom:'2.2rem',
            maxWidth:480,
          }}>
            Ferragens, ferramentas elétricas e manuais, fios elétricos, materiais para construção — tudo com <strong style={{ color:'var(--white)', fontWeight:700 }}>atendimento de qualidade</strong> e preço justo. No coração de Guarabira – PB.
          </p>

          {/* CTAs */}
          <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap', marginBottom:'3rem' }}>
            <a href={WA} target="_blank" rel="noreferrer">
              <button style={{
                background:'var(--yellow)', color:'var(--blue-dark)',
                padding:'0.9rem 2rem', fontFamily:'var(--font-body)', fontWeight:800,
                fontSize:'0.95rem', borderRadius:'10px',
                display:'flex', alignItems:'center', gap:'0.55rem',
                boxShadow:'0 8px 28px rgba(252,188,55,0.45)',
                transition:'all var(--transition)',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 36px rgba(252,188,55,0.55)' }}
                onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 8px 28px rgba(252,188,55,0.45)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Pedir Orçamento Grátis
              </button>
            </a>
            <a href="#produtos" style={{
              padding:'0.9rem 1.8rem', fontFamily:'var(--font-body)', fontWeight:700,
              fontSize:'0.92rem', borderRadius:'10px', color:'var(--white)',
              border:'2px solid rgba(255,255,255,0.35)',
              transition:'all var(--transition)',
              display:'flex', alignItems:'center', gap:'0.5rem',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.8)'; (e.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.08)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.35)'; (e.currentTarget as HTMLElement).style.background='transparent' }}
            >
              Ver Produtos
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
          </div>

          {/* Stats */}
          <div style={{ display:'flex', gap:'2.5rem', flexWrap:'wrap' }}>
            {[
              { n: 5, suf:'+', label:'Categorias de produto' },
              { n: 5, suf:'.0★', label:'Nota no Google' },
              { n: 3, suf:'+', label:'Anos servindo Guarabira' },
            ].map((s,i) => (
              <div key={i}>
                <p style={{ fontFamily:'var(--font-body)', fontWeight:900, fontSize:'2rem', color:'var(--yellow)', lineHeight:1 }}>
                  <Counter target={s.n} />{s.suf}
                </p>
                <p style={{ fontFamily:'var(--font-body)', fontWeight:400, fontSize:'0.72rem', color:'rgba(255,255,255,0.6)', marginTop:'0.25rem', letterSpacing:'0.04em' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: logo + icons grid */}
        <div style={{
          opacity: vis?1:0, transform: vis?'translateX(0)':'translateX(40px)',
          transition:'all 0.9s ease 0.2s',
          display:'flex', flexDirection:'column', alignItems:'center', gap:'2rem',
        }} className="hero-right">
          <div style={{
            background:'rgba(255,255,255,0.07)', borderRadius:24,
            padding:'2.5rem 3rem', border:'1px solid rgba(255,255,255,0.12)',
            backdropFilter:'blur(8px)',
            display:'flex', flexDirection:'column', alignItems:'center', gap:'1.5rem',
          }}>
            <img src={logo} alt="AM Ferragens" style={{ width:'100%', maxWidth:280, objectFit:'contain', borderRadius: 12 }} />
            <p style={{ fontFamily:'var(--font-body)', fontStyle:'italic', fontWeight:400, fontSize:'0.9rem', color:'rgba(255,255,255,0.7)', textAlign:'center', lineHeight:1.7 }}>
              "Sua loja de fios, máquinas<br/>e ferramentas em Guarabira."
            </p>
          </div>

          {/* Quick categories icons strip */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'0.8rem', width:'100%' }}>
            {[
              { icon:'🔩', label:'Ferragens' },
              { icon:'⚡', label:'Elétrico' },
              { icon:'🔧', label:'Ferramentas' },
              { icon:'⚙️', label:'Máquinas' },
              { icon:'🪛', label:'Manuais' },
              { icon:'🔌', label:'Fios & Cabos' },
              { icon:'🚪', label:'Portas' },
              { icon:'🪟', label:'Janelas' },
            ].map((c,i) => (
              <div key={i} style={{
                background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.12)',
                borderRadius:10, padding:'0.7rem 0.4rem',
                display:'flex', flexDirection:'column', alignItems:'center', gap:'0.3rem',
                transition:'all var(--transition)',
                animation:`floatIn 0.5s ease ${0.8 + i*0.07}s both`,
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background='rgba(252,188,55,0.2)'; (e.currentTarget as HTMLElement).style.borderColor='rgba(252,188,55,0.5)'; (e.currentTarget as HTMLElement).style.transform='translateY(-3px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.08)'; (e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.12)'; (e.currentTarget as HTMLElement).style.transform='translateY(0)' }}
              >
                <span style={{ fontSize:'1.4rem' }}>{c.icon}</span>
                <span style={{ fontFamily:'var(--font-body)', fontWeight:600, fontSize:'0.62rem', color:'rgba(255,255,255,0.8)', letterSpacing:'0.04em', textTransform:'uppercase', textAlign:'center' }}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position:'absolute', bottom:'2rem', left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:'0.4rem', opacity:0.5, animation:'bounce 2s infinite' }}>
        <span style={{ fontFamily:'var(--font-body)', fontWeight:400, fontSize:'0.65rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--white)' }}>scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
      </div>

      <style>{`
        @keyframes pulse-yellow { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(1.3)} }
        @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(6px)} }
        @keyframes floatIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @media(max-width:768px){
          .hero-right { display:none !important; }
          section > div > div:first-child { grid-column:1/-1; }
          section > div { grid-template-columns:1fr !important; }
        }
      `}</style>
    </section>
  )
}
