import { useEffect, useState } from "react";

import Intro from "./components/layout/Intro";
import AppHeader from "./components/layout/AppHeader";
import About from "./components/sections/About";
import Experiences from "./components/sections/Experiences";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

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
      <AppHeader windowWidth={windowSize.innerWidth} />
      <About />
      <Experiences windowWidth={windowSize.innerWidth} />
      <Projects />
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
