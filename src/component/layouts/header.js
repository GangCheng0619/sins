import React from "react";
import logo from "../../assests/imgs/logo.png";
export default function Header() {
  return (
    <>
      <div className="logo" style={{ padding: "20px" }}>
        <img src={logo} />
      </div>
    </>
  );
}
