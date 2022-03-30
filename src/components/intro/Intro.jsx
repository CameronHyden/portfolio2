import "./Intro.scss";
import Me from "../../assets/images/businessman.png";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      typeSpeed: 150,
      backDelay: 3000,
      backSpeed: 100,
      strings: ["software developer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img className="profileImage" src={Me} alt="me" />
        </div>
      </div>
      <div className="right">
        <div className="introHeading">
          <h2 className="introHeading--greeting">Hi there, I'm</h2>
          <h1 className="introHeading--name">Cameron Hyden</h1>
          <h3 className="introHeading--role">
            Full stack <span id="textRef" ref={textRef}></span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Intro;
