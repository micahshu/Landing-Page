'use client'
import "./Squarestyles.css";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const draw = {
    hidden: { pathLength: 0, opacity: 0, strokeDasharray: "0, 1", strokeDashoffset: 0 },
    visible: (i) => {
       const delay = i;
       return {
         pathLength: 1,
         opacity: 1,
         stroke: ["#ff0000", "#00ff00", "#0000ff"], // Colors for the gradient
         strokeDasharray: `${i}, 1`, // Lengths of dashes and gaps
         strokeDashoffset: -i, // Offset into the dash pattern
         transition: {
           pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
           opacity: { delay, duration: 0.01 },
           strokeDasharray: { delay, duration: 1.5 },
           strokeDashoffset: { delay, duration: 1.5 }
         }
       };
    }
   };
   

function useIsClient() {
 const [isClient, setIsClient] = useState(false);

 useEffect(() => {
    setIsClient(true);
 }, []);

 return isClient;
}

export default function Line(){
 const { ref, inView } = useInView({ 
    threshold: 0.1, 
 });
 const isClient = useIsClient();

 return (
    <div className="w-screen h-full" ref={ref}>
      <motion.svg
        width="100%"
        height="100%"
        viewBox={isClient ? `0 0 ${window.innerWidth} 100` : "0 0 100 100"}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ display: 'block' }}
      >
        <motion.line
          x1="0"
          y1="50"
          x2={isClient ? window.innerWidth : 100}
          y2="50"
          stroke="#000000"
          strokeWidth="4"
          variants={draw}
          custom={1}
        />
      </motion.svg>
    </div>
 );
}