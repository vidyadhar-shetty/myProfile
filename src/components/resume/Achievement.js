import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p> */}
          <h2 className="text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Java Full Stack Course"
            // subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="
            With extensive training in front-end technologies (HTML, CSS, JavaScript, React) and expertise in back-end technologies (Java, Hibernate, Spring Boot), I effectively manage databases (MySQL, Oracle SQL). Specialized training includes building robust APIs for seamless integration and communication between software components."
          />
          <ResumeCard
            title="Microsoft Certified: Power Platform Fundamentals"
            // subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="This engaging course offers an opportunity to learn the fundamentals of Microsoft Power Platform, including how to effectively utilize Microsoft Power Apps for building enterprise-level applications. Participants will gain expertise in implementing workflows using Power Automate and handling databases to streamline business processes"
          />
          <ResumeCard
            title="Sophos Central Central Cloud Management"
            // subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="
            This comprehensive course focuses on configuring and managing Sophos Central Endpoint, analyzing threats, understanding antivirus basics, managing threat protection policies, and applying advanced security measures such as web filtering, device control, application control, and DLP policies."
          />
        </div>
      </div>
      {/* <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Achievement;
