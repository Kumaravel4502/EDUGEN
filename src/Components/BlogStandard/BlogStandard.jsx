import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { BlogDetailData } from "../../API/BlogDetailData";

const BlogStandard = () => {
    const [activePage, setActivePage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const itemsPerPage = 3;

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

    // Generate unique tags from blog data
    const allTags = useMemo(() => {
        const tags = new Set();
        BlogDetailData.forEach(post => {
            post.tags.forEach(tag => tags.add(tag));
        });
        return Array.from(tags);
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
                        Our Blog
                    </h1>
                    <p className="mt-3 text-sm sm:text-base text-gray-700 font-medium">
                        <Link to="/" className="hover:text-[#8A47CB] font-semibold">
                            Home
                        </Link>
                        <span className="text-[#8A47CB] font-semibold"> – Our Blog </span>
                    </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute inset-0 z-0">
                    <div className="w-[150%] h-[100%] bg-gradient-to-b from-[#F8F8F8] to-transparent rounded-full absolute top-[-75%] left-[-25%]" />
                </div>
                <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages5.svg"
                    alt="Arrow Decoration"
                    className="absolute top-6 left-4 sm:top-10 sm:left-10 w-10 sm:w-14 md:w-16 z-10"
                />
                <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages4.svg"
                    alt="Book Decoration"
                    className="absolute top-6 right-4 sm:top-10 sm:right-10 w-10 sm:w-14 md:w-16 z-10"
                />
            </div>

            {/* Main Blog Content */}
            <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content - Blog Posts */}
                    <div className="lg:col-span-2">
                        {/* Results Summary */}
                        {selectedCategory !== "All" && (
                            <div className="bg-white p-4 rounded-lg mb-6 shadow-sm">
                                <p className="text-gray-600">
                                    Showing results for: <span className="font-semibold text-[#8A47CB]">{selectedCategory}</span>
                                    {searchTerm && <span> containing &quot;<span className="italic">{searchTerm}</span>&quot;</span>}
                                </p>
                            </div>
                        )}

                        {/* Blog Posts */}
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
                            <div className="space-y-10">
                                {currentItems.map((post) => (
                                    <div
                                        key={post.id}
                                        className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg"
                                    >
                                        {/* Featured Image */}
                                        <div className="relative h-60 sm:h-72 md:h-80 overflow-hidden">
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
                                        <div className="p-6 sm:p-8">
                                            {/* Post Meta */}
                                            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500">
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src={post.author.avatar}
                                                        alt={post.author.name}
                                                        className="w-6 h-6 rounded-full object-cover"
                                                    />
                                                    <span>{post.author.name}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 text-[#8A47CB]"
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
                                                    <span>{formatDate(post.date)}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 text-[#8A47CB]"
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
                                                    <span>{post.comments} Comments</span>
                                                </div>
                                            </div>

                                            {/* Post Title */}
                                            <h2 className="text-xl sm:text-2xl font-bold mb-4 hover:text-[#8A47CB] transition-colors">
                                                <Link to={`/blog-details/${post.id}`}>{post.title}</Link>
                                            </h2>

                                            {/* Post Excerpt */}
                                            <p className="text-gray-600 mb-6">{post.excerpt}</p>

                                            {/* Tags */}
                                            {post.tags.length > 0 && (
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {post.tags.slice(0, 3).map((tag, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                                                        >
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Read More Button */}
                                            <div className="flex">
                                                <Link
                                                    to={`/blog-details/${post.id}`}
                                                    className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-md overflow-hidden group hover:bg-[#8A47CB] transition-colors duration-300"
                                                >
                                                    <span className="relative z-10">Read More</span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 transition-transform group-hover:translate-x-1"
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
                        {filteredPosts.length > 0 && (
                            <div className="mt-12 flex justify-center">
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

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Search Widget */}
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-200">Search</h3>
                            <div className="mt-4 relative">
                                <input
                                    type="text"
                                    placeholder="Search here..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8A47CB] focus:border-[#8A47CB] pl-10"
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

                        {/* Categories Widget */}
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-200">Categories</h3>
                            <ul className="mt-4 space-y-3">
                                {categories.map((category, index) => (
                                    <li key={index} className="flex justify-between items-center">
                                        <button
                                            onClick={() => handleCategoryChange(category.name)}
                                            className={`text-gray-700 hover:text-[#8A47CB] transition-colors flex items-center ${selectedCategory === category.name ? "text-[#8A47CB] font-medium" : ""
                                                }`}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={`h-4 w-4 mr-2 ${selectedCategory === category.name ? "text-[#8A47CB]" : "text-gray-400"
                                                    }`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                            {category.name}
                                        </button>
                                        <span className="text-gray-500 text-sm bg-gray-100 px-2 py-0.5 rounded-full">
                                            {category.count}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Recent Posts Widget */}
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-200">Recent Posts</h3>
                            <div className="mt-4 space-y-4">
                                {BlogDetailData.slice(0, 3).map((post) => (
                                    <div key={post.id} className="flex gap-3">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-20 h-20 object-cover rounded-md"
                                        />
                                        <div>
                                            <h4 className="font-medium text-sm hover:text-[#8A47CB] transition-colors line-clamp-2">
                                                <Link to={`/blog-details/${post.id}`}>{post.title}</Link>
                                            </h4>
                                            <p className="text-gray-500 text-xs mt-1">{formatDate(post.date)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tags Widget */}
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-200">Tags</h3>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {allTags.map((tag, index) => (
                                    <Link
                                        key={index}
                                        to={`/blog?tag=${encodeURIComponent(tag)}`}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md hover:bg-[#8A47CB] hover:text-white transition-colors"
                                    >
                                        {tag}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Ad Widget */}
                        <div className="bg-[#8A47CB] p-6 rounded-xl shadow-md text-white text-center">
                            <h3 className="text-xl font-bold mb-2">Ad Space</h3>
                            <p className="mb-4">Perfect place to advertise your courses</p>
                            <Link
                                to="#"
                                className="inline-block px-6 py-2 bg-white text-[#8A47CB] font-medium rounded-md hover:bg-gray-100 transition-colors"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogStandard; 