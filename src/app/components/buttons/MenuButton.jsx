"use client";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuGradient1 from "../SVG/MenuGradient1.svg";
import MenuGradient2 from "../SVG/MenuGradient2.svg";
import MenuGradient3 from "../SVG/MenuGradient3.svg";
import MenuGradient4 from "../SVG/MenuGradient4.svg";
import HomeIcon from "../SVG/HomeIcon.svg";
import { relative } from "path";

const MenuButton = ({ onClick ,homeBtnClick}) => {
  const [activeHome, setActiveHome] = React.useState(false);
  const [darkMode, setdarkMode] = useState(false);

  useEffect(() => {
    const handleSwitchValueChanged = () => {
      const localStorageValue = localStorage.getItem("switchValue");
      const parsedValue = localStorageValue === "true";
      setdarkMode(parsedValue);
    };
    // Attach the event listener
    window.addEventListener("switchValueChanged", handleSwitchValueChanged);
    // Fetch the initial value from localStorage
    handleSwitchValueChanged();
    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener(
        "switchValueChanged",
        handleSwitchValueChanged
      );
    };
  }, []);
  const handleActiveHome = () => {
    setActiveHome(true);
  };
  var centralButtonText = `${activeHome ? "Go to Home" : "Touch Here"}`;
  const bg = {
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "82px",
    width: "82px",
    animationName: "changeGradient",
    animationTimingFunction: "linear",
    animationDuration: "10500ms",
    animationIterationCount: "infinite",
    position: "relative",
    top: `${activeHome ? "0" : "-20px"}`,
    transition: "top 1s",
  };
  const homeIconStyle = {
    content: '""',
    width: "48px",
    height: "48px",
    opacity: `${activeHome ? "1" : "0"}`,
    zIndex: `${activeHome ? "2" : "-1"}`,
    backgroundImage: `url('${HomeIcon.src}')`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    right: "0",
    left: "0",
    top: "0",
    bottom: "0",
    margin: "auto",
    cursor: "pointer",
    transition: "opacity 1s",
    opacity: `${activeHome ? "1" : "0"}`,
  };
  const keyframes = {
    "@keyframes changeGradient": {
      "0%": {
        animationDelay: "1ms",
        backgroundImage: `url('${MenuGradient1.src}')`,
      },
      "15%": {
        animationDelay: "1ms",
        backgroundImage: `url('${MenuGradient2.src}')`,
      },
      "30%": {
        animationDelay: "1ms",
        backgroundImage: `url('${MenuGradient3.src}')`,
      },
      "45%": {
        animationDelay: "1ms",
        backgroundImage: `url('${MenuGradient4.src}')`,
      },
      "60%": {
        animationDelay: "1ms",
        backgroundImage: `url('${MenuGradient3.src}')`,
      },
      "750%": {
        animationDelay: "1ms",
        backgroundImage: `url('${MenuGradient2.src}')`,
      },
      "100%": {
        animationDelay: "1ms",
        backgroundImage: `url('${MenuGradient1.src}')`,
      },
    },
  };

  const bgLight = {
    ...bg,
  };

  const bgDark = {
    ...bg,
  };
  const shadowStyle = {
    "::before": {
      content: '""',
      width: `${activeHome ? "70px" : "50px"}`, //stateChange
      height: "24px",
      borderRadius: "100%",
      position: "absolute",
      background: `${darkMode ? "rgba(214, 214, 214, 1)" : "#131e4f"}`,
      filter: "blur(4px)",
      bottom: "-13px",
      right: "0",
      left: "0",
      margin: "auto",
      zIndex: -1,
      transition: "width 1000ms",
    },
  };
  return (
    <Box
      className="menu-btn"
      onClick={() => {
        onClick();
        handleActiveHome();
      }}
      sx={{
        ...shadowStyle,
      }}
    >
      <Box
        sx={{ ...bg, ...keyframes, position: "relative", cursor: "pointer" }}
      ></Box>
      <i 
        onClick={homeBtnClick} style={homeIconStyle}></i>
      <span
        style={{
          position: "absolute",
          bottom: `-33px`,
          color: "white",
          fontWeight: "700",
          width: "100px",
        }}
      >
        {centralButtonText}
      </span>
    </Box>
  );
};

export default MenuButton;
