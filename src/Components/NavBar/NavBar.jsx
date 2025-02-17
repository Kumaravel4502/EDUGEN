// <img decoding="async" src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/udemy.svg" alt=""></img>

// import { useState } from "react";

// const NavBar = () => {
//   const [show, setShow] = useState(false); // State to track the visibility of the menu

//   return (
//     <>

//       <div className="2xl:container mx-auto  pt-2">
//         <div className="w-[90%] mx-auto flex justify-between items-center gap-10">
//           <div>
//             <img
//               src="https://ik.imagekit.io/ixthr16gh/Intern-Work/Logo.png"
//               alt="Logo"
//               className="w-[125px] h-10"
//             />
//           </div>

//           <div className="flex justify-between items-center gap-4">
//             <nav className="hidden md:block">
//               <ul className="flex justify-between items-center gap-[20px] text-[18px] font-bold pb-1 cursor-pointer content">
//                 <a href="#">
//                   <li className="hover:text-[#8A47CB]">Home</li>
//                 </a>
//                 <a href="#">
//                   <li className="hover:text-[#8A47CB]">Pages</li>
//                 </a>
//                 <a href="#">
//                   <li className="hover:text-[#8A47CB]">Courses</li>
//                 </a>
//                 <a href="#">
//                   <li className="hover:text-[#8A47CB]">Blog</li>
//                 </a>
//                 <a href="#">
//                   <li className="hover:text-[#8A47CB]">Contact</li>
//                 </a>
//               </ul>
//             </nav>

//             <div>
//               <img
//                 src="https://ik.imagekit.io/ixthr16gh/Intern-Work/TripleDots.png"
//                 alt="Triple Dots"
//                 className="md:hidden"
//                 id="dots"
//               />
//             </div>

//             <div>
//               {!show ? (
//                 <img
//                   src="https://ik.imagekit.io/ixthr16gh/Intern-Work/Hamburger-Menu.png"
//                   alt="Hamburger Menu"
//                   className="md:hidden"
//                   id="Menu"
//                   onClick={() => setShow(true)}
//                 />
//               ) : (
//                 <img
//                   src="https://ik.imagekit.io/ixthr16gh/Intern-Work/Cross-icon.png"
//                   alt="Cross Icon"
//                   className="md:hidden h-9"
//                   id="cross"
//                   onClick={() => setShow(false)}
//                 />
//               )}
//             </div>
//           </div>

//           <button className="hidden md:block relative rounded-sm h-[45px] w-50 mb-1 bg-black px-3 text-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-1 before:h-full before:w-0 before:bg-[#8A47CB] before:transition-all before:duration-500 hover:text-white hover:before:w-full hover:before:rounded-sm">
//             <span className="relative z-10 flex justify-center items-center font-bold">
//               Start Free Trial
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 width="2em"
//                 height="2em"
//                 className="pt-1"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
//                 ></path>
//               </svg>
//             </span>
//           </button>
//         </div>
//         {/* <img src="https://ik.imagekit.io/ixthr16gh/Intern-Work/banner-shape8.webp" alt="" className=" sm:hidden md:block max-w-[300px] " /> */}

//         {/* Mobile Menu */}
//         {show && (
//           <div className="md:hidden absolute top-16  w-[90%] mx-auto bg-[#F2F9FF] rounded-2xl shadow-2xl z-50 hamm-content  ">
//             <ul className="flex flex-col items-center text-[18px] font-bold">
//               <a href="#">
//                 <li className="py-4 hover:text-[#8A47CB]">Home</li>
//               </a>{" "}
//               <hr className="h-2 bg-red-300" />
//               <a href="#">
//                 <li className="py-4 hover:text-[#8A47CB]">Pages</li>
//               </a>
//               <a href="#">
//                 <li className="py-4 hover:text-[#8A47CB]">Courses</li>
//               </a>
//               <a href="#">
//                 <li className="py-4 hover:text-[#8A47CB]">Blog</li>
//               </a>
//               <a href="#">
//                 <li className="py-4 hover:text-[#8A47CB]">Contact</li>
//               </a>
//             </ul>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default NavBar;

import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [show, setShow] = useState(false); // State to track the visibility of the menu

  return (
    <>
      <div className="2xl:container mx-auto pt-2">
        <div className="w-[90%] mx-auto flex justify-between items-center gap-10">
          <div>
            <img
              src="https://ik.imagekit.io/ixthr16gh/Intern-Work/Logo.png"
              alt="Logo"
              className="w-[125px] h-10"
            />
          </div>

          <div className="flex justify-between items-center gap-4">
            <nav className="hidden md:block">
              <ul className="flex justify-between items-center gap-[20px] text-[18px] font-bold pb-1 cursor-pointer content">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <li className="hover:text-[#8A47CB]">Home</li>
                </a>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <li className="hover:text-[#8A47CB]">Pages</li>
                </a>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <li className="hover:text-[#8A47CB]">Courses</li>
                </a>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <li className="hover:text-[#8A47CB]">Blog</li>
                </a>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <li className="hover:text-[#8A47CB]">Contact</li>
                </a>
              </ul>
            </nav>

            <div className="md:hidden">
              {!show ? (
                <Menu
                  size={32}
                  onClick={() => setShow(true)}
                  className="cursor-pointer"
                  aria-label="Open menu"
                  stroke="#8A47CB"
                />
              ) : (
                <X
                  size={32}
                  onClick={() => setShow(false)}
                  className="cursor-pointer"
                  aria-label="Close menu"
                  stroke="#8A47CB"
                />
              )}
            </div>
          </div>

          <button className="hidden md:block relative rounded-sm h-[45px] w-50 mb-1 bg-black px-3 text-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-1 before:h-full before:w-0 before:bg-[#8A47CB] before:transition-all before:duration-500 hover:text-white hover:before:w-full hover:before:rounded-sm">
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
        {show && (
          <div
            className={`md:hidden absolute top-16 left-0 w-full bg-[#F2F9FF] rounded-2xl shadow-2xl z-50 px-6 py-4 flex justify-center transition-all duration-300 ease-in-out ${
              show
                ? "mt-4 opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-5"
            }`}
            style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
          >
            <ul className="flex flex-col items-center text-[18px] font-bold w-full">
              <a href="#" onClick={(e) => e.preventDefault()}>
                <li
                  className="py-4 hover:text-[#8A47CB] w-full text-center"
                  role="menuitem"
                >
                  Home
                </li>
              </a>
              <hr />
              <a href="#" onClick={(e) => e.preventDefault()}>
                <li
                  className="py-4 hover:text-[#8A47CB] w-full text-center"
                  role="menuitem"
                >
                  Pages
                </li>
              </a>
              <a href="#" onClick={(e) => e.preventDefault()}>
                <li
                  className="py-4 hover:text-[#8A47CB] w-full text-center"
                  role="menuitem"
                >
                  Courses
                </li>
              </a>
              <a href="#" onClick={(e) => e.preventDefault()}>
                <li
                  className="py-4 hover:text-[#8A47CB] w-full text-center"
                  role="menuitem"
                >
                  Blog
                </li>
              </a>
              <a href="#" onClick={(e) => e.preventDefault()}>
                <li
                  className="py-4 hover:text-[#8A47CB] w-full text-center"
                  role="menuitem"
                >
                  Contact
                </li>
              </a>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
