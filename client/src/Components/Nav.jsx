import React from "react";
import "./Nav.css";
import logo1 from '../assets/LOGO.png'
import cv from '../assets/DpkRnResume.pdf'

import { useState } from 'react';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
    <header className= " bg-gray-800 text-white p-4   w-[100%] z-10  fixed ">
      <div className="container mx-auto flex justify-between items-center  z-20 ">
       
        <div className="size-[40px]">
          <img src={logo1} alt="" className="size-[40px] object-cover" />
         
        </div>

        {/* Navigation Links in the center */}
      
        <nav className=" sidebar hidden md:flex space-x-8 xl:space-x-6  
         md:max-lg:text-[15px] lg:max-xl:text-[22px] xl:text-[24px]
         xl:font-medium  lg:max-xl:font-medium  md:max-lg:font-medium
          
          ">
         
          <a href="#servicesSection" className=" hover:text-[#0bc7e0]">Services</a>
          <a href="#recentWorkSection" className=" hover:text-[#0bc7e0]">Works</a>
          <a  href={cv} className=" hover:text-[#0bc7e0]" download="DpkRnResume">Resume</a>
          
          <a href="#skillSection" className=" hover:text-[#0bc7e0]">Skills</a>
          <a href="#blogSection" className=" hover:text-[#0bc7e0]">Blogs</a>
          <a href="#contactSection" className=" hover:text-[#0bc7e0]">Contact</a>
        </nav>
  

      
        <button className=" btn2 md:block shadow-md shadow-slate-500  active:shadow-slate-950 active:bg-slate-950 cursor-pointer rounded-md p-2 ">
                  <span className="z-10 px-5 py-2 text-[15px] font-sans font-bold ">Hire Me!</span>
                </button>
        {/* Hamburger menu for mobile */}
        <div className="md:hidden " >
          <button onClick={toggleMenu} className="focus:outline-none z-30">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
    
    </header>
    {menuOpen && (
        
        <div className=" box  max-w-[250px] h-[500px] mt-[75px] z-50 backdrop-blur-md backdrop-brightness-150 md:backdrop-filter-none text-[24px] fixed px-14 border-r-8 border-[aqua] rounded-br-[60%] text-white " onClick={()=>{
          document.querySelectorAll(".box").forEach((el) => {
            el.style.display = "none";
          });
        }}>
          <div className=" flex justify-end " onClick={(e)=>{
                document.querySelectorAll(".box").forEach((el) => {
                  el.style.display = "none";
                });
          }}>
            <svg className=" stroke-[2px] size-8 absolute top-0 right-0 stroke-white hover:stroke-cyan-700   hover:stroke-2 cursor-pointer " xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24">
            <path  inecap="round" stroke-linejoin="round"d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
            </div>

       
            <div className=" space-y-8 pt-5">
          <a href="#servicesSection" className="block text-center hover:text-gray-400">Services</a>
          <a href="#recentWorkSection" className="block text-center hover:text-gray-400">Works</a>
          <a href="#resumeSection" className="block text-center hover:text-gray-400">Resume</a>
          <a href="#skillSection" className="block text-center hover:text-gray-400">Skills</a>
          <a href="#blogSection" className="block text-center hover:text-gray-400">Blogs</a>
          <a href="#contactSection" className="block text-center hover:text-gray-400">Contact</a>
        
        
        </div>
        </div>
      )}
      {/* position: absolute;
    right: 24px;
    display: block;
    font-size: 24px;
    border-radius: 50%; */}
    </>
  );
}

export default Nav;
