
import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="My Projects"/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="OTT Website"
          des="Built an OTT website named Buzz utilizing React tools, enabling seamless CRUD operations."
          src={projectOne}
          git = { <a href='https://github.com/vidyadhar-shetty/OTT.git' target="_blank"><span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
          <BsGithub /></span></a> }
          link={ <a href='https://buzz-topaz.vercel.app/' target="_blank"><span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
          <FaGlobe />
        </span></a> }
        />
        <ProjectsCard
          title="Weather App(mausam)"
          des=" Developed a dynamic weather application and Implemented interactive features such as real-time weather data updates, location-based forecasts."
          src={projectThree}
          git = { <a href='https://github.com/vidyadhar-shetty/weather' target="_blank"><span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
          <BsGithub /></span></a> }
          link={ <a href='https://mausam-mu.vercel.app/' target="_blank"><span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
          <FaGlobe />
        </span></a> }
        />
         <ProjectsCard
          title="Langauge Traslator"
          des=" Utilized React to create a user-friendly interface for a Language Translator App, incorporating components, state management, and hooks"
          src={projectTwo}
          git = { <a href='https://github.com/vidyadhar-shetty/Translate.git' target="_blank"><span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
          <BsGithub /></span></a> }
          link={ <a href='https://translator-one-chi.vercel.app/' target="_blank"><span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
          <FaGlobe />
        </span></a> }
        />
        {/* <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
      </div>
    </section>
  );
}

export default Projects