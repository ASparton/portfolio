import AppHeader from "./components/layout/AppHeader";
import { About } from "./components/sections/About";
import Experiences from "./components/sections/Experiences";

function App() {
  return (
    <>
      <span id='about'></span>
      <AppHeader />
      <About />
      <Experiences />
    </>
  );
}

export default App;