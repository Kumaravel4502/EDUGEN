
import { Link } from "react-router-dom";
import { TeamData } from "../../API/TeamData";

const TeamMembers = () => {
  return (
    <div className="2xl:container mx-auto px-4 py-10">
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto">
          {/* Grid Section including title and team members */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {/* Section Title as Grid Item */}
            <div className="space-y-5">
              <p className="sub-title  text-[19px] font-semibold">
                Team Members
              </p>
              <h2 className="text-5xl font-bold max-w-[400px] leading-15">
                Our Expert <span className="sub-title">Lecturer</span>
              </h2>
              <p className="w-[255px] text-[17px] font-semibold text-[#878787] leading-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has
              </p>
              <button
                className="relative rounded-sm h-[55px] w-[200px] mt-6 mb-1  bg-white px-3 text-black cursor-pointer transition-all before:absolute
                  before:bottom-0 before:left-0 before:top-0 before:z-1 before:h-full before:w-4 before:rounded-[2px] before:bg-black
                  before:transition-all before:duration-500 hover:text-white hover:before:w-full hover:before:rounded-sm"
              >
                <span className="relative z-10 flex justify-between items-center font-semibold ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="2em"
                    height="2em"
                    className="pt-[4px]"
                  >
                    <path
                      fill="currentColor"
                      d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
                    ></path>
                  </svg>
                  Join Our Team
                </span>
              </button>
            </div>

            {/* Team Members */}
            {TeamData.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 border-3 border-dashed border-purple-500 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 w-full mx-auto"
              >
                {/* Image and Basic Info - Clickable */}
                {/* <Link to={`/our-team/${item.id}`} className="block"> */}
                <Link to={`/our-team/`} className="block">
                  <div className="flex justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-52 h-52 p-1 transition-transform duration-500 hover:scale-110 cursor-pointer"
                    />
                  </div>

                  {/* Details */}
                  <div className="text-center mt-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-purple-600 text-sm font-medium">
                      {item.position}
                    </p>
                    <p className="text-gray-600 mt-2 text-[17px] font-semibold">
                      {item.designation}
                    </p>
                  </div>
                </Link>
                {/* </Link> */}

                {/* Social Media Links */}
                <div className="flex justify-center gap-6 items-center mt-5">
                  <a
                    href={item.google}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="faq-button butt hover:-translate-y-2 duration-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="3em"
                      height="3em"
                    >
                      <path
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1.5"
                        d="M13.365 2.83a9.25 9.25 0 0 1 4.744 2.089c.338.284.336.794.024 1.106l-1.616 1.616c-.312.312-.816.306-1.171.044a5.365 5.365 0 1 0 1.615 6.705h-3.91a.8.8 0 0 1-.8-.8V11.3a.8.8 0 0 1 .8-.8h7.493c.316 0 .61.186.681.495c.313 1.362-.125 3.246-.158 3.384l-.004.016c-.528 1.963-1.661 3.706-3.274 4.944a9.25 9.25 0 1 1-4.424-16.51"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="faq-button butt hover:-translate-y-2 duration-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 128 128"
                      width="5em"
                      height="5em"
                    >
                      <path
                        fillRule="evenodd"
                        d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388c0 26.682 17.303 49.317 41.297 57.303c3.017.56 4.125-1.31 4.125-2.905c0-1.44-.056-6.197-.082-11.243c-16.8 3.653-20.345-7.125-20.345-7.125c-2.747-6.98-6.705-8.836-6.705-8.836c-5.48-3.748.413-3.67.413-3.67c6.063.425 9.257 6.223 9.257 6.223c5.386 9.23 14.127 6.562 17.573 5.02c.542-3.903 2.107-6.568 3.834-8.076c-13.413-1.525-27.514-6.704-27.514-29.843c0-6.593 2.36-11.98 6.223-16.21c-.628-1.52-2.695-7.662.584-15.98c0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033c11.526-7.813 16.59-6.19 16.59-6.19c3.287 8.317 1.22 14.46.593 15.98c3.872 4.23 6.215 9.617 6.215 16.21c0 23.194-14.127 28.3-27.574 29.796c2.167 1.874 4.097 5.55 4.097 11.183c0 8.08-.07 14.583-.07 16.572c0 1.607 1.088 3.49 4.148 2.897c23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="faq-button butt hover:-translate-y-2 duration-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="5em"
                      height="5em"
                    >
                      <g>
                        <path
                          fillRule="evenodd"
                          d="M12.51 8.796v1.697a3.74 3.74 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766c-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483a1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.6 1.6 0 0 1 1.6 1.606"
                          clipRule="evenodd"
                        />
                        <path d="M7.2 8.809H4V19.5h3.2z" />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
