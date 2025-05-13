import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const dropdownItems = {
  pages: [
    { name: "AboutUs", path: "/about-us" },
    { name: "Our Team", path: "/our-team" },
    // { name: "Team Details", path: "/team-details" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-conditions" },
    { name: "404 Page", path: "/not-found" },
  ],
  courses: [
    { name: "Course Grid", path: "/course-grid" },
    { name: "Course List", path: "/course-list" },
    { name: "Course Details", path: "/course-details" },
  ],
  blog: [
    { name: "Blog Standard", path: "/blog-standard" },
    { name: "Blog Grid", path: "/blog-grid" },
    { name: "Blog Details", path: "/blog-details" },
  ],
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
          <Link to="/">
            <img
              src="https://ik.imagekit.io/ixthr16gh/Intern-Work/Logo.png"
              alt="Logo"
              className="w-[125px] h-10"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex justify-between items-center gap-[20px] text-[18px] font-bold cursor-pointer">
            <Link to="/">
              <li className="list-none hover:text-[#8A47CB] transition-all duration-300 ease-in-out">
                Home
              </li>
            </Link>

            {Object.entries(dropdownItems).map(([key]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() =>
                  setDropdown((prev) => ({ ...prev, [key]: true }))
                }
                onMouseLeave={() =>
                  setDropdown((prev) => ({ ...prev, [key]: false }))
                }
              >
                <div className="flex items-center cursor-pointer">
                  <li className="list-none hover:text-[#8A47CB] capitalize transition-all duration-300 ease-in-out">
                    {key}
                  </li>
                  <ChevronDown
                    className={`ml-1 text-[#8A47CB] transition-transform duration-300 ${
                      dropdown[key] ? "rotate-180" : ""
                    }`}
                    size={16}
                  />
                </div>
                {dropdown[key] && (
                  <ul className="absolute top-full left-0 bg-white shadow-xl rounded-md mt-2 w-48 py-2 z-20 animate-fade-in">
                    {dropdownItems[key].map(({ name, path }, index) => (
                      <li key={index}>
                        <Link
                          to={path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-300 ease-in-out"
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <Link to="/contact">
              <li className="list-none hover:text-[#8A47CB] transition-all duration-300 ease-in-out">
                Contact
              </li>
            </Link>
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
            <Link to="/" onClick={() => setShow(false)}>
              <li className="py-3 border-b border-gray-200 text-md font-bold transition-all duration-300">
                Home
              </li>
            </Link>

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
                      <Link
                        to={item.path}
                        key={index}
                        onClick={() => setShow(false)}
                      >
                        <li className="text-sm py-2 border-b border-gray-100 hover:bg-[#f0ebff] hover:text-[#8A47CB] transition-all rounded-md">
                          {item.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <Link to="/contact" onClick={() => setShow(false)}>
              <li className="py-3 border-t border-gray-200 text-md font-bold transition-all duration-300">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
