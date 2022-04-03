import "./Carousel.scss";
import Down from "../../assets/images/down.png";
import React, { useState } from "react";
import Game from "../../assets/images/game.png";
import Calculator from "../../assets/images/calculator.png";
import BrewDog from "../../assets/images/brewDog.png";
import Git from "../../assets/images/github.png";
import Morse from "../../assets/images/morse.png";

const Carousel = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: "1",
      icon: Git,
      title: "Alien invaders",
      desc: "An alien invader style shooter created with vanilla JS, SASS and HTML.",
      img: Game,
      url: "https://github.com/CameronHyden/java-script-miniGame",
      liveSite: "https://cameronhyden.github.io/java-script-miniGame/",
    },
    {
      id: "2",
      icon: Git,
      title: "JavaScript calculator",
      desc: " A functioning calculator created with JS,SASS and HTML, tested with cypress",
      img: Calculator,
      url: "https://github.com/CameronHyden/calculator-java",
      liveSite: "https://cameronhyden.github.io/calculator-java/",
    },
    {
      id: "3",
      icon: Git,
      title: "BrewDog API",
      desc: " A BrewDog beer finder application created using their API through REACT",
      img: BrewDog,
      url: "https://github.com/CameronHyden/punk-api",
      liveSite: "https://cameronhyden.github.io/punk-api/",
    },
    {
      id: "4",
      icon: Git,
      title: "Morse code translator",
      desc: " A morse code translator, made with javaScript. Functionality to translate morse to english",
      img: Morse,
      url: "https://github.com/CameronHyden/morse-code-translator-",
      liveSite: "https://cameronhyden.github.io/morse-code-translator-/",
    },
  ];

  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 3)
      : setCurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  };
  return (
    <div className="carousel" id="carousel">
      <div
        className="carousel-slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="carousel-container">
            <div className="carousel-item">
              <div className="carousel-left">
                <div className="carousel-leftContainer">
                  <div className="carousel-imgContainer">
                    <a href={d.url} target="_blank">
                      <img src={d.icon} alt="" />
                    </a>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.liveSite} target="_blank">
                    <span>Live Site</span>
                  </a>
                </div>
              </div>
              <div className="carousel-right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={Down}
        className="arrow arrow--left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src={Down}
        className="arrow arrow--right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
};

export default Carousel;
