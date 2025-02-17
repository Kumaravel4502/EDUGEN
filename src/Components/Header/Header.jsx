import NavBar from "../NavBar/NavBar";
import { MessageCircle } from "lucide-react";
const Header = () => {
  const students = [
    "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/user1.jpg",
    "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/user2.jpg",
    "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/user3.jpg",
    "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/user4.jpg",
    "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/user5.jpg",
  ];
  return (
    <section className="min-h-max bg-gradient-to-br from-purple-100 via-blue-50 to-teal-100">
      <NavBar />
      <div className="2xl:container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 w-[90%] mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full">
            <div className="w-3 h-3 bg-blue-400 rounded-full "></div>
            <span className="sub-title">Online Education Website</span>
          </div>

          <h1 className="text-5xl font-bold leading-tight">
            Empower Your Future, Learn Digital{" "}
            <span className="relative ml-3 text-[40px] sub-title">
              Skills
              <img
                decoding="async"
                src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/title-shape.svg"
                alt="Shape"
                className="absolute left-0 right-0 bottom-0 mx-auto text-center"
              />
            </span>
          </h1>

          <p className="text-gray-600 text-lg font-semibold">
            Embark on a Journey of Digital Discovery: Expert-Led Courses
            Designed to Equip
          </p>

          <div className="2xl:container mx-auto grid grid-cols-2 ">
            <div className="w-[80%] gap-5 flex justify-between items-center md:w-[250px]">
              <button
                className="relative rounded-sm h-[45px] mt-10 mb-1 bg-white px-3 text-black cursor-pointer transition-all before:absolute
               before:bottom-0 before:left-0 before:top-0 before:z-1 before:h-full before:w-2 before:rounded-[2px] before:bg-black
                before:transition-all before:duration-500 hover:text-white hover:before:w-full hover:before:rounded-sm"
              >
                <span className="relative z-10 flex justify-between items-center font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="2em"
                    height="2em"
                    className="pt-[4px]"
                  >
                    <path
                      fill="currentColor"
                      d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
                    ></path>
                  </svg>
                  Enroll Now
                </span>
              </button>
              <button className="ease-in-out duration-500 rounded-[45px] p-3 mt-8 bg-white cursor-pointer hover:bg-black hover:fill-white hover:stroke-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="26"
                  height="26"
                  fill="#8A47CB"
                  stroke="#8A47CB"
                >
                  <path d="M6 20.1957V3.80421C6 3.01878 6.86395 2.53993 7.53 2.95621L20.6432 11.152C21.2699 11.5436 21.2699 12.4563 20.6432 12.848L7.53 21.0437C6.86395 21.46 6 20.9812 6 20.1957Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="relative banner-right ">
          <img
            src="https://ik.imagekit.io/ixthr16gh/Intern-Work/kenny-eliason-zFSo6bnZJTw-unsplash%20(1).jpg"
            alt="Student with laptop"
            className="rounded-2xl w-full max-w-full"
          />

          <div className="absolute top-2 right-2 sm:top-3 sm:right-2 md:top-3 md:right-2 lg:top-4 lg:right-3 cursor-pointer hover:-translate-y-2  duration-700  bg-white p-3 rounded-xl shadow-lg flex items-center gap-2">
            <img
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
              alt="Udemy"
              className="h-6"
            />
            <span className="font-bold">4.9 ★</span>
          </div>

          {/* Chat Card */}

          <div
            className=" sm:mx-auto sm:mt-13  md:absolute  md:bottom-5 md:right-3 md:max-w-[60%] md:mb-4 lg:mb-0 bg-white p-4 rounded-xl shadow-lg sm:max-w-[400px]  flex flex-col items-center gap-2  overflow-hidden px-3
    placeholder-current::placeholder transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:bg-[#8A47CB]
    before:transition-all before:duration-700 hover:text-white hover:before:left-0 hover:before:w-full hover:-translate-y-5   duration-700  cursor-pointer group  "
          >
            <div className="flex items-center gap-3 relative z-10 ">
              <div className="p-2 bg-blue-100 rounded-full">
                <MessageCircle className="w-5 h-5 text-blue-500 " />
              </div>
              <div className="transition-all ">
                <h4 className="font-semibold text-blue-500 group-hover:text-white">
                  Chat with a mentor
                </h4>
                <p className="text-sm text-gray-600 group-hover:text-white">
                  Find your mentor here
                </p>
              </div>
            </div>
          </div>

          <div
            className="sm:mx-auto sm:mt-10 sm:max-w-[450px] sm:p-7 md:absolute md:top-2/3 md:left-0 transform translate-y-5 bg-white p-4 
          rounded-2xl shadow-lg md:min-w-[49%]   xl:w-[50%] group hover:-translate-y-5 duration-700"
          >
            <div className="flex flex-col items-center gap-3 mb-4">
              <div className="rounded-full bg-gray-300 p-5 group-hover:bg-[#8A47CB] ease-in-out duration-500 cursor-pointer">
                <img
                  src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/user-icon.svg"
                  alt="User Icon"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <h3 className="font-bold text-center sm:text-4xl sm:font-semibold">
                  STUDENTS
                </h3>
                <p className="text-2xl font-bold text-center sm:text-3xl sm:font-semibold">
                  10K+
                </p>
              </div>
              <div className="flex -space-x-4 justify-center">
                <ul className="flex">
                  {students.map((src, index) => (
                    <li key={index}>
                      <img
                        src={src}
                        alt={`User ${index + 1}`}
                        className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-white"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Students Card End */}
        </div>
      </div>
    </section>
  );
};

export default Header;
