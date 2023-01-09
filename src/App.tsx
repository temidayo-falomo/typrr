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
import Settings from "./pages/settings/Settings";

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

  //
  const [getUserErr, setGetUserErr] = useState<boolean>(false);

  //
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

  useEffect(() => {
    getUser();
  }, []);

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
        users,
        setUsers,
        getUserErr
      }}
    >
      <div className="App">
        <GlobalStyle />
        {displayColorsModal && <ColorsModal />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/leaderboards" element={<Leaderboards />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
