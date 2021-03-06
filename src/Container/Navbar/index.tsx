import { Grid, Paper } from "@material-ui/core";
import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";

const NavBar = () => {
  const repoUrl = "https://github.com/yogamonck-web/typetest-react";

  return (
    <Paper elevation={1}>
      <Grid container spacing={0}>
        <Grid item xs={10} md={11}>
          <img alt="logo-flashwriter" src="/images/logo_full.png" />
        </Grid>
        <Grid item xs={2} md={1}>
          <GitHubIcon
            style={{ margin: "20px", color: "#b17979" }}
            onClick={() => window.open(repoUrl, "_blank")}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default NavBar;
