import Choose from "../Choose/Choose";
import TeamMembers from "../TeamMembers/TeamMembers";
import App from "../Testimonials/Testimonial";

const AboutUs = () => {
  const ListItem = [
    {
      img: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/check.svg",
      text: "Digital skill empowerment",
    },
    {
      text: "Expert-led courses",
      img: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/check.svg",
    },
    {
      text: "Career guidance",
      img: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/check.svg",
    },
    {
      text: "Supportive learning",
      img: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/check.svg",
    },
    {
      text: "Life-changing digital education",
      img: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/check.svg",
    },
  ];
  return (
    <div className="2xl:container mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
      <div className="relative w-[90%] mx-auto bg-[#FFF7FA] pt-20 pb-12 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-18 overflow-hidden rounded-xl mb-12">
        {/* Main Content */}
        <div className="relative z-20 text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            About Us
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-700 font-medium">
            <a href="/" className="hover:text-[#8A47CB] font-semibold">
              Home
            </a>
            <span className="text-[#8A47CB] font-semibold"> – About Us</span>
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="w-[150%] h-[100%] bg-gradient-to-b from-[#F8F8F8] to-transparent rounded-full absolute top-[-75%] left-[-25%]" />
        </div>
        <img
          src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages5.svg"
          alt="Arrow Decoration"
          className="absolute top-8 left-8 sm:top-12 sm:left-12 md:top-16 md:left-16 lg:top-20 lg:left-20 w-12 sm:w-16 md:w-20 lg:w-24 z-10"
        />
        <img
          src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages4.svg"
          alt="Book Decoration"
          className="absolute top-8 right-8 sm:top-12 sm:right-12 md:top-16 md:right-16 lg:top-20 lg:right-20 w-12 sm:w-16 md:w-20 lg:w-24 z-10"
        />
      </div>
      <section className="py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="2xl:container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-[90%] mx-auto">
            <div className="flex flex-col md:flex-row md:gap-16 lg:gap-24">
              {/* Left Section - Image Gallery */}
              <div className="md:w-1/2 relative">
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-4">
                    <img
                      src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/about5.jpg"
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
                      src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/about6.jpg"
                      alt="Learning environment"
                      className="w-full h-[360px] md:h-[410px] object-cover rounded-2xl"
                      loading="lazy"
                    />
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
                      <span className="relative inline-block sub-title ">
                        Education
                        <img
                          src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/title-shape.svg"
                          alt="Decorative shape"
                          className="absolute left-0 right-0 -bottom-2 w-full"
                          loading="lazy"
                        />
                      </span>
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-4 text-gray-600 font-semibold text-lg">
                      <ul className="space-y-6 text-black">
                        {ListItem.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-2xl"
                          >
                            <img
                              decoding="async"
                              width="25"
                              height="25"
                              src={item.img}
                              alt=""
                            />
                            <p>{item.text}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Another right section */}
                <div className="md:w-4/4 mt-12 md:mt-7 bg-white rounded-2xl shadow-xl hover:-translate-y-2 duration-700">
                  <div className=" flex items-start justify-center h-[250px] mb-[-60px]">
                    <img
                      src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/awards-logo.svg"
                      alt="Learning environment"
                      className="w-35 h-35"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center space-y-4 pb-10">
                    <p className="text-3xl font-bold">30+</p>
                    <p className="text-xl font-semibold text-gray-400">
                      Winning Awards
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 sm:p-5 lg:p-6 mb-8 mt-8">
                  {/* Icon Wrapper */}
                  <div className="rounded-full bg-white shadow-md p-5 transition-transform duration-500 hover:-translate-y-2 cursor-pointer ">
                    <img
                      src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/video-play.svg"
                      alt="Video Icon"
                      className="sm:w-12 sm:h-12"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col max-w-xl">
                    <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl text-black">
                      All Classes Video Provided
                    </h3>
                    <p className="text-sm sm:text-base text-gray-500 font-medium">
                      There are many variations of passages of but the majority
                      have suffered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Choose />
        <App />
        <TeamMembers />
      </section>
    </div>
  );
};

export default AboutUs;
