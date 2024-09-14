// src/components/HeartIcon.js
import React, { useState } from "react";
import "animate.css";
import "./HeartIcon.css";

const HeartIcon = ({ isHeartFilled, onClick }) => {
  const [animationClass, setAnimationClass] = useState("");

  const handleHeartClick = () => {
    if (isHeartFilled) {
      setAnimationClass("animate__wobble");
    } else {
      setAnimationClass("animate__zoomOut");
    }

    setTimeout(() => {
      setAnimationClass("");
      onClick();
    }, 700);
  };

  return (
    <i
      className={`bi ${
        isHeartFilled ? "bi-heart-fill" : "bi-heart"
      } heart-icon ${animationClass}`}
      onClick={handleHeartClick}
    ></i>
  );
};

export default HeartIcon;
