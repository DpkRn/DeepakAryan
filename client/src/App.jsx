import React, { useEffect, useState } from "react";
import "./App.css";

// import Skilinf from './Components/SkilsInf'

import Nav from "./Components/Nav";
import ResentWork from "./Components/ResentWork";
import HeroSectionTwo from "./Components/HeroSectionTow";
import SkillsInfo from "./Components/SkillsInfo";
import Services from "./Components/Services";
import Education from "./Components/Education";
import Skils from "./Components/Skils";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import Contect from "./Components/Contect";

import Login from "./Components/Login.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/auth-context.jsx";
import axios from "axios";
import ProjectDetails from "./Components/projectDetails/ProjectDetails.jsx";
import { useProject } from "./context/project-context.jsx";
import { toast, ToastContainer } from "react-toastify";
import ReviewSection from "./Components/ReviewSection.jsx";

function PrivateRoute({children}){
  const {isAdmin,isLoading}=useAuth()
  if(isLoading){
    return <h1>loading</h1>
  }
  return isAdmin===true?children:<Navigate to='/'/>
  
}
function RecentWorkRoute({children}){
  const {isProjectAdded}=useProject()
  if(isProjectAdded===false){
    return <h1>loading</h1>
  }
  return children;
  
}


function App() {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    const showValue = sessionStorage.getItem("showValue");
    if (!showValue) {
      setShow(true);
      sessionStorage.setItem("showValue", true);
    }
    
   
  }, []);

  function UserPage() {
    return (
      <div className="relative">
        {/* <Skilinf/> */}
        {/* {show && <Popup show={show} setShow={setShow} />} */}
        <Nav />
        <HeroSectionTwo />
        <SkillsInfo />
        <Services />
        <RecentWorkRoute><ResentWork /></RecentWorkRoute>
        
        <Education />
        <Skils />
        <Blog />
        <ReviewSection/>
        <Contect />
        <Footer />
        <ToastContainer/>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/admin" element={<Login />} />
      <Route path="/" element={<UserPage/>} />
      <Route path='project-details' element={<PrivateRoute>
        <ProjectDetails/>
      </PrivateRoute>}/>
    </Routes>
  );
}

export default App;
