import { Button, Grid, GridDirection, GridJustification, GridSpacing } from "@material-ui/core";
import React from "react";

// import "./style.css";

interface Props {
  spacing?: GridSpacing;
  children:React.ReactNode;
  justify?:GridJustification;
  alignContent?:string;
  width?:string;
  minWidth?:string;
  direction?:GridDirection;
  height?:string;
}

const CustomContainer: React.FC<Props> = ({
  spacing=0,
  children,
  justify="center",
  alignContent="center",
  width="80%",
  height="100%",
  minWidth="300px",
  direction="row"
}) => {
  return (
    <Grid
      container
      direction={direction}
      spacing={spacing}
      justify={justify}
      alignContent="center"
      style={{
        minHeight: "100vh",
        padding: "20px",
        width,
        minWidth,
        height,
        alignContent,
        margin: "0 auto",
      }}
    >
      {children}
    </Grid>
  );
};

export default CustomContainer;
