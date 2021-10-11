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

export const useToast = () => {
  const [toastMessages, setToastMessages] = useState([]);

  const handleToastShow = (idx, show) => {
    const toastMessagesCopy = [...toastMessages];
    toastMessagesCopy[idx].show = show;
    setToastMessages(toastMessagesCopy);
  };

  const handleNewToast = (status, message) => {
    if (toastMessages.length > 2) {
      setToastMessages([
        { status, message, show: true },
        ...toastMessages.slice(0, 2),
      ]);
    } else {
      setToastMessages([{ status, message, show: true }, ...toastMessages]);
    }

    console.log("fired from the hook", toastMessages);
  };

  return { toastMessages, handleToastShow, handleNewToast };
};
