import React from 'react';
import { data, widgetsData } from '../../assets/data';
import { setupActions, setupWidgetActions } from '../setup/Setup';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const actions = setupActions(data, createChatBotMessage, setState);
  const widgetActions = setupWidgetActions(
    widgetsData,
    createChatBotMessage,
    setState,
  );

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            ...widgetActions,
            ...actions,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
