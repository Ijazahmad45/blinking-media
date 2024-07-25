"use client";
import { Button, Box } from "@mui/material";
import React, { useEffect, useState } from "react";

function Buttons({ onClick, btnName }) {
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

  const darkBtn = {
    textAlign: "center",
    color: "white",
    width: "130px",
    height: "38px",
    borderRadius: "88.976px",
    position: "relative",
    left: "calc(50% -75px)",
    top: "calc(50% - 25px)",
    background: "linear-gradient(to right, #844FFC, #FF1FF1, #04FFB1)",
    cursor: "pointer",
    lineHeight: "12px",
    textTransform: "capitalize",

    "&:after": {
      content: '""',
      position: "absolute",
      display: "block",
      borderRadius: "88.976px",
      width: "calc(100% - 2px) ",
      height: "calc(100% - 2px)",
      backgroundColor: "rgb(72, 72, 72)",
      transition: "opacity 1000ms",
      opacity: "0.824",
      zIndex: "2",
    },

    "&:hover:after": {
      background:
        "linear-gradient(147deg, #5C32B6 -47.39%, #3389BE 25.36%, #2590BA 33.92%, #D838EA 108.74%)",
      opacity: "0",
    },

    "&:before": {
      content: '""',
      position: "absolute",
      display: "block",
      borderRadius: "88.976px",
      width: "calc(100% - 2px) ",
      height: "calc(100% - 2px)",
      background:
        "linear-gradient(147deg, #5C32B6 -47.39%, #3389BE 25.36%, #2590BA 33.92%, #D838EA 108.74%)",
      zIndex: "1",
    },
  };

  const lightBtn = {
    textAlign: "center",
    color: "white",
    width: "130px",
    height: "38px",
    borderRadius: "88.976px",
    position: "relative",
    border: "3px solid #FFF",
    background: "rgba(255, 255, 255, 0.43)",
    cursor: "pointer",
    lineHeight: "12px",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.43)",
      //opacity: "1",
      boxShadow: "3px 3px 20px 3px  rgba(21, 17, 65, 0.534)",
    },
  };

  const spanStyle = {
    zIndex: "3",
    fontWeight: "600",
    fontSize: "14px",
    textTransform: "capitalize",
  };
  const spanDark = {
    ...spanStyle,
    color: "#fff",
  };
  const spanLight = {
    ...spanStyle,
    color: "rgb(21, 17, 65)",
  };

  return (
    <>
      <Button onClick={onClick} sx={darkMode ? darkBtn : lightBtn}>
        <span style={darkMode ? spanDark : spanLight}>{btnName}</span>
      </Button>
    </>
  );
}

export default Buttons;
