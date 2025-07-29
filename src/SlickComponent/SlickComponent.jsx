import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider({ children, settings }) {
  var defaultSettings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    ...settings, // ghi đè nếu truyền từ ngoài
  };

  return (
    <Slider {...defaultSettings}>
      {children}
    </Slider>
  );
}
