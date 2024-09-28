import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import img from "../assets/img.jpg";
import cv from '../assets/DpkRnResume.pdf'


function HeroSectionTwo() {
 
  const textArray = [
    "Front-end Developer + ",
    "React Enthusiast + ",
    "JavaScript Expert + ",
    "CSS Designer +",
  ];

   const colorArray = ["text-red-500", "text-green-500", "text-blue-500", "text-yellow-500"]
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(textArray[index]);
      setIndex((prevIndex) => (prevIndex + 1) % textArray.length); // Loop through the array
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [index, textArray]);
  return (
    <>
      <div className="grid grid-cols-2 sm:gap-0  pt-24 ">
        <div
          className="  order-1 exs:max-sm:order-2
         exs:max-md:col-span-full
          justify-center justify-items-center p-8
           exs:max-md:p-2 
           exs:max-md:pt-5
            md:max-lg:p-1 
           md:max-lg:pt-2
         "
        >
          <div className="home-content   exs:max-md:p-2  md:max-lg:p-[15px] p-9 exs:max-md:pt-5 ">
            <div className="Heading2 ">
              <h1
                className="text-[#03e9f4] 
                 exs:max-sm:text-[40px] 
                 sm:max-md:text-[30px]
                 
                  font-bold 
                  md:max-lg:text-[35px]
                  lg:max-xl:text-[50px]
                  xl:text-[70px]
               
                  lg:mt-10"
              >
                {" "}
                Hi, i'm Anurag Kumar
              </h1>
            </div>

            <h3
              className="Heading20 radial-text-gradient  
                exs:max-sm:text-[26px]
                 sm:max-md:text-[30px] 
                 text-[30px]
                  font-semibold
                   exs:max-md:pt-2 
                   md:max-lg:text-[29px]
                   lg:text-[33px] "
            >
              {" "}
              {currentText}{" "}
            </h3>

            <div
              className="text-white font-sans font-medium 
                 exs:max-sm:text-[18px]  
                 sm:max-md:text-[30px]
                  exs:max-md:pt-2 
                  md:max-lg:text-[15px]
                  lg:text-[22px]
                  xl:mt-10"
            >
              <p className="">
                I dissect intricate user experience issues to craft solutions
                focused on integrity, linking billions of individuals..
              </p>
            </div>
            <div
              className="btn-box w-full  
                md:flex gap-4
               
                 md:max-lg:text-[15px]
                  text-[23px] 
                  font-medium 
                  lg:text-[98%]  
                 "
            >
              <a href={cv} className="btn  exs:max-sm:w-full   " download="DpkRnResume">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Download CV <i className="fa-solid fa-download"></i>
              </a>
              <a href="#contactSection" className="btn exs:max-sm:w-full  ">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Let's Talk
              </a>
            </div>

            <div
              className=" flex social-icon w-full  space-x-6  transition-all duration-1000 
                 md:max-lg:space-x-6 
                 lg:mt-9 
                  exs:max-sm:pt-5  md:max-lg:pt-9 xl:pt-12"
            >
              <a href="https://github.com/Royanurag98?tab=repositories">
                <i className="bx bxl-github"></i>
              </a>
              <a href="">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/in/anurag-kumar-7314402b8/">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="">
                <i className="bx bxl-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="   exs:max-md:col-span-full  order-2 exs:max-sm:order-1    ">
          <img
            src={img}
            alt=""
            className="img object-bottom   md:w-[80%] md:h-[85%] opacity-50 transition-all duration-700 hover:opacity-90 backdrop-blur-3xl"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSectionTwo;
