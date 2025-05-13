import { Link, useParams } from "react-router-dom";
import { TeamData2 } from "../../API/TeamData";

const TeamMemberDetail2 = () => {
    const { id } = useParams();
    const member = TeamData2.find((item) => item.id === parseInt(id));

    if (!member) {
        return (
            <div className="text-center mt-20">
                <h2 className="text-2xl font-bold text-red-600">Team member not found</h2>
                <Link to="/our-team" className="text-blue-500 underline mt-4 block">
                    Back to Team
                </Link>
            </div>
        );
    }

    return (
        <div className="2xl:container mx-auto">
            <div className="w-[90%] mx-auto">
                <div className="2xl:container mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
                    <div className="relative bg-[#FFF7FA] pt-20 pb-12 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-18 overflow-hidden rounded-xl">
                        {/* Main Content */}
                        <div className="relative z-20 text-center px-4">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                                Team Member Details
                            </h1>
                            <p className="mt-3 text-sm sm:text-base text-gray-700 font-medium">
                                <Link to="/" className="hover:text-[#8A47CB] font-semibold">
                                    Home
                                </Link>
                                <span className="text-[#8A47CB] font-semibold"> – Team Member</span>
                            </p>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute inset-0 z-0">
                            <div className="w-[150%] h-[100%] bg-gradient-to-b from-[#F8F8F8] to-transparent rounded-full absolute top-[-75%] left-[-25%]" />
                        </div>
                    </div>
                </div>

                {/* Member Details Section */}
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-8">
                    <div className="md:flex">
                        {/* Member Image */}
                        <div className="md:w-1/3 p-8">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-auto rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        {/* Member Details */}
                        <div className="md:w-2/3 p-8">
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">{member.name}</h1>
                            <p className="text-xl text-purple-600 mb-2">{member.position}</p>
                            <p className="text-lg text-gray-600 mb-6">{member.designation}</p>

                            {/* Social Links */}
                            <div className="flex gap-6 mb-8">
                                <a
                                    href={member.google}
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
                                        />
                                    </svg>
                                </a>
                                <a
                                    href={member.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="faq-button butt hover:-translate-y-2 duration-700"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 128 128"
                                        width="3em"
                                        height="3em"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388c0 26.682 17.303 49.317 41.297 57.303c3.017.56 4.125-1.31 4.125-2.905c0-1.44-.056-6.197-.082-11.243c-16.8 3.653-20.345-7.125-20.345-7.125c-2.747-6.98-6.705-8.836-6.705-8.836c-5.48-3.748.413-3.67.413-3.67c6.063.425 9.257 6.223 9.257 6.223c5.386 9.23 14.127 6.562 17.573 5.02c.542-3.903 2.107-6.568 3.834-8.076c-13.413-1.525-27.514-6.704-27.514-29.843c0-6.593 2.36-11.98 6.223-16.21c-.628-1.52-2.695-7.662.584-15.98c0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033c11.526-7.813 16.59-6.19 16.59-6.19c3.287 8.317 1.22 14.46.593 15.98c3.872 4.23 6.215 9.617 6.215 16.21c0 23.194-14.127 28.3-27.574 29.796c2.167 1.874 4.097 5.55 4.097 11.183c0 8.08-.07 14.583-.07 16.572c0 1.607 1.088 3.49 4.148 2.897c23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href={member.linkedin}
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

                            {/* Additional Details */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold text-gray-900">About</h2>
                                <p className="text-gray-600">
                                    Experienced lecturer specializing in delivering high-quality education and fostering student growth.
                                    Our team member brings extensive knowledge and expertise to help students achieve their learning goals.
                                </p>

                                <div className="mt-8">
                                    <Link
                                        to="/our-team"
                                        className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300"
                                    >
                                        Back to Team
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberDetail2; 