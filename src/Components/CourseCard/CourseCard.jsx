const CourseCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { data = {} } = props;
  const { image, level, smallImage, students, ratings, title } = data;

  return (
    <div className="w-full px-4 sm:px-0 hover:-translate-y-2  duration-700">
      <div className="shadow-lg rounded-lg group h-full w-full sm:w-[85%] md:w-full mx-auto ">
        <figure className="overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-45 sm:h-87 md:h-60 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
          />
          <p className="bg-[#8A47CB] text-white text-base sm:text-[20px] font-semibold w-auto sm:w-21 text-center p-1.5 sm:p-2 rounded-t-2xl absolute bottom-[1px] left-8 sm:left-12">
            $ 26.00
          </p>
        </figure>

        <div className="flex justify-between items-end p-3 sm:p-4">
          <p className="relative rounded-sm h-[40px] sm:h-[45px] w-28 sm:w-34 ml-1 sm:ml-2 mt-1 bg-[#F0F0F0] text-[#5F5555] px-2 sm:px-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-1 before:h-full before:w-0 before:bg-[#8A47CB] before:transition-all before:duration-500 hover:text-white hover:before:w-full hover:before:rounded-sm">
            <span className="relative z-10 flex justify-center items-center pt-3 text-[13px] sm:text-[15px] font-bold">
              {level}
            </span>
          </p>
          <div className="relative rounded-sm h-[40px] sm:h-[45px] w-12 sm:w-14 overflow-hidden group/heart">
            <div className="absolute inset-0 w-full h-full bg-[#8A47CB] transition-transform duration-500 -translate-x-full group-hover/heart:translate-x-0"></div>
            <div className="relative z-10 w-full h-full flex items-center justify-center bg-[#f0f0f0] group-hover/heart:bg-transparent transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                width="1.75em"
                height="1.75em"
                className="group-hover/heart:text-white transition-colors sm:w-8 sm:h-8"
              >
                <path
                  fill="currentColor"
                  d="M17.718 8.893c6.457 0 12.902 4.058 14.274 8.78c1.012-4.496 7.61-8.735 14.256-8.735c5.17 0 10.368 2.564 12.99 9.567c6.445 17.219-25 33.753-27.247 35.799C29.744 51.729-1.699 36.02 4.75 18.515c2.58-7.003 7.778-9.623 12.968-9.622m0-1.893h-.002C10.902 7 5.535 10.957 2.993 17.855c-5.788 15.71 15.228 29.479 24.2 35.356c1.445.947 3.082 2.02 3.404 2.354L31.851 57l1.396-1.292c.232-.204 1.305-.891 2.343-1.555c8.604-5.508 31.458-20.141 25.401-36.318c-2.566-6.858-7.94-10.791-14.742-10.791c-5.744 0-11.426 2.763-14.312 6.554C28.955 9.75 23.345 7.001 17.718 7"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="p-3 sm:p-4 pl-4 sm:pl-6">
          <h2 className="text-xl font-bold -mb-4 line-clamp-2 min-h-[3.5rem]">
            {title}
          </h2>
          <div className="flex items-center ">
            <p className="text-[#878787] font-semibold pt-2 sm:pt-1 text-sm sm:text-base">
              {ratings}
            </p>
            <img
              src="https://ik.imagekit.io/ixthr16gh/rating.png?updatedAt=1738567890274"
              alt="Rating"
              className="h-20 pl-10 sm:pl-12 pt-2"
            />
          </div>
          <div className="flex items-center gap-4 sm:gap-7 mt-4 sm:mt-2">
            <img src={smallImage} alt="Professor" className="h-10 sm:h-12" />
            <p className="font-semibold text-base sm:text-[18px]">
              Prof. Donnie Ball
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-5 mt-4 ml-4 sm:ml-6">
          <img
            src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/user-icon2.svg"
            alt="Students"
            className="h-4 sm:h-5"
          />
          <p className="text-[#878787] font-semibold text-sm sm:text-base">
            {students}
          </p>
        </div>

        <div className="-mt-6 flex justify-end group/enroll pb-4 sm:pb-5">
          <p className="group-hover/enroll:text-[#8A47CB] cursor-pointer flex justify-end mr-2 text-sm sm:text-base">
            Enroll Now
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="2em"
            className="pb-[3px] mr-[10px] group-hover/enroll:text-[#8A47CB]"
          >
            <path
              fill="currentColor"
              d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

// const CourseCard = ({ data }) => {
//   return (
//     <div className="flex flex-col h-full bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group overflow-hidden">
//       <div className="relative">
//         <img
//           src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses1.jpg"
//           alt=""
//           className="w-full h-40 xs:h-48 sm:h-52 lg:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
//         />
//         <p className="absolute bottom-0 left-3 sm:left-4 bg-[#8A47CB] text-white text-base sm:text-lg font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-t-xl transition-transform duration-300 group-hover:scale-110">
//           $ 26.00
//         </p>
//       </div>

//       <div className="p-3 sm:p-4 lg:p-5 flex-grow flex flex-col">
//         <div className="flex justify-between items-center mb-3 sm:mb-4">
//           <p className="relative inline-flex px-3 sm:px-4 py-1.5 sm:py-2 bg-[#F0F0F0] text-[#5F5555] text-xs sm:text-sm font-bold rounded hover:text-white group-hover:bg-[#8A47CB] transition-colors duration-300">
//             Beginner
//           </p>

//           <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#f0f0f0] rounded group-hover:bg-[#8A47CB] transition-colors duration-300">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 64 64"
//               className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-white transition-colors duration-300"
//             >
//               <path
//                 fill="currentColor"
//                 d="M17.718 8.893c6.457 0 12.902 4.058 14.274 8.78c1.012-4.496 7.61-8.735 14.256-8.735c5.17 0 10.368 2.564 12.99 9.567c6.445 17.219-25 33.753-27.247 35.799C29.744 51.729-1.699 36.02 4.75 18.515c2.58-7.003 7.778-9.623 12.968-9.622"
//               />
//             </svg>
//           </button>
//         </div>

//         <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">
//           Introduction to Digital marketing
//         </h2>

//         <div className="flex justify-between items-center mb-3 sm:mb-4">
//           <p className="text-[#878787] text-xs sm:text-sm font-semibold">
//             (4.5 ratings)
//           </p>
//           <img
//             src="https://ik.imagekit.io/ixthr16gh/rating.png?updatedAt=1738567890274"
//             alt="Rating"
//             className="h-4 sm:h-5"
//           />
//         </div>

//         <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
//           <img
//             src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses-user1.jpg"
//             alt="Professor"
//             className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
//           />
//           <p className="font-semibold text-base sm:text-lg">Prof.Donnie Ball</p>
//         </div>

//         <hr className="my-3 sm:my-4 border-gray-200" />

//         <div className="flex justify-between items-center mt-auto">
//           <div className="flex items-center gap-1.5 sm:gap-2">
//             <img
//               src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/user-icon2.svg"
//               alt="Students"
//               className="h-4 sm:h-5"
//             />
//             <p className="text-[#878787] text-xs sm:text-sm font-semibold">
//               70+ students
//             </p>
//           </div>

//           <button className="flex items-center gap-1 text-gray-600 hover:text-[#8A47CB] transition-colors duration-300 group">
//             <span className="text-sm sm:text-base font-medium">Enroll Now</span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300"
//             >
//               <path
//                 fill="currentColor"
//                 d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;
