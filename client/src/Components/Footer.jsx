import React from 'react'
import logo from '../assets/LOGO.png'

function Footer() {
  return (
    <>
      <div className=' flex flex-col justify-center items-center  mt-10'>
         <div className=' size-[100px]  mt-3 hover:rotate-45 ' >
           <img src={logo} alt="" className='object-cover size-[100px] ' />
        </div>
        <h1 className='text-white text-sm font-medium pt-3 md:text-lg lg:text-xl '>Services Works Resume Testimonals Contact</h1>
        <p className='text-[aqua] text-[10px] pt-1 md:text-[15px]'>@ 2024 All rights recived by LightCode .</p>
      </div>
    </>
  )
}

export default Footer
