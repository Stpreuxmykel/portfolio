"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaLaravel,
  FaGit,
  FaAws
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import { SiTensorflow , SiPrisma, SiOpencv, SiDrizzle} from "react-icons/si";

//  const data

const about = {
  title: "About me",
  description:
    "I am a full stack developer with a passion for creating innovative and user-friendly applications",

  info: [
    {
      fieldName: "Name",
      fieldValue: "Mykel St-Preux ",
    },

    {
      fieldName: "Phone",
      fieldValue: "(+509) 3102-2885/ 4097-0794 ",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years ",
    },
    {
      fieldName: "Nationality",
      fieldValue: " Haitian ",
    },
    {
      fieldName: "Email",
      fieldValue: "stpreuxmykel@gmail.com ",
    },
    {
      fieldName: "Freelance",
      fieldValue: " Available ",
    },

    {
      fieldName: "Languages",
      fieldValue: "Creole, French, English ",
    },
  ],
};

//  experience data

const experience = {
  icon: "/badge.png",
  title: "My experience",
  description:
    "I've worked on a number of projects, including web applications for local businesses and several organizations. ",

  items: [
    {
      company: " Mike Nexus",
      positon: "Full Stack Developper",
      duration: "Jan 2022 - Present",
    },
    {
      company: " CodeCamp",
      positon: "Teacher & Co-Founder",
      duration: "June 2024 - Present",
    },

    {
      company: " E-commerce Startup- (MadansaraShop)",
      positon: "CEO",
      duration: "2023 - Present",
    },

    {
      company: " University of Renaissance d'Haiti- (URH) ",
      positon: "Teacher",
      duration: "October 2023 - Present",
    },

    {
      company: " Dreams Digital Horizons- (DDH) ",
      positon: "Full stack Developper & Co-Founder",
      duration: "2024 - Present",
    },
  ],
};

//  education data
const education = {
  icon: "/badge.png",
  title: "My education",
  description:
    "I have worked on several projects, including a web application for a local business and several organization for different country. ",

  items: [
    {
      institution: "University of Renaissance Haiti ",
      degree: "Bachelor of Science in Computer Science",
      duration: "2020 - 2024",
    },
    {
      institution: " Laval University Canada MOOC ",
      degree: " Responsible management",
      duration: " 2021",
    },
    {
      institution: " Online Course Platform UDEMY ",
      degree: " Python Developper ",
      duration: " 2021-2022",
    },
    {
      institution: " Online Course Platform UDEMY ",
      degree: " Laravel  ",
      duration: " 2023",
    },
  ],
};

//  skills data
const skills = {
  title: " My skills",
  description:
    "I have worked on several projects, including a web application for a local business ",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: " html 5",
    },
    {
      icon: <FaCss3 />,
      name: " css 3",
    },
    {
      icon: <FaJs />,
      name: " JavaScript",
    },
    {
      icon: <FaReact />,
      name: " react",
    },
    {
      icon: <SiNextdotjs />,
      name: " next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: " tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <FaLaravel />,
      name: "laravel",
    },
    {
      icon: <FaGit />,
      name: "git",
    },
    {
      icon: <FaAws />,
      name: "aws",
    },
    {
      icon: <SiTensorflow />,
      name: "tensorFlow",
    },
    {
      icon: <SiPrisma />,
      name: "prisma",
    },
    {
      icon: <SiOpencv />,
      name: "openCV",
    },
    {
      icon: <SiDrizzle />,
      name: "drizzle",
    },
    
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiences</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/*  Content */}
          <div className="min-[70px] w-full">
            {/*  experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-semibold"> {experience.title}</h3>
                <p
                  className="max-w-[600px] 
                    text-white/60 mx-auto xl:mx-0"
                >
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 
                            rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.positon}
                          </h3>
                          <div className="flex items-center gapp-3">
                            {/*  dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-semibold"> {education.title}</h3>
                <p
                  className="max-w-[600px] 
                    text-white/60 mx-auto xl:mx-0"
                >
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 
                            rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gapp-3">
                            {/*  dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-4xl font-bold" >{ skills.title }</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0" >{ skills.description }</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div 
                                  className="text-6xl 
                                  group-hover:text-accent 
                                  transition-all duration-300" 
                                >
                                  {skill.icon }
                                </div>
                              </TooltipTrigger>
                              <TooltipContent  className=" capitalize bg-white rounded-xl text-slate-950">
                                <p>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                      </li> 
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold" >{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-3">
                          <span className="text-white/60"> {item.fieldName} :</span>
                          <span className="text-xl"> {item.fieldValue} </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
