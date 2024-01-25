"use client"
import React from "react";
import { motion } from "framer-motion";
import Square from "./components/navbar/SquareAnimation";

const FuzzyOverlayExample = () => {
  return (
    // NOTE: An overflow of hidden will be required on a wrapping
    // element to see expected results
    <div className="relative overflow-hidden">
      <ExampleContent />
      <FuzzyOverlay />
    </div>
  );
};

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      // You can download these PNGs here:
      // https://www.hover.dev/black-noise.png
      // https://www.hover.dev/noise.png
      style={{
        backgroundImage: 'url("/black-noise.png")',
        // backgroundImage: 'url("/noise.png")',
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};

const ExampleContent = () => {
  return (
    <div className="relative grid h-screen grid-cols-2 grid-rows-12 space-y-6 bg-neutral-950 p-8">
      <motion.p
      initial = {{
        opacity: 0,

      }}
      animate={{
        opacity: 100,
      }} 
      transition={{ duration: 3 }} // animate over 1 second
      className=" row-start-6 text-center text-6xl font-black text-neutral-50">
        PPC Landing Page
      </motion.p>
      <motion.p
      initial = {{
        opacity: 0,

      }}
      animate={{
        opacity: 100,
      }}
      transition={{ duration: 3 }} // animate over 1 second
      className="row-start-7 text-center text-neutral-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </motion.p>
      <motion.div
       initial={{ x: -100, opacity: 0 }} // start off the screen to the left and transparent
       animate={{ x: 0, opacity: 1 }} // animate to center of screen and fully opaque
       transition={{ duration: 3 }} // animate over 1 second
      className="row-start-8 flex items-center justify-center gap-3">
        <button className=" text-neutral-20 w-fit px-4 py-2 font-semibold text-neutral-200 transition-colors hover:bg-neutral-800">
          Pricing
        </button>
        <button className=" w-fit bg-neutral-200 px-4 py-2 font-semibold text-neutral-700 transition-colors hover:bg-neutral-50">
          Try it free
        </button>
      </motion.div>
      <div className="row-start-3 col-start-2">
        <Square />
      </div>
    </div>
  );
};

export default FuzzyOverlayExample;