import React from 'react';
import SetupOptions from './SetupOptions';

export const setupMessages = (data, actions) => {
  const parse = (message) => {
    data.forEach((value) => {
      if (message.includes(value.user[0])) {
        actions[`handle${value.id}`]();
      }
    });
  };
  return parse;
};

export const setupActions = (data, createChatBotMessage, setState) => {
  let handleFunctions = {};

  data.forEach((value) => {
    handleFunctions = {
      [`handle${value.id}`]: () => {
        const botMessage = createChatBotMessage(value.bot);

        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      },
      ...handleFunctions,
    };
  });

  return handleFunctions;
};

export const setupWidgetActions = (data, createChatBotMessage, setState) => {
  const arrData = Object.values(data);
  let handleFunctions = {};

  arrData.forEach((value) => {
    handleFunctions = {
      [`handle${value.id}`]: () => {
        const botMessage = createChatBotMessage(value.response, {
          widget: value.id,
        });

        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      },
      ...handleFunctions,
    };
  });

  return handleFunctions;
};

export const setupWidgets = (data) => {
  const arData = Object.values(data);
  return arData.map((item) => {
    return {
      widgetName: item.id,
      widgetFunc: (props) => (
        <SetupOptions {...props} data={data} id={item.id} />
      ),
    };
  });
};
