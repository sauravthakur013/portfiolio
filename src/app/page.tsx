"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/navbar";
import { Link, animateScroll as scroll, scroller } from "react-scroll";
import HomeSection from "@/components/homeSection";
import ExpSection from "@/components/expSection";
import ProjectSection from "@/components/projectSection";
import ContactSection from "@/components/contactSection";
import FloatingWords from "@/components/floatingElement";

export default function Home({ params }: any) {
  const [section, setSection] = React.useState("home");
  console.log(section);

  useEffect(() => {
    scroller.scrollTo(section, {
      duration: 1000, 
      delay: 0, 
      smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)", 
    });
  }, [section]);

  return (
    <div className="h-[400vh] ">
      <Navbar setSection={setSection} />
      {/* <FloatingWords /> */}
      <div className="mx-auto container">
        <section id="home" className="h-screen  ">
          <HomeSection/>
        </section>
        <section id="experience" className="h-screen">
          <ExpSection/>
        </section>
        <section id="project" className="h-screen ">
          <ProjectSection/>
        </section>
        <section id="contact" className="h-screen ">
          <ContactSection/>
        </section>
      </div>
    </div>
  );
}
