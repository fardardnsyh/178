import {
  ADD_WIDGET,
  DELETE_WIDGET,
  FETCH_WIDGETS_FAILURE,
  FETCH_WIDGETS_INIT,
  FETCH_WIDGETS_SUCCESS,
  UPDATE_WIDGET,
} from '../actions/ActionsTypes';

const initialState = {
  status: 'idle',
  error: null,
  widgets: null,
};

const widgets = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_WIDGETS_INIT:
      return {
        ...state,
        status: 'loading',
      };
    case FETCH_WIDGETS_SUCCESS:
      return {
        ...state,
        status: 'succeeded',
        widgets: payload,
      };
    case FETCH_WIDGETS_FAILURE:
      return {
        ...state,
        status: 'failed',
        error: payload.message,
      };
    case ADD_WIDGET:
      return {
        ...state,
        widgets: {
          ...state.widgets,
          [payload.id]: payload,
        },
      };
    case UPDATE_WIDGET:
      return {
        ...state,
        widgets: {
          ...state.widgets,
          [payload.id]: {
            ...payload.widget,
          },
        },
      };
    case DELETE_WIDGET:
      if (state.widgets && state.widgets[payload.id]) {
        let newWidgets = {};
        const widgets = state.widgets;
        for (let key in widgets) {
          if (key !== payload.id) {
            const widget = widgets[key];
            newWidgets = { ...newWidgets, widget };
          }
        }
        return {
          ...state,
          widgets: newWidgets,
        };
      } else {
        return {
          ...state,
          widgets: state.widgets,
        };
      }

    default:
      return state;
  }
};

export default widgets;
