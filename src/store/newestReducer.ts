import { NewestAction, NewestActionTypes, NewestState } from '../types/Newest';

const defaultState: NewestState = {
  newest: [],
  page: 1,
  error: null,
  limit: false,
};

export const newestReducer = (state = defaultState, action: NewestAction) => {
  switch (action.type) {
    case NewestActionTypes.FETCH_NEWEST:
      return {
        ...state,
        loading: false,
        newest: [...state.newest, ...action.payload],
      };

    case NewestActionTypes.FETCH_NEWEST_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Виникла помилка при завантаженні з сервера',
      };

    case NewestActionTypes.CHANGE_PAGE_NEWEST:
      return {
        ...state,
        page: state.page + 1,
      };

    case NewestActionTypes.SET_LIMIT_NEWEST:
      return {
        ...state,
        limit: true,
      };

    default:
      return state;
  }
};
