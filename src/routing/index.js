import React from "react";
import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import Footer from "../modules/footer";
import Navbar from "../modules/navbar";
import Home from "../pages/home";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;
