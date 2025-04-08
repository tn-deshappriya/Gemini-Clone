<div align="center">
# 🤖 Gemini AI Clone
</div>

<div align="center">
  <img src="https://img.shields.io/badge/React-19.0.0-blue?logo=react" alt="React Version" />
  <img src="https://img.shields.io/badge/Vite-6.2.0-646CFF?logo=vite" alt="Vite Version" />
  <img src="https://img.shields.io/badge/Google_Gemini-API-4285F4?logo=google" alt="Google Gemini API" />
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License" />
</div>


## ✨ Features

- 💬 **Chat with AI** - Have natural conversations with Google's Gemini AI
- 🌓 **Dark/Light Theme** - Toggle between dark and light modes for comfortable viewing
- 💾 **Persistent History** - Chat history is saved locally and can be revisited
- 📱 **Responsive Design** - Works seamlessly across desktop and mobile devices
- 🔍 **Suggested Prompts** - Quick-start your conversations with suggested prompts
- 🔄 **Real-time Streaming** - See responses as they're generated for a more interactive experience

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- Google Gemini API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/gemini-clone.git
   cd gemini-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API key:
   ```
   VITE_GEMINI_API_KEY=your_gemini_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🖥️ Usage

- **New Chat**: Click the "+" icon in the sidebar to start a new conversation
- **Theme Toggle**: Switch between dark and light modes using the theme toggle in the sidebar
- **Chat History**: Access your previous conversations from the sidebar
- **Suggested Prompts**: Click on the suggestion cards to quickly start conversations
- **Send Message**: Type your query and press Enter or click the send icon

## 📦 Project Structure

```
gemini-clone/
├── public/
├── src/
│   ├── assets/        # Images and icons
│   ├── components/    # React components
│   │   ├── Main/      # Main chat interface
│   │   └── Sidebar/   # Navigation sidebar
│   ├── context/       # React context providers
│   ├── config/        # API configuration
│   ├── App.jsx        # Root component
│   └── main.jsx       # Entry point
├── .env              # Environment variables
├── vite.config.js    # Vite configuration
└── package.json      # Project dependencies
```

## 🛠️ Technologies

- **React** - Frontend library for building the user interface
- **Vite** - Fast build tool and dev server
- **Google Gemini API** - AI model powering the chat functionality
- **React Icons** - Icon library for the UI
- **Local Storage API** - For persisting chat history
- **CSS3** - Custom styling with CSS variables for theming

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Google Gemini API](https://ai.google.dev/) for providing the AI capabilities
- [React Icons](https://react-icons.github.io/react-icons/) for the beautiful icon set
- [Vite](https://vitejs.dev/) for the excellent dev experience
