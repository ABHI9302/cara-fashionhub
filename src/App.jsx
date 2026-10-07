import React from "react";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Newsletter from "./Sections/Newsletter";
const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
