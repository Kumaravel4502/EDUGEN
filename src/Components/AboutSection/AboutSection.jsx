const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="2xl:container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row md:gap-16 lg:gap-24">
            {/* Left Section - Image Gallery */}
            <div className="md:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4">
                  <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/about1.jpg"
                    alt="Students studying together"
                    className="w-full h-[200px] md:h-[280px] object-cover rounded-2xl"
                    loading="lazy"
                  />
                  <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/about3.jpg"
                    alt="Modern classroom"
                    className="w-full h-[325px] md:h-[320px] object-cover rounded-2xl"
                    loading="lazy"
                  />
                </div>

                <div className="pt-8 md:pt-12">
                  <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/about2.jpg"
                    alt="Learning environment"
                    className="w-full h-[360px] md:h-[410px] object-cover rounded-2xl"
                    loading="lazy"
                  />

                  <div className="mt-6 Exp p-6 rounded-2xl text-white">
                    <div className="flex justify-between items-start">
                      <span className="text-4xl md:text-5xl font-bold">15</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        className="w-10 h-10"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="4"
                        >
                          <path d="M19 11H37V29" />
                          <path d="M11.5439 36.4559L36.9997 11" />
                        </g>
                      </svg>
                    </div>
                    <p className="text-lg mt-2">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Content */}
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <span className="inline-block sub-title text-lg font-semibold mb-3">
                    About Edugen
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Discover Our Vision for Digital{" "}
                    <span className="relative inline-block">
                      Education
                      <img
                        src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/title-shape.svg"
                        alt="Decorative shape"
                        className="absolute left-0 right-0 -bottom-2 w-full"
                        loading="lazy"
                      />
                    </span>
                  </h2>
                  <p className="mt-6 text-gray-600 text-lg font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam et doloremque magnam adipisci quam sapiente
                    ratione doloribus incidunt dignissimos repudiandae.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">
                    OUR MISSION & VISION
                  </h3>
                  <div className="space-y-4 text-gray-600 font-semibold text-lg">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Doloremque, modi nesciunt! Beatae et porro, illo
                      voluptates officiis officia magni sequi possimus labore
                      accusantium explicabo a consequatur.
                    </p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Necessitatibus odio, quas fugiat sapiente reiciendis
                      eveniet rerum tenetur ipsum iste minima sint vero.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                  <button className="cursor-pointer relative rounded-sm h-[46px] md:w-55 bg-black px-3 text-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-1 before:h-full before:w-0 before:bg-[#8A47CB] before:transition-all before:duration-500 hover:text-white hover:before:w-full hover:before:rounded-sm">
                    <span className="relative z-10 flex items-center justify-center gap-2 font-semibold text-sm sm:text-base">
                      View All Categories
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        className="transition-transform group-hover:translate-x-1"
                      >
                        <path
                          fill="currentColor"
                          d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
                        />
                      </svg>
                    </span>
                  </button>
                  <div className="flex items-center gap-4">
                    <img
                      src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/about4.jpg"
                      alt="Jason S. Ellis - CEO"
                      className="w-16 h-16 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-xl font-bold">Jason S. Ellis</p>
                      <p className="text-[#4B4956] font-semibold">
                        CEO & Founder
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
