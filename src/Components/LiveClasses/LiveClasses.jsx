import { VolumeOff, Phone, Video } from "lucide-react";

const LiveClasses = () => {
  return (
    <div className="2xl:container mx-auto py-12 md:py-20">
      <div className="w-[90%] max-w-7xl mx-auto text-center px-4">
        <p className="sub-titlecontent text-[22px] font-semibold">
          Live Classes
        </p>
        <h2 className="font-bold text-3xl md:text-4xl lg:text-6xl mt-3">
          It&apos;s Easy To Start{" "}
          <span className="relative inline-block sub-title">
            Learning
            <img
              src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/title-shape.svg"
              alt="Shape"
              className="absolute left-0 right-0 w-full"
              loading="lazy"
            />
          </span>
        </h2>

        <div className="relative mt-8 md:mt-18">
          {/* Main image container with responsive padding */}
          <div className="relative pt-[47.25%] rounded-lg overflow-hidden">
            <img
              src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/learning1.jpg"
              alt="Live class main view"
              className="absolute top-0 left-0 w-full h-[99%] object-cover rounded-lg"
            />
          </div>

          {/* Live indicator button */}
          <div className="absolute top-4 right-4 md:top-8 md:right-8">
            <button className="h-10 md:h-14 px-4 md:px-6 inline-flex items-center bg-white  shadow-lg text-sm md:text-base">
              <span className="animate-pulse bg-red-500 h-2 w-2 rounded-full mr-2"></span>
              LIVE <span className="pl-3 md:pl-6 text-gray-600">01:20:08</span>
            </button>
          </div>

          {/* Small profile image */}
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-20 md:w-62 aspect-square">
            <img
              src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/learning2.jpg"
              alt="Instructor profile"
              className="w-full h-full object-cover border-2 border-white rounded-lg shadow-lg"
            />
          </div>

          {/* Control buttons */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex justify-center gap-3 sm:gap-4 md:gap-6">
            <button className="p-2 sm:p-3 md:p-4 bg-white rounded-full transition-all hover:bg-gray-200">
              <VolumeOff className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            </button>
            <button className="p-2 sm:p-3 md:p-4 bg-[#ff553e] rounded-full transition-all hover:bg-[#e14a35]">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
            </button>
            <button className="p-2 sm:p-3 md:p-4 bg-[#1cca81] rounded-full transition-all hover:bg-[#17b374]">
              <Video className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveClasses;
