import React, { useContext, useEffect, useRef, useState } from "react";
import Letter from "../letter/Letter";
import { StyledTextField } from "./TextField.styled";
import { GrRefresh } from "react-icons/gr";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RiScreenshot2Fill } from "react-icons/ri";
import { AppContext } from "../../helper/Context";
import Timer from "../timer/Timer";
import { BsAlarm } from "react-icons/bs";
import ReactIsCapsLockActive from "@matsun/reactiscapslockactive";
import Result from "../result/Result";

function TextField(props: any) {
  const { textData, getWordsFromApi, loading, timerCount } =
    useContext(AppContext);

  const [letterClicked, setLetterClicked] = useState(textData[0]);
  const [number, setNumber] = useState<any>(-1);
  const [lastLetter, setLastLetter] = useState<any>("");

  //
  const inputRef = useRef<any>();

  //
  const [tpropVal, setTpropVal] = useState<any>(1);

  //words clicked
  const [wordClicked, setWordClicked] = useState<boolean>(false);

  //
  const [capsState, setCapsState] = useState<boolean>(false);

  //
  const [wpm, setWpm] = useState<number>(0);

  //
  const [totalKeysPressed, setTotalKeysPressed] = useState<number>(0);

  //detecting the key pressed
  const detectKeydown = (e: any) => {
    if (e.key === "Backspace") {
      console.log(e.key);
      setLastLetter(textData[number]);
      setNumber(number - 1);
    }
    if (e.key === "CapsLock") {
      setCapsState(true);
    }
  };

  //
  useEffect(() => {
    if (tpropVal === 0) {
      props.setDisplayFooterAndNav(true);
    }
  }, [tpropVal]);

  //
  useEffect(() => {
    document.addEventListener("keydown", detectKeydown, true);
  }, []);

  return (
    <StyledTextField number={number}>
      <div style={{ position: "absolute", top: "5%" }}>
        {
          <ReactIsCapsLockActive>
            {(active: any) => (
              <h2 style={{ color: "orange" }}>{active ? "CAPSLOCK" : ""}</h2>
            )}
          </ReactIsCapsLockActive>
        }
      </div>
      <div className="input">
        <input
          ref={inputRef}
          type="text"
          value={lastLetter}
          autoFocus={true}
          onBlur={({ target }) => target.focus()}
          onChange={(e) => {
            if (tpropVal !== 0) {
              setLastLetter(e.target.value[e.target.value.length - 1]);
              setNumber(number + 1);
              setTotalKeysPressed(totalKeysPressed + 1);
            }

            if (tpropVal === 0) {
              props.setDisplayFooterAndNav(true);
            } else {
              props.setDisplayFooterAndNav(false);
            }

            setWordClicked(true);
          }}
        />
      </div>
      {tpropVal === 0 ? (
        <Result
          wpm={wpm}
          timerCount={timerCount}
          tPropVal={tpropVal}
          totalKeysPressed={totalKeysPressed}
        />
      ) : (
        <>
          {!loading ? (
            <div className="text-p">
              <div className="wc row center gap-5">
                <div className="timer-div" style={{ display: "inline-flex" }}>
                  {" "}
                  {wordClicked ? (
                    <Timer tPropVal={tpropVal} setTpropVal={setTpropVal} />
                  ) : (
                    timerCount
                  )}
                  s
                </div>
                <span>
                  <BsAlarm />
                </span>
              </div>

              {textData
                ?.slice(0, 120)
                ?.split("")
                ?.map((text: any, i: any) => {
                  return (
                    <React.Fragment key={i}>
                      <Letter
                        text={text}
                        setWpm={setWpm}
                        lastLetter={lastLetter}
                        index={i}
                        textData={textData}
                        number={number}
                        wpm={wpm}
                      />
                    </React.Fragment>
                  );
                })}
                ...
            </div>
          ) : (
            <div className="centrr">
              <div className="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          )}
        </>
      )}
      <div className="row btw gap-1" style={{ fontSize: "3rem" }}>
        <div className="pointer" onClick={props.handleDownload}>
          <RiScreenshot2Fill />
        </div>
        <div
          className="pointer"
          onClick={() => {
            setLetterClicked(textData[0]);
            setNumber(-1);
            setLastLetter("");
            setWordClicked(false);
            setTpropVal(1);
            props.setDisplayFooterAndNav(true);
            setWpm(0);
          }}
        >
          <GrRefresh />
        </div>
        <div
          className="pointer"
          onClick={() => {
            getWordsFromApi();
            setLetterClicked(textData[0]);
            setNumber(-1);
            setLastLetter("");
            setWordClicked(false);
            setTpropVal(1);
            props.setDisplayFooterAndNav(true);
            setWpm(0);
          }}
        >
          <AiOutlineArrowRight />
        </div>
      </div>
    </StyledTextField>
  );
}

export default TextField;
