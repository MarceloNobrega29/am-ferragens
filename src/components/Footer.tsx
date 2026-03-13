import logo from '../assets/logo.jpg'

const WA = 'https://wa.me/558332711743?text=Ol%C3%A1%21+Vim+pelo+site+da+AM+Ferragens+%F0%9F%94%A8'

export default function Footer() {
  const links = [
    { href:'#produtos', label:'Produtos' },
    { href:'#diferenciais', label:'Diferenciais' },
    { href:'#sobre', label:'Sobre' },
    { href:'#avaliacoes', label:'Avaliações' },
    { href:'#contato', label:'Contato' },
    { href:'#localizacao', label:'Localização' },
  ]
  const categories = [
    'Ferragens','Ferramentas Manuais','Ferramentas Elétricas',
    'Materiais Elétricos','Fios & Cabos','Tomadas & Interruptores',
    'Disjuntores','Parafusos & Pregos','Puxadores',
    'Motores para Persianas','Acessórios para Janelas',
  ]
  return (
    <footer style={{ background:'var(--blue-dark)', color:'rgba(255,255,255,0.85)' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'clamp(3rem,5vw,5rem) clamp(1.5rem,4vw,3rem)', display:'grid', gridTemplateColumns:'1.6fr 1fr 1.4fr 1.2fr', gap:'3rem' }} className="footer-grid">
        {/* Brand */}
        <div style={{ display:'flex', flexDirection:'column', gap:'1.2rem' }}>
          <img src={logo} alt="AM Ferragens" style={{ maxWidth:160, objectFit:'contain', borderRadius:10 }} />
          <p style={{ fontFamily:'var(--font-body)', fontWeight:400, fontSize:'0.83rem', lineHeight:1.85, color:'rgba(255,255,255,0.6)', maxWidth:280 }}>
            Sua loja de fios, máquinas e ferramentas. Tudo que você precisa para construir e reformar em Guarabira – PB.
          </p>
          <div style={{ display:'flex', gap:'0.8rem' }}>
            {[
              { href:'https://www.instagram.com/amferragenss/', icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
              { href:'https://www.facebook.com/amferragens/', icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
              { href: WA, icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
            ].map((s,i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer" style={{
                width:36, height:36, borderRadius:'50%', background:'rgba(255,255,255,0.1)',
                display:'flex', alignItems:'center', justifyContent:'center',
                color:'rgba(255,255,255,0.8)', transition:'all var(--transition)',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background='var(--yellow)'; (e.currentTarget as HTMLElement).style.color='var(--blue-dark)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.color='rgba(255,255,255,0.8)' }}
              >{s.icon}</a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 style={{ fontFamily:'var(--font-body)', fontWeight:700, fontSize:'0.78rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(255,255,255,0.4)', marginBottom:'1.2rem' }}>Navegação</h4>
          <ul style={{ display:'flex', flexDirection:'column', gap:'0.7rem' }}>
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} style={{ fontFamily:'var(--font-body)', fontWeight:500, fontSize:'0.85rem', color:'rgba(255,255,255,0.7)', transition:'color var(--transition)' }}
                  onMouseEnter={e => (e.currentTarget.style.color='var(--yellow)')}
                  onMouseLeave={e => (e.currentTarget.style.color='rgba(255,255,255,0.7)')}
                >{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 style={{ fontFamily:'var(--font-body)', fontWeight:700, fontSize:'0.78rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(255,255,255,0.4)', marginBottom:'1.2rem' }}>Categorias</h4>
          <ul style={{ display:'flex', flexDirection:'column', gap:'0.7rem' }}>
            {categories.map((c,i) => (
              <li key={i} style={{ fontFamily:'var(--font-body)', fontWeight:400, fontSize:'0.8rem', color:'rgba(255,255,255,0.6)' }}>{c}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily:'var(--font-body)', fontWeight:700, fontSize:'0.78rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(255,255,255,0.4)', marginBottom:'1.2rem' }}>Contato</h4>
          <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
            {[
              { label:'WhatsApp', value:'(83) 3271-1743', href: WA },
              { label:'Telefone', value:'(83) 3271-3511', href:'tel:+558332713511' },
              { label:'Instagram', value:'@amferragenss', href:'https://www.instagram.com/amferragenss/' },
              { label:'Endereço', value:'Av. Rui Barbosa, 212 – Centro, Guarabira – PB', href:'https://www.google.com/maps/place/Am+Ferragens/' },
            ].map((c,i) => (
              <div key={i}>
                <p style={{ fontFamily:'var(--font-body)', fontWeight:600, fontSize:'0.68rem', color:'rgba(255,255,255,0.35)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'0.1rem' }}>{c.label}</p>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith('http')?'_blank':undefined} rel="noreferrer" style={{ fontFamily:'var(--font-body)', fontWeight:500, fontSize:'0.8rem', color:'rgba(255,255,255,0.75)', transition:'color var(--transition)', lineHeight:1.5 }}
                    onMouseEnter={e => (e.currentTarget.style.color='var(--yellow)')}
                    onMouseLeave={e => (e.currentTarget.style.color='rgba(255,255,255,0.75)')}
                  >{c.value}</a>
                ) : (
                  <p style={{ fontFamily:'var(--font-body)', fontWeight:500, fontSize:'0.8rem', color:'rgba(255,255,255,0.75)', lineHeight:1.5 }}>{c.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop:'1px solid rgba(255,255,255,0.08)', padding:'1.2rem clamp(1.5rem,4vw,3rem)', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'0.5rem', maxWidth:1200, margin:'0 auto' }}>
        <p style={{ fontFamily:'var(--font-body)', fontWeight:400, fontSize:'0.75rem', color:'rgba(255,255,255,0.35)' }}>
          © {new Date().getFullYear()} AM Ferragens · Todos os direitos reservados · Guarabira – PB
        </p>
        <p style={{ fontFamily:'var(--font-body)', fontWeight:400, fontSize:'0.75rem', color:'rgba(255,255,255,0.35)' }}>
          Av. Rui Barbosa, 212 – Centro · CEP: 58200-000
        </p>
      </div>

      <style>{`@media(max-width:900px){.footer-grid{grid-template-columns:1fr 1fr!important;gap:2rem!important;}} @media(max-width:600px){.footer-grid{grid-template-columns:1fr!important;}}`}</style>
    </footer>
  )
}
