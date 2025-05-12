import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="pt-20">
        {" "}
        {/* padding for fixed NavBar */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
