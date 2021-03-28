import React, { useEffect, useRef, useState } from "react";
import { Snackbar } from "@material-ui/core";
import { useHistory } from "react-router";

interface Props {
    time:number;
}
const TestPageTimer:React.FC<Props> = ({time}) => {
  const [timer, setTimer] = useState<any>(time) ;

  const history = useHistory()

  useEffect(() => {
    
    if(timer <= 0){
        history.push('/result')
    }
    const timeout = setTimeout(() => setTimer(timer - 1), 1000);
    return function cleanup(){
        clearTimeout(timeout)
    };
  }, [timer]);


  return (
      <Snackbar open message={"Time left " + timer} />
  );
};

export default TestPageTimer;
