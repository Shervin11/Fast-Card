import React from "react";
import { Outlet } from "react-router";
import Header from "../../shared/components/header/header.jsx";
import Footer from "../../shared/components/footer/footer.jsx";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Toaster
      position="bottom-left"
      reverseOrder={false}
      />
      <Footer />
    </>
  );
};

export default Layout;
