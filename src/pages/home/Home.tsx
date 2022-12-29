import React, { useContext, useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import TextField from "../../components/text-field/TextField";
import { AppContext } from "../../helper/Context";
import { StyledHome } from "./Home.styled";

function Home() {
  const { setTextData, getWordsFromApi } = useContext(AppContext);

  //display nav & footer
  const [displayFooterAndNav, setDisplayFooterAndNav] = useState<boolean>(true);

  useEffect(() => {
    getWordsFromApi();
  }, []);

  return (
    <StyledHome>
      {displayFooterAndNav && <Navbar />}
      <TextField
        displayFooterAndNav={displayFooterAndNav}
        setDisplayFooterAndNav={setDisplayFooterAndNav}
      />
      {displayFooterAndNav && <Footer />}
    </StyledHome>
  );
}

export default Home;
