import React from "react";
import UserIcon from "./UserIcon";

const Header = ({ username }) => {
  return (
    <div className="header container">
      <h1>My Bank</h1>
      <div className="userprofile">
        <div className="username">{username}</div>
        <div className="usericon">
          <UserIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
