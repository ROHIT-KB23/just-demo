export default function FutureSection() {
  return (
    <section className="bg-white overflow-hidden">
      {/* === TEXT ROW === */}
      <div className="w-full flex flex-col lg:flex-row px-6 md:px-10 lg:px-16 py-10 lg:py-16">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center lg:pr-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-wider text-center lg:text-left leading-snug">
            FUTURE OF DIAMONDS
          </h2>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center lg:pl-8 mt-6 lg:mt-0">
          <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-snug text-center tracking-wide lg:text-left">
            The world's fully traceable, 100% Climate Neutral and{" "}
            <br className="hidden lg:block" />
            Sustainability Rated Lab-Grown Diamonds.
            <br className="hidden lg:block" />
            Grown in our Indian laboratory using patented CVD technology.
          </p>
        </div>
      </div>

      {/* === IMAGE ROW === */}
      <div className="relative flex flex-col md:flex-row w-full h-[80vh] md:h-screen">
        {/* Center logo overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <img
            src="/images/logo_icon.png"
            alt="Icon"
            className="w-16 md:w-28 lg:w-40 opacity-90"
          />
        </div>

        {/* Left Image */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
          <img
            src="/images/jewelry-hand.jpg"
            alt="Jewelry on hand"
            className="absolute inset-0 w-full h-full object-cover md:object-cover object-center"
          />
        </div>

        {/* Right Image */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
          <img
            src="/images/model.jpg"
            alt="Model"
            className="absolute inset-0 w-full h-full object-cover md:object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

