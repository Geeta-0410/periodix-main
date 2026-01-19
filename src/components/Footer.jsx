import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (

    <div className="backgroundCursorDiv flex flex-col h-fit justify-center md:h-[300px] border-t-[2px] border-zinc-700 poppins2">

 <div className=" flex flex-col md:flex-row justify-around sm:pt-[45px] w-[100%] mt-[20px] h-fit">
      <div className="flex flex-col w-[90%] mx-auto md:w-[35%] md:text-left text-center">
        <div className="font1 font-bold text-zinc-300 text-[25px] ">
          PERIODIX
        </div>
        <div className="text-zinc-400 text-[14px]">
          "The place where you can learn anything and everything about elements
          by which our universe is made of."
        </div>
      </div>

      {/* about periodix */}
      <div className="flex flex-col w-[90%] mx-auto  md:w-[40%] mt-[10px] md:mt-[0px] md:text-left text-center">
        <div className="font1 font-bold text-zinc-300 text-[25px]">
          ABOUT ME
        </div>
        <div className="text-zinc-400 text-[14px]">
          "Hello! I'm Geeta Chahar, a passionate and dedicated individual and a keen interest in the world of technology. Currently, I am pursuing my education at AKGEC, AKTU, where I am majoring in CSIT. I delve into the intricate world of web development and hone my skills in solving complex problems through Data Structures and Algorithms."
        </div>
      </div>

    </div>
    
    <div className=" border-zinc-500 text-zinc-300 py-[10px] mt-[20px] text-[15px] tracking-tighter flex flex-row text-center justify-center">
            <p>Developed By GEETA CHAHAR</p>
            <a href='https://github.com/Geeta-0410' target="_blank" rel="noopener noreferrer" className='ml-[10px] pb-[4px]'>
  <GitHubIcon className='  w-[20px] h-[20px] text-cyan-600'/>
</a> 

<a href='https://www.linkedin.com/in/geeta-chahar-291506291/' target="_blank" rel="noopener noreferrer" className='ml-[10px] pb-[4px]'>
  <LinkedInIcon className='  w-[20px] h-[20px] text-cyan-600'/>
  </a>
    </div>
    </div>
   
  );
};

export default Footer;
