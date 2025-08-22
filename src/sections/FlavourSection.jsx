import React from 'react'
import FlavourTitle from '../components/FlavourTitle'
import FlavourSlider from '../components/FlavourSlider'

const FlavourSection = () => {
  return (
    <section className='flavor-section relative min-h-screen w-full overflow-hidden bg-milk'>
      <FlavourTitle />
      <FlavourSlider />
    </section>
  )
}

export default FlavourSection