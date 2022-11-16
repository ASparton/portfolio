import AppHeader from "./components/layout/AppHeader";
import About from "./components/sections/About";
import Experiences from "./components/sections/Experiences";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <span id='about'></span>
      <AppHeader />
      <About />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;