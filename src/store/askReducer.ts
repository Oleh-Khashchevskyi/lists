import { AskAction, AskActionTypes, AskState } from '../types/Ask';

const defaultState: AskState = {
  ask: [],
  page: 1,
  error: null,
  limit: false,
};

export const askReducer = (state = defaultState, action: AskAction) => {
  switch (action.type) {
    case AskActionTypes.FETCH_ASK:
      return {
        ...state,
        loading: false,
        ask: [...state.ask, ...action.payload],
      };

    case AskActionTypes.FETCH_ASK_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Виникла помилка при завантаженні з сервера',
      };

    case AskActionTypes.CHANGE_PAGE_ASK:
      return {
        ...state,
        page: state.page + 1,
      };

    case AskActionTypes.SET_LIMIT_ASK:
      return {
        ...state,
        limit: true,
      };

    default:
      return state;
  }
};
