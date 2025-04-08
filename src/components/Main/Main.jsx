import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { ThemeContext } from "../../context/ThemeContext";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  
  const { darkMode } = useContext(ThemeContext);
  
  // Get React Icons component
  const SendIcon = assets.send_icon_react;

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      onSent();
    }
  };

  return (
    <div className={`main ${darkMode ? 'dark' : ''}`}>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card" onClick={() => {
                setInput("Suggest beautiful places to see on an upcoming road trip");
                onSent("Suggest beautiful places to see on an upcoming road trip");
              }}>
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="Compass" />
              </div>
              <div className="card" onClick={() => {
                setInput("Briefly summarize this concept: urban planning");
                onSent("Briefly summarize this concept: urban planning");
              }}>
                <p>Briefly summarize this concept: urban planning </p>
                <img src={assets.bulb_icon} alt="Bulb" />
              </div>
              <div className="card" onClick={() => {
                setInput("Brainstorm team bonding activities for our work retreat");
                onSent("Brainstorm team bonding activities for our work retreat");
              }}>
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="Message" />
              </div>
              <div className="card" onClick={() => {
                setInput("Improve the readbility of the following code");
                onSent("Improve the readbility of the following code");
              }}>
                <p>Improve the readbility of the following code</p>
                <img src={assets.code_icon} alt="Code" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="User" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="Gemini" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter prompt here"
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              value={input}
            />
            <div>
              <img src={assets.gallery_icon} alt="Gallery" />
              <img src={assets.mic_icon} alt="Mic" />
              {input && (
                <span className="send-icon-wrapper" onClick={() => onSent()}>
                  <SendIcon className="react-icon send" />
                </span>
              )}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
