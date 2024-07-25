import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

export default function CustomTextField({ placeholder, type, sx }) {
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
  const inputStyles = {};
  return (
    <>
      {placeholder === "Message" ? (
        <TextField
          variant="standard" // <== changed this
          margin="normal"
          required
          id="Name"
          name=""
          type={type}
          autoComplete={placeholder}
          placeholder={placeholder}
          multiline
          rows={5}
          maxRows={6}
          fullWidth
          InputProps={{
            disableUnderline: true,
            sx: {
              "& ::placeholder": {
                color: `${checked ? "white" : "#626262"}`,
                opacity: 1,
                fontSize: "14.22px",
                letterSpacing: "0.31 px",
                fontWeight: "500",
              },
              borderRadius: "20px",
              pt: 1,
              paddingLeft: "15px",
              color: `${checked ? "white" : "#626262"}`,
              fontWeight: "500",
              background:
                "linear-gradient(111.68deg, rgba(255, 255, 255, 0.15) 7.59%, rgba(237, 237, 237, 0.3) 102.04%)",
            },
          }}
        />
      ) : (
        <TextField
          variant="standard" // <== changed this
          margin="normal"
          required
          id="Name"
          name=""
          type={type}
          autoComplete={placeholder}
          placeholder={placeholder}
          autoFocus
          fullWidth
          
          InputProps={{
            disableUnderline: true,
            style: {
              color: `${checked ? "white" : "#626262"}`
            },
            sx: {
              "& ::placeholder": {
                color: `${checked ? "white" : "#626262"}`,
                opacity: 1,
                fontSize: "14.22px",
                letterSpacing: "0.31 px",
                fontWeight: "500",
              },
              borderRadius: "20px",
              py: 1, 
              paddingLeft: "15px",
              fontWeight: "500",
              color: `${checked ? "white" : "#626262"}`,
              background:
                "linear-gradient(111.68deg, rgba(255, 255, 255, 0.15) 7.59%, rgba(237, 237, 237, 0.3) 102.04%)",
            },
          }}
        />
      )}
    </>
  );
}
