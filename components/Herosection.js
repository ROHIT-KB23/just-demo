// "use client";
// import React, { useEffect, useState, useRef } from "react";

// export default function HeroSection() {
//   const [playVideos, setPlayVideos] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const timer = setTimeout(() => setPlayVideos(true), 1000); 
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-black"
//       style={{ minHeight: "200vh" }}
//     >
//       <div
//         className="sticky flex items-center justify-center overflow-hidden"
//         style={{ top: "0px", height: "100vh" }}
//       >
//         <div className="relative w-full h-full overflow-hidden">

//           {/* === SLICE 1 === */}
//           <div
//             className="absolute inset-0 will-change-transform"
//             style={{
//               clipPath: "polygon(0 0, 50% 0, 0% 100%, 0 100%)",
//               zIndex: 1,
//               transform: "translateZ(0)", 
//             }}
//           >
//             {!playVideos ? (
//               <img
//                 src="/images/one.jpg"
//                 alt="Slice 1"
//                 className="w-full h-full object-cover"
//                 style={{
//                   transform: "translateZ(0)",
//                   willChange: "transform",
//                 }}
//               />
//             ) : (
//               <video
//                 src="/videos/one.mp4"
//                 className="w-full h-full object-cover"
//                 style={{
//                   transform: "translateZ(0)",
//                   objectPosition: "60% center", 
//                   willChange: "transform",
//                 }}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             )}
//           </div>

//           {/* === SLICE 2 === */}
//           <div
//             className="absolute inset-0 will-change-transform"
//             style={{
//               clipPath: "polygon(50% 0, 65% 0, 100% 100%, 0% 100%)",
//               zIndex: 2,
//               transform: "translateZ(0)",
//             }}
//           >
//             {!playVideos ? (
//               <img
//                 src="/images/two.jpg"
//                 alt="Slice 2"
//                 className="w-full h-full object-cover"
//                 style={{ transform: "translateZ(0)" }}
//               />
//             ) : (
//               <video
//                 src="/videos/second.mp4"
//                 className="w-full h-full object-cover"
//                 style={{ transform: "translateZ(0)" }}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             )}
//           </div>

//           {/* === SLICE 3 === */}
//           <div
//             className="absolute inset-0 will-change-transform"
//             style={{
//               clipPath: "polygon(80% 0, 110% 0, 90% 100%, 30% 100%)",
//               zIndex: 3,
//               transform: "translateZ(0)",
//             }}
//           >
//             {!playVideos ? (
//               <img
//                 src="/images/third.jpg"
//                 alt="Slice 3"
//                 className="w-full h-full object-cover"
//                 style={{ transform: "translateZ(0)" }}
//               />
//             ) : (
//               <video
//                 src="/videos/third.mp4"
//                 className="w-full h-full object-cover"
//                 style={{
//                   transform: "translateZ(0)",
//                   objectPosition: "center center",
//                   willChange: "transform",
//                 }}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             )}
//           </div>

//           {/* === SLICE 4 === */}
//           <div
//             className="absolute inset-0 will-change-transform"
//             style={{
//               clipPath: "polygon(120% 0, 100% 0, 100% 100%, 65% 100%)",
//               zIndex: 4,
//               transform: "translateZ(0)",
//             }}
//           >
//             {!playVideos ? (
//               <img
//                 src="/images/fouth.jpg"
//                 alt="Slice 4"
//                 className="w-full h-full object-cover"
//                 style={{ transform: "translateZ(0)" }}
//               />
//             ) : (
//               <video
//                 src="/videos/fourth.mp4"
//                 className="w-full h-full object-cover"
//                 style={{ transform: "translateZ(0)" }}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             )}
//           </div>

//           {/* === CENTER LOGO === */}
//           <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
//             <img
//               src="/images/white_logo.png"
//               alt="Logo"
//               className="w-40 md:w-72 drop-shadow-2xl"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/Hero_section.png"
          alt="Hero Background"
          fill
          priority
          placeholder="blur"
          blurDataURL="/images/Hero_section.png"   // small LQIP placeholder
          className="object-cover object-center"
        /> 
      </div>

      {/* Center Content */}
      <div className="flex items-center justify-center h-full px-4">
        <Image
          src="/images/white_logo.png"
          alt="Maitri Diamonds"
          width={260}
          height={260}
          priority
          className="object-contain drop-shadow-xl"
        />
      </div>
    </section>
  );
}
