"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import listIcon from "../../assets/images/listIcon.svg";
import Image from "next/image";
import { satoshi } from "@/font";

export default function ListCard({
  medMedicalData,
  handleCheckedBlinking,
  blinkingCheck,
}) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const handleSwitchValueChanged = () => {
      const localStorageValue = localStorage.getItem("switchValue");
      const parsedValue = localStorageValue === "true";
      setChecked(parsedValue);
      handleCheckedBlinking(parsedValue);
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
  const listContent = {
    letterSpacing: "-0.25px",
    lineHeight: "24.4px",
    color: checked ? "rgba(235, 235, 245, 0.7)" : "rgba(114, 112, 134, 0.7)",
    fontWeight: "700",
    fontSize: "16.29px",
    paddingInlineStart: "20px",
  };

  return (
    <>
      {medMedicalData[0].cardData
        ? medMedicalData[0].cardData.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 3.5,
                  mb: 1.9,
                  zIndex: "101",
                  position: "relative",
                  "&:last-child": { // <-- Corrected this line
                    mb: 0,
                  },
                  "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                    backgroundColor: "transparent",
                  },
                  "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                    borderRadius: 8,

                    backgroundColor: "#7968a6",
                    minHeight: 15,
                    //border: "3px solid #2b2b2b",
                  },
                  "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
                    {
                      backgroundColor: "#7968a6",
                    },
                  "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
                    {
                      backgroundColor: "#7968a6",
                    },
                  "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
                    {
                      backgroundColor: "#7968a6",
                    },
                  "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner":
                    {
                      backgroundColor: "#2b2b2b",
                    },
                }}
              >
                <Box
                  sx={{
                    width: "150px",
                    height: "133px",
                    marginLeft: "0px",
                    position: "relative",
                    borderRadius: "10px",
                    overflow: "hidden",

                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: -1,
                      background: checked
                        ? "#7968a6"
                        : "linear-gradient(178.82deg, rgba(112, 88, 255, 0.5) -45.5%, rgba(255, 255, 255, 0) 123.64%)",
                    },
                    "&": {
                      position: "relative",
                      zIndex: 2,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Image
                      src={item.imgSource}
                      alt="list Icon"
                      style={{
                        width: "137px",
                        height: "114px",
                        borderRadius: "20px",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Box>
                <Box textAlign="start">
                  <Typography
                    style={satoshi.style}
                    sx={{
                      lineHeight: "21.59px",
                      letterSpacing: "0.38 px",
                      fontWeight: "700 !important",
                      letterSpacing: "0.38px",
                      fontSize: "15.99px",
                      color: checked ? "white" : "rgba(21, 17, 65, 1)",
                    }}
                  >
                    {item.listTitle}
                  </Typography>
                  <ul className={satoshi.className} style={listContent}>
                    {item.listData.map((list, ind) => (
                      <li key={ind}>{list}</li>
                    ))}
                  </ul>
                </Box>
              </Box>
            );
          })
        : ""}
    </>
  );
}
// #ebebf5b2
