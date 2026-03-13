import { useEffect, useRef, useState } from 'react'

const diferenciais = [
  {
    icon: (
      <svg viewBox="0 0 52 52" width="44" height="44" fill="none">
        <circle cx="26" cy="26" r="24" fill="rgba(252,188,55,0.15)" stroke="rgba(252,188,55,0.4)" strokeWidth="1.5"/>
        <circle cx="26" cy="26" r="10" fill="none" stroke="#FCBC37" strokeWidth="2.5"/>
        <path d="M21 26 L24 29 L31 22" stroke="#FCBC37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 18 L38 18" stroke="#FCBC37" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
        <path d="M10 26 L16 26" stroke="#FCBC37" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
        <path d="M36 26 L42 26" stroke="#FCBC37" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
    title: 'Preço justo e satisfatório',
    text: 'Clientes que voltam confirmam: preço satisfatório e produtos de qualidade. Você não precisa procurar em outro lugar.',
  },
  {
    icon: (
      <svg viewBox="0 0 52 52" width="44" height="44" fill="none">
        <circle cx="26" cy="26" r="24" fill="rgba(252,188,55,0.15)" stroke="rgba(252,188,55,0.4)" strokeWidth="1.5"/>
        <circle cx="20" cy="20" r="6" fill="rgba(252,188,55,0.3)" stroke="#FCBC37" strokeWidth="2"/>
        <path d="M14 36 C14 32 17 30 20 30 C23 30 26 32 26 36" stroke="#FCBC37" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M28 30 C28 30 30 28 34 30 C36 31 38 34 38 36" stroke="#FCBC37" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6"/>
        <path d="M28 24 C30 22 34 22 36 24" stroke="#FCBC37" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5"/>
      </svg>
    ),
    title: 'Atendimento de qualidade',
    text: 'Nossa equipe é reconhecida pelo excelente atendimento. Do pedreiro ao eletricista, todo cliente recebe atenção completa.',
  },
  {
    icon: (
      <svg viewBox="0 0 52 52" width="44" height="44" fill="none">
        <circle cx="26" cy="26" r="24" fill="rgba(252,188,55,0.15)" stroke="rgba(252,188,55,0.4)" strokeWidth="1.5"/>
        <rect x="14" y="18" width="24" height="18" rx="3" fill="rgba(252,188,55,0.2)" stroke="#FCBC37" strokeWidth="2"/>
        <path d="M20 18 L20 14 C20 11.8 21.8 10 24 10 H28 C30.2 10 32 11.8 32 14 L32 18" stroke="#FCBC37" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="26" cy="27" r="3" fill="#FCBC37"/>
        <path d="M26 30 L26 33" stroke="#FCBC37" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Grande variedade de produtos',
    text: 'Uma loja grande, com excelente variedade de produtos. Ferragens, ferramentas elétricas, materiais elétricos e acessórios.',
  },
  {
    icon: (
      <svg viewBox="0 0 52 52" width="44" height="44" fill="none">
        <circle cx="26" cy="26" r="24" fill="rgba(252,188,55,0.15)" stroke="rgba(252,188,55,0.4)" strokeWidth="1.5"/>
        <path d="M26 12 L26 26 L34 34" stroke="#FCBC37" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="26" cy="26" r="12" stroke="#FCBC37" strokeWidth="2" fill="none"/>
        <path d="M18 14 L16 12 L14 14" stroke="#FCBC37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
      </svg>
    ),
    title: 'Atendimento Seg a Sáb',
    text: 'Funcionamos de segunda a sábado em horário comercial, para atender você quando precisar — pedreiros, eletricistas e clientes residenciais.',
  },
  {
    icon: (
      <svg viewBox="0 0 52 52" width="44" height="44" fill="none">
        <circle cx="26" cy="26" r="24" fill="rgba(252,188,55,0.15)" stroke="rgba(252,188,55,0.4)" strokeWidth="1.5"/>
        <path d="M26 12 L26 26 L26 26" stroke="#FCBC37" strokeWidth="2"/>
        <path d="M26 12 L26 26" stroke="#FCBC37" strokeWidth="2"/>
        <rect x="18" y="16" width="8" height="20" rx="2" fill="rgba(252,188,55,0.3)" stroke="#FCBC37" strokeWidth="2"/>
        <circle cx="36" cy="22" r="6" fill="rgba(252,188,55,0.2)" stroke="#FCBC37" strokeWidth="1.5"/>
        <path d="M33 22 L35 24 L39 20" stroke="#FCBC37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Especialidade em fios e elétrico',
    text: 'Loja especializada em fios elétricos, cabos, tomadas, interruptores e disjuntores. Tudo que o eletricista precisa em um só lugar.',
  },
  {
    icon: (
      <svg viewBox="0 0 52 52" width="44" height="44" fill="none">
        <circle cx="26" cy="26" r="24" fill="rgba(252,188,55,0.15)" stroke="rgba(252,188,55,0.4)" strokeWidth="1.5"/>
        <path d="M18 26 C18 22 21 19 26 19 C31 19 34 22 34 26 C34 30 31 33 26 33 C21 33 18 30 18 26Z" fill="rgba(252,188,55,0.2)" stroke="#FCBC37" strokeWidth="2"/>
        <path d="M21 26 L24 29 L31 22" stroke="#FCBC37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 10 L26 14" stroke="#FCBC37" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <path d="M38 14 L35 17" stroke="#FCBC37" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <path d="M14 14 L17 17" stroke="#FCBC37" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    title: 'Cafezinho para os clientes',
    text: 'Aquele detalhe que faz diferença: além do ótimo atendimento, tem cafezinho esperando por você. Como em todo bom atendimento nordestino!',
  },
]

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.1 })
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [])

  return (
    <section id="diferenciais" style={{
      padding: 'clamp(5rem,7vw,7rem) clamp(1.5rem,5vw,4rem)',
      background: 'linear-gradient(135deg, var(--blue-dark) 0%, var(--blue) 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position:'absolute', top:'-20%', right:'-10%', width:'50vw', maxWidth:600, aspectRatio:'1', borderRadius:'50%', background:'rgba(252,188,55,0.04)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-20%', left:'-8%', width:'40vw', maxWidth:480, aspectRatio:'1', borderRadius:'50%', background:'rgba(252,188,55,0.06)', pointerEvents:'none' }} />

      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <div style={{
          textAlign: 'center', marginBottom: 'clamp(2.5rem,4vw,4rem)',
          opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(28px)',
          transition: 'all 0.8s ease',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
            <div style={{ width: 32, height: 4, background: 'var(--yellow)', borderRadius: 99 }} />
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Por que escolher a AM Ferragens</span>
            <div style={{ width: 32, height: 4, background: 'var(--yellow)', borderRadius: 99 }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 'clamp(2rem,3.5vw,3rem)', color: 'var(--white)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '1rem' }}>
            Não é só ferragem.<br/>
            <span style={{ color: 'var(--yellow)' }}>É onde sua obra dá certo.</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '0 auto', lineHeight: 1.8 }}>
            Referência em Guarabira – PB, atendendo pedreiros, eletricistas, marceneiros, construtores e clientes residenciais com qualidade e preço justo.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.2rem' }}>
          {diferenciais.map((d, i) => {
            const [hov, setHov] = useState(false)
            return (
              <div key={i}
                onMouseEnter={() => setHov(true)}
                onMouseLeave={() => setHov(false)}
                style={{
                  background: hov ? 'rgba(252,188,55,0.1)' : 'rgba(255,255,255,0.05)',
                  border: `1.5px solid ${hov ? 'rgba(252,188,55,0.4)' : 'rgba(255,255,255,0.1)'}`,
                  borderRadius: 16, padding: '1.8rem 1.6rem',
                  transition: 'all var(--transition)',
                  transform: hov ? 'translateY(-4px)' : 'translateY(0)',
                  opacity: vis ? 1 : 0,
                  transitionDelay: `${i * 0.1}s`,
                  display: 'flex', flexDirection: 'column', gap: '1rem',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div style={{ transition: 'transform var(--transition)', transform: hov ? 'scale(1.1)' : 'scale(1)', width: 'fit-content' }}>
                  {d.icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--white)', lineHeight: 1.3 }}>{d.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}>{d.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
