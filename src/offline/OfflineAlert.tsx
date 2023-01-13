import React, { useContext } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AppContext } from "../helper/Context";
import { StyledOfflineAlert } from "./OfflineAlert.styled";

function OfflineAlert() {
  const { theme } = useContext(AppContext);
  return (
    <StyledOfflineAlert theme={theme}>
      <div className="row center gap-1">
        <span>No Internet Connection</span>
        <MdOutlineCancel className="pointer" />
      </div>
    </StyledOfflineAlert>
  );
}

export default OfflineAlert;
