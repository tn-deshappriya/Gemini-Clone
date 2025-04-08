import { GoogleGenAI } from "@google/genai";

const getApiKey = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey || apiKey === 'your_api_key') {
    throw new Error("API key not found. Please set VITE_GEMINI_API_KEY in your .env file.");
  }
  return apiKey;
};

let aiInstance;
try {
  aiInstance = new GoogleGenAI({ apiKey: getApiKey() });
} catch (error) {
  console.error("Error initializing GoogleGenAI:", error.message);
}

async function runChat(prompt) {
  try {
    if (!aiInstance) {
      return "Error: API not properly configured. Please check your API key.";
    }
    
    const response = await aiInstance.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating content:", error);
    return `Error: ${error.message || "Unable to process your request"}`;
  }
}

export default runChat;
