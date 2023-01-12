import axios from "axios";
import { collection, doc, getDoc, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ColorsModal from "./components/colors-modal/ColorsModal";
import { db } from "./firebase/firebase-config";
import GlobalStyle from "./Globalstyles";
import { AppContext } from "./helper/Context";
import { offlineArr } from "./offline/OfflineArr";
import Home from "./pages/home/Home";
import Leaderboards from "./pages/leaderboards/Leaderboards";
import Login from "./pages/login/Login";

function App() {
  const [user, setUser] = useState<object>({});
  const [wordLength, setWordLength] = useState<number>(15);
  const [timerCount, setTimerCount] = useState<any>(
    Number(localStorage.getItem("typrrTimerCount")) || 15
  );
  const [textData, setTextData] = useState<string>("");
  const [unChangedTextData, setUnchangedTextData] = useState<string>("");

  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<object>({
    textColor: "#000",
    backgroundColor: "#ECE6E4",
    scrollColor: "orange",
  });

  //
  const [users, setUsers] = useState<any>();

  //
  const [displayColorsModal, setDisplayColorsModal] = useState<boolean>(false);

  //
  const [getUserErr, setGetUserErr] = useState<boolean>(false);

  //
  const [displayFooter, setDisplayFooter] = useState<boolean>(true);

  //
  const [displayInput, setDisplayInput] = useState<boolean>(true);

  //get words from api
  const getWordsFromApi = () => {
    setLoading(true);

    axios
      .get("https://litipsum.com/api")
      .then((res) => {
        if (res.data.length > 250) {
          setTextData(
            res.data
              ?.toLowerCase()
              .replace(/[^\w\s\']|_/g, "")
              .replace(/\s+/g, " ")
          );
          setUnchangedTextData(
            res.data
              ?.toLowerCase()
              .replace(/[^\w\s\']|_/g, "")
              .replace(/\s+/g, " ")
          );
        } else {
          setTextData(offlineArr[0]);
          setUnchangedTextData(offlineArr[0]);
        }
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

  // users collection
  const usersCollectionRef = collection(db, "users");

  //Get All Users
  const getAllUsers = async () => {
    const q = query(usersCollectionRef);
    onSnapshot(q, (snapshot) => {
      const usrs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usrs);
    });
  };

  //Get Current User By Auth.Id
  const getUser = async () => {
    try {
      let id: string = localStorage.getItem("typrrUserId")!;
      const userDoc = doc(db, "users", id);
      await getDoc(userDoc).then((doc: any) => {
        setUser(doc.data());
      });
    } catch (error) {
      console.log("Error getting User", error);
      setGetUserErr(true);
    }
  };

  // //change theme in color modal
  // const toggleTheme = () => {
  //   // theme
  //   // ?.backgroundColor === "#ECE6E4" ? setTheme({
  //   //   textColor: "#fff",
  //   // }) : setTheme({
  //   //   textColor: "#000",
  //   // });
  // };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        theme,
        setTheme,

        wordLength,
        setWordLength,
        textData,
        setTextData,
        unChangedTextData,

        //functions
        getWordsFromApi,
        getAllUsers,
        getUser,

        timerCount,
        setTimerCount,
        loading,
        setLoading,
        displayColorsModal,
        setDisplayColorsModal,
        displayFooter,
        setDisplayFooter,
        users,
        setUsers,
        getUserErr,

        displayInput,
        setDisplayInput,
      }}
    >
      <div className="App">
        <GlobalStyle theme={theme} />
        {displayColorsModal && <ColorsModal />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/leaderboards" element={<Leaderboards />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
