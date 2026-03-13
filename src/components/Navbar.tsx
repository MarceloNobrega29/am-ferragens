import { useState, useEffect } from 'react'
import logo from '../assets/logo.jpg'

const WA = 'https://wa.me/558332711743?text=Ol%C3%A1%21+Vim+pelo+site+da+AM+Ferragens+e+gostaria+de+um+or%C3%A7amento+%F0%9F%94%A8'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { href: '#produtos', label: 'Produtos' },
    { href: '#diferenciais', label: 'Diferenciais' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#avaliacoes', label: 'Avaliações' },
    { href: '#contato', label: 'Contato' },
    { href: '#localizacao', label: 'Localização' },
  ]

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
      <div className="top-bar" style={{
        background: 'var(--blue-dark)', color: 'rgba(255,255,255,0.92)',
        fontFamily: 'var(--font-body)', fontSize: '0.71rem',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        gap: '2.5rem', padding: '0.35rem 2rem', height: 30,
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-1.07-8.63A2 2 0 014 1h3a2 2 0 012 1.72c.127.96.36 1.903.7 2.81a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          (83) 3271-3511
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          (83) 3271-1743
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
          Seg–Sáb · Horário Comercial
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Guarabira – PB
        </span>
      </div>

      <nav style={{
        background: scrolled ? 'rgba(255,255,255,0.99)' : 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(16px)',
        boxShadow: scrolled ? '0 2px 24px rgba(0,18,80,0.12)' : '0 1px 0 rgba(0,18,80,0.06)',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 64,
        }}>
          <a href="#"><img src={logo} alt="AM Ferragens" style={{ height: 46, width: 'auto', objectFit: 'contain' }} /></a>

          <ul className="d-nav" style={{ display: 'flex', gap: '2.2rem', alignItems: 'center' }}>
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.8rem', color: 'var(--dark)', transition: 'color var(--transition)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--dark)')}
                >{l.label}</a>
              </li>
            ))}
          </ul>

          <a href={WA} target="_blank" rel="noreferrer" className="d-nav">
            <button style={{
              background: 'var(--yellow)', color: 'var(--blue-dark)',
              padding: '0.55rem 1.3rem', fontFamily: 'var(--font-body)',
              fontWeight: 700, fontSize: '0.78rem',
              borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.45rem',
              transition: 'all var(--transition)', boxShadow: '0 4px 16px rgba(252,188,55,0.35)',
            }}
              onMouseEnter={e => { e.currentTarget.style.background='var(--yellow-dark)'; e.currentTarget.style.transform='translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background='var(--yellow)'; e.currentTarget.style.transform='translateY(0)' }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Pedir Orçamento
            </button>
          </a>

          <button className="ham" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"
            style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 4, cursor: 'pointer' }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: 24, height: 2,
                background: 'var(--blue)', borderRadius: 99,
                transition: 'all 0.3s ease',
                transform: menuOpen ? (i===0 ? 'rotate(45deg) translateY(9.8px)' : i===2 ? 'rotate(-45deg) translateY(-9.8px)' : 'scaleX(0)') : 'none',
              }} />
            ))}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div style={{
          background: 'var(--white)', padding: '1.5rem 2rem 2rem',
          borderTop: '3px solid var(--yellow)',
          display: 'flex', flexDirection: 'column', gap: '1.2rem',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1rem',
              color: 'var(--dark)',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--dark)')}
            >{l.label}</a>
          ))}
          <a href={WA} target="_blank" rel="noreferrer" style={{
            background: 'var(--yellow)', color: 'var(--blue-dark)',
            padding: '0.8rem', textAlign: 'center',
            fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.88rem',
            borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Solicitar Orçamento
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) { .d-nav{display:none!important;} .ham{display:flex!important;} .top-bar{display:none!important;} }
      `}</style>
    </header>
  )
}
