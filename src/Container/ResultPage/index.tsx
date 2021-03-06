import { Card, CardContent, Grid } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import CustomButton from "../../Component/Button";
import CustomContainer from "../../Component/Jumbotron";
import { TestDetailsDataContext } from "../../ContextProviders/testDetails";

const ResultPage = () => {
  const [points, setPoints] = useState(0.0);
  const [accuracy, setAccuracy] = useState(0.0);
  const [, settotalWords] = useState(0);
  const [totalWordsPerMin, settotalWordsPerMin] = useState(0);
  const history = useHistory();

  const {  time, testData: realText, userInput } = useContext(
    TestDetailsDataContext
  );
  // const userInput = `<b class="user-input  right-input">A</b><b class="user-input  right-input"> </b><b class="user-input  right-input">b</b><b class="user-input  right-input">o</b><b class="user-input wrong-input">y</b><b class="user-input  right-input"> </b><b class="user-input  right-input">n</b><b class="user-input  right-input">a</b><b class="user-input  right-input">m</b><b class="user-input  right-input">e</b><b class="user-input  right-input">d</b><b class="user-input  right-input"> </b><b class="user-input wrong-input">J</b><b class="user-input  right-input">o</b><b class="user-input  right-input">h</b><b class="user-input  right-input">n</b><b class="user-input  right-input"> </b><b class="user-input  right-input">w</b><b class="user-input  right-input">a</b><b class="user-input  right-input">s</b><b class="user-input  right-input"> </b><b class="user-input  right-input">u</b><b class="user-input  right-input">p</b><b class="user-input  right-input">s</b><b class="user-input  right-input">e</b><b class="user-input  right-input">t</b><b class="user-input wrong-input">.</b><b class="user-input wrong-input"> </b><b class="user-input wrong-input">H</b><b class="user-input wrong-input">i</b><b class="user-input wrong-input">s</b><b class="user-input wrong-input"> </b><b class="user-input wrong-input">f</b><b class="user-input wrong-input">a</b><b class="user-input wrong-input">t</b><b class="user-input wrong-input">h</b><b class="user-input  right-input">e</b><b class="user-input  right-input">r</b><b class="user-input  right-input"> </b><b class="user-input  right-input">f</b><b class="user-input  right-input">o</b><b class="user-input  right-input">u</b><b class="user-input  right-input">n</b><b class="user-input  right-input">d</b><b class="user-input  right-input"> </b><b class="user-input  right-input">h</b><b class="user-input  right-input">i</b><b class="user-input  right-input">m</b><b class="user-input  right-input"> </b><b class="user-input  right-input">c</b><b class="user-input  right-input">r</b><b class="user-input  right-input">y</b><b class="user-input wrong-input">i</b><b class="user-input wrong-input">n</b><b class="user-input wrong-input">g</b><b class="user-input wrong-input">.</b><b class="user-input wrong-input">W</b><b class="user-input wrong-input">h</b><b class="user-input wrong-input">e</b>`;

  const getRightWrongNumberOfWords = (userString: string) => {
    const uStringArr = userString
      .split(" ")
      .filter((item: string) => item !== " " && item !== "");
    const actualStringArr = realText
      .split(" ")
      .filter((item: string) => item !== " " && item !== "");

    let correct = 0;
    let wrong = 0;
    for (let i = 0; i < uStringArr.length; i++) {
      if (uStringArr[i] === actualStringArr[i]) {
        correct += 1;
      } else {
        wrong += 1;
      }
    }

    return { correct, wrong, totalWords: uStringArr.length };
  };

  useEffect(() => {
    try {
      // let cleanUserUnput = userInput.replace(`<b class="user-input  wrong-input"> </b>`, "");
      // cleanUserUnput = userInput.replace(`<b class="user-input  right-input"> </b>`, "");
      const userRawInput = userInput
        .split("</b>")
        .map((item: any) => {
          if (item.includes("wrong-input")) {
            return "*";
          }
          return item[item.length - 1];
        })
        .join("");
      const { correct, wrong, totalWords } = getRightWrongNumberOfWords(
        userRawInput
      );
      settotalWords(totalWords);
      settotalWordsPerMin(totalWords / (time / 60));
      if (correct === 0) {
        setAccuracy(0); // to save from correct = 0 case
        setPoints(0);
        return;
      }

      // target/total

      setAccuracy((correct / (correct + wrong + 0.001)) * 100); // to save from correct = 0 case
      setPoints(correct * 10 - wrong * 5);
    } catch (e) {
      history.push("/preTest");
    }
  }, []);

  return (
    <CustomContainer spacing={2} justify="flex-start" alignContent="flex-start">
      <Grid item xs={12}>
        <h2>Here is your result</h2>
      </Grid>
      <Grid item xs={12} xl={12} md={3}>
        <Card elevation={3}>
          <CardContent>{points} Points</CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} xl={12} md={3}>
        <Card elevation={3}>
          <CardContent>{accuracy.toFixed(2)}% Accuracy</CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} xl={12} md={3}>
        <Card elevation={3}>
          <CardContent>{totalWordsPerMin} wpm</CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <CustomButton
          text="Retake ?"
          handleOnClick={() => history.push("/preTest")}
        />
      </Grid>
    </CustomContainer>
  );
};

export default ResultPage;
