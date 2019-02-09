import React, { useState } from "react";
import Canvas from "./components/Canvas/Canvas";
import "./App.css";
import ColorPicker from "./components/ColorPicker/ColorPicker";

const App = () => {
  const [color, setColor] = useState(0);

  return (
    <div className="App">
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

export default App;
