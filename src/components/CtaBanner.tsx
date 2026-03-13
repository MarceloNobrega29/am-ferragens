const WA = 'https://wa.me/558332711743?text=Ol%C3%A1%21+Preciso+de+produtos+para+minha+obra+e+vim+pelo+site+da+AM+Ferragens+%F0%9F%94%A8+Pode+me+ajudar%3F'

export default function CtaBanner() {
  return (
    <section style={{
      background: 'linear-gradient(100deg, var(--blue-dark) 0%, var(--blue) 60%, #0d1f6b 100%)',
      padding: 'clamp(4rem,6vw,5.5rem) clamp(1.5rem,5vw,4rem)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* BG shapes */}
      <div style={{ position:'absolute', top:'-30%', right:'-5%', width:'40vw', maxWidth:500, aspectRatio:'1', borderRadius:'50%', background:'rgba(252,188,55,0.06)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-30%', left:'-5%', width:'35vw', maxWidth:450, aspectRatio:'1', borderRadius:'50%', background:'rgba(252,188,55,0.04)', pointerEvents:'none' }} />

      <div style={{ maxWidth:900, margin:'0 auto', textAlign:'center', position:'relative' }}>
        {/* Badge */}
        <div style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', background:'rgba(252,188,55,0.2)', border:'1px solid rgba(252,188,55,0.35)', borderRadius:'100px', padding:'0.35rem 1rem', marginBottom:'1.5rem' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#FCBC37"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          <span style={{ fontFamily:'var(--font-body)', fontWeight:600, fontSize:'0.72rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(255,255,255,0.9)' }}>Atendimento direto no WhatsApp</span>
        </div>

        <h2 style={{
          fontFamily:'var(--font-body)', fontWeight:900,
          fontSize:'clamp(2.2rem,4vw,3.5rem)',
          color:'var(--white)', lineHeight:1.08, letterSpacing:'-0.02em', marginBottom:'1.2rem',
        }}>
          Sua obra não pode<br/>esperar. O preço<br/>
          <span style={{ color:'var(--yellow)' }}>não precisa ser um problema.</span>
        </h2>

        <p style={{ fontFamily:'var(--font-body)', fontWeight:400, fontSize:'clamp(1rem,1.8vw,1.15rem)', color:'rgba(255,255,255,0.85)', lineHeight:1.8, maxWidth:580, margin:'0 auto 2.5rem' }}>
          Chame agora no WhatsApp, descreva o que precisa e receba um orçamento <strong style={{ color:'var(--yellow)', fontWeight:700 }}>rápido, honesto e com o melhor preço de Guarabira.</strong>
        </p>

        <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
          <a href={WA} target="_blank" rel="noreferrer">
            <button style={{
              background:'var(--yellow)', color:'var(--blue-dark)',
              padding:'1rem 2.5rem', fontFamily:'var(--font-body)', fontWeight:800,
              fontSize:'1rem', borderRadius:'10px',
              display:'flex', alignItems:'center', gap:'0.6rem',
              boxShadow:'0 8px 28px rgba(252,188,55,0.35)',
              transition:'all var(--transition)',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 14px 40px rgba(252,188,55,0.5)' }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 8px 28px rgba(252,188,55,0.35)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chamar no WhatsApp Agora
            </button>
          </a>
          <a href="#localizacao" style={{
            padding:'1rem 2rem', fontFamily:'var(--font-body)', fontWeight:700,
            fontSize:'0.95rem', borderRadius:'10px', color:'var(--white)',
            border:'2px solid rgba(255,255,255,0.4)',
            transition:'all var(--transition)',
            display:'flex', alignItems:'center', gap:'0.5rem',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.8)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background='transparent'; (e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.4)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Como Chegar
          </a>
        </div>
      </div>
    </section>
  )
}
