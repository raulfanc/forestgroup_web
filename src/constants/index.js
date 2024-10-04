import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import Projects from "../pages/Projects";
import ContactUs from "../pages/ContactUs";
// import Capabilities from "../pages/Capabilities";

export const navLinks = [
  { href: "/", label: "Home", component: HomePage },
  // { href: "/capabilities", label: "Capabilities", component: Capabilities },
  { href: "/about-us", label: "About Us", component: AboutUs },
  { href: "/projects", label: "Projects", component: Projects },
  { href: "/contact-us", label: "Contact Us", component: ContactUs },
  { href: "*", label: "Home", component: HomePage },
];
