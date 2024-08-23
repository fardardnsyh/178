import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from './avatar/BotAvatar';
import Header from './header/Header';
import { setupWidgets } from '../setup/Setup';
import { widgetsData } from '../../assets/data';
import React from 'react';

const botName = 'METU';

const config = {
  initialMessages: [
    createChatBotMessage(
      `Привет! Я ${botName} чат-бот. Как я могу помочь вам?`,
      {
        widget: 'options',
      },
    ),
  ],
  botName,
  customStyles: {
    chatHeader: {
      backgroundColor: '#304F98',
    },
    botMessageBox: {
      backgroundColor: '#f1f1f1',
    },
    chatButton: {
      backgroundColor: '#304F98',
    },
  },
  widgets: setupWidgets(widgetsData),
  customComponents: {
    // Replaces the default header
    header: () => <Header />,
    // Replaces the default bot avatar
    botAvatar: () => <BotAvatar />,
    // Replaces the default bot chat message container
    //botChatMessage: (props) => <MyCustomChatMessage {...props} />,
    // Replaces the default user icon
    //userAvatar: (props) => <MyCustomAvatar {...props} />,
    // Replaces the default user chat message
    //userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
  },
};

export default config;
