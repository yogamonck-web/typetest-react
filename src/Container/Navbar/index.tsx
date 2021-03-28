import { Grid } from "@material-ui/core";
import React from "react";

const NavBar = () => {
  return (
    <Grid container xs={12} spacing={0} justify="center" alignContent="center">
      <Grid item alignItems="center" xs={12}>
        <img src="/images/logo_full.png" />
      </Grid>
    </Grid>
  );
};

export default NavBar;
