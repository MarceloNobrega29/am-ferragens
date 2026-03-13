import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Products from './components/Products'
import WhyUs from './components/WhyUs'
import About from './components/About'
import Reviews from './components/Reviews'
import CtaBanner from './components/CtaBanner'
import Contact from './components/Contact'
import Location from './components/Location'
import WhatsAppFloat from './components/WhatsAppFloat'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Products />
      <WhyUs />
      <About />
      <Reviews />
      <CtaBanner />
      <Contact />
      <Location />
      <WhatsAppFloat />
      <Footer />
    </>
  )
}
