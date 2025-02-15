import React, { useState, useEffect, useRef } from 'react';

const Typewriter = ({ text, speed = 75, style = {} }) => {
  const [displayedText, setDisplayedText] = useState('');
  const indexRef = useRef(0);

  useEffect(() => {
    // Reset when text changes
    setDisplayedText('');
    indexRef.current = 0;

    const interval = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayedText((prev) => prev + text.charAt(indexRef.current));
        indexRef.current++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]); // Re-run effect when text/speed changes

  return <span style={style}>{displayedText}</span>;
};

export default Typewriter;
