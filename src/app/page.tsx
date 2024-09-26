"use client";

import { useEffect } from "react";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Script from "next/script";

const Home = () => {
  useEffect(() => {
    // Initialize ConveyThis after the component mounts
    const script = document.createElement("script");
    script.src = "//cdn.conveythis.com/javascript/conveythis-initializer.js";
    script.onload = () => {
      ConveyThis_Initializer.init({
        api_key: "pub_8552e82973d78b180d1434405af61b1a",
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm <br /> <span className="text-accent">Mykel ST PREUX</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm a software developer with over 3 years of experience. I've always
              been fascinated by the world of programming and consider myself lucky
              to have found a career that matches my passions.
            </p>

            {/* SOCIAL MEDIA */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/my_cv.pdf" download="my_cv.pdf">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent 
                    rounded-full flex justify-center 
                    items-center text-accent text-base 
                    hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />

      {/* ConveyThis Code */}
      <Script src="//cdn.conveythis.com/javascript/conveythis-initializer.js" strategy="lazyOnload" />
    </section>
  );
};

export default Home;
