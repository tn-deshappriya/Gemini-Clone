import React, { useState } from "react";
import "../Sidebar/Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const [extended, setextended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          alt="menu-icon"
          onClick={() => (extended ? setextended(false) : setextended(true))}
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="plus_icon" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="resent">
            <p className="resent-title">Recent</p>
            <div className="resent-entry">
              <img src={assets.message_icon} alt="" />
              <p>What is React ...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item  resent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item  resent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item  resent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
