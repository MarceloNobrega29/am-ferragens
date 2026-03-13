import { useEffect, useRef, useState } from 'react'

const WA_BASE = 'https://wa.me/558332711743?text='

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [msg, setMsg] = useState('')

  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.1 })
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [])

  const handleSend = () => {
    const text = `Olá! Meu nome é ${name}${phone ? ', meu telefone é ' + phone : ''}. ${msg || 'Gostaria de um orçamento.'}`
    window.open(WA_BASE + encodeURIComponent(text), '_blank')
  }

  const info = [
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-1.07-8.63A2 2 0 014 1h3a2 2 0 012 1.72c.127.96.36 1.903.7 2.81a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
      label: 'Telefone Fixo',
      value: '(83) 3271-3511',
      href: 'tel:+558332713511',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
      label: 'WhatsApp',
      value: '(83) 3271-1743',
      href: 'https://wa.me/558332711743',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>,
      label: 'Horário',
      value: 'Segunda a Sábado — horário comercial',
      href: null,
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
      label: 'Endereço',
      value: 'Av. Rui Barbosa, 212 – Centro, Guarabira – PB',
      href: 'https://www.google.com/maps/place/Am+Ferragens/',
    },
  ]

  const inputStyle = {
    width: '100%', padding: '0.85rem 1.1rem',
    fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '0.9rem',
    color: 'var(--dark)', background: 'var(--off-white)',
    border: '1.5px solid var(--gray-light)',
    borderRadius: 10, outline: 'none',
    transition: 'border-color var(--transition)',
  }

  return (
    <section id="contato" style={{ padding: 'clamp(5rem,7vw,7rem) clamp(1.5rem,5vw,4rem)', background: 'var(--white)' }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          textAlign: 'center', marginBottom: 'clamp(2.5rem,4vw,4rem)',
          opacity: vis?1:0, transform: vis?'translateY(0)':'translateY(28px)',
          transition: 'all 0.8s ease',
        }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'0.6rem', marginBottom:'0.8rem' }}>
            <div style={{ width:32, height:4, background:'var(--yellow)', borderRadius:99 }} />
            <span style={{ fontFamily:'var(--font-body)', fontWeight:600, fontSize:'0.72rem', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--blue)' }}>Fale conosco</span>
            <div style={{ width:32, height:4, background:'var(--yellow)', borderRadius:99 }} />
          </div>
          <h2 style={{ fontFamily:'var(--font-body)', fontWeight:800, fontSize:'clamp(2rem,3.5vw,3rem)', color:'var(--dark)', letterSpacing:'-0.02em', lineHeight:1.1 }}>
            Precisa de ferramentas ou ferragens?<br/>
            <span style={{ color:'var(--blue)' }}>A gente está aqui.</span>
          </h2>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.2fr', gap:'3.5rem', alignItems:'start' }} className="contact-grid">
          {/* Info cards */}
          <div style={{ display:'flex', flexDirection:'column', gap:'1rem', opacity:vis?1:0, transition:'all 0.8s ease 0.1s' }}>
            <div style={{ background:'linear-gradient(135deg, var(--blue-dark) 0%, var(--blue) 100%)', borderRadius:16, padding:'2rem', color:'white', marginBottom:'0.5rem' }}>
              <h3 style={{ fontFamily:'var(--font-body)', fontWeight:700, fontSize:'1.1rem', marginBottom:'0.7rem' }}>AM Ferragens</h3>
              <p style={{ fontFamily:'var(--font-body)', fontWeight:400, fontSize:'0.85rem', color:'rgba(255,255,255,0.75)', lineHeight:1.8 }}>
                Av. Rui Barbosa, nº 212<br/>Centro · Guarabira – PB<br/>CEP: 58200-000
              </p>
              <div style={{ marginTop:'1rem', paddingTop:'1rem', borderTop:'1px solid rgba(255,255,255,0.15)' }}>
                <p style={{ fontFamily:'var(--font-body)', fontWeight:400, fontSize:'0.8rem', color:'rgba(255,255,255,0.6)', fontStyle:'italic' }}>
                  "Loja especializada em ferragens, fios elétricos, máquinas e ferramentas."
                </p>
              </div>
            </div>
            {info.map((item, i) => (
              <a key={i} href={item.href || undefined} target={item.href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{
                display:'flex', alignItems:'center', gap:'1rem',
                background:'var(--off-white)', borderRadius:12, padding:'1rem 1.2rem',
                border:'1.5px solid var(--gray-light)',
                transition:'all var(--transition)',
                cursor: item.href ? 'pointer' : 'default',
                textDecoration: 'none',
              }}
                onMouseEnter={e => { if(item.href){ (e.currentTarget as HTMLElement).style.borderColor='var(--yellow)'; (e.currentTarget as HTMLElement).style.background='rgba(252,188,55,0.05)' } }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor='var(--gray-light)'; (e.currentTarget as HTMLElement).style.background='var(--off-white)' }}
              >
                <div style={{ color:'var(--blue)', flexShrink:0 }}>{item.icon}</div>
                <div>
                  <p style={{ fontFamily:'var(--font-body)', fontWeight:600, fontSize:'0.72rem', color:'var(--gray)', letterSpacing:'0.06em', textTransform:'uppercase', marginBottom:'0.15rem' }}>{item.label}</p>
                  <p style={{ fontFamily:'var(--font-body)', fontWeight:600, fontSize:'0.88rem', color:'var(--dark)' }}>{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <div style={{ background:'var(--off-white)', borderRadius:20, padding:'2.2rem', border:'1.5px solid var(--gray-light)', opacity:vis?1:0, transition:'all 0.8s ease 0.2s' }}>
            <h3 style={{ fontFamily:'var(--font-body)', fontWeight:800, fontSize:'1.3rem', color:'var(--dark)', marginBottom:'0.4rem' }}>Enviar mensagem</h3>
            <p style={{ fontFamily:'var(--font-body)', fontWeight:400, fontSize:'0.82rem', color:'var(--gray)', marginBottom:'1.8rem', lineHeight:1.7 }}>
              Preencha abaixo e continue a conversa direto no <strong style={{ color:'#25D366' }}>WhatsApp</strong>. Respondemos rápido!
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
              <div>
                <label style={{ fontFamily:'var(--font-body)', fontWeight:600, fontSize:'0.76rem', color:'var(--dark)', letterSpacing:'0.05em', display:'block', marginBottom:'0.4rem' }}>SEU NOME *</label>
                <input
                  value={name} onChange={e => setName(e.target.value)}
                  placeholder="Ex: João Silva"
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor='var(--blue)')}
                  onBlur={e => (e.target.style.borderColor='var(--gray-light)')}
                />
              </div>
              <div>
                <label style={{ fontFamily:'var(--font-body)', fontWeight:600, fontSize:'0.76rem', color:'var(--dark)', letterSpacing:'0.05em', display:'block', marginBottom:'0.4rem' }}>SEU TELEFONE *</label>
                <input
                  value={phone} onChange={e => setPhone(e.target.value)}
                  placeholder="(83) 9 ____-____"
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor='var(--blue)')}
                  onBlur={e => (e.target.style.borderColor='var(--gray-light)')}
                />
              </div>
              <div>
                <label style={{ fontFamily:'var(--font-body)', fontWeight:600, fontSize:'0.76rem', color:'var(--dark)', letterSpacing:'0.05em', display:'block', marginBottom:'0.4rem' }}>O QUE VOCÊ PRECISA?</label>
                <textarea
                  value={msg} onChange={e => setMsg(e.target.value)}
                  rows={4}
                  placeholder="Ex: Preciso de parafusos, fio elétrico e furadeira..."
                  style={{ ...inputStyle, resize:'none' }}
                  onFocus={e => (e.target.style.borderColor='var(--blue)')}
                  onBlur={e => (e.target.style.borderColor='var(--gray-light)')}
                />
              </div>
              <button
                onClick={handleSend}
                disabled={!name || !phone}
                style={{
                  background: (!name||!phone) ? '#ccc' : 'var(--yellow)',
                  color: (!name||!phone) ? '#888' : 'var(--blue-dark)',
                  width:'100%',
                  padding:'0.95rem', fontFamily:'var(--font-body)',
                  fontWeight:800, fontSize:'0.92rem', borderRadius:10,
                  display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem',
                  transition:'all var(--transition)',
                  cursor: (!name||!phone) ? 'not-allowed' : 'pointer',
                  boxShadow: (!name||!phone) ? 'none' : '0 6px 20px rgba(252,188,55,0.4)',
                }}
                onMouseEnter={e => { if(name&&phone){ e.currentTarget.style.background='var(--yellow-dark)'; e.currentTarget.style.transform='translateY(-1px)' } }}
                onMouseLeave={e => { e.currentTarget.style.background=(!name||!phone)?'#ccc':'var(--yellow)'; e.currentTarget.style.transform='translateY(0)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Enviar pelo WhatsApp
              </button>
              <p style={{ fontFamily:'var(--font-body)', fontWeight:400, fontSize:'0.72rem', color:'var(--gray)', textAlign:'center', lineHeight:1.6 }}>
                Ao clicar, você será redirecionado para o WhatsApp com sua mensagem pronta.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){ .contact-grid{grid-template-columns:1fr!important;gap:2rem!important;} }
      `}</style>
    </section>
  )
}
