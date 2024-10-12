import React, { useEffect, useRef } from "react";
import instavansLogo from "@/assets/instavans.png";
import bookysureLogo from "@/assets/bookysure_logo.png";
import byjusLogo from "@/assets/b.png";
import Image from "next/image";

function ExpSection() {
  const divInstavans = useRef(null);
  const divByjus = useRef(null);
  const divBookysure = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("firstLastShow");
          } else {
            entry.target.classList.remove("firstLastShow");
          }
        });
      },
      { threshold: 0.4 }
    );

    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("secondShow");
          } else {
            entry.target.classList.remove("secondShow");
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    const divByjusElement = divByjus.current;
    if (divByjusElement) {
      observer2.observe(divByjusElement);
    }

    const divBookysureElement = divBookysure.current;
    if (divBookysureElement) {
      observer.observe(divBookysureElement);
    }

    const divElement = divInstavans.current;
    if (divElement) {
      observer.observe(divElement);
    }
    return () => {
      if (divElement) {
        observer.unobserve(divElement);
      }
      if (divBookysureElement) {
        observer.unobserve(divBookysureElement);
      }
      if (divByjusElement) {
        observer2.unobserve(divByjusElement);
      }
    };
  }, []);

  return (
    <div className="  h-screen pt-[80px] flex flex-col items-center gap-6 relative md:gap-2 ">
      <section
        ref={divInstavans}
        className="fade-in-left h-52 md:h-56 bg-lightBackgroundColor w-96 md:w-[500px] relative md:right-1/4 rounded-md md:p-5 p-3 "
      >
        <div className="flex items-end gap-3">
          <header className="text-2xl md:text-3xl font-semibold">
            Instavans
          </header>
          <div className="text-sm text-darkgreenColor">May 2024 - Present</div>
        </div>
        <p className="md:mt-5">
          At Instavans, I have played a pivotal role in the development and
          enhancement of our logistics and transportation solutions. My
          responsibilities spanned across various facets of software
          engineering, focusing on both front-end and back-end development to
          deliver seamless, high-performance web applications.
        </p>
      </section>
      <section
        ref={divByjus}
        className="fade-in-right h-52 md:h-56  bg-lightBackgroundColor w-96 md:w-[500px] relative md:left-1/4 rounded-md md:p-5 p-3 "
      >
        <div className="flex items-end gap-3">
          <header className="text-2xl md:text-3xl font-semibold">Byju's</header>
          <div className="text-sm text-darkgreenColor">Dec 2022 - Apr 2024</div>
        </div>
        <p className="md:mt-5">
          Taught Java programming and web development (HTML, CSS, JavaScript) to
          high school students in grades 11 and 12. Focused on hands-on,
          project-based learning, integrating the latest technology trends and
          best practices to enhance practical coding skills.
        </p>
      </section>
      <section
        ref={divBookysure}
        className="fade-in-left h-52 md:h-56 bg-lightBackgroundColor w-96 md:w-[500px] relative md:right-1/4 rounded-md md:p-5 p-3"
      >
        <div className="flex items-end gap-3">
          <header className="text-2xl md:text-3xl font-semibold">BookySure</header>
          <div className="text-sm text-darkgreenColor">Dec 2022 - Dec 2023 (Internship)</div>
        </div>
        <p className="md:mt-5">
        Front-End Developer specializing in React Native, HTML, CSS, and JavaScript. Skilled in building responsive mobile apps with smooth animations, intuitive design, and optimized performance. Proficient in testing, Git, and developing mobile-first PWAs.
        </p>
      </section>

      <div className="hidden md:block absolute w-1 h-[calc(100%-40px)] top-10 border-l-2 border-darkgreenColor border-dashed ">
        <div
          className="border-2 border-darkgreenColor border-dashed  w-16 h-16 bg-backgroundColor rounded-full absolute top-40 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ left: -1 }}
        >
          <Image src={instavansLogo} height={100} width={100} alt="instavans" />
        </div>
        <div
          className=" border-2 border-darkgreenColor border-dashed rounded-full w-16 h-16 bg-backgroundColor absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1"
          style={{ left: -1 }}
        >
          <Image
            src={byjusLogo}
            height={100}
            width={100}
            alt="byjus"
            className="rounded-full object-cover"
          />
        </div>
        <div
          className="border-2 border-darkgreenColor border-dashed  bg-backgroundColor rounded-full w-16 h-16  absolute bottom-20 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1"
          style={{ left: -1 }}
        >
          <Image
            src={bookysureLogo}
            height={100}
            width={100}
            alt="bookysure"
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
export default ExpSection;
