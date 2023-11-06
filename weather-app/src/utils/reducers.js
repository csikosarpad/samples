import { SET_CURRENT_CITY, SET_PAGE } from './actions';

export const actionReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PAGE: {
      const { text } = payload;
      const actPage = { text };
      return state.concat(actPage);
    }
    case SET_CURRENT_CITY: {
      const { text } = payload;
      const currentCity = { text };
      return state.concat(currentCity);
    }
    default:
      return state;
  }
};
