import FourZeroFour from "../pages/404";
import About from "../pages/about";
import FRC from "../pages/frc";
import Home from "../pages/home";
import Projects from "../pages/projects";
import Page from "../components/page/page";

const navLinks = [
  {
    link: "/",
    label: "Home",
    element: <Page title="Home" heading="Hi, I'm Nolan." children=<Home/> />,
    navBar: true,
  },
  {
    link: "/about",
    label: "About",
    element: <Page title="About" heading="About Me" children=<About/> />,
    navBar: true,
  },
  {
    link: "/projects",
    label: "Projects",
    element: <Page title="Projects" heading="My Projects" children=<Projects/> />,
    navBar: true,
  },
  {
    link: "/frc",
    label: "FRC",
    element: <Page title="FRC" heading="FIRST Robotics Competition" children=<FRC/> />,
    navBar: true,
  },
  {
    link: "*",
    label: "404",
    element: <Page title="404" heading="404" children=<FourZeroFour/> />,
    navBar: false,
  },
];

export default navLinks;
