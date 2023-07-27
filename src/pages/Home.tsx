import React from 'react'
import Hero from '../components/Hero'
import News from '../components/News'
import About from '../components/About'
import Resources from '../components/Resources'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import EnrollCard from '../components/EnrollCard'

const Home = () => {
  return (
    <div>
      <Hero />
      <EnrollCard />
      <Resources />
      <News />
      <About />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home
