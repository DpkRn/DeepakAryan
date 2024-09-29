import React from "react";

function Education() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 p-5 gap-10">
       
         {/* Exprience */}
        <div className="border border-solid border-gray-700 p-3 grid gap-5   ">
          <div className=" flex justify-center items-center gap-3 p-3 ">
            <div className="text-3xl text-[#03e9f4]  md:text-4xl lg:text-5xl">
              <i className="fa-solid fa-medal"></i>
            </div>
            <div >
              <h2 className="text-white text-3xl font-bold md:text-3xl lg:text-4xl xl:text-5xl ">
                Experience
              </h2>
            </div>
          </div>
          <div className=" rounded-3xl  bg-black backgroundGrident  p-5 ">
            {/* <!-- card 1 --> */}
            <p className=" text- font-bold pb-3 text-blue-400">2022-Present</p>
            <p className="text-xl font-bold uppercase text-white lg:2xl xl:text-3xl">
              {" "}
              Lead Developer{" "}
            </p>
            <p className="text-white font-medium xl:text-xl">Blockdots, Delhi</p>
          </div>
          <div className=" rounded-3xl  bg-black backgroundGrident  p-5">
            {/* <!-- card 2 --> */}
            <p className=" text- font-bold pb-3 text-blue-400"> 2021-2022</p>
            <p className="text-xl font-bold uppercase text-white lg:2xl xl:text-3xl">
              {" "}
              full stack web developer{" "}
            </p>
            <p className="text-white font-medium xl:text-xl">Parsons, The new school</p>
          </div>
          <div className=" rounded-3xl bg-black backgroundGrident  p-5">
            {/* <!-- card 3 --> */}
            <p className=" text- font-bold pb-3 text-blue-400">2022-2023</p>
            <p className="text-xl font-bold uppercase text-white lg:2xl xl:text-3xl">
              {" "}
              UI/UX designer{" "}
            </p>
            <p className="text-white font-medium xl:text-xl">house of life, Leeds</p>
          </div>
          <div className=" rounded-3xl  bg-black backgroundGrident  p-5">
            {/* <!-- card 4 --> */}
            <p className=" text- font-bold pb-3 text-blue-400">2024-Present</p>
            <p className="text-xl font-bold uppercase text-white lg:2xl xl:text-3xl">
              {" "}
              Junior graphics designer{" "}
            </p>
            <p className="text-white font-medium xl:text-xl">Theme Junction, Bursa</p>
          </div>
         
        </div>

        {/* Education */}
        <div className="border border-solid border-gray-700 p-3 grid gap-5 ">
          <div className=" flex justify-center items-center gap-3 p-3">
            <div className="text-3xl text-[#03e9f4] md:text-3xl lg:text-4xl xl:text-5xl">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <div>
              <h2 className="text-white text-3xl font-bold md:text-3xl lg:text-4xl xl:text-5xl ">
                Education
              </h2>
            </div>
          </div>
          <div className=" rounded-3xl bg-black backgroundGrident  p-5">
            {/* <!-- card 1 --> */}
            <p className=" text- font-bold pb-3 text-blue-400">2022-Present</p>
            <p className="text-xl font-bold uppercase text-white lg:2xl xl:text-3xl">
              {" "}
              Masters in computer Application{" "}
            </p>
            <p className="text-white font-medium xl:text-xl">Lovely professional university, Phagwara</p>
          </div>
          <div className=" rounded-3xl  bg-black backgroundGrident p-5 ">
            {/* <!-- card 2 --> */}
            <p className=" text- font-bold pb-3 text-blue-400"> 2021-2022</p>
            <p className="text-xl font-bold uppercase text-white lg:2xl xl:text-3xl">
              {" "}
              Competitive Programmer{" "}
            </p>
            <p className="text-white font-medium xl:text-xl">Codeforces</p>
          </div>
          <div className=" rounded-3xl  bg-black backgroundGrident  p-5">
            {/* <!-- card 3 --> */}
            <p className=" text- font-bold pb-3 text-blue-400"> 2017-2020</p>
            <p className="text-xl font-bold uppercase text-white lg:2xl xl:text-3xl">
              {" "}
              Batchlors in Computer Science{" "}
            </p>
            <p className="text-white font-medium xl:text-xl">Arcade Business College, Patna</p>
          </div>
          <div className=" rounded-3xl  bg-black backgroundGrident  p-5">
            {/* <!-- card 4 --> */}
            <p className=" text- font-bold pb-3 text-blue-400"> 2014-2016</p>
            <p className="text-xl font-bold uppercase text-white lg:2xl xl:text-3xl">
              {" "}
              Basic Academic{" "}
            </p>
            <p className="text-white font-medium xl:text-xl">Sitamarhi, Patna</p>
          </div>
        
        </div>
      </div>
    </>
  );
}

export default Education;
