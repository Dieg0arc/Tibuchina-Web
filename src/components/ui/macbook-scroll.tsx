"use client";
import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

interface MacbookScrollProps {
  src?: string;
  showGradient?: boolean;
  title?: React.ReactNode;
  badge?: React.ReactNode;
}

export const MacbookScroll = ({
  src,
  showGradient = true,
  title,
  badge,
}: MacbookScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1 : 1.5]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1 : 1.5]
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="min-h-[200vh] flex flex-col relative p-0 md:p-20"
      style={{
        perspective: "1000px",
      }}
    >
      {/* Header with Title and Badge */}
      <motion.div
        style={{
          translateY: textTransform,
          opacity: textOpacity,
        }}
        className="max-w-5xl mx-auto text-center"
      >
        {badge && <div className="flex justify-center mb-4">{badge}</div>}
        {title && (
          <h1 className="text-2xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            {title}
          </h1>
        )}
      </motion.div>

      {/* MacBook Container */}
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
        }}
        className="mx-auto w-full relative -mt-12"
      >
        <div className="absolute h-60 md:h-60 w-full bg-gradient-to-br from-violet-600 via-pink-600 to-blue-600 rounded-[6px] blur-2xl"></div>
        
        <Lid src={src} scaleX={scaleX} scaleY={scaleY} rotate={rotate} />
        
        {/* MacBook Base */}
        <div className="h-2 w-[32rem] bg-gray-200 absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-md"></div>
        <div className="h-2 w-96 bg-gray-200 absolute bottom-0 left-1/2 -translate-x-1/2 rounded-md"></div>
        <div className="h-2 w-80 bg-gray-300 absolute -bottom-0.5 left-1/2 -translate-x-1/2 rounded-md"></div>
      </motion.div>

      {showGradient && (
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white via-white to-transparent w-full pointer-events-none"></div>
      )}
    </div>
  );
};

export const Lid = ({
  scaleX,
  scaleY,
  rotate,
  src,
}: {
  scaleX: MotionValue<number>;
  scaleY: MotionValue<number>;
  rotate: MotionValue<number>;
  src?: string;
}) => {
  return (
    <div className="relative [perspective:800px]">
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative"
      >
        <div
          style={{
            boxShadow: "0px 2px 0px 2px var(--neutral-900)",
          }}
          className="absolute inset-0 bg-[#010101] rounded-lg"
        />
        <div className="absolute inset-0 bg-[#272729] rounded-lg" />
        <div className="absolute inset-0 bg-[#050505] rounded-lg" />
        
        {/* Screen */}
        <div className="relative bg-[#272729] rounded-lg w-full h-full overflow-hidden">
          {src ? (
            <img
              src={src}
              alt="MacBook screen"
              fill
              className="object-cover absolute inset-0 rounded-lg"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-violet-400 via-pink-400 to-blue-400 rounded-lg"></div>
          )}
        </div>
      </div>
      
      {/* Trackpad */}
      <div className="h-2 w-20 mx-auto bg-gradient-to-t from-neutral-800 via-neutral-700 to-neutral-700 rounded-tr-3xl rounded-tl-3xl"></div>
      <div className="h-2 w-16 mx-auto bg-gradient-to-t from-neutral-950 to-neutral-800 rounded-tr-2xl rounded-tl-2xl"></div>
      <div className="h-2 w-12 mx-auto bg-gradient-to-t from-neutral-300 via-white to-white rounded-tr-2xl rounded-tl-2xl"></div>
    </div>
  );
};
