export default function CommitmentSection() {
  return (
    <div className="bg-black">
      <div className=" flex justify-center p-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light tracking-wider text-white mb-4">
            A commitment to conscience
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 mb-8 leading-normal tracking-wide max-w-4xl">
            Each Maitri represents an unwavering dedication to environmental
            stewardship. Certified climate-neutral, fully traceable, cultivated
            with reverence for our planet.{" "}
          </p>
        </div>
      </div>
      <div
        className="min-h-screen flex items-center justify-center p-4 bg-fixed bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/images/background-image.png')" }}
      >
        <div className="max-w-[95%] mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            {/* Left Text */}
            <div className="lg:w-1/3 text-center lg:text-left">
              <p className="text-2xl md:text-3xl text-white">
                The world's fully traceable,
                <br />
                100% Climate Neutral
              </p>
            </div>

            {/* Right Text */}
            <div className="lg:w-1/3 text-center lg:text-right">
              <p className="text-2xl md:text-3xl text-white">
                The world's fully traceable,
                <br />
                100% Climate Neutral and
                <br />
                Sustainability Rated
                <br />
                Lab-Grown Diamonds
              </p>
            </div>
          </div>
        </div>
      </div>
      );
    </div>
  );
}
