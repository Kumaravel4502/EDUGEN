import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const dropdownItems = {
  pages: [
    "About Us",
    "Our Team",
    "Team Details",
    "Privacy Policy",
    "Terms & Conditions",
    "404 Page",
  ],
  courses: ["Course Grid", "Course List", "Course Details"],
  blog: ["Blog Standard", "Blog Grid", "Blog Details"],
};

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [dropdown, setDropdown] = useState({
    pages: false,
    courses: false,
    blog: false,
  });

  const toggleMobileDropdown = (section) => {
    setDropdown((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      <div className="2xl:container mx-auto pt-2">
        <div className="w-[90%] mx-auto flex justify-between items-center gap-10">
          {/* Logo */}
          <div>
            <img
              src="https://ik.imagekit.io/ixthr16gh/Intern-Work/Logo.png"
              alt="Logo"
              className="w-[125px] h-10"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex justify-between items-center gap-[20px] text-[18px] font-bold cursor-pointer">
            <a href="#" onClick={(e) => e.preventDefault()}>
              <li className="list-none hover:text-[#8A47CB] transition-all duration-300 ease-in-out">
                Home
              </li>
            </a>

            {["pages", "courses", "blog"].map((item) => (
              <div
                key={item}
                className="relative"
                onMouseEnter={() =>
                  setDropdown((prev) => ({ ...prev, [item]: true }))
                }
                onMouseLeave={() =>
                  setDropdown((prev) => ({ ...prev, [item]: false }))
                }
              >
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center"
                >
                  <li className="list-none hover:text-[#8A47CB] capitalize transition-all duration-300 ease-in-out">
                    {item}
                  </li>
                  <ChevronDown
                    className={`ml-1 text-[#8A47CB] transition-transform duration-300 ${
                      dropdown[item] ? "rotate-180" : ""
                    }`}
                    size={16}
                  />
                </a>
                {dropdown[item] && (
                  <ul className="absolute top-full left-0 bg-white shadow-xl rounded-md mt-2 w-48 py-2 z-20 animate-fade-in">
                    {dropdownItems[item].map((subItem, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-300 ease-in-out"
                        >
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <a href="#" onClick={(e) => e.preventDefault()}>
              <li className="list-none hover:text-[#8A47CB] transition-all duration-300 ease-in-out">
                Contact
              </li>
            </a>
          </nav>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            {!show ? (
              <Menu
                size={32}
                onClick={() => setShow(true)}
                className="cursor-pointer"
                stroke="#8A47CB"
              />
            ) : (
              <X
                size={32}
                onClick={() => setShow(false)}
                className="cursor-pointer"
                stroke="#8A47CB"
              />
            )}
          </div>

          {/* Button */}
          <button className="hidden md:block relative rounded-sm h-[45px] w-50 mb-1 bg-black px-4 text-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-1 before:h-full before:w-0 before:bg-[#8A47CB] before:transition-all before:duration-500 hover:text-white hover:before:w-full hover:before:rounded-sm">
            <span className="relative z-10 flex justify-center items-center font-bold">
              Start Free Trial
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="2em"
                height="2em"
                className="pt-1"
              >
                <path
                  fill="currentColor"
                  d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
                ></path>
              </svg>
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-x-0 top-16 z-50 px-6 py-6 bg-white/80 backdrop-blur-xl rounded-t-3xl shadow-2xl transition-all duration-500 ease-in-out transform ${
            show
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col space-y-4 text-center font-semibold text-gray-800">
            <li className="py-3 border-b border-gray-200 text-md font-bold transition-all duration-300">
              Home
            </li>

            {Object.entries(dropdownItems).map(([key, values]) => (
              <div
                key={key}
                className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white"
              >
                <button
                  className="w-full flex justify-between items-center py-3 px-5 text-md font-bold text-gray-700 hover:bg-[#f9f5ff] transition-all"
                  onClick={() => toggleMobileDropdown(key)}
                >
                  <span className="capitalize text-center w-full">{key}</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      dropdown[key]
                        ? "rotate-180 text-[#8A47CB]"
                        : "text-gray-500"
                    }`}
                  />
                </button>

                {dropdown[key] && (
                  <ul className="bg-white px-4 py-2 space-y-2 border-t border-gray-100 animate-fade-in">
                    {values.map((item, index) => (
                      <li
                        key={index}
                        className="text-sm py-2 border-b border-gray-100 hover:bg-[#f0ebff] hover:text-[#8A47CB] transition-all rounded-md"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <li className="py-3 border-t border-gray-200 text-md font-bold transition-all duration-300">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
