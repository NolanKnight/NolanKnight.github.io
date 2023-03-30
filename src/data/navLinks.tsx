import FourZeroFour from "../pages/404";
import About from "../pages/about";
import FRC from "../pages/frc";
import Home from "../pages/home";
import Projects from "../pages/projects";

const navLinks = [
  { link: "/", label: "Home", element: <Home />, navBar: true },
  { link: "/about", label: "About", element: <About />, navBar: true },
  { link: "/projects", label: "Projects", element: <Projects />, navBar: true },
  { link: "/frc", label: "FRC", element: <FRC />, navBar: true },
  { link: "*", label: "404", element: <FourZeroFour />, navBar: false },
];

export default navLinks;
