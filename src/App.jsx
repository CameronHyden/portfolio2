import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Contact from "./components/contact/Contact";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Carousel from "./components/Carousel/Carousel";
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="website-sections">
        <Intro> </Intro>
        <Carousel></Carousel>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default App;
