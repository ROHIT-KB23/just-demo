// export default function CommitmentSection() {
//   return (
//     <div className="bg-black">
//       <div className=" flex justify-center p-4 py-20">
//         <div className="max-w-6xl mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-light tracking-wider text-white mb-4">
//             A commitment to conscience
//           </h1>

//           <p className="text-lg md:text-2xl text-gray-300 mb-8 leading-normal tracking-wide max-w-4xl">
//             Each Maitri represents an unwavering dedication to environmental
//             stewardship. Certified climate-neutral, fully traceable, cultivated
//             with reverence for our planet.{" "}
//           </p>
//         </div>
//       </div>
//       {/* <div
//         className="min-h-screen flex items-center justify-center p-4 bg-fixed bg-center bg-no-repeat bg-cover"
//         style={{ backgroundImage: "url('/images/background-image.png')" }}
//       >
//         <div className="max-w-[95%] mx-auto w-full">
//           <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
//             <div className="lg:w-1/3 text-center lg:text-left">
//               <p className="text-2xl md:text-3xl text-white">
//                 The world's fully traceable,
//                 <br />
//                 100% Climate Neutral
//               </p>
//             </div>

//             <div className="lg:w-1/3 text-center lg:text-right">
//               <p className="text-2xl md:text-3xl text-white">
//                 The world's fully traceable,
//                 <br />
//                 100% Climate Neutral and
//                 <br />
//                 Sustainability Rated
//                 <br />
//                 Lab-Grown Diamonds
//               </p>
//             </div>
//           </div>
//         </div>
//       </div> */}
//       );
//     </div>
//   );
// }



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
          <p className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Each Maitri represents dedication to environmental stewardship.
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
              y: img2Y,     // percentage-based translate (100% -> 0%)
              zIndex: 20,
            }}
            draggable={false}
          />

          {/* IMAGE 3: sits above IMAGE 2 but starts off-screen (z-30) */}
          <motion.img
            src="/images/Diamonds2.jpg"
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              y: img3Y,     // percentage-based translate (100% -> 0%)
              zIndex: 30,
            }}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}



// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export default function CommitmentSection() {
//   const stickyRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: stickyRef,
//     offset: ["start start", "end end"],
//   });

//   /* IMAGE 1 — zoom out → zoom in */
//   const img1Scale = useTransform(
//     scrollYProgress,
//     [0, 0.15],   // early scroll
//     [1.15, 1.0]  // zoom-out → zoom-in
//   );

//   /* IMAGE 2 — slide up & zoom */
//   const img2Y = useTransform(scrollYProgress, [0.15, 0.45], ["100%", "0%"]);
//   const img2Scale = useTransform(
//     scrollYProgress,
//     [0.20, 0.45],  // when becoming main image
//     [1.15, 1.0]    // zoom-in
//   );

//   /* IMAGE 3 — slide up & zoom */
//   const img3Y = useTransform(scrollYProgress, [0.55, 0.85], ["100%", "0%"]);
//   const img3Scale = useTransform(
//     scrollYProgress,
//     [0.60, 0.85],
//     [1.15, 1.0]
//   );

//   return (
//     <div className="bg-black text-white">
//       <div className="flex justify-center py-20 px-4">
//         <div className="max-w-5xl text-center">
//           <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-4">
//             A commitment to conscience
//           </h1>
//           <p className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto">
//             Each Maitri represents dedication to environmental stewardship.
//           </p>
//         </div>
//       </div>

//       <div ref={stickyRef} className="relative h-[320vh]">
//         <div className="sticky top-0 h-screen w-full overflow-hidden">

//           {/* IMAGE 1 */}
//           <motion.img
//             src="/images/Diamond.jpg"
//             className="absolute inset-0 h-full w-full object-cover"
//             style={{
//               zIndex: 10,
//               scale: img1Scale,   // zoom effect added
//             }}
//             draggable={false}
//           />

//           {/* IMAGE 2 */}
//           <motion.img
//             src="/images/Diamonds1.jpg"
//             className="absolute inset-0 h-full w-full object-cover"
//             style={{
//               y: img2Y,
//               scale: img2Scale,   // zoom effect
//               zIndex: 20,
//             }}
//             draggable={false}
//           />

//           {/* IMAGE 3 */}
//           <motion.img
//             src="/images/Diamonds2.jpg"
//             className="absolute inset-0 h-full w-full object-cover"
//             style={{
//               y: img3Y,
//               scale: img3Scale,   // zoom effect
//               zIndex: 30,
//             }}
//             draggable={false}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }




