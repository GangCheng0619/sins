import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Grid } from "@material-ui/core";
import ham from "../../assests/imgs/hamburger.svg";
import mlogo from "../../assests/imgs/logo.png";
import Leftcom from "../../pages/leftcom";
function MainHeader() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen(true);
  };
  return (
    <div className="fixed">
      <div className="header">
        <div className="hamdown" onClick={toggleDrawer}>
          <img src={ham} />
        </div>
        <Drawer />
        <div className="fake"></div>
        <img src={mlogo} width="120px" height="60px" className="mlogo" />
        <div className="cntbtn">
          <div className="sin">SIN</div>
          <div>Connect Wallet</div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
