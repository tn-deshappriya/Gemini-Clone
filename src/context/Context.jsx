import { createContext, useState, useEffect } from "react";
import runChat from "../config/config";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState(() => {
    const savedPrompts = localStorage.getItem("chatPrompts");
    return savedPrompts ? JSON.parse(savedPrompts) : [];
  });
  const [chatHistory, setChatHistory] = useState(() => {
    const savedHistory = localStorage.getItem("chatHistory");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [currentChatId, setCurrentChatId] = useState(null);

  // Save history to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("chatPrompts", JSON.stringify(prevPrompts));
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
  }, [prevPrompts, chatHistory]);

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
    setResultData("");
    setRecentPrompt("");
    setCurrentChatId(null);
  };

  const onSent = async (prompt) => {
    try {
      setResultData("");
      setLoading(true);
      setShowResult(true);
      
      const currentPrompt = prompt !== undefined ? prompt : input;
      const chatId = currentChatId || Date.now().toString();
      
      if (!currentChatId) {
        setCurrentChatId(chatId);
      }

      // Update prompts list
      if (!prevPrompts.includes(currentPrompt)) {
        setPrevPrompts((prev) => [...prev, currentPrompt]);
      }
      
      setRecentPrompt(currentPrompt);
      const response = await runChat(currentPrompt);
      
      // Process and format the response
      let responseArray = response.split("**");
      let newResponse = "";
      for (let i = 0; i < responseArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newResponse += responseArray[i];
        } else {
          newResponse += "<b>" + responseArray[i] + "</b>";
        }
      }
      
      let formattedResponse = newResponse.split("*").join("</br>");
      let responseWords = formattedResponse.split(" ");
      
      for (let i = 0; i < responseWords.length; i++) {
        const nextWord = responseWords[i];
        delayPara(i, nextWord + " ");
      }

      // Save to chat history
      const newHistoryItem = {
        id: chatId,
        prompt: currentPrompt,
        response: formattedResponse,
        timestamp: new Date().toISOString()
      };

      setChatHistory(prev => {
        const existingChatIndex = prev.findIndex(chat => chat.id === chatId);
        if (existingChatIndex >= 0) {
          const updatedChats = [...prev];
          updatedChats[existingChatIndex] = newHistoryItem;
          return updatedChats;
        }
        return [...prev, newHistoryItem];
      });
      
      setLoading(false);
      setInput("");
    } catch (error) {
      console.error("Error in chat:", error);
      setResultData("Sorry, there was an error processing your request.");
      setLoading(false);
    }
  };

  const loadChat = (chatId) => {
    const chat = chatHistory.find(item => item.id === chatId);
    if (chat) {
      setCurrentChatId(chatId);
      setRecentPrompt(chat.prompt);
      setResultData(chat.response);
      setShowResult(true);
    }
  };

  const deleteChat = (chatId) => {
    setChatHistory(prev => prev.filter(chat => chat.id !== chatId));
    if (currentChatId === chatId) {
      newChat();
    }
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
    chatHistory,
    loadChat,
    deleteChat,
    currentChatId
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
