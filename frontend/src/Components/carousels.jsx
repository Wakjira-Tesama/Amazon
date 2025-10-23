import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./../assets/images/data.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function carousels() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={true}
      >
        {img.map((imageslink) => {
          return <img src={imageslink} />;
        })}
      </Carousel>
    </div>
  );
}

export default carousels;
