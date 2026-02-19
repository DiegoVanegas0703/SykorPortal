import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Methodology from './components/Methodology/Methodology'
import Solutions from './components/Solutions/Solutions'
import Philosophy from './components/Philosophy/Philosophy'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'
import BackToTop from './components/BackToTop/BackToTop'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Methodology />
        <Solutions />
        <Philosophy />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
