import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CourseData } from "../../API/CourseData";

const CourseCatalog = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [priceFilter, setPriceFilter] = useState("All");

    // Get unique categories from course data
    const categories = ["All", ...new Set(CourseData.map((course) => course.category))];

    useEffect(() => {
        // Simulate data fetching with a delay
        const timer = setTimeout(() => {
            setCourses(CourseData);
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    // Filter courses based on search term, category and price
    const filteredCourses = courses.filter((course) => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === "All" || course.category === categoryFilter;
        const matchesPrice =
            priceFilter === "All" ||
            (priceFilter === "Free" && course.isFree) ||
            (priceFilter === "Paid" && !course.isFree);

        return matchesSearch && matchesCategory && matchesPrice;
    });

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

    return (
        <div className="bg-gray-50 min-h-screen 2xl:container mx-auto">
            {/* Hero Section */}
            <div className="relative bg-[#FFF7FA] pt-20 pb-12 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-18 overflow-hidden rounded-xl">
                {/* Main Content */}
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                        All Courses
                    </h1>
                    <p className="mt-3 text-sm sm:text-base text-gray-700 font-medium">
                        <Link to="/" className="hover:text-[#8A47CB] font-semibold">
                            Home
                        </Link>
                        <span className="text-[#8A47CB] font-semibold"> – All Courses </span>
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

            {/* Filters and Search */}
            <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
                <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Search Input */}
                        <div>
                            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                                Search Courses
                            </label>
                            <input
                                type="text"
                                id="search"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Search by title..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Category Filter */}
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                                Category
                            </label>
                            <select
                                id="category"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Price Filter */}
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                                Price
                            </label>
                            <select
                                id="price"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                                value={priceFilter}
                                onChange={(e) => setPriceFilter(e.target.value)}
                            >
                                <option value="All">All Prices</option>
                                <option value="Free">Free</option>
                                <option value="Paid">Paid</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Courses Display */}
                <div className="mb-12">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                            {filteredCourses.length} Courses Found
                        </h2>
                    </div>

                    {filteredCourses.length === 0 ? (
                        <div className="text-center py-12 bg-white rounded-lg shadow">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 mx-auto text-gray-400 mb-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">No courses found</h3>
                            <p className="text-gray-500">
                                Try adjusting your filters or search term to find what you&apos;re looking for.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCourses.map((course) => (
                                <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                                    <Link to={`/course-details/${course.id}`}>
                                        <div className="relative">
                                            <img
                                                src={course.image}
                                                alt={course.title}
                                                className="w-full h-48 object-cover"
                                            />
                                            {course.isFree && (
                                                <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                                                    FREE
                                                </span>
                                            )}
                                        </div>
                                    </Link>
                                    <div className="p-5">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded">
                                                {course.category}
                                            </span>
                                            <div className="flex items-center">
                                                <span className="text-yellow-500 mr-1">
                                                    {course.rating}.0
                                                </span>
                                                <div className="flex">
                                                    {renderStars(course.rating)}
                                                </div>
                                            </div>
                                        </div>

                                        <Link to={`/course-details/${course.id}`}>
                                            <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-purple-600 transition-colors line-clamp-2">
                                                {course.title}
                                            </h3>
                                        </Link>

                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center">
                                                <img
                                                    src={course.instructor.avatar}
                                                    alt={course.instructor.name}
                                                    className="w-8 h-8 rounded-full mr-2"
                                                />
                                                <span className="text-sm text-gray-600">
                                                    {course.instructor.name}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                                            <div className="flex items-center text-sm text-gray-500">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4 mr-1"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                {course.duration}
                                            </div>
                                            <div className="text-lg font-bold text-purple-600">
                                                {course.isFree ? "Free" : `$${course.price.toFixed(2)}`}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CourseCatalog; 