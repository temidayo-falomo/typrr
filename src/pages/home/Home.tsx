import React, { useContext, useEffect, useState, useRef } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import TextField from "../../components/text-field/TextField";
import { AppContext } from "../../helper/Context";
import { StyledHome } from "./Home.styled";

function Home(props: any) {
  const { setTextData, getWordsFromApi } = useContext(AppContext);

  //display nav & footer
  const [displayFooterAndNav, setDisplayFooterAndNav] = useState<boolean>(true);

  useEffect(() => {
    getWordsFromApi();
  }, []);

  return (
    <React.Fragment>
      <div>
        <StyledHome>
          {displayFooterAndNav && <Navbar />}
          <TextField
            displayFooterAndNav={displayFooterAndNav}
            setDisplayFooterAndNav={setDisplayFooterAndNav}
          />
          {displayFooterAndNav && <Footer />}
        </StyledHome>
      </div>
    </React.Fragment>
  );
}

export default Home;
