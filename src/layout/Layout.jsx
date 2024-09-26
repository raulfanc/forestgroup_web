import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <main className="relative ">
      <Nav />
      {children}
      {/* <Footer /> */}
    </main>
  );
};

export default Layout;
