/* eslint-disable no-unused-vars */
import { useState } from "react";

const BackgroundVideo = () => {
 
  const [spinSpeed, setSpinSpeed] = useState(10);

  // Function to dynamically update the spinning speed
  // const handleSpeedChange = (e) => {
  //   setSpinSpeed(e.target.value);
  // };

  return (
    <section>
      <div className="2xl:container mx-auto mt-10 mb-15 rounded-3xl relative">
        <div
          className="w-[90%] mx-auto relative h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center rounded-2xl"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('https://demo.themeies.com/edugen/wp-content/uploads/2024/10/video1-scaled-1.jpg')",
          }}
        >
          {/* Heading */}
          <h1
            className="text-4xl sm:text-6xl lg:text-8xl font-bold pt-32 sm:pt-40 lg:pt-48 ml-6 sm:ml-12 lg:ml-14"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px rgba(255, 255, 255, 0.3)",
              textStroke: "2px rgba(255, 255, 255, 0.3)",
            }}
          >
            INTRO{" "}
            <span className="block md:inline md:ml-8 lg:ml-10 mt-2">VIDEO</span>
          </h1>

          {/* Video Button Container */}
          <div className="absolute inset-0 flex justify-end items-center pr-8 sm:pr-12 md:pr-16 lg:pr-20">
            <div
              className="relative round"
              style={{
                animation: `spin ${spinSpeed}s linear infinite`, // Dynamic animation speed
              }}
            >
              <img
                src="https://demo.themeies.com/edugen/wp-content/uploads/2024/10/video-shapessx.svg"
                alt=""
                className="w-[160px] sm:w-[220px] md:w-[300px] lg:w-[360px] background-Animation"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="5em"
                    height="5em"
                    className="bg-white rounded-[50px] p-5"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="m9.524 4.938l10.092 6.21a1 1 0 0 1 0 1.704l-10.092 6.21A1 1 0 0 1 8 18.21V5.79a1 1 0 0 1 1.524-.852"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Speed Control */}
      {/* <div className="mt-4 text-center">
        <label htmlFor="speed" className="text-xl font-semibold">
          Spinning Speed (Seconds):
        </label>
        <input
          type="range"
          id="speed"
          min="1"
          max="20"
          step="0.5"
          value={spinSpeed}
          onChange={handleSpeedChange}
          className="w-full mt-2"
        />
        <span className="block mt-2">{spinSpeed}s</span>
      </div> */}
    </section>
  );
};

export default BackgroundVideo;
