
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CommitmentSection() {
  const stickyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stickyRef,
    offset: ["start start", "end end"],
  });

  // IMAGE 1: Zoom out from 1.3x to 1x scale
  const img1Scale = useTransform(scrollYProgress, [0, 0.15], [1.2, 1]);
  const img1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.45], [1, 1, 0]); // Fades out when image 2 appears

  // IMAGE 2: Position + zoom out effect
  const img2Y = useTransform(scrollYProgress, [0.15, 0.45], ["100%", "0%"]);
  const img2Scale = useTransform(scrollYProgress, [0.15, 0.45], [1.5, 1]);
  const img2Opacity = useTransform(scrollYProgress, [0.1, 0.15, 0.45, 0.5], [0, 1, 1, 1]); // Only visible during its section

  // IMAGE 3: Position + zoom out effect
  const img3Y = useTransform(scrollYProgress, [0.5, 0.8], ["100%", "0%"]);
  const img3Scale = useTransform(scrollYProgress, [0.5, 0.8], [1.3, 1]);
  const img3Opacity = useTransform(scrollYProgress, [0.45, 0.5, 0.8, 0.85], [0, 1, 1,1]); // Only visible during its section

  return (
    <div className="bg-black text-white">
      <div className="flex justify-center py-20 px-4">
        <div className=" text-center">
          <h1 className="text-[40px] md:text-6xl font-cormorant tracking-[2.5px] mb-4">
            A commitment to conscience
          </h1>
          <p className="font-mont text-lg md:text-[29px] text-gray-300 max-w-6xl mx-auto leading-none leading-[25px] lg:leading-[38px] tracking-[0.2px]">
            Each Maitri represents an unwavering dedication to environmental{" "}
            <br />
            stewardship. Certified climate-neutral, fully traceable, cultivated
            with reverence <br/>
            for our planet.{" "}
          </p>
        </div>
      </div>

      {/* sticky container sized tall so scrollYProgress can drive the transitions */}
      <div ref={stickyRef} className="relative h-[320vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          
          {/* IMAGE 1: base layer with zoom effect */}
          <motion.div
            className="absolute inset-0 h-full w-full"
            style={{ 
              zIndex: 10, 
              y: "0%",
              opacity: img1Opacity
            }}
          >
            <motion.img
              src="/images/Diamond.jpg"
              className="h-full w-full object-cover"
              draggable={false}
              style={{ scale: img1Scale }}
            />
            <div className="absolute top-60 left-10 max-w-2xl bg-opacity-70 p-6 rounded-lg">
              <h1 className="text-5xl font-bold mb-4">First Title</h1>
              <p className="text-2xl">Description for the first image. This text scrolls with the first image.</p>
            </div>
          </motion.div>

          {/* IMAGE 2: Second image */}
          <motion.div
            className="absolute inset-0 h-full w-full"
            style={{
              y: img2Y,
              zIndex: 20,
              opacity: img2Opacity
            }}
          >
            public\images\Jewellery1.jpg
            {/* public\images\Untitled design (12) (1).jpg */}
            <motion.img
              src="/images/Jewellery1.jpg"
              className="h-full w-full object-cover"
              draggable={false}
              style={{ scale: img2Scale }}
            />
            <div className="absolute top-60 left-10 max-w-2xl bg-opacity-70 p-6 rounded-lg">
              <h1 className="text-5xl font-bold mb-4">Second Title</h1>
              <p className="text-2xl">Description for the second image. This text scrolls with the second image.</p>
            </div>
          </motion.div>

          {/* IMAGE 3: Third image */}
          <motion.div
            className="absolute inset-0 h-full w-full"
            style={{
              y: img3Y,
              zIndex: 30,
              opacity: img3Opacity
            }}
          >
            {/* public\images\Untitled design (1).jpg */}
            <motion.img
              src="/images/Jewellery2.jpg"
              className="h-full w-full object-cover"
              draggable={false}
              style={{ scale: img3Scale }}
            />
            <div className="absolute top-60 left-10 max-w-2xl bg-opacity-70 p-6 rounded-lg">
              <h1 className="text-5xl font-bold mb-4">Third Title</h1>
              <p className="text-2xl">Description for the third image. This text scrolls with the third image.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}