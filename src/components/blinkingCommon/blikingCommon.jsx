"use client";
import React, { useState } from "react";
import listicon from "../../assets/images/listIcon.svg";
import ListCard from "../../components/medMedicalListCard/ListCard";
import { Box, Typography } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import TopBar from "../topBar/topBar";
import { satoshi } from "@/font";

export default function BlikingCommon({ medMedicalData }) {
  const [blinkingCheck, setBlinkingCheck] = useState(false);
  const componentName = medMedicalData[0].componentName;
 

  return (
    <>
      
        <ListCard
          blinkingCheck={blinkingCheck}
          handleCheckedBlinking={(e) => {
            setBlinkingCheck(e);
          }}
          medMedicalData={medMedicalData}
        />
    </>
  );
}
