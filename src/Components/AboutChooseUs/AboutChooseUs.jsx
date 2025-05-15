const AboutChooseUs = () => {
    return (
        <div className="2xl:container mx-auto px-6 py-12">
            <div className="w-[90%] mx-auto">
                <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 items-center">
                    {/* Left Section */}
                    <div>
                        <h4 className="font-semibold text-xl text-[#00CCBD]">
                            Why Choose Us
                        </h4>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-5">
                            One Platform & Many Courses{" "}
                            <span className="relative inline-block sub-title">
                                For You
                                <img
                                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/title-shape.svg"
                                    alt="Shape"
                                    className="absolute left-0 right-0 -bottom-2 w-full"
                                    loading="lazy"
                                />
                            </span>
                        </h1>
                        <p className="mt-5 mb-10 text-gray-600 text-[16px] font-semibold">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                            tempora dolores temporibus neque, voluptas magnam aperiam dolorem
                            quasi laborum sunt, placeat consectetur.
                        </p>

                        {/* Progress Bars */}
                        <div className="progress-bar space-y-8">
                            <div>
                                <div className="flex justify-between text-[#555]">
                                    <span className="text-2xl font-semibold">
                                        Skill Mastery Levels
                                    </span>
                                    <span className="text-2xl font-semibold">80%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="Exp h-2 bg-[#00CCBD] rounded-full"
                                        style={{ width: "80%" }}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-[#555]">
                                    <span className="text-2xl font-semibold">
                                        Learning Milestones
                                    </span>
                                    <span className="text-2xl font-semibold">90%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="Exp h-2 bg-[#00CCBD] rounded-full"
                                        style={{ width: "90%" }}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-[#555]">
                                    <span className="text-2xl font-semibold">
                                        Digital Proficiency Journey
                                    </span>
                                    <span className="text-2xl font-semibold">99%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="Exp h-2 bg-[#00CCBD] rounded-full"
                                        style={{ width: "99%" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="relative flex justify-center items-center w-full md:ml-10 lg:ml-15">
                        {/* Background Shape & Woman Image */}
                        <img
                            src="https://ik.imagekit.io/ixthr16gh/Intern-Work/woman-5987428_1280.jpg?updatedAt=1738760885560"
                            alt="Woman"
                            className="rounded-full max-h-[400px] md:max-h-[480px] w-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutChooseUs;
