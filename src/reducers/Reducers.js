import { combineReducers } from 'redux';
import messages from './Messages';
import widgets from './Widgets';

export const createRootReducer = combineReducers({
  messages,
  widgets,
});
