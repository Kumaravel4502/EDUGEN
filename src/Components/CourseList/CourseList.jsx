import { CourseData } from "../../API/CourseData";
import { Link } from "react-router-dom";

const CourseList = () => {
    // Function to render star ratings
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            );
        }
        return stars;
    };

    return (
        <div className="2xl:container mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
            <div className="2xl:container mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
                <div className="relative bg-[#FFF7FA] pt-20 pb-12 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-18 overflow-hidden rounded-xl">
                    {/* Main Content */}
                    <div className="relative z-20 text-center px-4">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                            Courses List
                        </h1>
                        <p className="mt-3 text-sm sm:text-base text-gray-700 font-medium">
                            <a href="/" className="hover:text-[#8A47CB] font-semibold">
                                Home
                            </a>
                            <span className="text-[#8A47CB] font-semibold"> – Courses List </span>
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
            </div>

            <div className="max-w-4xl mx-auto space-y-6 mt-20">
                {CourseData.map((course) => (
                    <div
                        key={course.id}
                        className="flex flex-col sm:flex-row bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
                    >
                        {/* Course Image - Left Side */}
                        <div className="sm:w-1/3 relative overflow-hidden">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-48 sm:h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
                            />
                        </div>

                        {/* Course Info - Right Side */}
                        <div className="sm:w-2/3 p-5 flex flex-col justify-between">
                            <div>
                                {/* Price & Rating Row */}
                                <div className="flex justify-between items-center mb-2">
                                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${course.isFree ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"}`}>
                                        {course.isFree ? "Free" : `$${course.price.toFixed(2)}`}
                                    </span>
                                    <div className="flex">
                                        {renderStars(course.rating)}
                                    </div>
                                </div>

                                {/* Course Title */}
                                <h3 className="text-xl font-semibold mb-3">{course.title}</h3>

                                {/* Lessons & Students */}
                                <div className="flex space-x-6 text-sm text-gray-600">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        {course.lessons} Lessons
                                    </div>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                        {course.students} Student
                                    </div>
                                </div>
                            </div>

                            {/* View Course Link */}
                            <div className="mt-4 pt-3 border-t border-gray-100">
                                <Link
                                    to={`/course-details/${course.id}`}
                                    className="text-purple-600 hover:text-purple-800 font-medium text-sm transition-colors duration-300 hover:translate-x-1 inline-flex items-center group"
                                >
                                    View Course Details
                                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseList; 