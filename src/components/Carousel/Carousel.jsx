import "./Carousel.scss";
import Down from "../../assets/images/down.png";
import React, { useState } from "react";
import { data } from "../../assets/data/data";

const Carousel = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 5)
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
                    <a href={d.url} target="_blank" rel="noreferrer">
                      <img src={d.icon} alt="" />
                    </a>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.liveSite} target="_blank" rel="noreferrer">
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
