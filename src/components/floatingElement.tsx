import React, { useEffect, useState } from 'react';

const FloatingWords = () => {
  const words = ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Redux", "Node", "Express"];
  
  const [positions, setPositions] = useState(Array(words.length).fill({ top: 0, left: 0 }));
  
  useEffect(() => {
    const moveWords = () => {
      setPositions(
        words.map(() => ({
          top: Math.random() * 100,  // Random top percentage
          left: Math.random() * 100,  // Random left percentage
        }))
      );
    };

    // Move words every 2 seconds
    const interval = setInterval(moveWords, 2000);

    // Cleanup interval
    return () => clearInterval(interval);
  }, [words]);

  return (
    <div className="floating-words-container pointer-events-none">
      {words.map((word, index) => (
        <span
          key={index}
          className="floating-word"
          style={{
            top: `${positions[index].top}%`,
            left: `${positions[index].left}%`,
            position: 'absolute',
            fontSize: `${Math.random() * 1.5 + 1}rem`,
            color: 'rgba(255, 255, 255, 0.1)',  // Light color for background
            transition: 'top 2s, left 2s',  // Smooth transitions
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};
export default FloatingWords;
