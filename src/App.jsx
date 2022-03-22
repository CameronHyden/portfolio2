import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/portfolio";
import Projects from "./components/projects/Projects";
import References from "./components/references/References";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div className="App">
      <Navbar />
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
