import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive'

const VideoPinSection = () => {

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)"
  })

  useGSAP(()=>{
    if(!isMobile){
      const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".vd-pin-section",
        start: "-15% top",
        end: "bottom top",
        scrub: 1.5,
        pin: true,
      }
    })

    tl.to(".video-box", { 
      clipPath: "circle(100% at 50% 50%)",
      ease: "power1.inOut"
    })
    }
  })

  return (
    <section className='vd-pin-section'>
      <div style={{
        clipPath: isMobile? "circle(100% at 50% 50%)" : "circle(10% at 50% 50%)"
      }} className='size-full video-box'>
        <video src="Videos/pin-video.mp4" playsInline autoPlay muted loop></video>

        <div className="abs-center md:scale-100 scale-200">
          <img src="Images/circle-text.svg" className='spin-circle' alt="" />
          <div className="play-btn">
            <img src="Images/play.svg" className='size-[3vw] ml-[.5vw]' alt="" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default VideoPinSection