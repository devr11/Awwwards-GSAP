import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

const FlavourTitle = () => {
  useGSAP(() => {
    gsap.to(".flavor-bg-text", {
      // scrollTrigger: {
      //   trigger: ".flavor-section",
      //   start: "top bottom",
      //   end: "bottom top",
      //   scrub: true
      // },
      scale: 1.2,
      opacity: 0.1
    })
  })

  return (
    <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center pointer-events-none z-0'>
      <h2 className='flavor-bg-text text-[8vw] font-black uppercase text-dark-brown opacity-10'>
        Flavors
      </h2>
      <p className='text-dark-brown text-xl font-semibold tracking-widest upplercase mt-4'>
        Choose Your Favorite
      </p>
    </div>
  )
}

export default FlavourTitle