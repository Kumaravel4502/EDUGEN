import { CourseData } from "../../API/CourseData";
import CourseCard from "../CourseCard/CourseCard";

const Course = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto">
          <div className="text-center">
            <p className="text-[25px] sub-title">Most Featured Courses</p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-6">
              Choose Our Top{" "}
              <span className="relative inline-block sub-title">
                Courses
                <img
                  src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/title-shape.svg"
                  alt="Shape"
                  className="absolute left-0 right-0 -bottom-2 w-full"
                  loading="lazy"
                />
              </span>
            </h1>
          </div>
          {/* Cards */}
          <div className="2xl:container mx-auto">
            <div className="w-[99%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
              {/* {CourseData.map((items,index) => {
                return (
                  <>
                    <CourseCard key={index} data={items} />
                  </>
                );
              })} */}

              {CourseData.map((item, index) => (
                <CourseCard key={index} data={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-30 -mb-10">
          <button className="cursor-pointer relative rounded-sm h-[46px] md:w-55 bg-black px-3 text-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-1 before:h-full before:w-0 before:bg-[#8A47CB] before:transition-all before:duration-500 hover:text-white hover:before:w-full hover:before:rounded-sm">
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
      </div>
    </section>
  );
};
export default Course;
