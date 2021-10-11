import React from "react";

import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/avatar.png";

const Topbar = ({ handleMenu, isOpen }) => {
  return (
    <>
      <header className="topbar">
        <div className="topbar-logo">
          <img src={logo} alt="logo application" />
        </div>
        <div className="topbar-collapse">
          <div
            className={`topbar-collapse-btn ${
                !isOpen ? "active" : ""
            }`}
            onClick={handleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="topbar-profile">
          <img src={avatar} alt="user avatar" />
        </div>
      </header>
    </>
  );
};

export default Topbar;
