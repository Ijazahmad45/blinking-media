import React, { useEffect, useState } from "react";
import TopBar from "../../components/topBar/topBar";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function Page() {
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
  const handleActiveHome = () => {
    setActiveHome(true);
  };

  const h1Dark = { color: "var(--label-color-dark-primary, #FFF)" };
  const h1Light = {
    color: "var(--label-color-dark-primary, #151141)",
    lineHeight: "21.59px",
  };

  const h3Dark = { color: " rgba(235, 235, 245, 0.70)" };
  const h3Light = { color: " #626262" };

  const liColors=darkMode ? h3Dark : h3Light;
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          overflow: "auto",
          gap: "16.291px",
          flexShrink: "0",
          scrollbarColor: "#6b6b6b #2b2b2b",
          display: "grid",
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
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#2b2b2b",
          },
        }}
      >
        <Box sx={{ gap: "7.108px" }}>
          <Typography sx={darkMode ? h1Dark : h1Light}>
            Mission Statement
          </Typography>
          <Typography sx={darkMode ? h3Dark : h3Light}>
            To help shape the future of safe human-machine interaction
          </Typography>
        </Box>
        <Box sx={{ gap: "7.108px" }}>
          <Typography sx={darkMode ? h1Dark : h1Light}>
            Company Vision
          </Typography>
          <Typography sx={darkMode ? h3Dark : h3Light}>
            To be the leading global provider of contactless holographic touch
            solutions
          </Typography>
        </Box>
        <Box sx={{ gap: "1.108px" }}>
          <Typography sx={darkMode ? h1Dark : h1Light}>
            Company Overview
          </Typography>
          <Typography sx={darkMode ? h3Dark : h3Light}>
            To be the leading global provider of contactless holographic touch
            solutions
          </Typography>
        </Box>

        <Typography sx={darkMode ? h3Dark : h3Light}>
          In March 2019 Holo industries inrtroduced Holographic TouchTM. It was
          a huge break-through in the art of holography. For the first time,
          users can not only see a holograph —they can touch it, pinch, scroll,
          spin and manipulate any image in mid-air. It was a watershed moment
          for Human-Machine Interaction: Through the genius of Holographic
          Touch, users can experience a clear, colorful and detailed mid-air
          interactive experience, anytime, anywhere.
        </Typography>
        <ul
          style={{
            margin: 0,
            paddingInlineStart: "20px",
            ...liColors
          }}
        >
          <li>
            This disruptive technology is made possible through Holo’s
            partnership with ASKA3D, the developer of the patented holographic
            optical plastic and glass plates, and the integration of Infra-Red
            (IR) sensors and other software and hardware components. The touch
            interface using the an IR sensor is so accurate, it facilitates even
            the most precise interaction with elevator buttons, ATMs, pay
            terminal and key-pads, restaurant menus, airport, hotel, hospital
            and supermarket check-in and check-out kiosks, and more. In addition
            to visual response to every action, the touch holograph provides
            aural fedback in an infinite number of sounds and tones.
          </li>
          <li>
            Our Holographic Touch solutions were introduced at the same time as
            another game-changing event: the Covid-19 pandemic. By March 2020,
            the world became pathogen-conscious, and social-distancing became
            the “New Normal”. In response for the demand for safe, germ-free
            interaction on public surfaces, Companies scrambled to invent
            technological solutions to mitigate infection to customers and
            employees, and numerous solutions flooded the market. Most of these
            solutions are expensive, impractical and require enormous amounts of
            engineering to retrofit and integrate into new systems.
          </li>
          <li>
            Our customers tell us that aftter evaluation or testing, none of
            these solution come close to the simplicity of the new germ-free,
            touchless, mid-air interaction provided by Holo Industries. Our
            plug-and-play solutions are not only instantly operational, but at
            less than $2,000, the cost is considerably less expensive than the
            alternatives.
          </li>
          <li>
            Holo Industries is designing an on-line, patented, Holographic
            Content Management SystemTM (HCMS), for a flexible, and easy-to-use
            software platform to facilitate the input of client content.
            Customers will be able to register to access our Application
            Programming Interfaces (APIs) for applications such as
            Point-of-Sales, ATMs, menus, and elevators.
          </li>
          <li>
            Our design team is currently evaluating the best way to integrate
            Haptics into holographic touch, and we expect that by 2022,
            customers will be able to not only touch, see and hear, but feel
            each interaction with the holograph.
          </li>
          <li>
            Equipping holographic units with proximity sensors to detect the
            presence of customers will add a new capability to the product line:
            the ability to only activate in the presence of a customer will save
            energy, and recording transaction time and activity will provide
            valuable customer data to the supplier and proprietor.
          </li>
          <li>
            Holo Industries has signed a global network of over 100 sales reps &
            engineers, distributors, Value-Added-Resellers (VARs) and product
            integrators to sell and support the holographic product line and
            ASKA3D plates.
          </li>
          <li>
            Holo Industries has the product solutions for pathogen mitigation,
            and will continue to be a leading remedy as the world enters a ‘New
            Normal’ of cautionary public interaction in the years to come.
            Holographic Touch, as a new technology, will also find new and
            exciting avenues of experession and continue to be a viable and
            unique medium with an ever-expanding universe of innovative
            applications.
          </li>
        </ul>
      </Box>
    </>
  );
}
