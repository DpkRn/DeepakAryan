import React from 'react'

function Project({project,setFlag}) {
    console.log(project);
    
    
    const {title,description,image,githubLink,websiteLink,status, projectType}=project
  return (
    <div>
        <section>
      
      <div className='w-full p-3 flex justify-end text-white font-extrabold text-[25px] pr-10 '>
      <svg xmlns="http://www.w3.org/2000/svg" 
      className="stroke-cyan-500 hover:stroke-cyan-700 size-[40px] hover:cursor-pointer" onClick={()=>{
        setFlag(false)
      }} viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
      </div>
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
     
        <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">
        
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center rounded-md bg-gray-300 px-3 py-1">
              <div className="mr-1 h-2 w-2 rounded-full bg-black first-letter"></div>
              <p className="text-sm">Status : {status}</p>
            </div>
            <p className="text-sm text-gray-500 sm:text-xl">
            {projectType}
            </p>
            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold md:text-6xl lg:mb-8 radial-text-gradient">
              {title}
            </h1>
            <p className="text-sm  sm:text-xl text-[#e5ecec] text-justify ">
           {description}
            </p>
            {/* Divider */}
            <div className="mb-8 mt-8 h-px w-full bg-black"></div>
            <div className="mb-6 flex flex-col gap-2 text-sm sm:text-base lg:mb-8 text-white">
              <p>
                <strong>2020: </strong>Site of the year in Awwwards.com
              </p>
              <p>
                <strong>2020: </strong>Site of the year in Awwwards.com
              </p>
            </div>
            {/* Link */}
            <a
              href="#"
              className="mb-6 flex items-center gap-2.5 text-center text-sm font-bold uppercase md:mb-10 lg:mb-12"
            >
              <p className='text-slate-300 '>All Achievements</p>
              <img
                src='https://assets.website-files.com/6458c625291a94a195e6cf3a/64b1465d46adaf3f26099edf_arrow.svg'
                alt=""
                className="inline-block bg-blue-600 rounded-xl stroke-inherit"
              />
            </a>
            {/* Buttons */}
            <div className="flex flex-col gap-4 font-semibold sm:flex-row">
              <a
                href={githubLink}
                className="flex items-center gap-4 rounded-md bg-black px-6 py-3 text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg"  className="stroke-cyan-500 hover:stroke-cyan-700 size-[35px] hover:cursor-pointer" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
                {/* <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b147043fe6ab404e65635e_Envelope.svg"
                  alt=""
                  className="inline-block"
                /> */}
                <p className='text-[aqua] hover:text-white'>Github</p>
              </a>
              <a
                href={websiteLink}
                className="flex items-center gap-4 rounded-md border hover:bg-black transition-all ease-in-out duration-1000 border-solid border-black px-6 py-3"
              >
             <svg xmlns="http://www.w3.org/2000/svg" className="stroke-cyan-500 hover:stroke-cyan-700 size-[35px] hover:cursor-pointer" viewBox="0 0 24 24"><path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path><path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path></svg>
                <p className='text-[aqua]  hover:text-white'>Website</p> 
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="w-[100%] h-full overflow-hidden rounded-md  grid place-content-center">
            <img src={image} alt=""  className='rounded-lg object-cover shadow-sm shadow-black '/></div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Project