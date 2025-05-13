import { useState, useEffect } from "react";

const easing = {
  // Different easing functions you can use
  linear: (t) => t,
  easeInQuad: (t) => t * t,
  easeOutQuad: (t) => t * (2 - t),
  easeInOutQuad: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
};

const useCounter = ({
  start = 0, // Starting value
  end, // Ending value
  duration = 2000, // Duration in milliseconds
  easingFn = "easeOutQuad", // Easing function name
}) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime = null;
    let animationFrameId = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Apply easing function
      const easedProgress = easing[easingFn](progress);

      if (progress < 1) {
        setCount(Math.floor(start + (end - start) * easedProgress));
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [start, end, duration, easingFn]);

  return count;
};

export default useCounter;
