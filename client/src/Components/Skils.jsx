import React from 'react'
import img1 from '../assets/figma.svg'
import img2 from '../assets/close-line.svg'
import img3 from '../assets/js.svg'
import img4 from '../assets/react.svg'
import img5 from '../assets/sketch.svg'
import img6 from '../assets/wp.svg'
import img7 from '../assets/xd.svg'


function Skils() {
  return (
    <>
      <div className='grid   gap-3 pt-10' id="skillSection">
        {/* <div className='  p-5 flex  flex-col justify-center items-center py-10'>
          <h2 className="text-[#03e9f4] text-2xl font-bold font-sans md:text-4xl xl:text-5xl ExtraLarge:text-8xl ExtraLarge:p-5 ">My Skills</h2>
          <p className=" text-md text-justify tracking-wider text-white p-2 md:p-5 md:w-[70%] md:text-xl lg:w-[60%] lg:text-3xl lg:p-8  xl:text-4xl xl:mx-12 ExtraLarge:text-7xl ExtraLarge:px-14  ">
            We transform your ideas and desires into a distinctive web project
            that inspires both you and your customers.
          </p>
        </div> */}
 


 <div className="section-header ">
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
   My Skills
  </h1>
  <p
    className="
      text-xs           /* Default for 250px screens */
      w-[90%]  
      mb-4 
      text-justify
      tracking-wider
      text-[aqua] p-2
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


        <div className='  grid content-center 
        grid-cols-2 
         p-5
        md:grid-cols-4
         lg:grid-cols-5
         ExtraLarge:grid-cols-6 
         gap-x-4
         gap-y-4   '>
            <div className=' flex  flex-col justify-center items-center p-2 md:p-2 lg:p-4 whitespace-nowrap  '>
            <div className=' border-2 border-[#292828] p-2 md:p-2 lg:p-4 flex flex-col justify-center items-center  md:size-[100px] xl:size-[150px] ExtraLarge:size-[230px] rounded-lg bg-[hsl(0,5%,11%)] hover:border-[#5142d371] hover:hover:bg-[#0f0b3571]'>
                 <img className=" w-[60%] md:w-[50%] lg:max-w-16 ExtraLarge:size-[100px]" src={img1} alt="" />
                 <p className=" text-lg mt-2 md:mt-3 md:text-2xl ExtraLarge:text-[50px] font-bold hover:text-[#03e9f4] text-[gray] ">92%</p>
              </div>
                 <p className="text-center mt-1 md:mt-2 lg:mt-3 ExtraLarge:text-4xl capitalize text-blue-600 font-semibold">Figma </p>     
            </div>

            <div className='  flex  flex-col justify-center items-center p-2 md:p-2 lg:p-4 whitespace-nowrap  '>
            <div className=' border-2 border-[#292828] p-2 md:p-2 lg:p-4 flex flex-col justify-center items-center  md:size-[100px] xl:size-[150px] ExtraLarge:size-[230px] rounded-lg bg-[hsl(0,5%,11%)] hover:border-[#5142d371] hover:hover:bg-[#0f0b3571]'>
                 <img className=" w-[60%] md:w-[50%] lg:max-w-16 ExtraLarge:size-[100px]" src={img5} alt="" />
                 <p className=" text-lg mt-2 md:mt-3 md:text-2xl ExtraLarge:text-[50px] font-bold hover:text-[#03e9f4] text-[gray] ">92%</p>
              </div>
                 <p className="text-center mt-1 md:mt-2 lg:mt-3 ExtraLarge:text-4xl capitalize text-blue-600 font-semibold">Sketch </p>     
            </div>


            <div className='  flex  flex-col justify-center items-center p-2 md:p-2 lg:p-4 whitespace-nowrap  '>
            <div className=' border-2 border-[#292828] p-2 md:p-2 lg:p-4 flex flex-col justify-center items-center  md:size-[100px] xl:size-[150px] ExtraLarge:size-[230px] rounded-lg bg-[hsl(0,5%,11%)] hover:border-[#5142d371] hover:hover:bg-[#0f0b3571]'>
                 <img className=" w-[60%] md:w-[50%] lg:max-w-16 ExtraLarge:size-[100px]" src={img7} alt="" />
                 <p className=" text-lg mt-2 md:mt-3 md:text-2xl ExtraLarge:text-[50px] font-bold hover:text-[#03e9f4] text-[gray] ">92%</p>
              </div>
                 <p className="text-center mt-1 md:mt-2 lg:mt-3 ExtraLarge:text-4xl capitalize text-blue-600 font-semibold">X-D </p>     
            </div>

            <div className=' flex  flex-col justify-center items-center p-2 md:p-2 lg:p-4 whitespace-nowrap  '>
            <div className=' border-2 border-[#292828] p-2 md:p-2 lg:p-4 flex flex-col justify-center items-center  md:size-[100px] xl:size-[150px] ExtraLarge:size-[230px] rounded-lg bg-[hsl(0,5%,11%)] hover:border-[#5142d371] hover:hover:bg-[#0f0b3571]'>
                 <img className=" w-[60%] md:w-[50%] lg:max-w-16 ExtraLarge:size-[100px]" src={img6} alt="" />
                 <p className=" text-lg mt-2 md:mt-3 md:text-2xl ExtraLarge:text-[50px] font-bold hover:text-[#03e9f4] text-[gray] ">92%</p>
              </div>
                 <p className="text-center mt-1 md:mt-2 lg:mt-3 ExtraLarge:text-4xl capitalize text-blue-600 font-semibold">Wordpress </p>     
            </div>

            <div className=' flex  flex-col justify-center items-center p-2 md:p-2 lg:p-4 whitespace-nowrap  '>
            <div className=' border-2 border-[#292828] p-2 md:p-2 lg:p-4 flex flex-col justify-center items-center  md:size-[100px] xl:size-[150px] ExtraLarge:size-[230px] rounded-lg bg-[hsl(0,5%,11%)] hover:border-[#5142d371] hover:hover:bg-[#0f0b3571]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
            </svg>
                 <p className=" text-lg mt-2 md:mt-3 md:text-2xl ExtraLarge:text-[50px] font-bold hover:text-[#03e9f4] text-[gray] ">92%</p>
              </div>
                 <p className="text-center mt-1 md:mt-2 lg:mt-3 ExtraLarge:text-4xl capitalize text-blue-600 font-semibold">HTML </p>     
            </div>

            <div className='  flex  flex-col justify-center items-center p-2 md:p-2 lg:p-4 whitespace-nowrap  '>
            <div className=' border-2 border-[#292828] p-2 md:p-2 lg:p-4 flex flex-col justify-center items-center  md:size-[100px] xl:size-[150px] ExtraLarge:size-[230px] rounded-lg bg-[hsl(0,5%,11%)] hover:border-[#5142d371] hover:hover:bg-[#0f0b3571]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <path fill="#3070b7" d="M83.105,15H16.895l5.842,66.211L50,89l27.263-7.789L83.105,15L83.105,15z"></path><path fill="#1f212b" d="M50,90c-0.093,0-0.185-0.013-0.274-0.039l-27.263-7.79c-0.398-0.114-0.686-0.461-0.722-0.874	l-5.843-66.21c-0.024-0.279,0.069-0.556,0.259-0.763S16.614,14,16.895,14h66.211c0.28,0,0.548,0.118,0.737,0.325	s0.283,0.484,0.259,0.763l-5.843,66.21c-0.036,0.413-0.323,0.76-0.722,0.874l-27.263,7.79C50.185,89.987,50.093,90,50,90z M23.673,80.438L50,87.96l26.327-7.522L82.014,16H17.986L23.673,80.438z"></path><polygon fill="#09ace3" points="50,20.5 50,82.963 71.811,76.732 76.709,20.5"></polygon><polygon fill="#fefdef" points="67.721,30.579 50,30.579 49,34 50,38.368 59.542,38.368 58.958,46.158 50,46.158 49,50 50,53.947 58.568,53.947 57.984,62.711 50,65.437 49,70 50,73.616 65.384,68.553 66.747,46.158 66.747,46.158"></polygon><path fill="#eeecd9" d="M50,30.579v7.789H32.668l-0.584-7.789H50z M41.042,46.158l0.389,7.789H50v-7.789H41.042z M41.821,57.842h-7.789l0.584,10.711L50,73.616v-8.179l-7.984-2.726L41.821,57.842z"></path><path fill="#1f212b" d="M50,31.079c-0.276,0-0.5-0.224-0.5-0.5V20.5c0-0.276,0.224-0.5,0.5-0.5h3.5	c0.276,0,0.5,0.224,0.5,0.5S53.776,21,53.5,21h-3v9.579C50.5,30.855,50.276,31.079,50,31.079z"></path><path fill="#1f212b" d="M60.5,21h-4c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h4c0.276,0,0.5,0.224,0.5,0.5	S60.776,21,60.5,21z"></path><path fill="#1f212b" d="M50,83.463c-0.107,0-0.213-0.035-0.301-0.101c-0.126-0.095-0.199-0.243-0.199-0.399V76.5	c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v5.8l20.843-5.955L76.163,21H63.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5	h13.209c0.141,0,0.273,0.059,0.368,0.162s0.143,0.242,0.13,0.381l-4.898,56.231c-0.018,0.207-0.161,0.38-0.36,0.438l-21.811,6.232	C50.092,83.457,50.046,83.463,50,83.463z"></path><path fill="#1f212b" d="M50,65.937c-0.276,0-0.5-0.224-0.5-0.5v-8.49c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v8.49	C50.5,65.713,50.276,65.937,50,65.937z"></path><path fill="#1f212b" d="M50,46.658c-0.276,0-0.5-0.224-0.5-0.5v-4.789c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v4.789	C50.5,46.434,50.276,46.658,50,46.658z"></path><path fill="#1f212b" d="M50,74.116c-0.053,0-0.105-0.008-0.156-0.025L34.46,69.028c-0.195-0.064-0.332-0.242-0.343-0.448	l-0.585-10.71c-0.008-0.137,0.042-0.271,0.136-0.371c0.095-0.1,0.226-0.156,0.363-0.156h7.79c0.269,0,0.489,0.212,0.5,0.48	l0.181,4.526L50,64.909l7.508-2.564l0.526-7.897H41.432c-0.267,0-0.486-0.209-0.499-0.475l-0.39-7.79	c-0.007-0.137,0.042-0.271,0.137-0.37s0.226-0.155,0.362-0.155h17.452l0.509-6.789H32.668c-0.262,0-0.479-0.202-0.499-0.462	l-0.584-7.79c-0.01-0.139,0.038-0.276,0.133-0.377c0.095-0.102,0.228-0.16,0.366-0.16h35.637c0.138,0,0.27,0.057,0.364,0.158	s0.144,0.236,0.135,0.374l-2.337,37.973c-0.013,0.205-0.148,0.381-0.343,0.445l-15.384,5.063C50.105,74.107,50.053,74.116,50,74.116	z M35.097,68.185L50,73.089l14.905-4.906l2.283-37.104H32.623l0.509,6.79h26.41c0.139,0,0.271,0.058,0.366,0.16	c0.095,0.102,0.143,0.238,0.133,0.377l-0.584,7.789c-0.02,0.261-0.237,0.462-0.499,0.462H41.567l0.34,6.79h16.661	c0.139,0,0.271,0.057,0.365,0.158s0.143,0.237,0.134,0.375l-0.584,8.763c-0.014,0.201-0.146,0.375-0.338,0.44l-7.984,2.727	c-0.104,0.036-0.219,0.036-0.322,0l-7.984-2.727c-0.196-0.067-0.33-0.247-0.339-0.453l-0.175-4.388H34.56L35.097,68.185z"></path>
             </svg>
                 <p className=" text-lg mt-2 md:mt-3 md:text-2xl ExtraLarge:text-[50px] font-bold hover:text-[#03e9f4] text-[gray] ">92%</p>
              </div>
                 <p className="text-center mt-1 md:mt-2 lg:mt-3 ExtraLarge:text-4xl capitalize text-blue-600 font-semibold">CSS </p>     
            </div>

            <div className=' flex  flex-col justify-center items-center p-2 md:p-2 lg:p-4 whitespace-nowrap  '>
            <div className=' border-2 border-[#292828] p-2 md:p-2 lg:p-4 flex flex-col justify-center items-center  md:size-[100px] xl:size-[150px] ExtraLarge:size-[230px] rounded-lg bg-[hsl(0,5%,11%)] hover:border-[#5142d371] hover:hover:bg-[#0f0b3571]'>
                 <img className=" w-[60%] md:w-[50%] lg:max-w-16 ExtraLarge:size-[100px]" src={img3} alt="" />
                 <p className=" text-lg mt-2 md:mt-3 md:text-2xl ExtraLarge:text-[50px] font-bold hover:text-[#03e9f4] text-[gray] ">92%</p>
              </div>
                 <p className="text-center mt-1 md:mt-2 lg:mt-3 ExtraLarge:text-4xl capitalize text-blue-600 font-semibold">JavaScript </p>     
            </div>

            <div className='  flex  flex-col justify-center items-center p-2 md:p-2 lg:p-4 whitespace-nowrap  '>
            <div className=' border-2 border-[#292828] p-2 md:p-2 lg:p-4 flex flex-col justify-center items-center  md:size-[100px] xl:size-[150px] ExtraLarge:size-[230px] rounded-lg bg-[hsl(0,5%,11%)] hover:border-[#5142d371] hover:hover:bg-[#0f0b3571]'>
                 <img className=" w-[60%] md:w-[50%] lg:max-w-16 ExtraLarge:size-[100px]" src={img4} alt="" />
                 <p className=" text-lg mt-2 md:mt-3 md:text-2xl ExtraLarge:text-[50px] font-bold hover:text-[#03e9f4] text-[gray] ">92%</p>
              </div>
                 <p className="text-center mt-1 md:mt-2 lg:mt-3 ExtraLarge:text-4xl capitalize text-blue-600 font-semibold">React.js </p>     
            </div>

            <div className='  flex  flex-col justify-center items-center p-2 md:p-2 lg:p-4 whitespace-nowrap  '>
            <div className=' border-2 border-[#292828] p-2 md:p-2 lg:p-4 flex flex-col justify-center items-center  md:size-[100px] xl:size-[150px] ExtraLarge:size-[230px] rounded-lg bg-[hsl(0,5%,11%)] hover:border-[#5142d371] hover:hover:bg-[#0f0b3571]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path fill="#21a366" d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"></path><path fill="#21a366" d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"></path>
            </svg>
                 <p className=" text-lg mt-2 md:mt-3 md:text-2xl ExtraLarge:text-[50px] font-bold hover:text-[#03e9f4] text-[gray] ">92%</p>
              </div>
                 <p className="text-center mt-1 md:mt-2 lg:mt-3 ExtraLarge:text-4xl capitalize text-blue-600 font-semibold">Node.js </p>     
            </div>


            <div className=' flex  flex-col justify-center items-center p-2 md:p-2 lg:p-4 whitespace-nowrap  '>
            <div className=' border-2 border-[#292828] p-2 md:p-2 lg:p-4 flex flex-col justify-center items-center  md:size-[100px] xl:size-[150px] ExtraLarge:size-[230px] rounded-lg bg-[hsl(0,5%,11%)] hover:border-[#5142d371] hover:hover:bg-[#0f0b3571]'>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48">
                 <linearGradient id="QzbsZZGqvt5vTzXzFrTWxa_j9DnICNnlhGk_gr1" x1="19.369" x2="32.915" y1="6.256" y2="43.472" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#dfe9f2"></stop><stop offset=".391" stopColor="#d6e0e9"></stop><stop offset="1" stopColor="#bfc8d1"></stop></linearGradient><path fill="url(#QzbsZZGqvt5vTzXzFrTWxa_j9DnICNnlhGk_gr1)" d="M22.959,2.339L5.285,8.49c-1.333,0.464-2.163,1.795-1.992,3.197l2.828,23.187	c0.117,0.963,0.693,1.809,1.545,2.273l14.85,8.072c0.897,0.487,1.98,0.485,2.875-0.005l14.952-8.195	c0.847-0.464,1.419-1.309,1.536-2.268l2.826-23.174c0.172-1.41-0.668-2.747-2.013-3.204L24.91,2.332	C24.277,2.117,23.59,2.119,22.959,2.339z"></path><linearGradient id="QzbsZZGqvt5vTzXzFrTWxb_j9DnICNnlhGk_gr2" x1="24" x2="24" y1="2.152" y2="39.957" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f44f5a"></stop><stop offset=".443" stopColor="#ee3d4a"></stop><stop offset="1" stopColor="#e52030"></stop></linearGradient><path fill="url(#QzbsZZGqvt5vTzXzFrTWxb_j9DnICNnlhGk_gr2)" d="M42.62,12.14L39.96,34	c-0.08,0.64-0.46,1.2-1.03,1.51L24.94,43c-0.3,0.16-0.62,0.23-0.94,0.23c-0.05,0-0.09-0.01-0.14-0.01c-0.27-0.01-0.54-0.08-0.8-0.22	L9.07,35.64c-0.56-0.31-0.95-0.88-1.03-1.52L5.38,12.24c-0.12-0.93,0.44-1.82,1.32-2.13l16.62-5.87c0.18-0.06,0.36-0.1,0.54-0.1	c0.05-0.01,0.09-0.01,0.14-0.01c0.22,0,0.44,0.04,0.66,0.11c1.58,0.57,6.2,2.23,16.62,5.76C42.17,10.31,42.74,11.2,42.62,12.14z"></path><path fill="#fff" d="M11.013,34h4.409L24,15.504V5.996L11.013,34z"></path><path fill="#fff" d="M18,24h6v4h-6V24z"></path><path fill="#b31523" d="M42.62,12.14L39.96,34c-0.08,0.64-0.46,1.2-1.03,1.51L24.94,43c-0.3,0.16-0.62,0.23-0.94,0.23V4.13	c0.22,0,0.44,0.04,0.66,0.11c1.58,0.57,6.2,2.23,16.62,5.76C42.17,10.31,42.74,11.2,42.62,12.14z"></path><path fill="#bfc8d1" d="M24,6v9.508l8.578,18.496h4.409L24,6z"></path><path fill="#bfc8d1" d="M24,24.004h6v4h-6V24.004z"></path><path d="M24,5.996V6l12.987,28.004h-4.409l-2.783-6H24V28h-5.795l-2.783,6h-4.409L24,5.996 M20.06,24H24v0.004h3.94L24,15.508 v-0.004L20.06,24 M25,1.467l-1.907,4.108L10.106,33.579L9.447,35h1.566h4.409h0.639l0.269-0.579L18.843,29H23l1,0.004h5.157 l2.514,5.421l0.269,0.579h0.639h4.409h1.566l-0.659-1.421L25,5.779V1.467L25,1.467z M21.626,23l2.373-5.117l2.375,5.121H25L24,23 H21.626L21.626,23z" opacity=".05"></path><path d="M24,5.996V6l12.987,28.004h-4.409l-2.783-6H24V28h-5.795l-2.783,6h-4.409L24,5.996 M20.06,24H24v0.004h3.94L24,15.508 v-0.004L20.06,24 M24.5,3.733l-0.954,2.052L10.559,33.79L10.23,34.5h0.783h4.409h0.319l0.134-0.29l2.648-5.71H23.5l0.5,0.004 h5.476l2.648,5.71l0.134,0.29h0.319h4.409h0.783l-0.329-0.71L24.5,5.89V3.733L24.5,3.733z M20.843,23.5l3.156-6.806l3.158,6.81 H24.5L24,23.5H20.843L20.843,23.5z" opacity=".07"></path>
                 </svg>
                 <p className=" text-lg mt-2 md:mt-3 md:text-2xl ExtraLarge:text-[50px] font-bold hover:text-[#03e9f4] text-[gray] ">92%</p>
              </div>
                 <p className="text-center mt-1 md:mt-2 lg:mt-3 ExtraLarge:text-4xl capitalize text-blue-600 font-semibold">Angular </p>     
            </div>


        </div>
      </div>


    </>
  )
}

export default Skils
