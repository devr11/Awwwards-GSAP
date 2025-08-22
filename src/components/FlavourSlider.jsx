import React, { useRef } from "react";
import { flavorlists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FlavourSlider = () => {
  const sliderRef = useRef();
  const containerRef = useRef();

  useGSAP(() => {
    const cards = gsap.utils.toArray(".flavor-card");
    const scrollWidth = sliderRef.current.scrollWidth - window.innerWidth;
    
    cards.forEach((card, i) => {
      gsap.from(card, {
        x: i % 2 === 0 ? -100 : 100,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    });

    console.log(gsap.utils)

    gsap.to(sliderRef.current, {
      x: () => -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1
      }
    });
  });

  return (
    <div ref={containerRef} className="relative w-full h-screen">
      <div ref={sliderRef} className="absolute top-0 left-0 h-full flex items-center will-change-transform">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`flavor-card relative mx-8 w-[50vw] h-[70vh] flex-none ${flavor.rotation}`}
          >
            
            <img 
              src={`Images/${flavor.color}-bg.svg`}
              alt=""
              className="absolute bottom-0 w-full h-full object-contain"
            />
            <img
              src={`Images/${flavor.color}-drink.webp`}
              alt=""
              className="absolute left-1/2 bottom-0 h-full -translate-x-1/2"
            />
            <img
              src={`Images/${flavor.color}-elements.webp`}
              alt=""
              className="absolute top-0 w-full"
            />
            <h1 className="absolute bottom-8 left-8 text-milk text-4xl font-semibold uppercase">
              {flavor.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavourSlider;