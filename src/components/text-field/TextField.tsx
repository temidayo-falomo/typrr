import React, { useContext, useEffect, useRef, useState } from "react";
import Letter from "../letter/Letter";
import { StyledTextField } from "./TextField.styled";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RiScreenshot2Fill } from "react-icons/ri";
import { AppContext } from "../../helper/Context";
import Timer from "../timer/Timer";
import ReactIsCapsLockActive from "@matsun/reactiscapslockactive";
import Result from "../result/Result";
import { MdOutlineRefresh } from "react-icons/md";
import { FcAlarmClock } from "react-icons/fc";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

function TextField(props: any) {
  const {
    textData,
    getWordsFromApi,
    loading,
    timerCount,
    unChangedTextData,
    setTextData,
    setDisplayFooter,
  } = useContext(AppContext);

  const [letterClicked, setLetterClicked] = useState(textData[0]);

  //
  const [number, setNumber] = useState<any>(-1);

  //
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

  //
  const [isBackspace, setIsBackspace] = useState<boolean>(false);

  //slice val
  const [sliceVal, setSliceVal] = useState<number>(250);

  //detecting the key pressed
  const detectKeydown = (e: any) => {
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
  }, [capsState]);

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
          // value={lastLetter}
          autoFocus={true}
          onBlur={({ target }) => target.focus()}
          onKeyDown={(e) => {
            if (e.key === "Backspace" && number > 0) {
              let elms: any = document.getElementsByClassName("letter");
              for (let i = 0; i < elms.length; i++) {
                elms[number].style.color = "black";
              }
              setIsBackspace(true);
              setLastLetter(textData[number - 1]);
              setNumber(number - 1);
              // setWpm(wpm - 1);
            }
          }}
          onChange={(e) => {
            // console.log(e.target);
            setIsBackspace(false);
            if (!isBackspace) {
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
            }

            if (number === sliceVal - 1) {
              setSliceVal(sliceVal + 50);
            }
          }}
        />
      </div>
      {tpropVal === 0 ? (
        <Result
          wpm={wpm}
          timerCount={timerCount}
          tPropVal={tpropVal}
          number={number}
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
                  <FcAlarmClock />
                </span>
              </div>
              {textData
                ?.slice(0, sliceVal)
                .split("")
                .map((text: any, i: any) => {
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
                        isBackspace={isBackspace}
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
      <div className="row btw gap-1 icons">
        <Tippy content="Screenshot">
          <div className="pointer">
            <RiScreenshot2Fill />
          </div>
        </Tippy>

        <Tippy content="Restart">
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
              setTextData(unChangedTextData);
              setDisplayFooter(true);

              let elms: any = document.getElementsByClassName("letter");

              for (let i = 0; i < elms.length; i++) {
                elms[i].style.color = "black";
              }
            }}
          >
            <MdOutlineRefresh />
          </div>
        </Tippy>

        <Tippy content="Next">
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
              setDisplayFooter(true);
            }}
          >
            <AiOutlineArrowRight />
          </div>
        </Tippy>
      </div>
    </StyledTextField>
  );
}

export default TextField;
