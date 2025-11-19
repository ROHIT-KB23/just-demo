"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface VideoWithThumbnailProps {
  thumbSrc: string;
  videoSrc: string;
  alt: string;
}

function VideoWithThumbnail({
  thumbSrc,
  videoSrc,
  alt,
}: VideoWithThumbnailProps) {
  const [showVideo, setShowVideo] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowVideo(true);
          }
        });
      },
      { threshold: 0.25 } // trigger when 25% visible
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [showVideo]);

  return (
    <div className="relative w-full h-full" ref={containerRef}>
      {/* Thumbnail */}
      <Image
        src={thumbSrc}
        alt={alt}
        fill
        className={`object-cover object-center transition-opacity duration-1000 ${
          showVideo ? "opacity-0" : "opacity-100"
        }`}
        priority={false} // lazy
      />

      {/* Video */}
      {showVideo && (
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          muted
          autoPlay
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover object-center transition-opacity duration-1000 opacity-100"
        />
      )}
    </div>
  );
}

export default function FutureSection() {
  return (
    <section className="bg-white overflow-hidden">
      {/* === TEXT ROW === */}
      <div className="w-full flex flex-col lg:flex-row px-6 md:px-10 lg:px-16 py-10 lg:py-16">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center lg:pr-8">
          <h2 className="text-3xl md:text-4xl lg:text-[50px] font-serif tracking-[4.5px] text-center lg:text-left leading-snug">
            FUTURE OF DIAMONDS
          </h2>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center lg:pl-8 mt-6 lg:mt-0">
          <p className="font-mont text-[20px] lg:text-[22px] leading-none leading-[25px] lg:leading-[25px] text-[#000000] tracking-[0.2px] text-left ">
            The world’s fully traceable, 100% Climate Neutral and <br />
            Sustainability Rated Lab-Grown Diamonds. <br />
            Grown in our Indian laboratory using patented CVD technology.
          </p>
        </div>
      </div>

      {/* === VIDEO ROW === */}
      <div className="relative flex flex-col md:flex-row w-full h-[calc(100vh-6rem)]">
        {/* Center logo overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <Image
            src="/images/logo_icon.png"
            alt="Icon"
            width={180}
            height={180}
            priority
            className="opacity-90 object-contain"
          />
        </div>

        {/* Left Video */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
          <VideoWithThumbnail
            thumbSrc="/images/jewelry-hand.jpg"
            videoSrc="https://res.cloudinary.com/dcwgzfcj2/video/upload/v1763535445/jewelry-hand_lt9xkx.mp4"
            alt="Jewelry on hand"
          />
        </div>

        {/* Right Video */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
          <VideoWithThumbnail
            thumbSrc="/images/model.jpg"
            videoSrc="https://res.cloudinary.com/dcwgzfcj2/video/upload/v1763535468/model_qrqgsu.mp4"
            alt="Model"
          />
        </div>
      </div>
    </section>
  );
}
