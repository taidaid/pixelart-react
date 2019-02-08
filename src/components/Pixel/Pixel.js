import React from "react";
import "./Pixel.css";

const Pixel = props => {
  return <div className={`${props.background} pixel`} />;
};

export default Pixel;
