"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CommitmentSection() {
  const stickyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stickyRef,
    offset: ["start start", "end end"],
  });

  // Use percentage strings so each image starts 100% below the viewport and moves to 0%
  // IMAGE 1 stays put (no translation)
  const img1Style = { y: "0%" };

  // IMAGE 2: fully below (100%) -> fully covering (0%)
  const img2Y = useTransform(scrollYProgress, [0.15, 0.45], ["100%", "0%"]);

  // IMAGE 3: fully below (100%) -> fully covering (0%)
  const img3Y = useTransform(scrollYProgress, [0.55, 0.85], ["100%", "0%"]);

  return (
    <div className="bg-black text-white">
      <div className="flex justify-center py-20 px-4">
        <div className="max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-4">
            A commitment to conscience
          </h1>
          <p className="text-lg md:text-[29px] text-gray-300 max-w-5xl mx-auto">
            Each Maitri represents an unwavering dedication to environmental{" "}
            <br />
            stewardship. Certified climate-neutral, fully traceable, cultivated
            with reverence for our planet.{" "}
          </p>
        </div>
      </div>

      {/* sticky container sized tall so scrollYProgress can drive the transitions */}
      <div ref={stickyRef} className="relative h-[320vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* IMAGE 1: base layer (z-10) */}
          <motion.img
            src="/images/Diamond.jpg"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ zIndex: 10, ...img1Style }}
            draggable={false}
          />

          {/* IMAGE 2: sits above IMAGE 1 but starts off-screen (z-20) */}
          <motion.img
            src="/images/Diamonds1.jpg"
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              y: img2Y, // percentage-based translate (100% -> 0%)
              zIndex: 20,
            }}
            draggable={false}
          />

          {/* IMAGE 3: sits above IMAGE 2 but starts off-screen (z-30) */}
          <motion.img
            src="/images/Diamonds2.jpg"
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              y: img3Y, // percentage-based translate (100% -> 0%)
              zIndex: 30,
            }}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

