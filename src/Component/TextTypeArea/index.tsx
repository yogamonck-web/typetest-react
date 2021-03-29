import React from "react";
import CustomContainer from "../Jumbotron";

import "./style.css";

interface Props {
  varient?: "full" | "ghost";
  theme?: "light" | "dark";
  realText?: string;
  textBoxRef:string;
}

const TypeTestArea: React.FC<Props> = ({
  varient = "full",
  theme = "light",
  realText,
  textBoxRef,
}) => {
  return (
    <CustomContainer alignContent="flex-start" >
      <div
        ref={textBoxRef}
        tabIndex={0}
        id="test-type-area"
        className={`typearea typ-${varient}-${theme}`}
        data-descr={realText}
      />
    </CustomContainer>
  );
};

export default TypeTestArea;