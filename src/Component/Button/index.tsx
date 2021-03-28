import { Button } from "@material-ui/core";
import React from "react";

import "./style.css";

interface Props {
  varient?: "full" | "ghost";
  theme?: "light" | "dark";
  text: string;
  fullWidth?:boolean;
  handleOnClick: () => void;
}

const CustomButton: React.FC<Props> = ({
  varient = "full",
  theme = "light",
  text,
  handleOnClick,
  fullWidth=false
}) => {
  return (
    <Button
      onClick={() => handleOnClick()}
      variant="contained"
      fullWidth={fullWidth}
      className={`btn-${varient}-${theme}`}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
