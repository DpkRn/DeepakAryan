import React from "react";
import "./Test.css";

function SkilsInfo() {
  return (
    <>
    
       
      
      
    <div className="section-header">
  <h1
    className="
      text-xl            /* Default for 250px screens */
      font-bold 
      font-sans
      sm:text-2xl        /* Screen size >= 425px */
      md:text-3xl        /* Screen size >= 763px */
      lg:text-4xl        /* Screen size >= 1024px */
      xl:text-5xl        /* Screen size >= 1440px */
      ExtraLarge:text-8xl /* Screen size >= 2560px */
      ExtraLarge:p-5 
    "
  >
    Recent Blogs
  </h1>
  <p
    className="
      text-xs           /* Default for 250px screens */
      w-[90%]  
      mb-4 
      text-justify
      tracking-wider
      text-white p-2
      sm:text-sm         /* Screen size >= 425px */
      sm:w-[85%]
      md:w-[75%]         /* Screen size >= 763px */
      md:text-base
      md:p-5
      lg:w-[60%]         /* Screen size >= 1024px */
      lg:text-lg
      lg:p-8
      xl:text-xl         /* Screen size >= 1440px */
      xl:mx-12
      ExtraLarge:text-2xl /* Screen size >= 2560px */
      ExtraLarge:px-14
    "
  >
    We transform your ideas and desires into a distinctive web project that inspires both you and your customers.
  </p>
</div>

    
    </>
  );
}

export default SkilsInfo;
