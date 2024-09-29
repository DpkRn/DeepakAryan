import React, { useEffect, useState } from "react";
import "./resentWork.css";
import img1 from "../assets/project-1.jpg";
import img3 from "../assets/project-3.jpg";
import img2 from "../assets/project-2.jpg";
import img4 from "../assets/project-4.jpg";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";
import { useProject } from "../context/project-context";
import Project from "./projectDetails/Project";

function ResentWork() {

  const navigate = useNavigate();
  const { projects } = useProject();
  const [projectArr, setProjectArray] = useState(projects);
  const { isAdmin } = useAuth();
  const [flag,setFlag]=useState(false)
  const [project,setProject]=useState({})
  


  const showProject=(project1)=>{
   setFlag(true)
   console.log("clicked");
   
   setProject(project1)
  }

  const handleButton = (e) => {
    const ind = document.querySelector(".indicator");
    const button = e.target;
    const category = button.id;

    // Setting indicator
    const rect = button.getBoundingClientRect();
    ind.style.left = rect.left;
    ind.innerText = button.innerText;
    ind.style.width = rect.width + "px";
    ind.style.transform = `translateX(${button.offsetLeft}px)`;

    // Filter projects based on category
    if (category === "all") {
      setProjectArray(projects);
    } else {
      const arr = projects.filter((project) => project.projectType === category);
      setProjectArray(arr);
    }
  };

  const modifyProject = (id) => {
    if (id) {
      const projectToEdit = projects.find((project) => project._id === id);
      navigate("/project-details", { state: { projectId: id, initialProject: projectToEdit } });
    } else {
      navigate("/project-details");
    }
  };

  return (
    <>
      <div className="grid p-2" id="recentWorkSection">
        <div className="section-header mt-10">
          <h1 className="text-xl font-bold font-sans sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl ExtraLarge:text-8xl ExtraLarge:p-5">
            My Recent Works
          </h1>
          <p className="text-xs w-[90%] mb-4 text-justify tracking-wider text-white p-2 sm:text-sm sm:w-[85%] md:w-[75%] md:text-base md:p-5 lg:w-[60%] lg:text-lg lg:p-8 xl:text-xl xl:mx-12 ExtraLarge:text-2xl ExtraLarge:px-14">
            We transform your ideas and desires into a distinctive web project that inspires both you and your customers.
          </p>
        </div>

        <div className="relative w-[95%] md:w-max mx-auto my-10 h-12 exs:max-sm:h-10 text-xs grid grid-cols-4 items-center px-[3px] rounded-full bg-blue-600 border border-primaryColor transition md:h-14 md:text-base mb-5">
          <button onClick={handleButton} id="all" className="btn tab block px-3 rounded-full h-[100%] md:px-6 text-white">All</button>
          <button onClick={handleButton} id="Website" className="btn tab block px-3 rounded-full h-[100%] md:px-6 text-white">Website</button>
          <button onClick={handleButton} id="WebApps" className="btn tab block px-3 rounded-full h-[100%] md:px-6 text-white">WebApps</button>
          <button onClick={handleButton} id="MobileApps" className="btn tab block px-3 rounded-full h-[100%] md:px-6 text-white">MobileApps</button>
          <div className="indicator top-0 left-0 absolute h-[100%] w-[20%] grid place-items-center bg-blue-500 rounded-full duration-300 text-[aqua]">All</div>
        </div>
      </div>

      <div className="scrolling-container whitespace-nowrap">
        {projectArr &&
          projectArr.map((project) => (
            <div key={project._id} className={`card inline-block lg:w-[31%] md:w-[48%] sm:w-[96%] bg-white shadow-lg rounded-lg mx-2 my-4 lg:mx-3 xl:mx-4`}>
              <div className="p-4 cardImg">
                <div className="cardHeader flex justify-between items-center">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  {isAdmin && (
                    <button
                      className="bg-slate-400 px-3 py-1 rounded-xl font-bold active:bg-slate-600 hover:cursor-pointer"
                      onClick={() => modifyProject(project._id)}
                    >
                      Edit
                    </button>
                  )}
                </div>
                <div className="w-[100%] h-[320px] lg:h-[330px] my-3">
                  <img src={project.image} alt="img" className="w-[100%] h-[320px] lg:h-[330px] object-cover" />
                </div>
                <div className="cardTitle">
                  <div className="flex flex-col text-center border-solid h-full m-5">
                    <h3 className="font-bold text-[aqua] text-2xl uppercase">{project.title}</h3>
                    <span className="font-semibold text-white text-justify text-wrap mt-5 text-xl">
                      {project.description.slice(0, 150)}
                    </span>
                    <span
                      className="absolute right-6 bottom-4 border rounded-md px-2 hover:cursor-pointer text-[aqua] font-bold text-lg"
                      onClick={() => showProject(project)} // Pass project ID to modifyProject
                    >
                      read more...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {isAdmin && (
        <div className="text-right">
          <button
            className="bg-slate-400 mr-10 px-4 py-3 rounded-xl font-bold active:bg-slate-600 hover:cursor-pointer"
            onClick={() => modifyProject(null)}
          >
            Add new project
          </button>
         
        </div>
      )}
       {flag&&<Project project={project} setFlag={setFlag}/>}
    </>
  );
}

export default ResentWork;
