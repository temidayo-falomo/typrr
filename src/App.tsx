import axios from "axios";
import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ColorsModal from "./components/colors-modal/ColorsModal";
import { db } from "./firebase/firebase-config";
import GlobalStyle from "./Globalstyles";
import { AppContext } from "./helper/Context";
import { offlineArr } from "./offline/OfflineArr";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  const [user, setUser] = useState<object>({});
  const [wordLength, setWordLength] = useState<number>(15);
  const [timerCount, setTimerCount] = useState<any>(15);
  const [textData, setTextData] = useState<string>("");
  const [unChangedTextData, setUnchangedTextData] = useState<string>("");
  const [loading, setLoading] = useState(true);

  //
  const [users, setUsers] = useState<any>();

  //
  const [displayColorsModal, setDisplayColorsModal] = useState<boolean>(false);

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

  // users collection
  const usersCollectionRef = collection(db, "users");

  //Get All User Circles

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

  const getUser = () => {
    console.log("got user");
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
        getAllUsers,

        timerCount,
        setTimerCount,
        loading,
        setLoading,
        displayColorsModal,
        setDisplayColorsModal,
        users,
        setUsers,
      }}
    >
      <div className="App">
        <GlobalStyle />
        {displayColorsModal && <ColorsModal />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
