import React, { Component } from "react";
import Canvas from "./components/Canvas/Canvas";
import "./App.css";
import ColorPicker from "./components/ColorPicker/ColorPicker";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ColorPicker />
        <Canvas />
      </div>
    );
  }
}

export default App;
