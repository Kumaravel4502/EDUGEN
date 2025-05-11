const CourseCategoryCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { OuterImage, InnerImage, description, title, bg } = props.data;

  return (
    <div className=" h-[40%]">
      <div
        className="relative  rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        style={{ backgroundColor: bg || "#ffebdf" }}
      >
        {/* Image Container */}
        <div className="relative aspect-square w-full max-w-[280px] mx-auto  flex justify-center items-center">
          <img
            className=" h-[70%] object-contain transition-transform duration-300 group-hover:scale-105"
            src={OuterImage}
            alt="Background Shape"
            loading="lazy"
          />
          <img
            src={InnerImage}
            alt="HEX Element"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-30 h-30 object-contain"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="text-center space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 line-clamp-2">
            {title}
          </h3>

          <p className="text-base sm:text-lg text-gray-600 line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCategoryCard;
