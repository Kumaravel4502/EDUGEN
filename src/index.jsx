import ReactDOM from "react-dom/client";
import "../src/index.css";

import Layout from "./Components/Layout/Layout"; // new layout
import AboutUs from "./Components/AboutUsPage/AboutUs";
import Contact from "./Components/Contact/Contact";
// import TeamMemberDetail2 from "./Components/TeamMembers/TeamMemberDetail2";

// Add other pages as needed:

// import PrivacyPolicy from "./Components/AboutUsPage/PrivacyPolicy";
// import TermsConditions from "./Components/AboutUsPage/TermsConditions";

// import CourseGrid from "./Components/Course/CourseGrid";
// import CourseList from "./Components/Course/CourseList";
// import CourseDetails from "./Components/Course/CourseDetails";

// import BlogStandard from "./Components/Blog/BlogStandard";
// import BlogGrid from "./Components/Blog/BlogGrid";
// import BlogDetails from "./Components/Blog/BlogDetails";

// import NotFound from "./Components/Error/NotFound";
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
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header/Header";
// import OurTeam from "./Components/TeamSection/OurTeam";
import TeamDetails from "./Components/TeamDetails/TeamDetails";
import OurTeamMembers from "./Components/OurTeamMember/OurTeamMember";
import TeamMemberDetail from "./Components/TeamDetails/TeamDetails";
import { TeamProvider } from "./context/TeamContext";

const HomePage = () => {
  return (
    <>
      <Header />
      <CourseCategory />
      <AboutSection />
      <BackgroundVideo />
      <Course />
      <Choose />
      <TeamMembers />
      {/* <OurTeamMembers /> */}
      <Email />
      <Testimonial />
      <LiveClasses />
      <Blog />
      <Footer />
    </>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    element: <Layout />,
    children: [
      { path: "/about-us", element: <AboutUs /> },
      { path: "/our-team", element: <OurTeamMembers /> },
      { path: "/our-team/:id", element: <TeamMemberDetail /> },
      { path: "/team-details", element: <TeamDetails /> },
      // { path: "/privacy-policy", element: <PrivacyPolicy /> },
      // { path: "/terms-conditions", element: <TermsConditions /> },
      { path: "/contact", element: <Contact /> },

      // { path: "/course-grid", element: <CourseGrid /> },
      // { path: "/course-list", element: <CourseList /> },
      // { path: "/course-details", element: <CourseDetails /> },

      // { path: "/blog-standard", element: <BlogStandard /> },
      // { path: "/blog-grid", element: <BlogGrid /> },
      // { path: "/blog-details", element: <BlogDetails /> },

      // { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 <TeamProvider>
   <RouterProvider router={Router} />
 </TeamProvider>
);
