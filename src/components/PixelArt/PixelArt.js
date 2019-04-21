import React, { useState } from "react";
import Canvas from "../Canvas/Canvas";
import "./PixelArt.css";
import ColorPicker from "../ColorPicker/ColorPicker";

const PixelArt = () => {
  const [color, setColor] = useState(0);

  return (
    <div className="PixelArt">
      <ColorPicker
        currentColor={color}
        setColor={color => {
          setColor(color);
        }}
      />

      <Canvas currentColor={color} />
    </div>
  );
};

export default PixelArt;
