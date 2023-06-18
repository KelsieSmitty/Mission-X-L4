import React from "react";
import Button from "@mui/material/Button";

export default function MuiButton() {
  const handleClick = function() {
    return console.log("button was pressed");
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        href="https://thefluffykitty.com/"
        onClick={handleClick}
      >
        Kitty Travel Guide
      </Button>
    </div>
  );
}
