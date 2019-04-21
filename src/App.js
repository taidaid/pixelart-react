import React from "react";
import PixelArt from "./components/PixelArt/PixelArt";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <PixelArt />
      <Footer />
    </div>
  );
};

export default App;
