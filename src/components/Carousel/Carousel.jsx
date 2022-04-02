import "./Carousel.scss";
import Down from "../../assets/images/down.png";
import React, { useState } from "react";
import Game from "../../assets/images/game.png";
import Calculator from "../../assets/images/calculator.png";
import BrewDog from "../../assets/images/brewDog.png";
import Git from "../../assets/images/github.png";

const Carousel = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: "1",
      icon: Git,
      title: "Alien invaders",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: Game,
    },
    {
      id: "2",
      icon: Git,
      title: "JavaScript calculator",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: Calculator,
    },
    {
      id: "3",
      icon: Git,
      title: "BrewDog API",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: BrewDog,
    },
  ];

  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
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
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>projects</span>
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
