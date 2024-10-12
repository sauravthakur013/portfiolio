import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import profilePic from "@/assets/profilePic.png";
import Image from "next/image";
import AnimateLayout from '@/components/animateLayout/animateLayout'

function HomeSection() {
  const divRef = useRef(null);
  const profileDiv = useRef(null);
  const skillsList = [
    // "Full stack development expertise with proficiency in front-end and back-end technologies",
    // "Experienced in client meetings and product presentations, effectively communicating with stakeholders",
    // "Strong ability to simplify complex technical concepts for better team collaboration",
    // "Conducts interviews and evaluates candidates, ensuring the right talent joins the team",
    "Full stack development expertise in front-end and back-end",
    "Experienced in client meetings and product presentations",
    "Simplifies complex ideas for effective team collaboration",
    "Conducts interviews to bring in top talent",
    "Skilled in React Native, web development, and performance optimization",
    "Promotes project-based learning with real-world mentoring"
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.5 }
    );

    const observeProfile = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("showProfile");
          } else {
            entry.target.classList.remove("showProfile");
          }
        });
      },
      { threshold: 0.5 }
    );

    const divProfile = profileDiv.current;
    if (divProfile) {
      observeProfile.observe(divProfile);
    }

    const divElement = divRef.current;
    if (divElement) {
      observer.observe(divElement);
    }
    return () => {
      if (divElement) {
        observer.unobserve(divElement);
      }
      if (divProfile) {
        observeProfile.unobserve(divProfile);
      }
    };
  }, []);
  return (
    <div className=" h-full top-20  px-4 sm:px-0  flex flex-col lg:flex-row ">

      <div ref={divRef} className="fade-in  h-3/5 pt-10 lg:h-full lg:w-3/5">
        <h2 className="text-lg sm:text-2xl text-darkgreenColor font-semibold pt-20 ">
          Hi, I'm SAURAV BHOORIYA.
        </h2>
        <h1 className="flex gap-2 text-3xl sm:text-4xl font-semibold text-white pt-4 pb-2">
          <div>I'm a</div>
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "Frontend Developer",
                "Backend Developer",
                "React Native Developer",
              ],
              autoStart: true,
              loop: true,
              cursor: "",
              delay: 100,
            }}
          />
        </h1>
        <p className="pb-6">
          As a versatile Full Stack Developer, I bring expertise in both
          front-end and back-end technologies, crafting high-performance
          logistics solutions at Instavans. With a passion for innovation, I
          deliver seamless web applications that enhance user experiences. My
          journey also includes building dynamic mobile apps at BookySure, where
          I focused on React Native, intuitive UX, and performance optimization.
          Let's create the future together !
        </p>
        <div className="">
          <h1 className="text-lg md:text-xl font-semibold p-4 w-fit bg-lightBackgroundColor rounded-md cursor-pointer border-backgroundColor border-[1px] hover:bg-backgroundColor hover:border-offWhiteColor duration-300 ">
            <Link
              href="https://drive.google.com/file/d/1AC94G-JOAIYUkbDlwbdH0HJgbp__pjzZ/view?usp=sharing"
              target="_blank"
            >
              Download Resume
            </Link>
          </h1>
        </div>
        <div id='skills' className="hidden lg:block h-full">
          <AnimateLayout/>
        </div>
      </div>

      <div ref={profileDiv} className=" fade-in-left h-2/5  lg:h-full lg:w-2/5 ">

        <div className=" flex justify-center  lg:pt-28 ">
          <div className=" w-56 h-56 rounded-[50%]  overflow-hidden relative lg:w-80 lg:h-80 ">
            <Image
              src={profilePic.src}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              alt="Profile Picture"
            />
          </div>
        </div>

        <div className=" mt-4 text-center">
          <p>Full Stack Developer</p>
          <p>Total Experience: <span className=" font-bold">1.5</span> years</p>
          <div className=" mt-5 hidden lg:block">
            <p>Currently shaping innovative logistics solutions at <span className=" font-bold">Instavans</span>, where technology drives seamless transportation experiences</p>
            <p className="mt-5 font-light">What skills make me a strong fit for your company?</p>
            <div className=" mt-2">{
              skillsList.map((item):any=>{
                return(<div key={item}>{item}</div>)
              })  
            }</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
