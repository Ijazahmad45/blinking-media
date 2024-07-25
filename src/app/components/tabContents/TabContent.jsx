import { Box } from "@mui/material";
import React from "react";

const TabContent = ({ children, id, active, sx }) => {
  const activeClass = active ? "active" : "";
  const activeStyle = {
    "&.active": {
      transform: "translateY(0%)",
      bottom: "-8px",

    },
  };

  const overFlowStyle = {
    overflow: "auto",
    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
      backgroundColor: "transparent",
      width:'6.22px'
    },
    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
      borderRadius: 8,
      background: "#DFDFDF38",
      minHeight: 15,
    }
  };
  return (
    <Box
      id={id}
      className={activeClass}
      sx={{
        ...sx,
        height: "450.61px",
        position: "absolute",
        WebkitTransition: "-webkit-transform 1000ms ease",
        transition: "transform 300ms cubic-bezier(0.33, 0.87, 0.56, 1.14)",
        bottom: "1000px",
        left: 0,
        paddingLeft: "80px",
        paddingRight: "80px",
        transformBox: "border-box",
        ...activeStyle,
        overflowY: "auto",
        transform: "translateY(100%)",
        paddingBottom: "20px",
        width: "100%",
        boxSizing: "border-box",
        ...overFlowStyle,
      }}
    >
      {children}
    </Box>
  );
};

export default TabContent;
