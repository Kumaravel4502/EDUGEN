import { Routes, Route } from "react-router-dom";
import RouteWrapper from "./Components/RouteWrapper/RouteWrapper";

// Import all pages/components that need routing
import Home from "./Components/HomePage/Home";
import AboutUs from "./Components/AboutUsPage/AboutUs";
import CourseDetails from "./Components/CourseDetails/CourseDetails";
import CourseCatalog from "./Components/CourseCatalog/CourseCatalog";
import BlogStandard from "./Components/BlogStandard/BlogStandard";
import BlogGrid from "./Components/BlogGrid/BlogGrid";
import BlogDetails from "./Components/Blog Details/BlogDetails";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "./Components/TermsConditions/TermsConditions";
import OurTeam from "./Components/TeamSection/OurTeam";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main routes */}
      <Route path="/" element={<RouteWrapper><Home /></RouteWrapper>} />
      <Route path="/about-us" element={<RouteWrapper><AboutUs /></RouteWrapper>} />
      <Route path="/contact" element={<RouteWrapper><Contact /></RouteWrapper>} />

      {/* Course routes */}
      <Route path="/courses" element={<RouteWrapper><CourseCatalog /></RouteWrapper>} />
      <Route path="/courses/:id" element={<RouteWrapper><CourseDetails /></RouteWrapper>} />
      <Route path="/course-grid" element={<RouteWrapper><CourseCatalog view="grid" /></RouteWrapper>} />
      <Route path="/course-list" element={<RouteWrapper><CourseCatalog view="list" /></RouteWrapper>} />

      {/* Blog routes */}
      <Route path="/blog" element={<RouteWrapper><BlogStandard /></RouteWrapper>} />
      <Route path="/blog-grid" element={<RouteWrapper><BlogGrid /></RouteWrapper>} />
      <Route path="/blog-details/:id" element={<RouteWrapper><BlogDetails /></RouteWrapper>} />

      {/* Other pages */}
      <Route path="/our-team" element={<RouteWrapper><OurTeam /></RouteWrapper>} />
      <Route path="/privacy-policy" element={<RouteWrapper><PrivacyPolicy /></RouteWrapper>} />
      <Route path="/terms-conditions" element={<RouteWrapper><TermsConditions /></RouteWrapper>} />

      {/* 404 Not Found route */}
      <Route path="/not-found" element={<RouteWrapper><NotFound /></RouteWrapper>} />
      <Route path="*" element={<RouteWrapper><NotFound /></RouteWrapper>} />
    </Routes>
  );
};

export default AppRoutes; 