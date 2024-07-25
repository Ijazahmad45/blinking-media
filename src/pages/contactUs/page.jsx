"use client";
import React, { useEffect, useState } from "react";
import CustomTextField from "../../components/CustomTextField/CustomTextField";
import ToPBar from "../../components/topBar/topBar";

import { Box, Button, TextField, Typography } from "@mui/material";
export default function page() {
  const handleSubmite = () => {};

  return (
    <>
      <Box
        sx={{
          margin: "auto",
          width: "430px",
        }}
      >
        <form onSubmit={handleSubmite}>
          <CustomTextField
            fullWidth
            placeholder="Enter your Name"
            type="text"
          />
          <CustomTextField fullWidth placeholder="Email" type="email" />
          <CustomTextField fullWidth placeholder="Message" type="textarea" />
          <Button
            type="submite"
            fullWidth
            variant="contained"
            sx={{
              textTransform:"capitalize",
              background: `linear-gradient(176deg, #5C32B6 -47.39%, #3389BE 25.36%, #2590BA 33.92%, #D838EA 108.74%),linear-gradient(0deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25))`,
              borderRadius: "79.06px",
              border: "0.79px",
              padding: "7.11px, 14.22px, 7.11px, 14.22px",
              gap: "7.11px",
              my: 2.5,
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
}
