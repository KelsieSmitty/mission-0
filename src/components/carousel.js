import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import testimonialPoppy from "../images/testimonialPoppy.png";
import testimonialIris from "../images/testimonialIris.png";
import testimonialMonty from "../images/testimonialMonty.png";
import testimonialDozer from "../images/testimonialDozer.png";

export default function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const carouselBackground = {
    backgroundColor: "rgba(86, 217, 245, 0.4)",
    width: "100%",
  };
  const carouselStyle = {
    height: "auto",
    overflow: "hidden",
    backgroundColor: "rgba(86, 217, 245, 0.4)",
    borderBottom: "2px #56d9f5 solid",
  };

  const carouselInnerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    objectPosition: "center",
    height: "100%",
    width: "auto",
  };

  const mediaQueryStyle = ` @media (max-width: 768px) {
    .carousel-background {
      height: 60vh;
    }
    .carousel-container {
      height: 60vh;
    }
    .carousel-inner {
      height: 60vh;
    }
    .carousel-inner img {
      object-fit: cover;
      height: 50vh !important;

    }
  `;

  return (
    <div className="carousel-background" style={carouselBackground}>
      <style>{mediaQueryStyle}</style>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={carouselStyle}
        className="carousel-container"
      >
        <Carousel.Item>
          <img
            className="carousel-img d-block w-100"
            src={testimonialDozer}
            alt="slider"
            style={carouselInnerStyle}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={testimonialIris}
            alt="slider"
            style={carouselInnerStyle}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={testimonialMonty}
            alt="slider"
            style={carouselInnerStyle}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={testimonialPoppy}
            alt="slider"
            style={carouselInnerStyle}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
