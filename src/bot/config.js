// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Chatbot'; // Change the bot name to reflect its purpose or personality

const config = {
  initialMessages: [createChatBotMessage(`👋 Hey! I'm ${botName} your virtual study companion. How can I assist you today?`)], // Customize the initial greeting message
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E', // Change the background color of the bot's message box
    },
    chatButton: {
      backgroundColor: '#5ccc9d', // Change the background color of chat buttons
    },
  },
};

export default config;
