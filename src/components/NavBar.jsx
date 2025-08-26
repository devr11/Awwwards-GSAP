import React, { useEffect } from 'react'
import logo from "../assets/logo.svg"
import { TbMenu } from "react-icons/tb";
import navi from "../assets/nav2.png"
import gsap from 'gsap';
import { IoCloseSharp } from "react-icons/io5";


const Navbar = () => {
  useEffect(() => {
      let bar = document.querySelector(".bar")
      let close = document.querySelector(".close")
      
      bar.addEventListener("click",()=>{
      
        gsap.to(".nav2",{
          height : "100%",
          opacity : 1,
          duration : 1,
          
        })          
      })
      close.addEventListener("click",()=>{
        gsap.to(".nav2",{
          height : "0%",
          opacity : 0,
          duration : 1
        })          
      })
  }, [])
  return (
    <div>
      <nav className='w-[100%] px-[3vw] py-[1.8vw] fixed z-[999] left-0  '>
        <div className='flex justify-between items-center'>
            <img className='' src={logo}></img>
      <TbMenu className='bar text-[2.3vw] cursor-pointer' />
            <button className='uppercase text-[#523122] text-[1vw] px-[1.9vw] py-[1vw] font-semibold bg-[#FEF3F0] rounded-[3vw] '>Find in Stores</button>
        </div>
      </nav>


      <div className='nav2 w-full flex h-0 absolute opacity-0 z-[9999] top-0 justify-between  '>
        <div className='w-[50%] bg-[#FAEADE] flex  '>
          <ul className='flex flex-col pl-[6vw] items-center justify-center gap-[4.2vw]' >
            <li className='uppercase leading-[1.6vw] tracking-[-.5vw] text-[6.3vw] font-semibold text-[#523122]'>Shop</li>
            <li className='uppercase leading-[1.6vw] tracking-[-.5vw] text-[6.3vw] font-semibold text-[#523122]'>Find in stores</li>
            <li className='uppercase leading-[1.6vw] tracking-[-.5vw] text-[6.3vw] font-semibold text-[#523122]'>About Us</li>
            <li className='uppercase leading-[1.6vw] tracking-[-.5vw] text-[6.3vw] font-semibold text-[#523122]'>tasty talks</li>
            <li className='uppercase leading-[1.6vw] tracking-[-.5vw] text-[6.3vw] font-semibold text-[#523122]'>Programs</li>
            <li className='uppercase leading-[1.6vw] tracking-[-.5vw] text-[6.3vw] font-semibold text-[#523122]'>Contacts</li>
          </ul>
        </div>
        <IoCloseSharp className='absolute close top-[10%] cursor-pointer text-[3vw] text-[#7E3327] left-1/2 -translate-x-1/2' />

        <div className='w-[50%]'>
          <img className='w-full h-full' src={navi}></img>
        </div>
      </div>
    </div>
  )
}

export default Navbar