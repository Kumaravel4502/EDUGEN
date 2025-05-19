import LiveClasses from "../LiveClasses/LiveClasses";
import OurTeamMembers from "../OurTeamMember/OurTeamMember";

const OurTeam = () => {
  return (
    <div className="2xl:container mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
      <div className="relative w-[90%] mx-auto bg-[#FFF7FA] pt-20 pb-12 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-18 overflow-hidden rounded-xl mb-12">
        {/* Main Content */}
        <div className="relative z-20 text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Team
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-700 font-medium">
            <a href="/" className="hover:text-[#8A47CB] font-semibold">
              Home
            </a>
            <span className="text-[#8A47CB] font-semibold"> – Team</span>
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
      <OurTeamMembers />
      <LiveClasses />
    </div>
  );
};

export default OurTeam;
