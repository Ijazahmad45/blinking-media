import { Box } from "@mui/material";
import React from "react";

const TabContents = ({ children, id }) => {
  return (
    <Box
      id={id}
      sx={{
        overflow: 'hidden',
        paddingLeft: '80px',
        paddingRight: '80px',
        height: '450px',
        width: '100%',
        paddingBottom: '35px',
        position: 'relative',
        boxSizing: 'border-box',
        // top: 180px;
        left: 0,
      }}
    >
      {children}
    </Box>
  );
};

export default TabContents;
