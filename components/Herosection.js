// "use client";

// import React, { useState } from "react";

// export default function HeroSection() {
//   const [logoUrl, setLogoUrl] = useState("/images/white_logo.png");
//   const [heroUrl, setHeroUrl] = useState("/images/Hero_section.png");

//   return (
//     <div className="min-h-screen relative">
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat top-35"
//         style={{
//           backgroundImage: `url(${heroUrl})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       ></div>

//       <header className="relative z-10 flex items-center justify-center min-h-screen">
//         <div className="text-center">
//           <img
//             src={logoUrl}
//             alt="Logo"
//             className="mx-auto max-w-xs w-full h-auto drop-shadow-2xl"
//           />
//         </div>
//       </header>
//     </div>
//   );
// }




// "use client";
// import React, { useEffect, useState } from "react";

// export default function HeroSection() {
//   const [playVideos, setPlayVideos] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setPlayVideos(true), 1000); // start after 1s
//     return () => clearTimeout(timer);
//   }, []);

//   const media = [
//     { image: "/images/1.jpg", video: "/videos/1.mp4" },
//     { image: "/images/2.jpg", video: "/videos/2.mp4" },
//     { image: "/images/3.jpg", video: "/videos/3.mp4" },
//     { image: "/images/4.jpg", video: "/videos/4.mp4" },
//   ];

//   return (
//     <div className="relative h-screen w-full overflow-hidden flex">
//       {media.map((item, i) => {
//         const isFirst = i === 0;
//         const isLast = i === media.length - 1;

//         return (
//           <div
//             key={i}
//             className="relative h-full w-1/4 overflow-hidden"
//             style={{
//               transform: "skew(-15deg)",
//               transformOrigin: "center",
//               // extend first and last slice outwards
//               marginLeft: isFirst ? "-5%" : "0",
//               marginRight: isLast ? "-60%" : "0",
//             }}
//           >
//             <div
//               className="absolute -inset-10"
//               style={{
//                 transform: "skew(9deg) scale(1.5)", // enlarge a bit more for safety
//               }}
//             >
//               {!playVideos ? (
//                 <img
//                   src={item.image}
//                   alt={`slice-${i}`}
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <video
//                   src={item.video}
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   className="w-full h-full object-cover"
//                 />
//               )}
//             </div>
//           </div>
//         );
//       })}

//       {/* Centered logo overlay */}
//       <div className="absolute inset-0 flex items-center justify-center z-10">
//         <img
//           src="/images/white_logo.png"
//           alt="Logo"
//           className="w-48 md:w-64 drop-shadow-2xl"
//         />
//       </div>
//     </div>
//   );
// }














"use client";
import React, { useEffect, useState } from "react";

export default function HeroSection() {
  const [playVideos, setPlayVideos] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setPlayVideos(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const media = [
    { image: "/images/1.jpg", video: "/videos/1.mp4" },
    { image: "/images/2.jpg", video: "/videos/2.mp4" },
    { image: "/images/3.jpg", video: "/videos/3.mp4" },
    { image: "/images/4.jpg", video: "/videos/4.mp4" },
  ];

  const skew = 15; // degrees

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Row for slices (non-last in normal flow) */}
      <div className="flex h-full w-full">
        {media.slice(0, -1).map((item, i) => (
          <div
            key={i}
            className="relative h-full"
            style={{
              flex: "0 0 26%", // each takes ~25%
              overflow: "hidden",
              transform: `skew(-${skew}deg)`,
              transformOrigin: "center",
              marginLeft: i === 0 ? "-4%" : 0, // extend first slightly left
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "-18%", // small horizontal extension to cover slanted edges
                right: "-8%",
                top: "-10%",
                bottom: "-10%",
                transform: `skew(${skew}deg) scale(1.15)`,
                transformOrigin: "center",
              }}
            >
              {!playVideos ? (
                <img className="w-full h-full object-cover" src={item.image} alt={`slice-${i}`} />
              ) : (
                <video className="w-full h-full object-cover" src={item.video} muted loop autoPlay playsInline />
              )}
            </div>
          </div>
        ))}

        {/* Placeholder flex item to keep spacing if needed */}
        <div style={{ flex: "0 0 0" }} />
      </div>

      {/* Last slice positioned absolutely so we can guarantee it reaches the right edge */}
      {(() => {
        const last = media[media.length - 1];
        // tweak these two values if you still see gap: width% and right offset
        const absWidth = "36%";   // give it extra width
        const rightOffset = "-8%"; // push it beyond edge after skew

        return (
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: rightOffset,
              width: absWidth,
              overflow: "hidden",
              transform: `skew(-${skew}deg)`,
              transformOrigin: "center",
              // Layer it above other slices so the logo remains visible
              zIndex: 1,
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "-12%", // extend inside more horizontally
                right: "-50%", // very large right extension so the slanted corner is covered
                top: "-10%",
                bottom: "-10%",
                transform: `skew(${skew}deg) scale(1.15)`,
                transformOrigin: "center",
              }}
            >
              {!playVideos ? (
                <img className="w-full h-full object-cover" src={last.image} alt="slice-last" />
              ) : (
                <video className="w-full h-full object-cover" src={last.video} muted loop autoPlay playsInline />
              )}
            </div>
          </div>
        );
      })()}

      {/* Centered logo overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <img src="/images/white_logo.png" alt="Logo" className="w-55 md:w-72 drop-shadow-2xl" />
      </div>
    </div>
  );
}
