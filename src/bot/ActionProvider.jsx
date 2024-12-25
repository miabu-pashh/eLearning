import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hi, How can I help you?');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleSin30 = () => {
    const botMessage = createChatBotMessage('The value of sin 30 is 0.5.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDefault = () => {
    const botMessage = createChatBotMessage("I'm sorry, I didn't understand that.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleSin30,
            handleDefault,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
