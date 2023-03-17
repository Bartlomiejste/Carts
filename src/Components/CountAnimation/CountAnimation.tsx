import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

interface CounterProps {
  duration: number;
  endCount: number;
}

const CountAnimation: React.FC<CounterProps> = ({ duration, endCount }) => {
  const [count, setCount] = useState<number>(0);
  const [delay, setDelay] = useState<number>(500); // delay start 1 second

  useEffect(() => {
    const timerId = setTimeout(() => {
      const start = Date.now();
      const end = start + duration;
      const step = () => {
        const now = Date.now();
        const remaining = end - now;
        if (remaining < 0) {
          setCount(endCount);
          return;
        }
        const value = Math.round(((now - start) / duration) * endCount);
        setCount(value);
      };
      const timerId = setInterval(step, 20);
      return () => clearInterval(timerId);
    }, delay);

    return () => clearTimeout(timerId);
  }, [delay, duration, endCount]);

  return (
    <Box
      sx={{
        animation: `${duration / 1000}s infinite alternate ease-in-out`,
        counterReset: "num",
        fontWeight: 800,
        fontSize: "40px",
      }}
    >
      {count}
    </Box>
  );
};

export default CountAnimation;
