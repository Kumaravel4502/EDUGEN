import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { CourseData } from "../../API/CourseData";

const CourseDetails = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("overview");

    // Find the course by ID and set to state
    useEffect(() => {
        // Simulate API fetch with a delay
        const timer = setTimeout(() => {
            const foundCourse = CourseData.find(c => c.id === parseInt(id));
            setCourse(foundCourse);
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [id]);

    // Render star ratings
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

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[70vh]">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
            </div>
        );
    }

    if (!course) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-gray-800">Course not found</h2>
                <p className="mt-4 text-gray-600">The course you&apos;re looking for doesn&apos;t exist or has been removed.</p>
                <Link to="/course-list" className="mt-8 inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Back to Courses
                </Link>
            </div>
        );
    }

    return (

        <div className="bg-gray-50 2xl:container mx-auto">
            <div className="relative w-[90%] mx-auto bg-[#FFF7FA] pt-20 mb-20 pb-12 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-18 overflow-hidden rounded-xl ">
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                        Course Details
                    </h1>
                    <p className="mt-3 text-sm sm:text-base text-gray-700 font-medium">
                        <Link to="/" className="hover:text-[#8A47CB] font-semibold">
                            Home
                        </Link>
                        <span className="text-[#8A47CB] font-semibold"> – Project </span>
                    </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute inset-0 z-0">
                    <div className="w-[150%] h-[100%] bg-gradient-to-b from-[#F8F8F8] to-transparent rounded-full absolute top-[-75%] left-[-25%]" />
                </div>
                <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages5.svg"
                    alt="Arrow Decoration"
                    className="absolute top-12 left-8 sm:top-16 sm:left-16 w-12 sm:w-16 md:w-20 z-10"
                />
                <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages4.svg"
                    alt="Book Decoration"
                    className="absolute top-12 right-8 sm:top-16 sm:right-16 w-12 sm:w-16 md:w-20 z-10"
                />
            </div>
            {/* Hero Section with Course Image */}
            <div className="2xl:container mt-20 mx-auto bg-gradient-to-r from-[#8A47CB] to-[#6B21A8] py-16 relative">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row">
                        {/* Left side - Course Image */}
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <div className="rounded-xl overflow-hidden shadow-xl">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="relative">
                                    {/* Play button overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center cursor-pointer hover:bg-purple-600 transition-colors">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-8 w-8 text-white"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Course Info */}
                        <div className="md:w-1/2 md:pl-8 text-white">
                            <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-4">
                                {course.category}
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>

                            {/* Instructor */}
                            <div className="flex items-center mb-6">
                                <img
                                    src={course.instructor.avatar}
                                    alt={course.instructor.name}
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white"
                                />
                                <div className="ml-3">
                                    <p className="font-semibold text-sm sm:text-base">{course.instructor.name}</p>
                                    <p className="text-white text-opacity-80 text-xs sm:text-sm">{course.instructor.position}</p>
                                </div>
                            </div>

                            {/* Last Update */}
                            <div className="text-xs sm:text-sm mb-4 sm:mb-6">
                                <span className="text-white text-opacity-80">Last Updated: </span>
                                <span className="font-medium">{course.lastUpdated}</span>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center mb-4 sm:mb-6">
                                <div className="flex mr-2">
                                    {renderStars(course.rating)}
                                </div>
                                <span className="text-white text-opacity-80 text-xs sm:text-sm">({course.rating}.0 rating)</span>
                            </div>

                            {/* Price & Enroll Button */}
                            <div className="mt-4 sm:mt-6">
                                <div className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                                    {course.isFree ? "Free" : `$${course.price.toFixed(2)}`}
                                </div>
                                <Link to="/Contact">
                                    <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors flex items-center justify-center text-sm sm:text-base">
                                        Enroll Now
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 sm:h-5 sm:w-5 ml-2"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Course Details & Tabs */}
            <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
                {/* Course Details Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
                    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md flex items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-gray-500 text-xs sm:text-sm">Duration</h3>
                            <p className="font-semibold text-sm sm:text-base">{course.duration}</p>
                        </div>
                    </div>

                    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md flex items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-gray-500 text-xs sm:text-sm">Lectures</h3>
                            <p className="font-semibold text-sm sm:text-base">{course.lessons} Lessons</p>
                        </div>
                    </div>

                    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md flex items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-gray-500 text-xs sm:text-sm">Language</h3>
                            <p className="font-semibold text-sm sm:text-base">{course.language}</p>
                        </div>
                    </div>

                    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md flex items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-gray-500 text-xs sm:text-sm">Level</h3>
                            <p className="font-semibold text-sm sm:text-base">{course.level}</p>
                        </div>
                    </div>
                </div>

                {/* Tabs Navigation */}
                <div className="border-b mb-6 sm:mb-8 overflow-x-auto">
                    <nav className="flex space-x-4 sm:space-x-8 min-w-max">
                        <button
                            onClick={() => setActiveTab("overview")}
                            className={`px-1 py-3 sm:py-4 text-xs sm:text-sm font-medium border-b-2 ${activeTab === "overview"
                                ? "border-purple-500 text-purple-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                }`}
                        >
                            Overview
                        </button>
                        <button
                            onClick={() => setActiveTab("curriculum")}
                            className={`px-1 py-3 sm:py-4 text-xs sm:text-sm font-medium border-b-2 ${activeTab === "curriculum"
                                ? "border-purple-500 text-purple-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                }`}
                        >
                            Curriculum
                        </button>
                        <button
                            onClick={() => setActiveTab("instructor")}
                            className={`px-1 py-3 sm:py-4 text-xs sm:text-sm font-medium border-b-2 ${activeTab === "instructor"
                                ? "border-purple-500 text-purple-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                }`}
                        >
                            Instructor
                        </button>
                        <button
                            onClick={() => setActiveTab("reviews")}
                            className={`px-1 py-3 sm:py-4 text-xs sm:text-sm font-medium border-b-2 ${activeTab === "reviews"
                                ? "border-purple-500 text-purple-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                }`}
                        >
                            Reviews
                        </button>
                    </nav>
                </div>

                {/* Tab Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* Left side - Tab Content */}
                    <div className="lg:col-span-2">
                        {activeTab === "overview" && (
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold mb-4">Course Description</h2>
                                <p className="mb-6 text-gray-700 text-sm sm:text-base leading-relaxed">{course.description}</p>

                                <h3 className="text-lg sm:text-xl font-bold mb-3">What You Will Learn?</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 sm:mb-8">
                                    {course.features.map((feature, index) => (
                                        <div key={index} className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="text-lg sm:text-xl font-bold mb-3">Requirements</h3>
                                <ul className="list-disc pl-5 mb-6 sm:mb-8 text-gray-700 text-sm sm:text-base space-y-2">
                                    {course.requirements.map((req, index) => (
                                        <li key={index}>{req}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {activeTab === "curriculum" && (
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Course Curriculum</h2>
                                <div className="space-y-3 sm:space-y-4">
                                    {course.curriculum.map((item, index) => (
                                        <div key={index} className="border rounded-lg overflow-hidden">
                                            <div className="flex flex-wrap sm:flex-nowrap items-center justify-between bg-gray-50 p-3 sm:p-4">
                                                <div className="flex items-center mb-2 sm:mb-0 w-full sm:w-auto">
                                                    <span className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm">
                                                        {index + 1}
                                                    </span>
                                                    <h3 className="font-medium text-sm sm:text-base">{item.title}</h3>
                                                </div>
                                                <div className="flex items-center w-full sm:w-auto justify-end">
                                                    <span className="text-xs sm:text-sm text-gray-500 mr-3 sm:mr-4">{item.duration}</span>
                                                    {item.isUnlocked ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    ) : (
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                                        </svg>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === "instructor" && (
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Instructor</h2>
                                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                                    <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                                        <img
                                            src={course.instructor.avatar}
                                            alt={course.instructor.name}
                                            className="w-16 h-16 rounded-full mb-3 sm:mb-0 sm:mr-4"
                                        />
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold">{course.instructor.name}</h3>
                                            <p className="text-gray-600 text-sm sm:text-base">{course.instructor.position}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 text-sm sm:text-base mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
                                        nisl nec ultricies lacinia, nunc nisl tincidunt nunc, eget aliquam
                                        magna nunc eget lorem. Sed euismod, nisl nec ultricies lacinia.
                                    </p>
                                    <div className="flex space-x-4">
                                        <a href="#" className="text-blue-500 hover:text-blue-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="text-gray-800 hover:text-gray-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "reviews" && (
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Reviews</h2>
                                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                                        <div className="mb-4 sm:mb-0">
                                            <div className="flex items-center mb-1">
                                                <div className="flex">
                                                    {renderStars(5)}
                                                </div>
                                                <span className="ml-2 text-gray-600 text-xs sm:text-sm">(5.0 Rating)</span>
                                            </div>
                                            <p className="text-gray-500 text-xs sm:text-sm">Based on {course.students} students</p>
                                        </div>
                                        <button className="px-3 py-2 sm:px-4 sm:py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-xs sm:text-sm">
                                            Write a Review
                                        </button>
                                    </div>

                                    <div className="space-y-4 sm:space-y-6">
                                        {/* Sample reviews */}
                                        <div className="border-b pb-4 sm:pb-6">
                                            <div className="flex flex-col sm:flex-row sm:justify-between mb-2 sm:mb-3">
                                                <div className="flex items-center mb-2 sm:mb-0">
                                                    <img
                                                        src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team15.jpg"
                                                        alt="Reviewer"
                                                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3"
                                                    />
                                                    <div>
                                                        <h4 className="font-medium text-sm sm:text-base">Sarah Johnson</h4>
                                                        <p className="text-gray-500 text-xs sm:text-sm">2 weeks ago</p>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    {renderStars(5)}
                                                </div>
                                            </div>
                                            <p className="text-gray-700 text-sm sm:text-base">
                                                This course exceeded my expectations! The content is well-structured and
                                                the instructor explains complex concepts in a very understandable way.
                                                Highly recommend to anyone looking to learn this subject.
                                            </p>
                                        </div>

                                        <div>
                                            <div className="flex flex-col sm:flex-row sm:justify-between mb-2 sm:mb-3">
                                                <div className="flex items-center mb-2 sm:mb-0">
                                                    <img
                                                        src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team14.jpg"
                                                        alt="Reviewer"
                                                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3"
                                                    />
                                                    <div>
                                                        <h4 className="font-medium text-sm sm:text-base">Michael Chen</h4>
                                                        <p className="text-gray-500 text-xs sm:text-sm">1 month ago</p>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    {renderStars(4)}
                                                </div>
                                            </div>
                                            <p className="text-gray-700 text-sm sm:text-base">
                                                Great course with lots of practical examples. The only reason I&apos;m giving 4 stars
                                                instead of 5 is that I would have liked more advanced material in the later sections.
                                                Otherwise, very informative and enjoyable.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right side - Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg sm:text-xl font-bold mb-4">Share This Course</h3>
                            <div className="flex space-x-3 sm:space-x-4">
                                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pinterest" viewBox="0 0 16 16">
                                        <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Related Courses */}
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                            <h3 className="text-lg sm:text-xl font-bold mb-4">Related Courses</h3>
                            <div className="space-y-4">
                                {CourseData
                                    .filter(c => c.id !== course.id && c.category === course.category)
                                    .slice(0, 3)
                                    .map(relatedCourse => (
                                        <div key={relatedCourse.id} className="flex">
                                            <img
                                                src={relatedCourse.image}
                                                alt={relatedCourse.title}
                                                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg mr-3"
                                            />
                                            <div>
                                                <h4 className="font-medium text-gray-800 line-clamp-2 text-sm sm:text-base">
                                                    <Link to={`/course-details/${relatedCourse.id}`} className="hover:text-purple-600">
                                                        {relatedCourse.title}
                                                    </Link>
                                                </h4>
                                                <div className="flex mt-1">
                                                    <div className="flex mr-2">
                                                        {renderStars(relatedCourse.rating)}
                                                    </div>
                                                    <span className="text-xs sm:text-sm text-gray-500">({relatedCourse.rating}.0)</span>
                                                </div>
                                                <p className="text-purple-600 font-medium mt-1 text-sm sm:text-base">
                                                    {relatedCourse.isFree ? "Free" : `$${relatedCourse.price.toFixed(2)}`}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails; 