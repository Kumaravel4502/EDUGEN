import ReactDOM from "react-dom/client";
import "../src/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TeamProvider } from "./context/TeamContext";
import { LoadingProvider } from "./context/LoadingContext";

// Import all components from barrel file
import {
  Layout,
  AboutUs,
  Contact,
  NotFound,
  CourseCategory,
  AboutSection,
  BackgroundVideo,
  Course,
  Choose,
  TeamMembers,
  Email,
  Testimonial,
  LiveClasses,
  Blog,
  Footer,
  Header,
  TeamDetails,
  OurTeamMember,
  RouteWrapper,
  PrivacyPolicy,
  TermsCondition,
  CourseGrid,
  CourseList,
  CourseDetails,
  CourseCatalog,
  BlogStandard,
} from "./Components";
import BlogGrid from "./Components/BlogGrid/BlogGrid";

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
      {/* <OurTeamMember /> */}
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
      { path: "/our-team", element: <RouteWrapper><OurTeamMember /></RouteWrapper> },
      { path: "/our-team/:id", element: <RouteWrapper><TeamDetails /></RouteWrapper> },
      { path: "/team-details", element: <RouteWrapper><TeamDetails /></RouteWrapper> },
      { path: "/course-grid", element: <RouteWrapper><CourseGrid /></RouteWrapper> },
      { path: "/course-list", element: <RouteWrapper><CourseList /></RouteWrapper> },
      { path: "/course-details/:id", element: <RouteWrapper><CourseDetails /></RouteWrapper> },
      { path: "/courses", element: <RouteWrapper><CourseCatalog /></RouteWrapper> },
      { path: "/privacy-policy", element: <RouteWrapper><PrivacyPolicy /></RouteWrapper> },
      { path: "/terms-conditions", element: <RouteWrapper><TermsCondition /></RouteWrapper> },
      { path: "/contact", element: <RouteWrapper><Contact /></RouteWrapper> },
      { path: "/blog-standard", element: <RouteWrapper><BlogStandard /></RouteWrapper> },
      { path: "/blog-grid", element: <RouteWrapper><BlogGrid /></RouteWrapper> },
      { path: "*", element: <RouteWrapper><NotFound /></RouteWrapper> },
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
