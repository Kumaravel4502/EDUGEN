import { Data } from "../../API/Data";
import CourseCategoryCard from "../CourseCategoryCard/CourseCategoryCard";


const CourseCategory = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
            <div className="space-y-4">
              <span className="inline-block text-lg sm:text-xl lg:text-2xl font-semibold sub-title ">
                Course Category
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Explore Top{" "}
                <span className="relative inline-block sub-title">
                  Categories
                  <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/title-shape.svg"
                    alt="Shape"
                    className="absolute left-0 right-0 -bottom-2 w-full"
                    loading="lazy"
                  />
                </span>
              </h1>
            </div>

            <button className="relative rounded-sm h-[46px] md:w-55 bg-black px-3 text-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-1 before:h-full before:w-0 before:bg-[#8A47CB] before:transition-all before:duration-500 hover:text-white hover:before:w-full hover:before:rounded-sm">
              <span className="relative z-10 flex items-center justify-center gap-2 font-semibold text-sm sm:text-base">
                View All Categories
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    fill="currentColor"
                    d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {Data.map((items) => (
              <CourseCategoryCard key={items.id} data={items} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCategory;
