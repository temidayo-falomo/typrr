import React, { useContext } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { AppContext } from "../helper/Context";
import { StyledOfflineAlert } from "./OfflineAlert.styled";

function SignedOutAlert() {
  const { theme } = useContext(AppContext);
  return (
    <StyledOfflineAlert>
      <StyledOfflineAlert theme={theme}>
        <div className="row center gap-1">
          <span>
            You are not signed in.{" "}
            <Link to="/login" style={{ fontWeight: "200" }}>
              Sign In
            </Link>{" "}
            ?
          </span>
          {/* <MdOutlineCancel className="pointer" /> */}
        </div>
      </StyledOfflineAlert>
    </StyledOfflineAlert>
  );
}

export default SignedOutAlert;
