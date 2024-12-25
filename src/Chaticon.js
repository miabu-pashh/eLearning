// Chaticon.js

import React from 'react';
import { TbMessageChatbot } from "react-icons/tb";
import "./Chatbot.css"; // Import CSS file for custom styling

const Chaticon = ({ onClick, isOpen }) => {
  return (
    <div className={`chatbot-icon ${isOpen ? 'hidden' : ''}`} onClick={onClick}>
      <TbMessageChatbot size={40} color="none" className="icon" /> {/* Render the TbMessageChatbot icon */}
    </div>
  );
};

export default Chaticon;
