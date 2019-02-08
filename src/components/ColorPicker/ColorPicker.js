import React from "react";
import Pixel from "../Pixel/Pixel";
import Colors from "../Colors/Colors";

const ColorPicker = props => {
  return (
    <div className="colorpicker">
      {Colors.map((color, index) => {
        return (
          <Pixel
            key={index}
            onClick={() => props.setColor(index)}
            background={color}
            current={Colors[props.currentColor] === color}
          />
        );
      })}
    </div>
  );
};

export default ColorPicker;
