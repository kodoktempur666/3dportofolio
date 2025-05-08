import React from 'react'
import Hero from './sections/Hero'
import ShowCaseSection from './sections/ShowCaseSection'
import Navbar from './components/Navbar'
import LogoShowcase from './sections/LogoSection'
import FeatureCards from './sections/FeatureCards'
import Experience from './sections/Experience'
import TechStack from './sections/TechStack'
import Footer from './components/Footer'

const App = () => {
  return (
    <>  
        <Navbar />
        <Hero />
        <ShowCaseSection />
        <LogoShowcase />
        <FeatureCards />
        <Experience />
        <TechStack />
        <Footer />
    </>
  )
}

export default App