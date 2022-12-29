import axios from "axios";
import React, { useEffect, useRef, useState, useTransition } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./Globalstyles";
import { AppContext } from "./helper/Context";
import { offlineArr } from "./offline/OfflineArr";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App({ delayResend = "15" }) {
  const [user, setUser] = useState<object>({});
  const [wordLength, setWordLength] = useState<number>(15);
  const [timerCount, setTimerCount] = useState<any>(15);
  const [textData, setTextData] = useState<string>("");
  const [unChangedTextData, setUnchangedTextData] = useState<string>("");
  const [loading, setLoading] = useState(true);


  const getWordsFromApi = () => {
    setLoading(true);
    axios
      .get("http://metaphorpsum.com/paragraphs/1")
      .then((res) => {
        setTextData(res.data);
        setUnchangedTextData(res.data);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setTextData(offlineArr[Math.floor(Math.random() * offlineArr.length)]);
        setUnchangedTextData(
          offlineArr[Math.floor(Math.random() * offlineArr.length)]
        );
        setLoading(false);
      });
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        wordLength,
        setWordLength,
        textData,
        setTextData,
        unChangedTextData,
        getWordsFromApi,
        timerCount,
        setTimerCount,
        loading,
        setLoading,
      }}
    >
      <div className="App">
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
