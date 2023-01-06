import { signInWithPopup } from "firebase/auth";
import { collection, doc, onSnapshot, query, setDoc } from "firebase/firestore";
import React, { useContext, useEffect } from "react";
import { FaPhone } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { auth, db, provider } from "../../firebase/firebase-config";
import { AppContext } from "../../helper/Context";
import { StyledLogin } from "./Login.styled";

function Login() {
  const { users, getAllUsers } = useContext(AppContext);
  let navigate = useNavigate();

  useEffect(() => {
    getAllUsers();
  }, []);

  const signInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        localStorage.setItem("typrrIsAuth", "true");

        if (users.filter((user: any) => user.id === res.user.uid)) {
          console.log("user already exists");
          navigate("/");
        } else {
          setDoc(doc(db, "users", res.user.uid), {
            id: res.user.uid,
            username: res.user.displayName,
            userId: res.user.uid,
            userAvatar: res.user.photoURL,
            settings: [
              {
                light: true,
              },
            ],
            highestSore: 0,
          });
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledLogin>
      <div className="box col">
        <div className="row btw center top">
          <h2>Login</h2>
          <Link to="/">Continue</Link>
        </div>

        <div className="col btm">
          <button
            className="row center gap-5 center-js"
            onClick={signInWithGoogle}
          >
            Sign in with Google <FcGoogle />
          </button>
          <button className="row center gap-5 center-js">
            Sign in with Phone <FaPhone />
          </button>
        </div>
      </div>
    </StyledLogin>
  );
}

export default Login;
