import React, { useState } from "react";
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
  };

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
