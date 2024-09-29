import React from "react";

function Services() {
  return (
    <>
      <div
        className="grid col-span-1   py-5  bg-gray-900   "
        id="servicesSection" 
      >
        <div className="section-header mt-10">
          <h1
            className=" radial-text-gradient
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
            My Quality Services
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
            We transform your ideas and desires into a distinctive web project
            that inspires both you and your customers.
          </p>
        </div>

        <div className=" mt-12 py-5  px-5 backgroundGrident item1 translate-700">
          <div className="flex pr-3   ">
            <div className="text-xl font-bold flex items-center gap-2 md:text-2xl md:w-[40%]">
              <p className="text-blue-500">01</p>
              <p className="text-white">Branding Design</p>
            </div>

            <div className="ml-auto  text-2xl origin-center md:order-last text-white rotate-45 transition duration-700  hover:rotate-[-45deg]">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="md:max-lg:max-w-[600px] lg:max-w-[800px]  xl:w-[700px] px-9">
            <p
              className="text-white font-sans font-medium text-[12px]
                md:max-lg:text-[17px]
                lg:text-[22px]"
            >
              I dissect complex user experience challenges to devise solutions
              that prioritize integrity.
            </p>
          </div>
        </div>
        <div className=" py-4 px-5 backgroundGrident">
          <div className="flex pr-3  ">
            <div className="text-xl font-bold flex items-center gap-2 md:text-2xl md:w-[40%]">
              <p className="text-blue-500">02</p>
              <p className="text-white">Web Design</p>
            </div>

            <div className="ml-auto  text-2xl origin-center md:order-last text-white rotate-45 transition duration-700  hover:rotate-[-45deg]">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="md:max-lg:max-w-[600px] lg:max-w-[800px] xl:w-[700px] px-9">
            <p
              className="text-white font-sans font-medium text-[12px]  md:max-lg:text-[17px]
                lg:text-[22px]"
            >
              I dissect complex user experience challenges to devise solutions
              that prioritize integrity.
            </p>
          </div>
        </div>
        <div className=" py-4 px-5 backgroundGrident">
          <div className="flex pr-3  ">
            <div className="text-xl font-bold flex items-center gap-2 md:text-2xl md:w-[40%]">
              <p className="text-blue-500">03</p>
              <p className="text-white">UI/UX Design</p>
            </div>

            <div className="ml-auto  text-2xl origin-center md:order-last text-white rotate-45 transition duration-700  hover:rotate-[-45deg]">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="md:max-lg:max-w-[600px] lg:max-w-[800px]  xl:w-[700px] px-9">
            <p
              className="text-white font-sans font-medium   md:max-lg:text-[17px]
                lg:text-[22px]"
            >
              I dissect complex user experience challenges to devise solutions
              that prioritize integrity.
            </p>
          </div>
        </div>
        <div className=" py-4 px-5 backgroundGrident">
          <div className="flex pr-3  ">
            <div className="text-xl font-bold flex items-center gap-2 md:text-2xl md:w-[40%]">
              <p className="text-blue-500">04</p>
              <p className="text-white">Graphics Design</p>
            </div>

            <div className="ml-auto  text-2xl origin-center md:order-last text-white rotate-45 transition duration-700  hover:rotate-[-45deg]">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="md:max-lg:max-w-[600px] lg:max-w-[800px]  xl:w-[700px] px-9">
            <p
              className="text-white font-sans font-medium  md:max-lg:text-[17px]
                lg:text-[22px] "
            >
              I dissect complex user experience challenges to devise solutions
              that prioritize integrity.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
