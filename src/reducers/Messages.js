import {
  ADD_MESSAGE,
  FETCH_MESSAGES_FAILURE,
  FETCH_MESSAGES_INIT,
  FETCH_MESSAGES_SUCCESS,
} from '../actions/ActionsTypes';

const initialState = {
  status: 'idle',
  error: null,
  messages: [],
};

const messages = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MESSAGES_INIT:
      return {
        ...state,
        status: 'loading',
      };
    case FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        status: 'succeeded',
        messages: payload,
      };
    case FETCH_MESSAGES_FAILURE:
      return {
        ...state,
        status: 'failed',
        error: payload.message,
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, payload],
      };
    default:
      return state;
  }
};

export default messages;
