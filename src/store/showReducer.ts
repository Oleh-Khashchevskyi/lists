import { ShowAction, ShowActionTypes, ShowState } from '../types/Show';

const defaultState: ShowState = {
  show: [],
  page: 1,
  error: null,
  limit: false,
};

export const showReducer = (state = defaultState, action: ShowAction) => {
  switch (action.type) {
    case ShowActionTypes.FETCH_SHOW:
      return {
        ...state,
        loading: false,
        show: [...state.show, ...action.payload],
      };

    case ShowActionTypes.FETCH_SHOW_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Виникла помилка при завантаженні з сервера',
      };

    case ShowActionTypes.CHANGE_PAGE_SHOW:
      return {
        ...state,
        page: state.page + 1,
      };

    case ShowActionTypes.SET_LIMIT_SHOW:
      return {
        ...state,
        limit: true,
      };

    default:
      return state;
  }
};
