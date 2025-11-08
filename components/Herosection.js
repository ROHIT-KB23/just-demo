"use client";

import React, { useState } from "react";

export default function HeroSection() {
  const [logoUrl, setLogoUrl] = useState("/images/white_logo.png");
  const [heroUrl, setHeroUrl] = useState("/images/Hero_section.png");
  return (
    <div className="min-h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroUrl})` }}
      ></div>

      <header className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <img
            src={logoUrl}
            alt="Logo"
            className="mx-auto max-w-xs w-full h-auto drop-shadow-2xl"
          />
        </div>
      </header>
    </div>
  );
}
