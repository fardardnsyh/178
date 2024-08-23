import { data, widgetsData } from '../assets/data';
import {
  ADD_MESSAGE,
  ADD_WIDGET,
  DELETE_MESSAGE,
  DELETE_WIDGET,
  FETCH_MESSAGES_SUCCESS,
  FETCH_WIDGETS_SUCCESS,
  UPDATE_MESSAGE,
  UPDATE_WIDGET,
} from './ActionsTypes';

export const fetchMessagesData = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_MESSAGES_SUCCESS,
      payload: data,
    });
  };
};

export const fetchWidgetsData = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_WIDGETS_SUCCESS,
      payload: widgetsData,
    });
  };
};

export const addWidget = (widget) => {
  return {
    type: ADD_WIDGET,
    payload: widget,
  };
};

export const updateWidget = (id, widget) => {
  return {
    type: UPDATE_WIDGET,
    payload: { id, widget },
  };
};

export const deleteWidget = (id) => {
  return {
    type: DELETE_WIDGET,
    payload: id,
  };
};

export const addMessage = (message) => {
  return {
    type: ADD_MESSAGE,
    payload: message,
  };
};

export const updateMessage = (id, message) => {
  return {
    type: UPDATE_MESSAGE,
    payload: { id, message },
  };
};

export const deleteMessage = (id) => {
  return {
    type: DELETE_MESSAGE,
    payload: id,
  };
};
