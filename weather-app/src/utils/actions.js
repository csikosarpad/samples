export const SET_CURRENT_CITY = 'SET_CURRENT_CITY';
export const SET_PAGE = 'SET_PAGE';

export const setCurrentCity = (text) => ({
  type: SET_CURRENT_CITY,
  payload: { text },
});

export const setPage = (text) => ({
  type: SET_PAGE,
  payload: { text },
});
