"use client";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import CircleButtons from "../buttons/circleButton";
import CircleGaps from "../SVG/circleGaps.svg";
import LightBg from "../SVG/lightBg.jpg";
import MainLogo from "../SVG/mainLogo.svg";
import SwitchButton from "../../../components/switchButton/switch";

const LayoutBox = ({ children }) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const handleSwitchValueChanged = () => {
      const localStorageValue = localStorage.getItem("switchValue");
      const parsedValue = localStorageValue === "true";
      setChecked(parsedValue);
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
  const mainLogo = {
    backgroundImage: `url("${MainLogo.src}")`,
    height: "99px",
    width: "97px",
  };
  const bg = {
    backgroundSize: "cover",
    backgroundPosition: "center 80%",
    backgroundRepeat: "no-repeat",
    height: "1024px",
    width: "100%",
    display: "block",
    margin: "auto",
    overflow: "hidden",
    position: "relative",
    zIndex: 0,
    "&:before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      background: "#180056",
      zIndex: 1,
      transition: "opacity 1s",
      opacity: 0,
    },
    "&.dark:before": {
      transition: "opacity 1s",
      opacity: 1,
    },
  };
  const bgLight = {
    ...bg,
    backgroundImage: `url("${LightBg.src}")`,
  };
  const bgDark = {
    ...bg,
    background: "#180056",
  };
  const circle = {
    "&:before": {
      content: '""',
      width: "872px",
      height: "555px",
      flexShrink: "0",
      borderRadius: "872px",
      mixBlendMode: "lighten",
      filter: "blur(100px)",
      zIndex: "1",
      position: "absolute",
      top: "-205px",
      left: "0",
      right: "0",
      margin: "auto",
    },
  };
  const circleDark = {
    ...circle,
    ":before": {
      background:
        "linear-gradient(130deg, rgba(77, 191, 243, 0.43) 26.18%, rgba(213, 143, 243, 0.43) 78.86%)",
    },
  };
  const circleLight = {
    ...circle,
    ":before": {
      background:
        "linear-gradient(130deg,rgb(77, 191, 243) 26.18%,rgb(213, 143, 243) 78.86%)",
    },
  };

  const content = {
    width: "1076px",
    height: "634px",
    margin: "auto",
    position: "relative",
    // background:'linear-gradient(178deg, rgba(255, 255, 255, 0.12) 25.17%, rgba(255, 255, 255, 0.00) 89.67%) padding-box fixed, linear-gradient(-45deg, #2ae88a 0%, #08aeea 100%) border-box',
    background: 'linear-gradient(142.03deg, #844FFC 10.25%, #FF1FF1 23.63%, rgba(4, 255, 177, 0.16) 38.38%',
    backgroundBlendMode: 'overlay',
    // background: linear-gradient(177.86deg, rgba(255, 255, 255, 0.485) 25.17%, rgba(255, 255, 255, 0) 89.67%);
    
    border: "5px solid transparent",
    // borderRadius:'30px',
    borderImage: "linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%)",
    borderImageSlice: 1,
    borderWidth: "1.78px, 1.78px, 0px, 1.78px",

    borderStyle: "solid",

    

    zIndex: 10,
    "&:before": {
      content: '""',
      position: "absolute",
      display: "block",
      bottom: "0",
      width: "1074px",
      height: "8px",
      flexShrink: "0",
      // borderRadius: "6px",
      background:
        "linear-gradient(270deg, #5F4990 -362.52%, rgba(95, 73, 144, 0.00) 165.31%)",
    },
  };
  const contentDark = {
    ...content,
    // borderRadius: "33.157px 33.157px 0px 0px",
    borderTop: "1.777px solid transparent",
    borderRight: "1.777px solid transparent",
    borderLeft: "1.777px solid transparent",
    background:
      "linear-gradient(178deg, rgba(255, 255, 255, 0.12) 25.17%, rgba(255, 255, 255, 0.00) 89.67%)",
    backdropFilter: "blur(7.108175277709961px)",
    borderImageSource:
      "linear-gradient(142.03deg, #844FFC 10.25%, #FF1FF1 23.63%, rgba(4, 255, 177, 0.16) 38.38%)",
  };
  const contentLight = {
    ...content,
    // borderRadius: "33.157px 33.157px 0px 0px",
    borderTop: "1.777px solid transparent",
    borderRight: "1.777px solid transparent",
    borderLeft: "1.777px solid transparent",
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0.31) 15.66%, rgba(255, 255, 255, 0.00) 102.8%)",
    backdropFilter: "blur(38.11000061035156px)",
    

    borderImageSource: 'linear-gradient(180deg, #FFFFFF -0.02%, rgba(255, 255, 255, 0) 86.56%)'


  };

  const base = {
    width: "1469.5px ",
    height: "353.5px",
    flexShrink: "0",
    backdropFilter: "blur(10px)",
    zIndex: "2",
    position: "relative",
    transform: "perspective(50px) rotateX(363deg) translateZ(-9px)",
    left: "0",
    right: "0",
    margin: "auto",
    bottom: "117px",
  };
  const baseDark = {
    ...base,
    background:
      "linear-gradient(180deg, rgba(253, 253, 253, 0.25) -7.21%, rgba(253, 253, 253, 0.00) 66.24%)",
  };
  const baseLight = {
    ...base,
    background:
      "linear-gradient(180deg, rgba(255, 250, 250, 0.74) -7.21%, rgba(253, 253, 253, 0.00) 92.24%)",
  };
  const social = {
    height: "485px",
    width: "64px",
    position: "absolute",
    right: "24.51px",
    top: "0",
    bottom: "0",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "22.007px",
    "&:before, :after": {
      content: '""',
      left: "0",
      right: "0",
      margin: "auto",
      position: "absolute",
      width: "1.375px",
      height: "104.533px",
      background:`${
        checked ? "#5B5959": "#FFFFFF" 
      }`, 
      zIndex:1
    },
  };
  const socialDark = {
    ...social,
    "&:before": {
      background: "#5B5959",
    },
    "&:after": {
      background: "#5B5959",
    },
    "&:before": {
      top: "0",
    },
    "&:after": {
      bottom: "0",
    },
  };
  const socialLight = {
    ...social,
    "&:before": {
      background: "#FFFFFF",
    },
    "&:after": {
      background: "#FFFFFF",
    },
    "&:before": {
      top: "0",
    },
    "&:after": {
      bottom: "0",
    },
  };

  const circleGaps = {
    backgroundImage: `url("${CircleGaps.src}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "1156px",
    width: "1156px",
    position: "absolute",
    left: "0",
    right: "0",
    top: "-122px",
    margin: "auto",
    zIndex: 3,
  };

  const outlineClr = checked ? "#3b1e87" : "#d4e6eb";
  const bgClr = checked ? bgDark : bgLight;

  return (
    <Box className={checked ? "dark" : ""} sx={bgClr}>
      <Box
        sx={{
          display: "block",
          justifyContent: "center",
          position: "relative",
          zIndex: "100",
          padding: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={checked ? mainLogo : mainLogo}></Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "26px",
            right: "60px",
          }}
        >
          <SwitchButton />
        </Box>
      </Box>
      <Box sx={checked ? circleDark : circleLight}></Box>
      <Box sx={circleGaps}></Box>
      <Box sx={checked ? contentDark : contentLight}>{children}</Box>
      <Box sx={checked ? baseDark : baseLight}></Box>
      <Box sx={checked ? socialDark : socialLight}>
        <CircleButtons
          iconName="insta"
          width="40px"
          height="40px"
        />
        <CircleButtons
          iconName="twitter"
          width="32px"
          height="32px"
        />
        <CircleButtons
          iconName="linkedin"
          width="40px"
          height="40px"
        />
      </Box>
    </Box>
  );
};

export default LayoutBox;
