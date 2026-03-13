const items = [
  'Ferragens','Ferramentas Elétricas','Ferramentas Manuais',
  'Fios Elétricos','Cabos Elétricos','Parafusos & Pregos',
  'Furadeiras','Esmerilhadeiras','Tomadas & Interruptores',
  'Puxadores','Motores para Persianas','Disjuntores',
]

export default function Marquee() {
  const all = [...items, ...items]
  return (
    <div style={{ background:'var(--blue-dark)', overflow:'hidden', padding:'0.8rem 0', borderTop:'3px solid var(--yellow)', borderBottom:'3px solid var(--yellow)', position:'relative', zIndex:10 }}>
      <div style={{ display:'flex', animation:'marquee 28s linear infinite', whiteSpace:'nowrap' }}>
        {all.map((item, i) => (
          <span key={i} style={{ display:'inline-flex', alignItems:'center', gap:'0.6rem', padding:'0 2rem', fontFamily:'var(--font-body)', fontWeight:600, fontSize:'0.78rem', letterSpacing:'0.08em', textTransform:'uppercase', color:'rgba(255,255,255,0.88)', flexShrink:0 }}>
            <svg width="5" height="5" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" fill="#FCBC37"/></svg>
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  )
}
