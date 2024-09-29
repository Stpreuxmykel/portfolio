"use client";
import { motion } from 'framer-motion';
import React, {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";

import {BsArrowUpRight} from "react-icons/bs"

import {
  Tooltip, 
  TooltipTrigger,
  TooltipContent,
  TooltipProvider
} from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: '01',
    category: "Full Stack",
    title: "Project 1",
    description: "I developed a robust and scalable marketplace platform using Laravel, designed to allow vendors to sell their products seamlessly. The platform provides an intuitive and user-friendly experience for both vendors and customers. ", 
    
    stack: [
      { name: "HTML 5"},
      { name: "Css 3"},
      { name: "JavaScript"},
      { name: "React"},
      { name: "Laravel"},
    ],
    image: "/work/thumb1.png",
    link: "https://madansarashop.com/",
    live: "",
    github: "",
  },
  {
    num: '02',
    category: "Development of a university website",
    title: "Project 2",
    description: "Together with two other programmers, I created a university website designed to provide students, faculty and staff with simplified access to essential academic resources and information. The site was developed with a focus on functionality, user experience and scalability.", 
    
    stack: [
      { name: "HTML 5"},
      { name: "Css 3"},
      { name: "JavaScript"},
      { name: "PHP"},
    ],
    image: "/work/thumb2.png",
    link: "https://urhcampusjeremie-edu.com/",
    live: "",
    github: "",
  },
  {
    num: '03',
    category: "Church Website Development",
    title: "Project 3",
    description: "My friend Zamor and I designed and developed a modern, user-friendly website for a church, with the goal of improving communication and engagement with the congregation and the broader community. The site is designed to reflect the church's values while providing easy access to important information.",
    
    stack: [
      { name: "HTML 5"},
      { name: "Css 3"},
      { name: "JavaScript"},
      { name: "Laravel"},
    ],
    image: "/work/thumb5.png",
    link: "https://berakah.church/",
    live: "",
    github: "",
  },
  {
    num: '04',
    category: "Frontend",
    title: "Project 4",
    description: " My Portfolio ",
    
    stack: [
      { name: " Next.js "},
      { name: "Tailwind.css"},
      { name: "Python"},
    ],
    image: "/work/thumb3.png",
    link: "",
    live: "",
    github: "",
  },

]


const Work = () => {

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper:any) => {
      //  get a current slide index

      const currentIndex = swiper.activeIndex;
    //  update project state based on current slide index 

      setProject(projects[currentIndex]);
  }

  return (

    <motion.section 
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition: {delay: 2.4, duration:0.4, ease: "easeIn"}}}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          
          <div 
              className='w-full xl:w-[50%]  
              xl:h-[460px] flex flex-col 
              xl:justify-between order-2 xl:order-none'>
                
                <div className='flex flex-col gap-[30px] h-[50%]'>
                  {/*  outline none*/}
                  <div 
                    className='text-8xl leading-none 
                      font-extrabold text-transparent 
                      text-outline'
                  >
                    {project.num}
                  </div>

                  {/*  project category*/}
                  <h2 
                    className='text-[42px] font-bold leading-none
                     text-white group-hover:text-accent transition-all 
                     duration-500 capitalize'
                    >
                      {project.category} Project
                  </h2>

                  {/*  project description */}
                  <p className='text-white/60'>{project.description}</p>

                  {/*  Stack */}
                  <ul className='flex gap-4' >
                    {project.stack.map((item, index) => {
                        return (
                            <li key={index} className='text-xl text-accent'>
                                {item.name}
                                {/* remove the last comma */}
                                {index !== project.stack.length -1 && ","}
                            </li>
                        )
                    })}
                  </ul>

                  {/*  border */}
                  <div className='border border-white/20'></div>
                  
                  {/* buttons */}
                  <div>
                    {/*  Live Project Button */}
                    <Link href={project.link} legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer">
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />

                              </TooltipTrigger>

                              <TooltipContent className='bg-white text-black rounded-xl'>
                                <p>Live Project</p>
                              </TooltipContent>

                            </Tooltip>
                          </TooltipProvider>
                        </a>
                    </Link>
    
                  </div>
                
                </div>
          </div>
          
          {/*  slider */}
          <div 
            className='w-full xl:w-[50%]'>
              <Swiper 
                spaceBetween={30} 
                slidesPerView={1} 
                className='xl:h-[520px] mb-12'
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (

                    <SwiperSlide key={index}>
                      <div 
                        className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                          
                          {/*  overlay  */}
                          <div className='absolute top-0 button-0 w-full h-full bg-black/10 z-10' ></div>

                          {/* image */}
                          <div className='relative w-full h-full'>
                            <Image 
                              src={project.image}
                              fill 
                              className='object-cover'
                              alt=''
                            />
                          </div>
                      </div>
                    </SwiperSlide>
                  )
                })}


                   <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                  iconsStyles="text-white text-[24px]" // <-- Add this line to define icon styles
                />
                
              </Swiper>
          </div>
          
          
        </div>
      </div>
    </motion.section>

  )
}

export default Work;

