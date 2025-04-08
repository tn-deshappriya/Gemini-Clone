import React, { useContext } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { ThemeContext } from "../../context/ThemeContext";

const Sidebar = () => {
  const [extended, setExtended] = React.useState(false);
  const { 
    onSent, 
    prevPrompts, 
    setRecentPrompt, 
    newChat, 
    chatHistory, 
    loadChat, 
    deleteChat,
    currentChatId 
  } = useContext(Context);
  
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  const handleChatClick = (chatId) => {
    loadChat(chatId);
  };

  const handleDeleteChat = (e, chatId) => {
    e.stopPropagation();
    deleteChat(chatId);
  };

  // Create DarkMode and LightMode components from React Icons
  const DarkModeIcon = assets.dark_icon;
  const LightModeIcon = assets.light_icon;
  const DeleteIcon = assets.delete_icon;

  return (
    <div className={`sidebar ${darkMode ? 'dark' : ''}`}>
      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          alt="menu-icon"
          onClick={() => setExtended(!extended)}
        />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="plus_icon" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended && (
          <>
            <div className="recent">
              <p className="recent-title">Recent Chats</p>
              {chatHistory.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => handleChatClick(chat.id)}
                  className={`recent-entry ${currentChatId === chat.id ? 'active' : ''}`}
                >
                  <img src={assets.message_icon} alt="Chat" />
                  <p>{chat.prompt.slice(0, 18)} {chat.prompt.length > 18 ? '...' : ''}</p>
                  <span 
                    className="delete-chat"
                    onClick={(e) => handleDeleteChat(e, chat.id)}
                  >
                    <DeleteIcon />
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry" onClick={toggleTheme}>
          {darkMode ? <LightModeIcon className="react-icon" /> : <DarkModeIcon className="react-icon" />}
          {extended ? <p>{darkMode ? "Light Mode" : "Dark Mode"}</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="Help" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="Activity" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="Settings" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
