import React, { createContext, useEffect, useState } from "react";
import {easyText,normalText,hardText} from './../Utils/story.json' 

export const TestDetailsDataContext = createContext();



const TestDetailsContext = (props) => {
  
  const [level, setLevel] = useState("easy");
  const [time, setTime] = useState(60);
  const [blind, setBlind] = useState(false);
  const [testData, settestData] = useState("");
  const [userInput, setuserInput] = useState(0);

  useEffect(()=>{
    if(level === "easy"){
      settestData(easyText)
    }else if(level === "normal"){
      settestData(normalText)
    }else{
      settestData(hardText)
    }
  },[level,testData])

 
  return (
    <TestDetailsDataContext.Provider
      value={{
        level, 
        setLevel,
        time,
        setTime,
        blind,
        setBlind,
        testData,
        setuserInput,
        userInput
      }}
    >
      {props.children}
    </TestDetailsDataContext.Provider>
  );
};
export default TestDetailsContext;
