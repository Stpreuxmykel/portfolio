"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ 
          opacity: 1, 
          transition: { delay: 2, duration: 0.4, ease: "easeIn" }
        }}
        className="relative flex justify-center items-center"
      >
        {/* Circle and Image Wrapper */}
        <div className="relative flex justify-center items-center w-[150px] h-[150px] md:w-[298px] md:h-[298px] xl:w-[506px] xl:h-[506px]">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ 
              opacity: 1, 
              transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" }
            }}
            className="absolute w-[120px] h-[120px] md:w-[250px] md:h-[250px] xl:w-[400px] xl:h-[400px]"
          >
            <Image 
              src="/mike2.png" 
              priority 
              quality={100}  
              fill 
              alt="Profile image" 
              className="object-contain rounded-full"
            />
          </motion.div>

          {/* Circle */}
          <motion.svg 
            className="w-full h-full"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.circle 
              cx="253" 
              cy="253" 
              r="250" 
              stroke="#00ff99" 
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.svg>

        </div>
      </motion.div>
    </div>
  );
}

export default Photo;



