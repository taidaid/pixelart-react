import React, { useState, useEffect } from "react";
import Colors from "../Colors/Colors";
import Pixel from "../Pixel/Pixel";
import "./Canvas.css";

const Canvas = props => {
  const [matrix, setMatrix] = useState(
    Array(30)
      .fill()
      .map(() =>
        Array(30)
          .fill()
          .map(() => 0)
      )
  );

  const changeColor = (rowIndex, colIndex) => {
    const newMatrix = JSON.parse(JSON.stringify(matrix));
    if (props.currentColor !== newMatrix[rowIndex][colIndex]) {
      newMatrix[rowIndex][colIndex] = props.currentColor;
    } else {
      newMatrix[rowIndex][colIndex] = 0;
    }

    setMatrix(newMatrix);
    localStorage.clear();
    try {
      localStorage.setItem("matrix", JSON.stringify(newMatrix));
    } catch (domException) {
      if (
        ["QuotaExceededError", "NS_ERROR_DOM_QUOTA_REACHED"].includes(
          domException.name
        )
      ) {
        console.log(domException);
        // handle quota limit exceeded error
      }
    }
  };

  useEffect(() => {
    const loadCanvasFromLocalStorage = () => {
      if (localStorage.hasOwnProperty("matrix")) {
        const localCanvas = localStorage.getItem("matrix");
        try {
          setMatrix(JSON.parse(localCanvas));
        } catch (err) {
          console.log(err);
        }
      }
    };
    loadCanvasFromLocalStorage();
  });

  return (
    <div className={"canvas"}>
      {matrix.map((row, rowIndex) =>
        row.map((_, colIndex) => {
          return (
            <Pixel
              key={`${rowIndex}-${colIndex}`}
              background={Colors[matrix[rowIndex][colIndex]]}
              onClick={() => changeColor(rowIndex, colIndex)}
            />
          );
        })
      )}
    </div>
  );
};

export default Canvas;
