import React from "react";

interface Props {
  varient?: "full" | "ghost";
  theme?: "light" | "dark";
  text: string;
  fs?: string;
  fw?: "bolder" | "normal" | "lighter" | number;
}

const CustomText: React.FC<Props> = ({
  varient = "full",
  theme = "light",
  text,
  fs = "24px",
  fw = 500,
}) => {
  return (
    <span
      className={`span-${varient}-${theme}`}
      style={{
        fontSize: fs,
        fontWeight: fw,
      }}
    >
      {text}
    </span>
  );
};

export default CustomText;
