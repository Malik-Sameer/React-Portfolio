import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Herosection/Hero'
import Skills from './Components/Skills/Skills'
import Portfolio from './Components/Portfolio/Portfolio'
import Experience from './Components/Experience/Experience'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


function App() {
 
  return (
    <>
    <Navbar/>
    <Hero/>
    <Skills/>
    <Portfolio/>
    <Experience/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App