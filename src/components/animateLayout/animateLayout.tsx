import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { it } from "node:test";
import "./animateLayout.css";

function AnimateLayout() {
  const [selectedId, setSelectedId] = useState(null);
  const items = [
    {
      id: 1,
      title: "Skills",
      subtitle: [
        "Full Stack Development",
        "React Native (mobile app development)",
        "HTML, CSS, JavaScript (core web development technologies)",
        "Performance Optimization",
        "Mobile-First and Progressive Web Apps (PWAs)",
        "Git Version Control",
      ],
    },
    {
      id: 2,
      title: "Education",
      subtitle: [
        "Bachelor of Technology - Mechatronics at IPU, India (8.2 CGPA)",
        "Higher Secondary - PCM",
      ],
    },
    {
      id: 3,
      title: "Hobbies",
      subtitle: [
        "Playing Chess",
        "Open Source Contribution",
        "Building Personal Projects",
        "Tech Blogging or Writing Tutorials",
      ],
    },
    {
      id: 4,
      title: "Achievements",
      subtitle: [
        "Google Developer Student Club - IPU University",
        "Hackathon - IPU University",
        "Inter School Chess Tournament",
      ],
    },
  ];

  return (
    <div
      className="  grid-container p-6 pr-12 bg-lightBackgroundColor rounded-lg h-80 relative mt-10"
      style={{
        gridTemplateColumns: "30% 70%",
        gridTemplateRows: "auto auto auto",
        gap: "24px",
        display: "grid",
      }}
    >
      {items.map((item: any, index: any) => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          onClick={() => setSelectedId(item.id)}
          className={` ${index === 0 ? "row-span-2" : ""} ${
            index === items.length - 1 ? "col-span-2" : ""
          } w-full h-full bg-offWhiteColor rounded-lg cursor-pointer
          flex justify-center items-center
          `}
        >
          <div className="text-black font-semibold text-lg ">{item.title}</div>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="h-full w-full backdrop-blur-md rounded-lg  flex justify-center items-center absolute top-0 left-0"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedId(null);
            }}
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className=" relative h-4/5 w-5/6 bg-backgroundColor2 p-4 rounded-md"
            >
              <div className="text-black font-semibold text-xl ">
                {items.find((item) => item.id === selectedId)?.title}
              </div>
              <div className="text-black text-md mt-2 ">
                {items
                  .find((item) => item.id === selectedId)
                  ?.subtitle.map((item, index) => {
                    return <div key={index}>{item}</div>;
                  })}
              </div>
              <div
                className="absolute right-5 top-5"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedId(null);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 cursor-pointer text-black"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AnimateLayout;
