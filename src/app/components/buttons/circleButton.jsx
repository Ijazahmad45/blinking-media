"use client";
import { Button, Box, SvgIcon } from "@mui/material";
import React, { useEffect, useState } from "react";

function CustomSvgIcon(props) {
  if (props.iconName == "insta") {
    return (
      <SvgIcon {...props}>
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Frame 2">
            <g id="Group 2">
              <g id="Group">
                <path
                  id="Vector"
                  d="M20.4922 8.24175C24.4973 8.24175 24.9718 8.25705 26.5535 8.32922C28.016 8.39591 28.8102 8.64027 29.3388 8.84569C30.0389 9.1178 30.5386 9.44284 31.0635 9.96771C31.5884 10.4926 31.9134 10.9923 32.1855 11.6925C32.391 12.221 32.6353 13.0153 32.702 14.4777C32.7742 16.0594 32.7895 16.5339 32.7895 20.539C32.7895 24.5442 32.7742 25.0186 32.702 26.6003C32.6353 28.0628 32.391 28.857 32.1855 29.3856C31.9134 30.0857 31.5884 30.5854 31.0635 31.1103C30.5386 31.6352 30.0389 31.9602 29.3388 32.2323C28.8102 32.4378 28.016 32.6821 26.5535 32.7488C24.972 32.821 24.4976 32.8363 20.4922 32.8363C16.4867 32.8363 16.0124 32.821 14.4309 32.7488C12.9684 32.6821 12.1742 32.4378 11.6456 32.2323C10.9455 31.9602 10.4458 31.6352 9.92091 31.1103C9.39604 30.5854 9.07094 30.0857 8.79883 29.3856C8.5934 28.857 8.34904 28.0628 8.28235 26.6003C8.21019 25.0186 8.19489 24.5442 8.19489 20.539C8.19489 16.5339 8.21019 16.0594 8.28235 14.4777C8.34904 13.0153 8.5934 12.221 8.79883 11.6925C9.07094 10.9923 9.39598 10.4926 9.92091 9.96777C10.4458 9.44284 10.9455 9.1178 11.6456 8.84569C12.1742 8.64027 12.9684 8.39591 14.4309 8.32922C16.0126 8.25705 16.487 8.24175 20.4922 8.24175ZM20.4922 5.53906C16.4184 5.53906 15.9076 5.55633 14.3077 5.62933C12.7111 5.70215 11.6207 5.95574 10.6666 6.32651C9.68023 6.70984 8.84372 7.22274 8.00977 8.05663C7.17587 8.89058 6.66297 9.7271 6.2797 10.7135C5.90887 11.6676 5.65527 12.758 5.58245 14.3546C5.50945 15.9545 5.49219 16.4653 5.49219 20.539C5.49219 24.6128 5.50945 25.1236 5.58245 26.7235C5.65527 28.32 5.90887 29.4104 6.2797 30.3645C6.66297 31.3509 7.17587 32.1874 8.00977 33.0214C8.84372 33.8553 9.68023 34.3682 10.6666 34.7515C11.6207 35.1223 12.7111 35.3759 14.3077 35.4487C15.9076 35.5217 16.4184 35.539 20.4922 35.539C24.5659 35.539 25.0768 35.5217 26.6767 35.4487C28.2732 35.3759 29.3636 35.1223 30.3178 34.7515C31.3041 34.3682 32.1406 33.8553 32.9746 33.0214C33.8085 32.1874 34.3214 31.3509 34.7047 30.3645C35.0755 29.4104 35.3291 28.32 35.4019 26.7235C35.4749 25.1236 35.4922 24.6128 35.4922 20.539C35.4922 16.4653 35.4749 15.9545 35.4019 14.3546C35.3291 12.758 35.0755 11.6676 34.7047 10.7135C34.3214 9.7271 33.8085 8.89058 32.9746 8.05663C32.1406 7.22274 31.3041 6.70984 30.3178 6.32651C29.3636 5.95574 28.2732 5.70215 26.6767 5.62933C25.0768 5.55633 24.5659 5.53906 20.4922 5.53906Z"
                  fill="white"
                />
              </g>
              <g id="Group_2">
                <path
                  id="Vector_2"
                  d="M20.4996 12.8438C16.2455 12.8438 12.7969 16.2923 12.7969 20.5464C12.7969 24.8005 16.2455 28.2491 20.4996 28.2491C24.7537 28.2491 28.2023 24.8005 28.2023 20.5464C28.2023 16.2923 24.7537 12.8438 20.4996 12.8438ZM20.4996 25.5464C17.7381 25.5464 15.4996 23.3079 15.4996 20.5464C15.4996 17.785 17.7381 15.5464 20.4996 15.5464C23.261 15.5464 25.4996 17.785 25.4996 20.5464C25.4996 23.3079 23.261 25.5464 20.4996 25.5464Z"
                  fill="white"
                />
              </g>
            </g>
          </g>
        </svg>
      </SvgIcon>
    );
  } else if (props.iconName == "twitter") {
    return (
      <SvgIcon {...props}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="pajamas:twitter">
            <path
              id="Vector"
              d="M19.0786 14.3951L29.2046 2.53906H26.8046L18.0146 12.8331L10.9906 2.53906H2.89062L13.5106 18.1071L2.89062 30.5391H5.29063L14.5746 19.6671L21.9926 30.5391H30.0926L19.0786 14.3951ZM15.7926 18.2431L14.7166 16.6931L6.15462 4.35906H9.84063L16.7486 14.3131L17.8246 15.8631L26.8066 28.8031H23.1206L15.7926 18.2431Z"
              fill="white"
            />
          </g>
        </svg>
      </SvgIcon>
    );
  } else if (props.iconName == "linkedin") {
    return (
      <SvgIcon {...props}>
        <svg
          width="41"
          height="41"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Frame 4">
            <g id="linkedin icon">
              <g id="Group">
                <path
                  id="Vector"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.0032 7.50697C12.0032 9.20482 10.7104 10.5789 8.68876 10.5789C6.74585 10.5789 5.45308 9.20482 5.49309 7.50697C5.45308 5.7266 6.74582 4.39258 8.72749 4.39258C10.7104 4.39258 11.9645 5.7266 12.0032 7.50697ZM5.65563 32.7822V13.0056H11.8019V32.7809H5.65563V32.7822Z"
                  fill="white"
                />
              </g>
              <g id="Group_2">
                <path
                  id="Vector_2"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.725 19.3171C16.725 16.8503 16.6438 14.7474 16.5625 13.0083H21.9011L22.1849 15.7176H22.3062C23.1151 14.4636 25.1368 12.5645 28.4125 12.5645C32.4558 12.5645 35.489 15.2338 35.489 21.055V32.7849H29.3427V21.8251C29.3427 19.2758 28.4537 17.538 26.2295 17.538C24.5304 17.538 23.5202 18.7107 23.1164 19.8422C22.9538 20.2473 22.8738 20.8124 22.8738 21.38V32.7849H16.7275V19.3171H16.725Z"
                  fill="white"
                />
              </g>
            </g>
          </g>
        </svg>
      </SvgIcon>
    );
  }
}
function CircleButtons({ iconName, width, height }) {
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

  const bgColor = checked ? "#3b1e87" : "#d4e6eb";

  return (
    <Button
      sx={{
        margin: "",
        display: "flex",
        width: "64px",
        height: "64px",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: "0",
        background: bgColor,
        borderRadius: "100%",
        cursor: "pointer",
        position: "relative",
        zIndex: 1,
        boxShadow: '0px 0px 1.6410256624221802px 0px #9D42B6',

        "&:hover": {
          backgroundColor: bgColor,
        },

        "&:after": {
          display: "flex",
          width: "52px",
          height: "52px",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: "0",
          background:
            "linear-gradient(40deg, #FF001C -136.27%, #FF009D -73.77%, #F9049F -60.02%, #E80FA3 -41.59%, #C2A -20.51%, #A53CB4 2.51%, #735DC0 27.15%, #3785CF 52.7%, #0AD 73.63%, #FFD400 148.58%), #D9D9D9",
          borderRadius: "100%",
          content: '""',
          zIndex: "5",
          position: "absolute",
          display: "block",
        },
      }}
    >
      <CustomSvgIcon
        iconName={iconName}
        style={{ width: width, height: height, zIndex: "10" }}
      />
    </Button>
  );
}

export default CircleButtons;
