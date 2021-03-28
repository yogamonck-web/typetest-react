import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import CustomButton from "../../Component/Button";
import CustomContainer from "../../Component/Jumbotron";
import CustomText from "../../Component/Text";

const LandingPage = () => {
  const history = useHistory();

  const handleOnClick = () => {
    history.push("/preTest");
  };

  return (
    <CustomContainer>
      <Grid container xs={12} lg={6} spacing={0} alignContent="center">
        <Grid item xs={12}>
          <CustomText text={"Finger workout."} fs="70px" />
        </Grid>

        <Grid item xs={12}>
          <CustomText
            fw={200}
            text="Test and improve your typing speed here."
            fs="34px"
          />
        </Grid>

        <Grid style={{ margin: "50px 0" }} item xs={12}>
          <CustomButton
            text="Start"
            varient="full"
            theme="light"
            handleOnClick={handleOnClick}
          />
        </Grid>
      </Grid>

      <Grid item xs={12} lg={6}>
        <img src="/images/ladyAndLaptop.svg" height="90%" width="90%" />
      </Grid>
    </CustomContainer>
  );
};

export default LandingPage;
