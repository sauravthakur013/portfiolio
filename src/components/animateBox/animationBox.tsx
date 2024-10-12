import * as React from "react";
import { useState } from "react";
import { render } from "react-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { distance } from "@popmotion/popcorn";
import "./styles.css";

const grid = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]];
const size = 60;
const gap = 10;

const valueFinder = (num:number) => {
  switch (num) {
    case 0:
      return "HTML";
    case 1:
      return "TAILWIND CSS";
    case 2:
      return "JAVASCRIPT";
    case 3:
      return "REACT JS";
    case 4:
      return "NODE JS";
    case 5:
      return "MONGODB";
    case 6:
      return "EXPRESS JS";
    case 7:
      return "JAVA";
    case 8:
      return "PYTHON";
    case 9:
      return "DSA";
    case 10:
      return "REACT NATIVE";
    case 11:
      return "TYPESCRIPT";
    case 12:
      return "ANGULAR";
    case 13:
      return "GITHUB";
    case 14:
      return "NEXT JS";
    case 15:
      return "MATERIAL UI";
  }
}

const Square = ({ active, setActive, colIndex, rowIndex, x, y, value }:any) => {
  let target = -1;
  const isDragging = colIndex === active.col && rowIndex === active.row;
  const diagonalIndex = (360 / 6) * (colIndex + rowIndex);
  const d = distance(
    { x: active.col, y: active.row },
    { x: colIndex, y: rowIndex }
  );
  const springConfig = {
    stiffness: Math.max(700 - d * 120, 0),
    damping: 20 + d * 5
  };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      dragElastic={1}
      onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
      style={{
        background: '#3C3D37',
        width: size*2,
        height: size,
        top: rowIndex * (size + gap),
        left: colIndex * (size + gap*7),
        position: "absolute",
        borderRadius: 4,
        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:12,
      }}
    >{valueFinder(value)}</motion.div>
  );
};

function Example() {
  const [active, setActive] = useState({ row: 0, col: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <div className="app">
      <motion.div
        animate={{ "--base-hue": 360 } as any}
        initial={{ "--base-hue": 0 } as any}
        transition={{ duration: 10, loop: Infinity, ease: "linear" }}
        style={{ width: "100%", height: "100%" }}
      >
        <motion.div
          style={{
            display: "flex",
            width: (size + gap) * 4 - gap,
            height: (size + gap) * 4 - gap,
            top: "50%",
            left: "40%",
            transform: "translate(-50%)",
            position: "relative",
            perspective: 500
          }}
        >
          {grid.map((row, rowIndex) =>
            row.map((_item, colIndex) => (
              <Square
                x={x}
                y={y}
                active={active}
                setActive={setActive}
                rowIndex={rowIndex}
                colIndex={colIndex}
                key={rowIndex + colIndex}
                value={_item}
              />
            ))
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Example;