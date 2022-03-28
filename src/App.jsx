import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/portfolio/portfolio";
import Projects from "./components/projects/Projects";
import References from "./components/references/References";
import Contact from "./components/contact/Contact";
import { useState } from "react";
import Menu from "./components/menu/Menu";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="website-sections">
        <Intro> </Intro>
        <Portfolio> </Portfolio>
        <Projects></Projects>
        <References></References>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default App;
