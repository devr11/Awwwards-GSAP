import { ScrollSmoother, ScrollTrigger } from 'gsap/all'
import NavBar from './components/NavBar'
import HeroSection from './sections/HeroSection'
import gsap from 'gsap'
import MessageSection from './sections/MessageSection'
import FlavourSection from './sections/FlavourSection'
import { useGSAP } from '@gsap/react'
import Nutrition from './sections/NutritionSection'
import BenefitSection from './sections/BenefitSection'
import TestimonialSection from './sections/TestimonialSection'
import FooterSection from './sections/FooterSection'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

function App() {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true
    })
  })

  return (
    <>
      <NavBar />
       <div id="smooth-wrapper">
    <div id="smooth-content">
      <HeroSection />
      <MessageSection />
      <FlavourSection />
      <Nutrition /> 

      <div>
        <BenefitSection />
        <TestimonialSection />
      </div>

      <FooterSection />
    </div>
  </div>
    </>
  )
}

export default App
