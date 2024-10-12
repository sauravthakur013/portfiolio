import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import saasPic from "@/assets/saas.png";
import teacher from '@/assets/teacher.png'
import Link from "next/link";


function ProjectSection() {

  const [saasHover, setSaasHover] = useState(false);
  const [showExpe, setShowExpe] = useState(false);
  const listSaasExpe = ['React Js', 'Tailwind CSS', 'Chat.Js', 'Node Js'];
  const divsaas = useRef(null);

  const [teacherHover, setTeacherHover] = useState(false);
  const [showTeacherexpe, setShowTeacherexpe] = useState(false);
  const listTeacherExpe = ['Next Js', 'Typescript', 'Tailwind CSS', 'Node Js', 'MongoDB', 'Express Js'];
  const divTeacher = useRef(null);

  useEffect(()=>{
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("display01");
          } else {
            entry.target.classList.remove("display01");
          }
        });
      },
      { threshold: 0.5 }
    );

    const observer02 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("display02");
          } else {
            entry.target.classList.remove("display02");
          }
        });
      },
      { threshold: 0.5 }
    );

    const divFirstElement = divsaas.current;
    if (divFirstElement) {
      observer.observe(divFirstElement);
    }

    const divSecondElement = divTeacher.current;
    if (divSecondElement) {
      observer02.observe(divSecondElement);
    }

    return () => {
      if (divFirstElement) {
        observer.unobserve(divFirstElement);
      }
      if (divSecondElement) {
        observer.unobserve(divSecondElement);
      }
    };
  },[])


  return (
    <div className="h-screen pt-[100px]">

      <section ref={divsaas} className=" fade-in-top-first-project h-[280px] bg-lightBackgroundColor mx-4 rounded-md p-10 flex relative">
        <div className=" absolute top-3 right-3" onMouseEnter={()=>{setSaasHover(!saasHover)}} onMouseLeave={()=>{setSaasHover(!saasHover)}} >
          <Link href={'https://dashboard-saas.vercel.app/'} target="_blank" rel="noopener noreferrer" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
          </Link>
        </div>
        <div className={`absolute top-[12px] right-10 bg-backgroundColor text-sm h-[24px] w-fit px-3 duration-300 rounded-md ${saasHover ? 'opacity-50' : 'opacity-0' }`}>visit to project</div>
        <div className="h-full w-1/3 overflow-hidden hidden lg:block ">
          <Image
            src={saasPic.src}
            alt="profile"
            width={10000}
            height={10000}
            className=" w-full h-full hover:scale-110 transition-transform duration-300 "
          />
        </div>
        <div className=" h-full lg:w-2/3 w-full md:pl-5  relative">
          <header className="text-3xl font-semibold pb-5">
            SaaS Dashboard Landing Page
          </header>
          <p className="hidden md:block ">
            Developed a modern SaaS dashboard with a clean, user-friendly
            landing page. The dashboard includes features like chats, customer
            testimonials, and a contact section for seamless interaction with
            the company. Designed for optimal performance and user engagement,
            the project highlights strong front-end skills and attention to
            detail.
          </p>
          <p className="md:hidden">
            Built a responsive SaaS dashboard landing page featuring chats,
            testimonials, and a company contact section. Focused on performance
            and user engagement.
          </p>
          <div 
            onMouseEnter={()=>{setShowExpe(!showExpe)}} onMouseLeave={()=>{setShowExpe(!showExpe)}} 
            className="absolute bottom-0 text-md font-medium bg-darkgreenColor block w-fit px-5 py-2 rounded-md">
            Expertise
          </div>
          <div className={` duration-200 absolute bottom-[5px] flex left-28 md:left-32 gap-2 ${showExpe ? 'opacity-80' : 'opacity-0'} `}>
            {listSaasExpe.map((item, index) => {
              return <div key={index} className={`bg-backgroundColor opacity-50 px-3 py-1 rounded-md w-fit text-sm`}>{item}</div>;
            })}
          </div>
        </div>
      </section>

      <section ref={divTeacher} className=" fade-in-top-second-project h-[280px] bg-lightBackgroundColor mx-4 rounded-md p-10 flex relative mt-10">
        {/* <div className=" absolute top-3 right-3" onMouseEnter={()=>{setSaasHover(!saasHover)}} onMouseLeave={()=>{setSaasHover(!saasHover)}} >
          <Link href={'https://dashboard-saas.vercel.app/'} target="_blank" rel="noopener noreferrer" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
          </Link>
        </div>
        <div className={`absolute top-[12px] right-10 bg-backgroundColor text-sm h-[24px] w-fit px-3 duration-300 rounded-md ${saasHover ? 'opacity-50' : 'opacity-0' }`}>visit to project</div> */}
       
        <div className="h-full w-1/3 overflow-hidden hidden lg:block">
          <Image
            src={teacher.src}
            alt="profile"
            width={10000}
            height={10000}
            className=" w-full h-full hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className=" h-full lg:w-2/3 w-full md:pl-5  relative">
          <header className="text-3xl font-semibold pb-5">
          Revolutionize Learning
          </header>
          <p className="hidden md:block ">
          This platform allows teachers to host live classes with drawing tools, recording sessions for later access by students. It fosters real-time interaction, secure accounts, and easy access to past lessons, offering a flexible learning experience.
          </p>
          <p className="md:hidden">
          This platform enables teachers to host live classes with drawing tools and record sessions for students to access anytime, ensuring flexible and interactive learning.
          </p>
          <div 
            onMouseEnter={()=>{setShowTeacherexpe(!showTeacherexpe)}} onMouseLeave={()=>{setShowTeacherexpe(!showTeacherexpe)}} 
            className="absolute bottom-0 text-md font-medium bg-darkgreenColor block w-fit px-5 py-2 rounded-md">
            Expertise
          </div>
          <div className={` duration-200 absolute bottom-[5px] flex left-28 md:left-32 gap-2 ${showTeacherexpe ? 'opacity-80' : 'opacity-0'} `}>
            {listTeacherExpe.map((item, index) => {
              return <div key={index} className={`bg-backgroundColor opacity-50 px-3 py-1 rounded-md w-fit text-sm text-nowrap`}>{item}</div>;
            })}
          </div>
        </div>
      </section>

    </div>
  );
}

export default ProjectSection;
