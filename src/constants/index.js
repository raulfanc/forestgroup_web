import { facebook, instagram, twitter } from "../assets/icons";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import Projects from "../pages/Projects";
import ContactUs from "../pages/ContactUs";
import Capabilities from "../pages/Capabilities";

export const navLinks = [
  { href: "/", label: "Home", component: HomePage },
  { href: "/capabilities", label: "Capabilities", component: Capabilities },
  { href: "/projects", label: "Projects", component: Projects },
  { href: "/about-us", label: "About Us", component: AboutUs },
  { href: "/contact-us", label: "Contact Us", component: ContactUs },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
