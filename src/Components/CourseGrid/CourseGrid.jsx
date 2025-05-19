import { TeamData3 } from "../../API/TeamData"
import { Link } from "react-router-dom"

const CourseGrid = () => {
    // Extract all featured courses from all team members and flatten them into a single array
    // Add a unique identifier to each course based on both team member ID and course ID
    const allFeaturedCourses = TeamData3.flatMap(member =>
        (member.featuredCourses || []).map(course => ({
            ...course,
            uniqueId: `${member.id}-${course.id}` // Create a unique key combining member ID and course ID
        }))
    );

    return (
        <div className="2xl:container mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
            {/* Hero Section */}
            <div className="relative w-[90%] mx-auto bg-[#FFF7FA] pt-20 pb-12 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-18 overflow-hidden rounded-xl mb-12">
                {/* Main Content */}
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                        Course Grid
                    </h1>
                    <p className="mt-3 text-sm sm:text-base text-gray-700 font-medium">
                        <Link to="/" className="hover:text-[#8A47CB] font-semibold">
                            Home
                        </Link>
                        <span className="text-[#8A47CB] font-semibold"> – Course Grid</span>
                    </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute inset-0 z-0">
                    <div className="w-[150%] h-[100%] bg-gradient-to-b from-[#F8F8F8] to-transparent rounded-full absolute top-[-75%] left-[-25%]" />
                </div>
                <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages5.svg"
                    alt="Arrow Decoration"
                    className="absolute top-8 left-8 sm:top-12 sm:left-12 md:top-16 md:left-16 lg:top-20 lg:left-20 w-12 sm:w-16 md:w-20 lg:w-24 z-10"
                />
                <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages4.svg"
                    alt="Book Decoration"
                    className="absolute top-8 right-8 sm:top-12 sm:right-12 md:top-16 md:right-16 lg:top-20 lg:right-20 w-12 sm:w-16 md:w-20 lg:w-24 z-10"
                />
            </div>
            {/* Right Column - Featured Courses */}
            <div className="mt-12 py-8">
                <h2 className="text-3xl font-bold mb-8 text-center">Most Featured Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {allFeaturedCourses.map((course) => (
                        <div key={course.uniqueId} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm text-gray-500">${course.price.toFixed(2)}</span>
                                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Featured</span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                                <div className="flex items-center text-sm text-gray-500 space-x-4">
                                    <span>{course.lessons} Lessons</span>
                                    <span>{course.duration}</span>
                                    <span>{course.rating} ⭐</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CourseGrid