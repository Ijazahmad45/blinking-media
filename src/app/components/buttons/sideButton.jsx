"use client"
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ChatBtn1 from "../SVG/chatBtn1.svg";
import ChatBtn2 from "../SVG/chatBtn2.svg";
import playbtn1Light from "../SVG/playbtn1Light.svg";
import playbtn2Light from "../SVG/playbtn2Light.svg";
import playBtn1Dark from "../SVG/playBtn1Dark.svg";
import playBtn2Dark from "../SVG/playBtn2Dark.svg";

// import MenuGradient4 from "../SVG";
//import { relative } from "path";

const SideButton = () => {
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

  const sidePlay = {
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "70px",
    width: "70px",
    // After delay
    animationName: "changePlayBtn",
    ChangeTo: "Group 625748",
    Animate: "Smart animate",
    animationTimingFunction: "cubic-bezier(0.45, 1.45, 0.8, 1)",
    animationDuration: "1200ms",
    animationIterationCount: "infinite",
    position: "relative",
    "&:after": {
      // After delay
      content: '""',
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "70px",
      width: "70px",
      animationName: "changePlayBtn",
      ChangeTo: "Group 625748",
      Animate: "Smart animate",
      animationTimingFunction: "cubic-bezier(0.45, 1.45, 0.8, 1)",
      animationDuration: "1200ms",
      animationIterationCount: "infinite",
      position: "absolute",
    },
  };
  const sideChat = {
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "70px",
    width: "70px",
    // After delay
    animationName: "changeChatBtn",
    animationTimingFunction: "cubic-bezier(0.45, 1.45, 0.8, 1)",
    animationDuration: "1200ms",
    animationIterationCount: "infinite",
    position: "relative",
    "&:after": {
      // After delay
      content: '""',
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "70px",
      width: "70px",
      animationName: "changeChatBtn",
      Animate: "Smart animate",
      animationTimingFunction: "cubic-bezier(0.45, 1.45, 1, 1)",
      animationDuration: "1200ms",
      animationIterationCount: "infinite",
      position: "absolute",
    },
  };

  const playBtn = {
    "@keyframes changePlayBtn": {
      "0%": {
        animationDelay: "1000ms",
        backgroundImage: darkMode ? `url(${playBtn1Dark.src})`: `url('${playbtn1Light.src}')` ,
      },
      "100%": {
        animationDelay: "1000ms",
        backgroundImage: darkMode ? `url(${playBtn2Dark.src})`: `url('${playbtn2Light.src}')` ,
      }
    },
  };

  const chatBtn = {
    "@keyframes changeChatBtn": {
      "0%": {
        animationDelay: "10000ms",
        backgroundImage: `url('${ChatBtn1.src}')`,
      },
      "100%": {
        animationDelay: "10000ms",
        backgroundImage: `url('${ChatBtn2.src}')`,
      }
    },
  };

  const bgLight = {
    ...sidePlay,
    ...sideChat,
  };

  const bgDark = {
    ...sidePlay,
    ...sideChat,
  };

  return (
    <>
      <Box
        className="side-play"
        sx={{
          ...sidePlay,
          ...playBtn,
          position: "absolute",
          bottom: "-190px",
          transform: " translateX(100%)",
          left: "-180px",
        }}
      ></Box>

      <Box
        className="side-chat"
        sx={{
          ...sideChat,
          ...chatBtn,
          position: "absolute",
          bottom: "-190px",
          transform: " translateX(100%)",
          right: "-78px",
        }}
      ></Box>
    </>
  );
};

export default SideButton;
