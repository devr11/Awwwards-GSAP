import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'
import { useMediaQuery } from 'react-responsive'

const HeroSection = () => {

    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    })

    const isTablet = useMediaQuery({
        query: '(max-width: 1024px)'
    })

    useGSAP(()=>{
        const titleSplit = SplitText.create(".hero-title", {
            type: "chars"
        })

        
        const tl = gsap.timeline({
            delay: 0.5,
        })


        tl.to(".hero-content", {
            opacity: 1,
            y: 0,
            ease: "power1.inOut",
        }).to(".hero-text-scroll",{
            duration: 1,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            ease: "power1.inOut"
        }, "-=0.5")
        .from(titleSplit.chars, {
            yPercent: 200,
            stagger: 0.02,
            ease: "power2.out"
        }, "-=0.5")

        const heroTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero-container",
                start: "1% top",
                end: "bottom top",
                scrub: true,
            }
        })
        heroTl.to(".hero-container", {
            rotate: 7,
            scale: 0.9,
            yPercent: 30,
            ease: "power1.inOut"
        })
    })

  return (
    <section className='bg-main-bg'>
        <div className="hero-container">
            {
                isTablet ? (
                    <>
                        {isMobile && <img src='Images/hero-bg.png' className='absolute bottom-40 size-full object-cover'/>}
                        <img src='Images/hero-img.png' className='absolute bottom-0 left-1/2 -translate-x-1/2 object-auto'/>
                    </>
                ) : (
                    <video src='Videos/hero-bg.mp4' autoPlay muted playsInline className='absolute inset-0 w-full h-full object-cover' />
                )
            }
            <div className="hero-content opacity-0">
                <div className='overflow-hidden'>
                    <h1 className='hero-title'>Freaking Delicious</h1>
                </div>
                <div style={{
                    clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)'
                }} 
                className="hero-text-scroll">
            <div className='hero-subtitle'>
                <h1>Protein + Caffine</h1>
            </div>
            </div>

            <h2>
                Live life to the fullest with Spylt: Shatter boredom and embrace
                your inner kid with every delicious smooth chug.
            </h2>

            <div className="hero-button">
                <p>Chug a spylt</p>
            </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection