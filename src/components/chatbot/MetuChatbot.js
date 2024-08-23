import Chatbot from 'react-chatbot-kit';
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import React from 'react';

export default function MetuChatBot() {
  const saveMessages = (messages) => {
    localStorage.setItem('chat_messages', JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem('chat_messages'));
    return messages;
  };

  return (
    <Chatbot
      config={config}
      headerText="METU Chatbot"
      placeholderText="Введите свое сообщение"
      messageParser={MessageParser}
      actionProvider={ActionProvider}
      messageHistory={loadMessages()}
      saveMessages={saveMessages}
      runInitialMessagesWithHistory
    />
  );
}
