import ReactDOM from "react-dom/client";
import "../src/index.css";

import Layout from "./Components/Layout/Layout"; // new layout
import AboutUs from "./Components/AboutUsPage/AboutUs";
import Contact from "./Components/Contact/Contact";
// import TeamMemberDetail2 from "./Components/TeamMembers/TeamMemberDetail2";

// Add other pages as needed:


// import TermsConditions from "./Components/AboutUsPage/TermsConditions";

// import CourseGrid from "./Components/Course/CourseGrid";
// import CourseList from "./Components/Course/CourseList";
// import CourseDetails from "./Components/Course/CourseDetails";

// import BlogStandard from "./Components/Blog/BlogStandard";
// import BlogGrid from "./Components/Blog/BlogGrid";
// import BlogDetails from "./Components/Blog/BlogDetails";

import NotFound from "./Components/NotFound/NotFound";
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
import TeamMemberDetail from "./Components/TeamDetails/TeamDetails";
import OurTeamMembers from "./Components/OurTeamMember/OurTeamMember";
import { TeamProvider } from "./context/TeamContext";
import { LoadingProvider } from "./context/LoadingContext";
import RouteWrapper from "./Components/RouteWrapper/RouteWrapper";

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
    element: <RouteWrapper><HomePage /></RouteWrapper>,
  },
  {
    element: <Layout />,
    children: [
      { path: "/about-us", element: <RouteWrapper><AboutUs /></RouteWrapper> },
      { path: "/our-team", element: <RouteWrapper><OurTeamMembers /></RouteWrapper> },
      { path: "/our-team/:id", element: <RouteWrapper><TeamMemberDetail /></RouteWrapper> },
      { path: "/team-details", element: <RouteWrapper><TeamDetails /></RouteWrapper> },
      // { path: "/privacy-policy", element: <PrivacyPolicy /> },
      // { path: "/terms-conditions", element: <TermsConditions /> },
      { path: "/contact", element: <RouteWrapper><Contact /></RouteWrapper> },

      // { path: "/course-grid", element: <CourseGrid /> },
      // { path: "/course-list", element: <CourseList /> },
      // { path: "/course-details", element: <CourseDetails /> },

      // { path: "/blog-standard", element: <BlogStandard /> },
      // { path: "/blog-grid", element: <BlogGrid /> },
      // { path: "/blog-details", element: <BlogDetails /> },
      { path: "*", element: <RouteWrapper><NotFound /></RouteWrapper> },
      // { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <TeamProvider>
    <LoadingProvider>
      <RouterProvider router={Router} />
    </LoadingProvider>
  </TeamProvider>
);
