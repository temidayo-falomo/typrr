import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../helper/Context";

function Timer(props: any) {
  const { timerCount } = useContext(AppContext);
  const [delay, setDelay] = useState(+timerCount);
  const minutes = Math.floor(delay / 60);
  const seconds = Math.floor(delay % 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
      props.setTpropVal(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [delay]);

  //   useEffect(() => {}, []);

  return <div>{seconds}</div>;
}

export default Timer;
