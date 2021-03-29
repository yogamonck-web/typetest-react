import React, { useContext } from "react";
import { Grid,  Switch } from "@material-ui/core";
import { useHistory } from "react-router";

import CustomContainer from "../../Component/Jumbotron";
import CustomButton from "../../Component/Button";
import CustomText from "../../Component/Text";
import { TestDetailsDataContext } from "../../ContextProviders/testDetails";

const PreTestPage = () => {
  const { 
    level, 
    setLevel,
    time,
    setTime,
    blind,
    setBlind
  } = useContext(TestDetailsDataContext)
  const history = useHistory()

  const typeOfLvl = [
    { text: "Easy", value: "easy" },
    { text: "Normal", value: "normal" },
    { text: "Hard", value: "hard" },
  ];

  const typeOfTime = [
    { text: "60", value: 60 },
    { text: "90", value: 90 },
    { text: "120", value: 120 },
  ];

  return (
    <CustomContainer
      direction="column"
      height="80%"
      width="40%"
      spacing={2}
      justify="center"
    >
      <Grid item>
        <CustomText text="Level" />
        <Grid container spacing={1}>
          {typeOfLvl.map(({ text, value }) => (
            <Grid item>
              <CustomButton
                text={text}
                varient={value === level ? "full" : "ghost"}
                handleOnClick={() => setLevel(value)}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item>
        <CustomText text="Time" />
        <Grid container spacing={1}>
          {typeOfTime.map(({ text, value }) => (
            <Grid item>
              <CustomButton
                text={text}
                varient={value === time ? "full" : "ghost"}
                handleOnClick={() => setTime(value)}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item>
        <CustomText text="Blind" />

        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Switch
              checked={blind}
              onChange={() => setBlind(!blind)}
              name="blind-test"
              color="primary"
            />
            <p>
              By turning this you will no longer be able to see word that you
              have entered
            </p>
          </Grid>
        </Grid>
      </Grid>
      <CustomButton fullWidth text="Start" handleOnClick={() => history.push('/test')} />
    </CustomContainer>
  );
};

export default PreTestPage;
