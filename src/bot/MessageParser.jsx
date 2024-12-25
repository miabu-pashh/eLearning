import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.toLowerCase().includes('hi')) {
      actions.handleHello();
    } else if (message.toLowerCase().includes('sin 30')) {
      actions.handleSin30();
    } else {
      actions.handleDefault();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
