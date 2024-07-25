"use client";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";
import Image from "next/image";
import { satoshi } from "@/font";

export default function ActionAreaCard({ imgSource, cardTitle, CardContent, sx }) {
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

  const backgroundStyle = darkMode
    ? "unset"
    : "linear-gradient(184.91deg, rgba(255, 255, 255, 0.20) 67.6%, rgba(255, 255, 255, 0) 93.24%)";
  const titleStyle = {
    fontSize: "18px",
    fontWeight: "700",
    lineHeight: "24px",
    letterSpacing: "0.3346990942955017px",
    color: darkMode ? "white" : "rgba(21, 17, 65, 1)",
  };
  const contentStyle = {
    fontSize: "14px",
    fontWeight: "700",
    lineHeight: "21px",
    letterSpacing: "-0.21478012204170227px",
    color: darkMode ? "rgba(235, 235, 245, 0.7)" : "rgba(98, 98, 98, 1)",
  };
  return (
    <Box
      sx={{
        maxWidth: "312px",
        borderRadius: "21.32px",
        padding: "10px",
        
        background: darkMode ? `linear-gradient(178.13deg, rgba(112, 88, 255, 0.5) -44.49%, rgba(255, 255, 255, 0) 96.59%)`: "linear-gradient(178.13deg, rgba(112, 88, 255, 0.5) -44.49%, rgba(255, 255, 255, 0) 96.59%)" , 
        backgroundBlendMode: "overlay",

        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        position: "relative",

        "& ::before": {
          background: backgroundStyle,
          backgroundBlendMode: "overlay",
          borderRadius: "24.32px",
          content: '""',
          width: "317.2px",
          height: "100%",
          position: "absolute",
          top: '-2px;',
          padding: "10px",
          bottom: 0,
          left: '-2px;',
          right: 0,
          zIndex: -1,
        },
      }}
    >
      <div className="card-wrapper" style={{ padding: "0px" }}>
        <div
          style={{
            backgroundImage: `url(${imgSource.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "144.83px",
            borderRadius: "21.32px",
          }}
        ></div>
        <div style={{ textAlign: "center", padding: "0px" }}>
          <p style={titleStyle}>{cardTitle}</p>
          <p style={contentStyle}>{CardContent}</p>
        </div>
      </div>
    </Box>
  );
}
