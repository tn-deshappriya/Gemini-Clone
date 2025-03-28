import React from "react";
import "../Sidebar/Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img className="menu" src={assets.menu_icon} alt="menu-icon" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="plus_icon" />
          <p>New Chat</p>
        </div>
        <div className="resent">
          <p className="resent-title">Resent</p>
          <div className="resent-entry">
            <img src={assets.message_icon} alt="" />
            <p>What is React ...</p>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
};
export default Sidebar;
