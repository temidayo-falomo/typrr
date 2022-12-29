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

function TextField(props: any) {
  const { textData, getWordsFromApi, loading, timerCount } =
    useContext(AppContext);

  const [letterClicked, setLetterClicked] = useState(textData[0]);
  const [number, setNumber] = useState<any>(-1);
  const [lastLetter, setLastLetter] = useState<any>("");
  const [sacredNumbers, setSacredNumbers] = useState<any>([]);
  const inputRef = useRef<any>();

  //
  const [tpropVal, setTpropVal] = useState<any>(1);

  //words clicked
  const [wordClicked, setWordClicked] = useState(false);

  //
  const [capsState, setCapsState] = useState<boolean>(false);

  //detecting the key pressed
  const detectKeydown = (e: any) => {
    if (e.key === "Backspace") {
      console.log(e.key);
    }
    if (e.key === "CapsLock") {
      setCapsState(true);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", detectKeydown, true);
  }, []);

  useEffect(() => {
    if (tpropVal === 0) {
      props.setDisplayFooterAndNav(true);
    }
  }, [props.displayFooterAndNav, tpropVal]);

  return (
    <StyledTextField number={number}>
      {
        <ReactIsCapsLockActive>
          {(active: any) => (
            <h2 style={{ color: "orange" }}>{active ? "CAPSLOCK" : ""}</h2>
          )}
        </ReactIsCapsLockActive>
      }
      <div className="wc row center gap-5">
        {/* <span> Timer:</span> */}
        <h3 style={{ display: "inline-flex" }}>
          {" "}
          {wordClicked ? (
            <Timer tPropVal={tpropVal} setTpropVal={setTpropVal} />
          ) : (
            timerCount
          )}
          s
        </h3>
        <span>
          <BsAlarm />
        </span>
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
            }

            setWordClicked(true);
            props.setDisplayFooterAndNav(false);
          }}
        />
      </div>

      {!loading ? (
        <p>
          {textData
            ?.slice(0, 120)
            ?.split("")
            ?.map((text: any, i: any) => {
              return (
                <React.Fragment key={i}>
                  <Letter
                    number={number}
                    setNumber={setNumber}
                    text={text}
                    index={i}
                    textData={textData}
                    letterClicked={letterClicked}
                    lastLetter={lastLetter}
                    sacredNumbers={sacredNumbers}
                    setSacredNumbers={setSacredNumbers}
                  />
                </React.Fragment>
              );
            })}
          .
        </p>
      ) : (
        <div className="centrr">
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}

      <div className="row btw gap-1" style={{ fontSize: "3rem" }}>
        <div className="pointer">
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
          }}
        >
          <AiOutlineArrowRight />
        </div>
      </div>
    </StyledTextField>
  );
}

export default TextField;
