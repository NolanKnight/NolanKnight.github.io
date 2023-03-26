import About from "../pages/about";
import FRC from "../pages/frc";
import Home from "../pages/home";
import Projects from "../pages/projects";

const navLinks = [
  { link: "/", label: "Home", element: <Home /> },
  { link: "/about", label: "About", element: <About /> },
  { link: "/projects", label: "Projects", element: <Projects /> },
  { link: "/frc", label: "FRC", element: <FRC /> },
];

export default navLinks;
