import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NotFound = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        setIsVisible(true);
        window.scrollTo(0, 0);

      
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

   
    const getContainerClasses = () => {
   
        if (windowWidth < 380) {
            return "px-3 py-4 min-h-[calc(100vh-60px)]"; 
        } else if (windowWidth < 640) {
            return "px-4 py-6 min-h-[calc(100vh-70px)]"; 
        } else if (windowWidth < 768) {
            return "px-6 py-8 min-h-[calc(100vh-80px)]"; 
        } else if (windowWidth < 1024) {
            return "px-8 py-10 min-h-[calc(100vh-80px)]"; 
        } else if (windowWidth < 1280) {
            return "px-10 py-12 min-h-[calc(100vh-80px)]"; 
        } else {
            return "px-12 py-16 min-h-[calc(100vh-80px)]";
        }
    };

    return (
        <div className={`flex flex-col items-center justify-center bg-white ${getContainerClasses()}`}>
            {/* Main content - full page design */}
            <div className="w-full max-w-xs xxs:max-w-sm xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
                <div
                    className={`bg-white shadow-md xs:shadow-lg sm:shadow-xl md:shadow-2xl rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-3xl 
                    px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 
                    py-6 xs:py-8 sm:py-10 md:py-16 lg:py-20 xl:py-24 
                    transform transition-all duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                    <div className="flex flex-col items-center text-center mb-4 xs:mb-6 sm:mb-8 md:mb-12">
                        <h1 className="text-4xl xxs:text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-800 mb-2 xs:mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                            404
                        </h1>
                        <div className="w-16 xxs:w-20 xs:w-24 sm:w-28 md:w-32 h-1 xs:h-1.5 md:h-2 bg-gradient-to-r from-purple-600 to-indigo-600 mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-8"></div>
                        <h2 className="text-xl xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 xs:mb-3 sm:mb-4 md:mb-6">
                            Oops! Page Not Found
                        </h2>
                        <p className="text-sm xxs:text-base xs:text-lg sm:text-xl md:text-2xl text-gray-600 max-w-xs xxs:max-w-sm xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mb-4 xs:mb-6 sm:mb-8 md:mb-12 px-1 xs:px-2">
                            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-16 xl:gap-20">
                        {/* Left side - 404 Image */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img
                                src="https://demo.themeies.com/edugen/wp-content/uploads/2024/10/404.png"
                                alt="404 Illustration"
                                className="max-w-full h-auto w-[85%] xxs:w-4/5 xs:w-3/4 sm:w-3/4 md:w-[90%] lg:w-full 
                                max-h-[200px] xs:max-h-[250px] sm:max-h-[300px] md:max-h-[350px] lg:max-h-[400px] xl:max-h-none 
                                object-contain transform transition-transform duration-700 hover:scale-[1.03] md:hover:scale-105"
                            />
                        </div>

                        {/* Right side - Text and button */}
                        <div className="w-full md:w-1/2 space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8 mt-2 xs:mt-3 sm:mt-4 md:mt-0">
                            <div className="flex flex-col space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
                                <Link
                                    to="/"
                                    className="relative inline-flex items-center justify-center 
                                    h-10 xxs:h-11 xs:h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 
                                    px-4 xxs:px-5 xs:px-6 sm:px-8 md:px-10 lg:px-12 
                                    text-base xxs:text-lg xs:text-xl md:text-2xl 
                                    overflow-hidden font-medium text-white bg-[#8A47CB] 
                                    rounded-lg xs:rounded-xl md:rounded-2xl 
                                    group transition-all duration-500 ease-out 
                                    hover:bg-purple-700 hover:scale-[1.02] sm:hover:scale-105 
                                    shadow-md xs:shadow-lg md:shadow-xl 
                                    mx-auto md:mx-0 w-full md:w-auto"
                                >
                                    <span className="relative flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 xxs:h-5 xxs:w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 
                                            mr-1.5 xxs:mr-2 xs:mr-2.5 sm:mr-3 md:mr-4"
                                            viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                        </svg>
                                        Back to Home
                                    </span>
                                </Link>
                                <Link
                                    to="/our-team"
                                    className="text-center text-base xxs:text-lg xs:text-xl md:text-2xl text-[#8A47CB] hover:text-purple-700 font-medium transition-colors duration-300 hover:underline"
                                >
                                    Go to Our Team
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NotFound;
