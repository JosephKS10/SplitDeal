import React from "react";
import { motion } from "framer-motion";
import { WordRotate } from "./magicui/word-rotate";

export const DrawCircleText = () => {
  return (
    <div className="grid place-content-center font-bold text-black">
      <h1 className="max-w-1xl text-center text-2xl sm:text-5xl leading-snug">
        <div className="flex justify-center items-center">
        <div className="flex items-center justify-center sm:justify-start">
  {/* Container for WordRotate with dynamic width */}
  <div className="min-w-[6rem] sm:min-w-[8rem]">
    <WordRotate
      className="text-3xl sm:text-5xl font-bold text-orange-500"
      words={["Find", "Unite", "Share", "Enjoy"]}
    />
  </div>
  
  {/* Fixed text "the" */}
  <span className="text-3xl sm:text-5xl font-bold text-black ml-1 sm:ml-3">
    the
  </span>
</div>

  {/* Fixed text "the" */}
  
        </div>
        <span className="relative">
            Best Deals
          <svg
            viewBox="0 0 286 73"
            fill="none"
            className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="darkorange"
              strokeWidth="3"
            />
          </svg>
        </span>{" "}
        In Your Area!
      </h1>
    </div>
  );
};