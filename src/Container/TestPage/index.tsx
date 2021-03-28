import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import TypeTestArea from "../../Component/TextTypeArea";
import TestPageTimer from "../../Component/Timer";
import { TestDetailsDataContext } from "../../ContextProviders/testDetails";

const TestPage = () => {
  const { level, time, blind, testData: realText, setuserInput } = useContext(
    TestDetailsDataContext
  );
  const [userInput, setUserInput] = useState<string[]>([]);
  const textDisplayElement = useRef<HTMLElement | null>(null) as any;
  const history = useHistory()

  useEffect(()=>{
    window.onbeforeunload = ()=> {
      window.setTimeout(function () { 
        window.location.href = '/preTest';
    }, 0); 
    window.onbeforeunload = null;
    }

  },[])

  const validateInput = (key: string, index: number) => {
    if (blind) {
      return `<b class="user-input-blind">${realText[index]}</b>`;
    }
    else if (key !== realText[index]) {
      return `<b class="user-input wrong-input">${realText[index]!==" "?realText[index]:"_"}</b>`;
    } else {
      return `<b class="user-input  right-input">${key}</b>`;
    }
  };

  const handleKeypres = (key: any) => {
    key.preventDefault();
    // console.log(key);
    if (userInput.length >= realText.length) {
      return;
    }

    setUserInput((oldData) => {
      if (key.key === "Backspace") {
        let tempArray = [...oldData];
        tempArray.pop();
        return [...tempArray];
      } else if (key.key.length > 1) {
        return oldData;
      } else if (realText[oldData.length]) {
        return [...oldData, validateInput(key.key, oldData.length)];
      } else {
        return oldData;
      }
    });

    const currentCursor = document.querySelectorAll(".user-input");
    if (currentCursor[currentCursor.length - 1]) {
      currentCursor[currentCursor.length - 1].scrollIntoView();
    }
  };

  useEffect(() => {
    if (!textDisplayElement || !textDisplayElement.current) {
      return;
    }
    textDisplayElement.current.addEventListener("keydown", handleKeypres);
    return function cleanup() {
      textDisplayElement.current &&
        textDisplayElement.current.removeEventListener(
          "keydown",
          handleKeypres
        );
    };
  }, [textDisplayElement.current]);

  useEffect(() => {
    if (!textDisplayElement || !textDisplayElement.current) {
      return;
    }
    setuserInput(userInput.join(""))
    textDisplayElement.current.innerHTML = `${userInput.join("")}`;
  }, [userInput]);

  return (
    <div className="result-page">
      <TypeTestArea textBoxRef={textDisplayElement} realText={realText} />
      <TestPageTimer time={time} />
    </div>
  );
};

export default TestPage;
