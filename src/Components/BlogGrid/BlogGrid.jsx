import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { BlogDetailData } from "../../API/BlogDetailData";

const BlogGrid = () => {
    const [activePage, setActivePage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const itemsPerPage = 6; // Show more items in grid layout

    // Generate categories from blog data
    const categories = useMemo(() => {
        const categoriesCount = {};
        BlogDetailData.forEach(post => {
            if (categoriesCount[post.category]) {
                categoriesCount[post.category]++;
            } else {
                categoriesCount[post.category] = 1;
            }
        });
        return [{ name: "All", count: BlogDetailData.length },
        ...Object.entries(categoriesCount).map(([name, count]) => ({ name, count }))];
    }, []);

    // Filter and search blog posts
    const filteredPosts = useMemo(() => {
        return BlogDetailData.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory]);

    // Get current posts for pagination
    const indexOfLastItem = activePage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredPosts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

    // Function to format dates in a more readable way
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setActivePage(1); // Reset to first page on new search
    };

    // Handle category selection
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setActivePage(1); // Reset to first page on new category
    };

    return (
        <div className="bg-gray-50 min-h-screen 2xl:container mx-auto">
            {/* Hero Section */}
            <div className="relative w-[90%] mx-auto bg-[#FFF7FA] pt-20 pb-12 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-18 overflow-hidden rounded-xl mb-12">
                {/* Main Content */}
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                        Blog Grid
                    </h1>
                    <p className="mt-3 text-sm sm:text-base text-gray-700 font-medium">
                        <Link to="/" className="hover:text-[#8A47CB] font-semibold">
                            Home
                        </Link>
                        <span className="text-[#8A47CB] font-semibold"> – Blog Grid</span>
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

            {/* Main Blog Content with Grid Layout */}
            <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
                {/* Search and Filter Section */}
                <div className="mb-12">
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        {/* Search Bar */}
                        <div className="w-full md:w-1/2 lg:w-1/3">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search posts..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#8A47CB] focus:border-[#8A47CB] pl-10"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div className="w-full md:w-1/2 lg:w-1/3">
                            <div className="flex flex-wrap gap-2">
                                {categories.map((category, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleCategoryChange(category.name)}
                                        className={`px-4 py-2 rounded-md transition-colors ${selectedCategory === category.name
                                            ? "bg-[#8A47CB] text-white"
                                            : "bg-white text-gray-700 hover:bg-gray-100"
                                            }`}
                                    >
                                        {category.name}
                                        <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-opacity-20 inline-flex justify-center items-center min-w-[22px]"
                                            style={{
                                                backgroundColor: selectedCategory === category.name
                                                    ? 'rgba(255, 255, 255, 0.2)'
                                                    : 'rgba(138, 71, 203, 0.1)'
                                            }}>
                                            {category.count}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Active filters summary */}
                    {(selectedCategory !== "All" || searchTerm) && (
                        <div className="bg-white p-4 rounded-lg mb-8 shadow-sm flex justify-between items-center">
                            <p className="text-gray-600">
                                {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
                                {selectedCategory !== "All" && <span> in <span className="font-semibold text-[#8A47CB]">{selectedCategory}</span></span>}
                                {searchTerm && <span> containing &quot;<span className="italic">{searchTerm}</span>&quot;</span>}
                            </p>
                            <button
                                onClick={() => {
                                    setSearchTerm("");
                                    setSelectedCategory("All");
                                    setActivePage(1);
                                }}
                                className="text-xs px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>

                {/* Blog Posts Grid */}
                {currentItems.length === 0 ? (
                    <div className="bg-white rounded-xl shadow-md p-8 text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-16 mx-auto text-gray-400 mb-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <h3 className="text-xl font-bold text-gray-700 mb-2">No Posts Found</h3>
                        <p className="text-gray-500 mb-6">We couldn&apos;t find any blog posts matching your criteria.</p>
                        <button
                            onClick={() => {
                                setSearchTerm("");
                                setSelectedCategory("All");
                                setActivePage(1);
                            }}
                            className="px-4 py-2 bg-[#8A47CB] text-white rounded-md hover:bg-purple-700 transition-colors"
                        >
                            Reset Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {currentItems.map((post) => (
                            <div
                                key={post.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                {/* Post Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                    />
                                    <span className="absolute top-4 left-4 bg-[#8A47CB] text-white text-xs font-bold px-3 py-1.5 rounded-md">
                                        {post.category}
                                    </span>
                                </div>

                                {/* Post Content */}
                                <div className="p-6">
                                    {/* Meta Info */}
                                    <div className="flex justify-between items-center mb-3 text-xs text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={post.author.avatar}
                                                alt={post.author.name}
                                                className="w-5 h-5 rounded-full object-cover"
                                            />
                                            <span>{post.author.name}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 mr-1 text-[#8A47CB]"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                />
                                            </svg>
                                            {formatDate(post.date)}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold mb-2 line-clamp-2 hover:text-[#8A47CB] transition-colors">
                                        <Link to={`/blog-details/${post.id}`}>{post.title}</Link>
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                                    {/* Footer with Comments Count and Read More */}
                                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                        <div className="flex items-center text-xs text-gray-500">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 mr-1 text-[#8A47CB]"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                                />
                                            </svg>
                                            {post.comments} Comment{post.comments !== 1 ? 's' : ''}
                                        </div>
                                        <Link
                                            to={`/blog-details/${post.id}`}
                                            className="text-sm font-medium text-[#8A47CB] hover:underline flex items-center"
                                        >
                                            Read More
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {filteredPosts.length > itemsPerPage && (
                    <div className="flex justify-center">
                        <div className="flex space-x-1">
                            <button
                                onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))}
                                disabled={activePage === 1}
                                className={`px-4 py-2 rounded-md ${activePage === 1
                                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                    : "bg-white text-gray-700 hover:bg-[#8A47CB] hover:text-white transition-colors"
                                    }`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActivePage(index + 1)}
                                    className={`px-4 py-2 rounded-md ${activePage === index + 1
                                        ? "bg-[#8A47CB] text-white"
                                        : "bg-white text-gray-700 hover:bg-[#8A47CB] hover:text-white transition-colors"
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}

                            <button
                                onClick={() =>
                                    setActivePage((prev) => Math.min(prev + 1, totalPages))
                                }
                                disabled={activePage === totalPages}
                                className={`px-4 py-2 rounded-md ${activePage === totalPages
                                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                    : "bg-white text-gray-700 hover:bg-[#8A47CB] hover:text-white transition-colors"
                                    }`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogGrid; 