import ReactDOM from "react-dom/client";
import "../src/index.css";
import Hero from "./Components/Hero/Hero";
import CourseCategory from "./Components/CourseCategory/CourseCategory";
import AboutSection from "./Components/AboutSection/AboutSection";
import BackgroundVideo from "./Components/Background-Video/BackgroundVideo";
import Course from "./Components/Course/Course";

import Choose from "./Components/Choose/Choose";
import TeamMembers from "./Components/TeamMembers/TeamMembers";
import Email from "./Components/Email/Email";
import Testimonial from "./Components/Testimonials/Testimonial";
import LiveClasses from "./Components/LiveClasses/LiveClasses";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Hero />
      <CourseCategory />
      <AboutSection />
      <BackgroundVideo />
      <Course />
      <Choose />
      <TeamMembers />
      <Email/>
      <Testimonial/>
      <LiveClasses/>
      <Blog/>
      <Footer/>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
