import React from "react";
import "./SkillsInfo.css";

function SkillsInfo() {
  return (
    <>
      <div className="services-area1 grid grid-cols-2 md:grid-cols-4  mt-1  ">

        {/* /////////////// CARDS- 1 ////////////////////////// */}
        <div className="single-item1  ">
          <div className="item-box1  rounded-lg lg:flex lg:justify-center lg:items-center lg:space-x-3  lg:h-[120px] ">
            <p
              className="text-xl lg:text-3xl  font-semibold text-white  " >
              01+
            </p>
            <p className=" text-sm lg:text-[20px] font-normal  text-[#03e9f4]  ">
              Years of <br />
              Experience
            </p>
          </div>
        </div>

          {/* /////////////// CARDS- 2 ////////////////////////// */}
        <div className="single-item1  ">
          <div className="item-box1 rounded-lg lg:flex lg:justify-center lg:items-center lg:space-x-3  lg:h-[120px] ">
            <p
              className="text-xl lg:text-3xl  font-semibold text-white " >
              15+
            </p>
            <p className=" text-sm lg:text-[20px] font-normal  text-[#03e9f4] ">
            Project <br />
            Completed
            </p>
          </div>
        </div>

  {/* /////////////// CARDS- 3 ////////////////////////// */}
        <div className="single-item1  ">
          <div className="item-box1 rounded-lg lg:flex lg:justify-center lg:items-center lg:space-x-3  lg:h-[120px] ">
            <p
              className="text-xl lg:text-3xl  font-semibold text-white " >
              120+
            </p>
            <p className=" text-sm lg:text-[20px] font-normal  text-[#03e9f4] ">
            Happy <br />
            Clients
            </p>
          </div>
        </div>

  {/* /////////////// CARDS- 4 ////////////////////////// */}
        <div className="single-item1  ">
          <div className="item-box1 rounded-lg lg:flex lg:justify-center lg:items-center lg:space-x-3  lg:h-[120px] ">
            <p
              className="text-xl lg:text-3xl  font-semibold text-white " >
              01+
            </p>
            <p className=" text-sm lg:text-[20px] font-normal  text-[#03e9f4] ">
              internships
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsInfo;
