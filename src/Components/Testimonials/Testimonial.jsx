import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Krystal France",
    role: "Ex-Student",
    content:
      "Enrolling in courses at EduGen was the best decision I made for my career. The instructors were incredibly knowledgeable and supportive, guiding me through each step of the learning process. Thanks to their expert guidance, I was able to land a job in my desired field even before completing the course. I highly recommend [Institute Name] to anyone looking to upskill and advance their career in the digital world.",
    image:
      "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_15.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Graduate",
    content:
      "The practical approach to learning and hands-on projects helped me build a strong portfolio. I'm now working at a leading tech company, all thanks to the skills I gained here.",
    image:
      "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_11.webp",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Current Student",
    content:
      "The flexibility of online learning combined with expert mentorship has made my learning journey incredibly rewarding. I'm already seeing improvements in my current role.",
    image:
      "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/testimonial1.jpg",
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Graduate",
    content:
      "The practical approach to learning and hands-on projects helped me build a strong portfolio. I'm now working at a leading tech company, all thanks to the skills I gained here.",
    image:
      "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/testimonial3.jpg",
  },
  {
    id: 5,
    name: "Sarah Johnson",
    role: "Current Student",
    content:
      "The flexibility of online learning combined with expert mentorship has made my learning journey incredibly rewarding. I'm already seeing improvements in my current role.",
    image:
      "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/testimonial5.jpg",
  },
];

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="  flex items-center justify-center p-4 md:p-8 ">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center md:text-left mb-8 md:mb-25">
          <p className="font-medium text-[22px] sub-title mb-10 ">
            Testimonials
          </p>
          <h2 className="text-2xl md:text-4xl font-bold mt-2"></h2>
          <p className="font-bold text-6xl ">
            Voices of Success: Hear from{" "}
            <span className="relative inline-block sub-title">
              Our Students
              <img
                src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/title-shape.svg"
                alt="Shape"
                className="absolute left-0 right-0 -bottom-6 w-full"
                loading="lazy"
              />
            </span>{" "}
          </p>
        </div>

        <div className="relative mt-25">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-20">
            {/* Circular Image Section */}
            <div className="relative w-[280px] h-[280px] lg:w-[400px] lg:h-[400px]  sm:mb-15 lg:block flex-shrink-0">
              <div className="w-full h-full rounded-full border-[12px] md:border-[16px] border-teal-400/80"></div>
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 lg:w-72 lg:h-72 rounded-full object-cover shadow-lg"
              />
           {/* Circular Image Section End */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img
                  src={testimonials[(currentTestimonial + 1) % 5].image}
                  alt=""
                  className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border-4 border-white shadow-md"
                />
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <img
                  src={testimonials[(currentTestimonial + 2) % 5].image}
                  alt=""
                  className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border-4 border-white shadow-md"
                />
              </div>
              <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img
                  src={testimonials[(currentTestimonial + 3) % 5].image}
                  alt=""
                  className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border-4 border-white shadow-md"
                />
              </div>
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                <img
                  src={testimonials[(currentTestimonial + 4) % 5].image}
                  alt=""
                  className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border-4 border-white shadow-md"
                />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="flex-1 bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="lg:hidden mb-6 flex justify-center">
                <div className="relative w-24 h-24 md:w-32 md:h-32">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full rounded-full object-cover shadow-md"
                  />
                </div>
              </div>

              <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
                {testimonials[currentTestimonial].content}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:justify-between">
                <div className="flex items-center gap-4 text-center sm:text-left">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors hover:border-gray-300 active:bg-gray-100"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors hover:border-gray-300 active:bg-gray-100"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
