import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext";
import PropTypes from 'prop-types';

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="animate-spin w-4 h-4 border-2 border-wh border-t-transparent rounded-full"></div>
);

// Top loading bar component
const TopLoadingBar = ({ isVisible }) => (
  <div className={`fixed top-0 left-0 w-full h-[3px] z-[60] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
    <div className="h-full bg-gradient-to-r from-[#8A47CB] to-[#b47ee5] animate-loadingBar rounded-r-md"></div>
  </div>
);

TopLoadingBar.propTypes = {
  isVisible: PropTypes.bool.isRequired
};

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
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoading, showLoader } = useLoading();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState({
    home: false,
    contact: false,
    button: false
  });
  const [loadingItems, setLoadingItems] = useState({});
  const [dropdown, setDropdown] = useState({
    pages: false,
    courses: false,
    blog: false,
  });

  const handleNavigation = async (path, key) => {
    if (path === location.pathname) return; // Don't navigate to the same page

    if (key) {
      setLoadingItems(prev => ({ ...prev, [key]: true }));
    } else {
      setLoading(prev => ({ ...prev, [path]: true }));
    }

    // Show the global loading screen
    showLoader();

    // Simulate button loading effect
    await new Promise(resolve => setTimeout(resolve, 300));

    navigate(path);
    setShow(false);

    if (key) {
      setLoadingItems(prev => ({ ...prev, [key]: false }));
    } else {
      setLoading(prev => ({ ...prev, [path]: false }));
    }
  };

  const handleButtonClick = async () => {
    setLoading(prev => ({ ...prev, button: true }));
    // Simulate loading time
    await new Promise(resolve => setTimeout(resolve, 800));
    setLoading(prev => ({ ...prev, button: false }));
    // Add your button action here
  };

  const toggleMobileDropdown = (section) => {
    setDropdown((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      <TopLoadingBar isVisible={isLoading} />
      <div className="2xl:container mx-auto pt-2">
        <div className="w-[90%] mx-auto flex justify-between items-center gap-10">
          {/* Logo */}
          <div onClick={() => handleNavigation('/')} className="cursor-pointer">
            <img
              src="https://ik.imagekit.io/ixthr16gh/Intern-Work/Logo.png"
              alt="Logo"
              className="w-[125px] h-10"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex justify-between items-center gap-[20px] text-[18px] font-bold cursor-pointer">
            <div
              onClick={() => handleNavigation('/', 'home')}
              className="relative flex items-center"
            >
              <li className="list-none hover:text-[#8A47CB] transition-all duration-300 ease-in-out">
                {loading.home ? <LoadingSpinner /> : 'Home'}
              </li>
            </div>

            {Object.entries(dropdownItems).map(([key, values]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setDropdown((prev) => ({ ...prev, [key]: true }))}
                onMouseLeave={() => setDropdown((prev) => ({ ...prev, [key]: false }))}
              >
                <div className="flex items-center cursor-pointer">
                  <li className="list-none hover:text-[#8A47CB] capitalize transition-all duration-300 ease-in-out">
                    {key}
                  </li>
                  <ChevronDown
                    className={`ml-1 text-[#8A47CB] transition-transform duration-300 ${dropdown[key] ? "rotate-180" : ""
                      }`}
                    size={16}
                  />
                </div>
                {dropdown[key] && (
                  <ul className="absolute top-full left-0 bg-white shadow-xl rounded-md mt-2 w-48 py-2 z-20 animate-fade-in">
                    {values.map((item, index) => (
                      <li key={index} onClick={() => handleNavigation(item.path, `${key}-${index}`)}>
                        <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-300 ease-in-out">
                          {loadingItems[`${key}-${index}`] ? <LoadingSpinner /> : item.name}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div
              onClick={() => handleNavigation('/contact', 'contact')}
              className="relative flex items-center"
            >
              <li className="list-none hover:text-[#8A47CB] transition-all duration-300 ease-in-out">
                {loading.contact ? <LoadingSpinner /> : 'Contact'}
              </li>
            </div>
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
          <button
            onClick={handleButtonClick}
            disabled={loading.button}
            className="hidden md:block relative rounded-sm h-[45px] w-50 cursor-pointer mb-1 bg-black px-4 text-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-1 before:h-full before:w-0 before:bg-[#8A47CB] before:transition-all before:duration-500 hover:text-white hover:before:w-full hover:before:rounded-sm disabled:opacity-75"
          >
            <span className="relative z-10 flex justify-center items-center font-bold gap-2">
              {loading.button ? (
                <LoadingSpinner />
              ) : (
                <>
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
                </>
              )}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-x-0 top-16 z-50 px-6 py-6 bg-white/80 backdrop-blur-xl rounded-t-3xl shadow-2xl transition-all duration-500 ease-in-out transform ${show
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
            }`}
        >
          <ul className="flex flex-col space-y-4 text-center font-semibold text-gray-800">
            <div onClick={() => handleNavigation('/', 'home')} className="cursor-pointer">
              <li className="py-3 border-b border-gray-200 text-md font-bold transition-all duration-300">
                {loading.home ? <LoadingSpinner /> : 'Home'}
              </li>
            </div>

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
                    className={`transition-transform duration-300 ${dropdown[key] ? "rotate-180 text-[#8A47CB]" : "text-gray-500"}`}
                  />
                </button>

                {dropdown[key] && (
                  <ul className="bg-white px-4 py-2 space-y-2 border-t border-gray-100 animate-fade-in">
                    {values.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => handleNavigation(item.path, `${key}-${index}`)}
                        className="cursor-pointer"
                      >
                        <li className="text-sm py-2 border-b border-gray-100 hover:bg-[#f0ebff] hover:text-[#8A47CB] transition-all rounded-md">
                          {loadingItems[`${key}-${index}`] ? <LoadingSpinner /> : item.name}
                        </li>
                      </div>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div onClick={() => handleNavigation('/contact', 'contact')} className="cursor-pointer">
              <li className="py-3 border-t border-gray-200 text-md font-bold transition-all duration-300">
                {loading.contact ? <LoadingSpinner /> : 'Contact'}
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
