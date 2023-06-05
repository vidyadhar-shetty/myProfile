import React from 'react'
import { FaLinkedinIn, FaReact, FaGithub, FaCss3Alt , FaJava} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs,  SiJavascript, SiSpring } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-50">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
        
          <a href="https://www.linkedin.com/in/vidyadharshetty/" target="_blank"><span className="bannerIcon">
              <FaLinkedinIn />
          </span></a>
          
          <a href="https://github.com/vidyadhar-shetty" target="_blank"> <span className="bannerIcon">
              <FaGithub />
            </span></a>
         
          </div>
      </div>
      <span className='spann'></span>
      <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
        </h2>
        <div className="flex gap-4">
        <a href="https://react.dev/" target="_blank"> <span className="bannerIcon">
              <FaReact />
            </span></a>
           
          <a href="https://www.java.com/en/" target="_blank"><span className="bannerIcon">
              <FaJava />
            </span></a>
            
          <a href="https://www.javascript.com/" target="_blank">  <span className="bannerIcon">
              <SiJavascript />
            </span></a>
          
          <a href="https://spring.io/projects/spring-framework"  target="_blank"><span className="bannerIcon">
              <SiSpring />
            </span></a>
            
          </div>
        </div>
      </div>
  )
}

export default Media