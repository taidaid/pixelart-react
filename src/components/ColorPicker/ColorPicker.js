import React from "react";
import Pixel from "../Pixel/Pixel";
import Colors from "../Colors/Colors";

const ColorPicker = () => {
  return (
    <div className="colorpicker">
      {Colors.map((color, index) => {
        return <Pixel key={index} background={color} />;
      })}
    </div>
  );
};

export default ColorPicker;
