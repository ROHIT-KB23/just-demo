export default function FutureSection() {
  return (
    <section className="bg-white">
      <div className="w-full flex flex-col lg:flex-row px-8 lg:px-16 py-8 lg:py-12">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center lg:pr-8">
          <h2 className="text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-serif tracking-wider text-center lg:text-left leading-relaxed">
            FUTURE OF DIAMONDS
          </h2>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center lg:pl-8 mt-6 lg:mt-0">
          <p className="text-black-600 text-base md:text-lg lg:text-xl leading-snug text-center tracking-wide lg:text-left">
            The world's fully traceable, 100% Climate Neutral and{" "}
            <br className="hidden lg:block" />
            Sustainability Rated Lab-Grown Diamonds.
            <br className="hidden lg:block" />
            Grown in our Indian laboratory using patented CVD technology
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-18 h-18 md:w-40 md:h-40 flex items-center justify-center p-4">
            <img
              src="/images/logo_icon.png"
              alt="Icon"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:h-screen">
          <img
            src="/images/jewelry-hand.jpg"
            alt="Jewelry on hand"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 lg:h-screen">
          <img
            src="/images/model.jpg"
            alt="Model"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
