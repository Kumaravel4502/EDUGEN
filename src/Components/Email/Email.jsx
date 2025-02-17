// const Email = () => {
//   return (
//     <div className="2xl:container mx-auto mb-30 mt-10 ">
//       <div className="w-[90%] mx-auto Exp h-[310px]  rounded-2xl ">
//         <div className="flex  items-center justify-between gap-4 pt-27">
//           <img
//             src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/newsletter-icon.svg"
//             alt=""
//             className="mx-5 "
//           />
//           <h2 className="w-[40%] text-[33px] font-bold text-white">
//             Enter Your email To <br /><span>Subscribe Our Newsletter</span>
//           </h2>

//         <div className="input-wrapper">
//             <svg
//               className="icon "
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//             >
//               <g data-name="Layer 2">
//                 <g data-name="inbox">
//                   <rect
//                     width={24}
//                     height={24}
//                     transform="rotate(180 12 12)"
//                     opacity={0}
//                   />
//                   <path d="M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1H5.62z" />
//                 </g>
//               </g>
//             </svg>
//             <input
//               type="text"
//               name="text"
//               className="input"
//               placeholder="info@gmail.com"
//             />
//             <button className="Subscribe-btn ">
//               Subscribe
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 width={30}
//                 height={27}
//                 className="ml-3"
//               >
//                 <path
//         fill="#fff"
//         d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m0 2l-6.5 4.47a1 1 0 0 1-1 0L5 6Z"
//       ></path>
//               </svg>
//             </button>
//           </div>
//         </div>
//         </div>
//       </div>
//   );
// };

// export default Email;


const Email = () => {
  return (
    <div className="2xl:container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="w-full max-w-7xl mx-auto Exp rounded-2xl overflow-hidden">
        <div className="p-6 sm:p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
            {/* Icon Section */}
            <div className="shrink-0 w-16 sm:w-20 lg:w-24">
              <img
                src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/newsletter-icon.svg"
                alt="Newsletter Icon"
                className="w-full h-auto"
              />
            </div>

            {/* Text Section */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                Enter Your Email To{' '}
                <span className="block mt-1 text-gray-100">
                  Subscribe Our Newsletter
                </span>
              </h2>
            </div>

            {/* Input Section */}
            <div className="w-full lg:w-auto max-w-lg lg:max-w-none">
              <div className="flex flex-col sm:flex-row items-stretch gap-4">
                <div className="relative flex-1 min-w-0">
                  <input
                    type="email"
                    placeholder="info@gmail.com"
                    className="w-full h-14 px-12 rounded-xl bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-shadow duration-200"
                  />
                  <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <g data-name="Layer 2">
                      <g data-name="inbox">
                        <rect
                          width={24}
                          height={24}
                          transform="rotate(180 12 12)"
                          opacity={0}
                        />
                        <path d="M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1H5.62z" />
                      </g>
                    </g>
                  </svg>
                </div>
                <button className="h-14 px-6 inline-flex items-center justify-center bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap">
                  <span>Subscribe</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 ml-2"
                    fill="currentColor"
                  >
                    <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m0 2l-6.5 4.47a1 1 0 0 1-1 0L5 6Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;



