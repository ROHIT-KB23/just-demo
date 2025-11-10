"use client";

import { useEffect, useRef, useState } from "react";

export default function USPSection() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollStart = -rect.top;
      const HEADER_HEIGHT = 100; // adjust based on your actual header size
const scrollRange = sectionHeight - (windowHeight - HEADER_HEIGHT);

      // const scrollRange = sectionHeight - windowHeight;
      // const progress = Math.max(0, Math.min(1, scrollStart / scrollRange));
      const progress = Math.max(0, Math.min(0.99, scrollStart / scrollRange));


      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getImage1Transform = () => {
    const progress = Math.min(1, scrollProgress / 0.15);
    const translateX = 100 - progress * 100;
    return { transform: `translateX(${translateX}%)`, opacity: 1 };
  };

  const getImage2Transform = () => {
    const startProgress = Math.max(0, scrollProgress - 0.3);
    const progress = Math.min(1, startProgress / 0.2);
    const translateX = 100 - progress * 100;
    return { transform: `translateX(${translateX}%)`, opacity: 1 };
  };

  const getImage3Transform = () => {
    const startProgress = Math.max(0, scrollProgress - 0.65);
    const progress = Math.min(1, startProgress / 0.2);
    const translateX = 100 - progress * 100;
    return { transform: `translateX(${translateX}%)`, opacity: 1 };
  };

  const getText1Transform = () => {
    if (scrollProgress < 0.15 || scrollProgress >= 0.3) {
      return { transform: "scale(0)", opacity: 0 };
    }
    const enterStart = scrollProgress - 0.15;
    const progress = Math.min(1, enterStart / 0.08);
    const scale = progress;
    const opacity = progress;
    return { transform: `scale(${scale})`, opacity };
  };

  const getText2Transform = () => {
    if (scrollProgress < 0.5 || scrollProgress >= 0.65) {
      return { transform: "scale(0)", opacity: 0 };
    }
    const enterStart = scrollProgress - 0.5;
    const progress = Math.min(1, enterStart / 0.08);
    const scale = progress;
    const opacity = progress;
    return { transform: `scale(${scale})`, opacity };
  };

  // const getText3Transform = () => {
  //   if (scrollProgress < 0.85) {
  //     return { transform: "scale(0)", opacity: 0 };
  //   }
  //   const enterStart = scrollProgress - 0.85;
  //   const progress = Math.min(1, enterStart / 0.08);
  //   const scale = progress;
  //   const opacity = progress;
  //   return { transform: `scale(${scale})`, opacity };
  // };

  const getText3Transform = () => {
  if (scrollProgress < 0.75) return { transform: "scale(0)", opacity: 0 };
  const enterStart = scrollProgress - 0.75;
  const progress = Math.min(1, enterStart / 0.25); // lasts longer till scroll end
  const scale = progress;
  const opacity = progress;
  return { transform: `scale(${scale})`, opacity };
};


  return (
    <section
      ref={sectionRef}
      className="bg-white py-20 md:py-32"
      style={{ minHeight: "250vh" }}
    >
      {/* <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"> */}
      <div
  className="sticky flex items-center justify-center overflow-hidden"
  style={{ top: "100px", height: "calc(100vh - 100px)" }} // compensate for header
>

        <div className="relative w-full h-full">
          <div className="relative w-full h-full overflow-hidden">
            <div
              className="absolute inset-0 transition-transform duration-700 ease-out"
              style={getImage1Transform()}
            >
              <img
                src="/images/Diamonds.png"
                alt="Diamonds"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="absolute inset-0 transition-transform duration-700 ease-out"
              style={{
                ...getImage2Transform(),
                clipPath: "polygon(50% 0, 100% 0, 100% 100%, 15% 100%)",
              }}
            >
              <img
                src="/images/Ocens.png"
                alt="Ocean"
                className="w-full h-full object-fill"
              />
            </div>

            <div
              className="absolute inset-0 transition-transform duration-700 ease-out"
              style={{
                ...getImage3Transform(),
                clipPath: "polygon(70% 0, 100% 0, 100% 100%, 40% 100%)",
              }}
            >
              <img
                src="/images/Forest.png"
                alt="Forest"
                className="w-full h-full object-fill"
              />
            </div>
          </div>

          <div
            className="absolute inset-0 flex items-center justify-start pl-8 md:pl-16 pointer-events-none z-20"
            style={getText1Transform()}
          >
            <div className="text-left px-10 py-8">
              <p className="text-2xl md:text-4xl font-bold font-serif text-white drop-shadow-2xl max-w-xl">
                The world's fully traceable, 100% Climate Neutral
              </p>
            </div>
          </div>

          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
            style={getText2Transform()}
          >
            <div className="text-center px-10 py-8">
              <p className="text-2xl md:text-4xl font-bold font-serif text-white drop-shadow-2xl max-w-xl">
                The world's fully traceable, 100% Climate Neutral
              </p>
            </div>
          </div>

          <div
            className="absolute inset-0 flex items-center justify-end pr-8 md:pr-16 pointer-events-none z-20"
            style={getText3Transform()}
          >
            <div className="text-right px-10 py-8">
              <p className="text-2xl md:text-4xl font-bold font-serif text-white drop-shadow-2xl max-w-xl">
                The world's fully traceable, 100% Climate Neutral
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
