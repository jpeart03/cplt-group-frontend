import { useState, useLayoutEffect } from "react";

export const useMediaQuery = () => {
  const [windowDimensions, setWindowDimensions] = useState([0, 0]);

  useLayoutEffect(() => {
    const updateDimensions = () => {
      setWindowDimensions([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return windowDimensions;
};
