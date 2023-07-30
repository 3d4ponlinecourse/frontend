import React from 'react'
import Hero from '../components/Hero'
import News from '../components/News'
import About from '../components/About'
import Resources from '../components/Resources'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import EnrollCard from '../components/EnrollCard'
import FadeInWhenVisible from '../utility/FadeInWhenVisible'

const Home = () => {
  return (
    <>
      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <EnrollCard />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Resources />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <News />
      </FadeInWhenVisible>
      <About />
      <FadeInWhenVisible>
        <FAQ />
      </FadeInWhenVisible>

      <Footer />
    </>
  )
}

export default Home
