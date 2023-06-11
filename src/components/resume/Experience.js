import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Intership"
            subTitle="Jspiders - (2022 - Present)"
            // result="USA"
            des="I have received comprehensive training in front-end technologies such as HTML, CSS, JavaScript, and React. Additionally, I have gained proficiency in back-end technologies like Java and its frameworks, including Hibernate and Spring Boot. Furthermore, I have experience in managing databases using MySQL and Oracle SQL."
          />
          <ResumeCard
            title="IT engineer"
            subTitle="Mother India Forming Pvt Ltd. - (2020 - 2022)"
            // result="MALAYSIA"
            des="As an IT engineer, I have effectively taken care of configuring and maintaining the security and integrity of software and web applications. I am proficient in preventing external and internal threats through the utilization of firewalls."
          />
          <ResumeCard
            title="Metsmith Pvt. Ltd."
            subTitle="Digital Marketing Executive - (2019-2020)"
            // result="Oman"
            des="As a Digital Marketing Executive, I have successfully provided services such as launching optimized online advertisements to increase company and brand awareness. Additionally, I have been actively involved in search engine optimization efforts, including keyword and image optimization."
          />
        </div>                                            
      </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
