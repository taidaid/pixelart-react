import React, { useState } from "react";
import Colors from "../Colors/Colors";
import Pixel from "../Pixel/Pixel";
import "./Canvas.css";

const Canvas = () => {
  const [matrix, setMatrix] = useState(
    Array(30)
      .fill()
      .map(() =>
        Array(30)
          .fill()
          .map(() => 0)
      )
  );

  return (
    <div className={"canvas"}>
      {matrix.map((row, rowIndex) =>
        row.map((_, colIndex) => {
          console.log(rowIndex, colIndex);
          return (
            <Pixel
              key={`${rowIndex}-${colIndex}`}
              background={Colors[matrix[rowIndex][colIndex]]}
            />
          );
        })
      )}
    </div>
  );
};

export default Canvas;
