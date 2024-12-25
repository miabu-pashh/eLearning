// Chatbot.js

import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './bot/config.js';
import MessageParser from './bot/MessageParser.jsx';
import ActionProvider from './bot/ActionProvider.jsx';
import Chaticon from './Chaticon'; // Import the Chaticon component
import { IoClose } from "react-icons/io5"; // Import the IoClose icon from react-icons/io5

import './Chatbot.css'; // Import CSS file for custom styling

const ChatbotComponent = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track the visibility of the chatbot window

  const toggleChatbot = () => {
    setIsOpen(!isOpen); // Toggle the value of isOpen
  };

  const closeChatbot = () => {
    setIsOpen(false); // Close the chatbot window
  };

  return (
    <div className="chatbot-container">
      {!isOpen && <Chaticon onClick={toggleChatbot} />} {/* Render the ChatbotIcon only if isOpen is false */}
      {isOpen && (
        <div className="chatbot-float">
          <button className="close-button" onClick={closeChatbot}>
            <IoClose size={24} /> {/* Render the IoClose icon */}
          </button>
          <div className="chatbot-content">
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        </div>
      )}
    </div>
    
  );
};

export default ChatbotComponent;
