import React from 'react';
import { setupMessages } from '../setup/Setup';
import { data } from '../../assets/data';

const MessageParser = ({ children, actions }) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: setupMessages(data, actions),
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
