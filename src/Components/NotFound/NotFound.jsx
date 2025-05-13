

const NotFound = () => {
    return (
        <div>
            <div className="relative bg-[#FFF7FA] pt-20 pb-12 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-18 overflow-hidden rounded-xl mb-30">
                {/* Main Content */}
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl  font-bold text-black">
                        Error 404
                    </h1>
                    <p className="mt-3 text-sm sm:text-base text-gray-700 font-medium">
                        <a href="/" className="hover:text-[#8A47CB] font-semibold">
                            Home
                        </a>

                    </p>
                </div>

                {/* Top background image */}
                <div className="w-full text-center mb-6 sm:mb-8 md:mb-10">
                    <img
                        src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages1.png"
                        alt="Top Decoration"
                        className="mx-auto w-full max-w-2xl"
                    />
                </div>

                {/* Decorative arc-like background */}
                <div className="absolute inset-0 z-0">
                    <div className="w-[150%] h-[100%] bg-gradient-to-b from-[#F8F8F8] to-transparent rounded-full absolute top-[-75%] left-[-25%]" />
                </div>

                {/* Left Arrow Illustration */}
                <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages5.svg"
                    alt="Arrow Decoration"
                    className="absolute top-6 left-4 sm:top-10 sm:left-10 w-10 sm:w-14 md:w-16 z-10"
                />

                {/* Right Book Illustration */}
                <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages4.svg"
                    alt="Book Decoration"
                    className="absolute top-6 right-4 sm:top-10 sm:right-10 w-10 sm:w-14 md:w-16 z-10"
                />
            </div>

            <div className=" mb-40 space-y-10">
                <div className="flex justify-center items-center">
                    <img src="https://demo.themeies.com/edugen/wp-content/uploads/2024/10/404.png" alt="" />
                </div>
                <p className="text-center text-4xl text-gray-500 font-semibold">
                    Whoops! This Page got Lost in conversion
                </p>
                <p className="text-center text-gray-500 font-semibold">
                    It looks like nothing was found at this location. Maybe try one of the links below or a search?
                </p>
                <div className="flex justify-center">
                    <button className="relative rounded-sm h-[55px] w-50 cursor-pointer mb-1 bg-black px-4 text-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-1 before:h-full before:w-0 before:bg-[#8A47CB] before:transition-all before:duration-500 hover:text-white hover:before:w-full hover:before:rounded-sm">
                        <span className="relative z-10 flex justify-center items-center font-bold">
                            Back To Home
                        </span>
                    </button>
                </div>
            </div>


        </div>



    )
}

export default NotFound



// {/* <div className="bg-[#FFF7FA] ">
// <div>
//     <img src="https://demo.themeies.com/edugen/wp-content/uploads/2024/10/404.png" alt="" />
// </div>
//             </div> */}