import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2012-2019</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Computer Applications"
            subTitle="Mangalore University (2016 - 2019)"
            des="I have done my Bachelor of Computer Applications degree at Mangalore University, where I received comprehensive training in programming languages."
          />
          <ResumeCard
            title="PCMB"
            subTitle="GPU College Byndoor (2014 - 2016)"
            des="I completed finished my pre-university course specializing in Physics, Chemistry, Mathematics, and Biology from the Karnataka Education Board."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="GJC Byndoor(2011-2014)"
            // result="5.00/5"
            des="Completed Secondary school education or post-primary education from  Karnataka Secondary School Education Board."
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Intership"
            subTitle="Jspiders - (2022 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="IT engineer"
            subTitle="Mother India Forming Pvt Ltd. - (2020 - 2022)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Metsmith Pvt. Ltd."
            subTitle="Digital Marketing Executive - (2019-2020)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>                                            
      </div> */}
    </motion.div>
  );
}

export default Education