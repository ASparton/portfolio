import { useEffect, useState } from "react";

import Intro from "../components/layout/Intro";
import About from "../components/sections/About";
import Experiences from "../components/sections/Experiences";
import ProjectCards from "../components/sections/ProjectCards";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <Intro />
      <About />
      <Experiences windowWidth={windowSize.innerWidth} />
      <ProjectCards />
      <Contact />
      <Footer />
    </>
  );
}

const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};

export default App;
