import { useEffect, useRef, useState } from 'react'

export default function Location() {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.1 })
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [])

  return (
    <section id="localizacao" style={{ padding: 'clamp(5rem,7vw,7rem) clamp(1.5rem,5vw,4rem)', background: 'var(--off-white)' }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          textAlign: 'center', marginBottom: 'clamp(2.5rem,4vw,3.5rem)',
          opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(28px)',
          transition: 'all 0.8s ease',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
            <div style={{ width: 32, height: 4, background: 'var(--yellow)', borderRadius: 99 }} />
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--blue)' }}>Como nos encontrar</span>
            <div style={{ width: 32, height: 4, background: 'var(--yellow)', borderRadius: 99 }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 'clamp(2rem,3.5vw,3rem)', color: 'var(--dark)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            No centro de Guarabira,<br />
            <span style={{ color: 'var(--blue)' }}>fácil de encontrar.</span>
          </h2>
        </div>

        {/* Info strip */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px,1fr))', gap: '1rem',
          marginBottom: '2rem',
          opacity: vis ? 1 : 0, transition: 'all 0.8s ease 0.1s',
        }}>
          {[
            {
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
              label: 'Endereço',
              value: 'Av. Rui Barbosa, nº 212 – Centro, Guarabira – PB',
            },
            {
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12,6 12,12 16,14" /></svg>,
              label: 'Horário de Funcionamento',
              value: 'Segunda a Sábado – horário comercial',
            },
            {
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-1.07-8.63A2 2 0 014 1h3a2 2 0 012 1.72c.127.96.36 1.903.7 2.81a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>,
              label: 'Telefone',
              value: '(83) 3271-3511 — ligue agora',
            },
            {
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21l4-4 4 4" /><path d="M12 17V21" /></svg>,
              label: 'CEP',
              value: '58200-000 – Guarabira, PB',
            },
          ].map((item, i) => (
            <div key={i} style={{
              background: 'var(--white)', borderRadius: 12, padding: '1.2rem',
              border: '1.5px solid var(--gray-light)',
              display: 'flex', alignItems: 'flex-start', gap: '0.9rem',
              transition: 'all var(--transition)',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--yellow)'; (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-sm)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--gray-light)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
            >
              <div style={{ color: 'var(--blue)', flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.72rem', color: 'var(--gray)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{item.label}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.84rem', color: 'var(--dark)', lineHeight: 1.5 }}>{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Map */}
        <div
          style={{
            borderRadius: 20,
            overflow: 'hidden',
            border: '2px solid var(--gray-light)',
            boxShadow: 'var(--shadow-md)',
            opacity: vis ? 1 : 0,
            transition: 'all 0.9s ease 0.2s',
          }}
        >
          <iframe
            src="https://www.google.com/maps?q=-6.8522191,-35.4943929&hl=pt-BR&z=17&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', opacity: vis ? 1 : 0, transition: 'opacity 1s ease 0.4s' }}>
          <a
            href="https://www.google.com/maps/place/Am+Ferragens/"
            target="_blank" rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.84rem',
              color: 'var(--blue)', textDecoration: 'underline', textUnderlineOffset: 3,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15,3 21,3 21,9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
            Abrir no Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}
