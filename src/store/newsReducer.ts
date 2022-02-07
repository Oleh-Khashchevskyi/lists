import { NewsAction, NewsActionTypes, NewsState } from '../types/News';

const defaultState: NewsState = {
  news: [],
  page: 1,
  error: null,
  limit: false,
};

export const newsReducer = (state = defaultState, action: NewsAction) => {
  switch (action.type) {
    case NewsActionTypes.FETCH_NEWS:
      return {
        ...state,
        loading: false,
        news: [...state.news, ...action.payload],
      };

    case NewsActionTypes.FETCH_NEWS_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Виникла помилка при завантаженні з сервера',
      };

    case NewsActionTypes.CHANGE_PAGE_NEWS:
      return {
        ...state,
        page: state.page + 1,
      };

    case NewsActionTypes.SET_LIMIT_NEWS:
      return {
        ...state,
        limit: true,
      };

    default:
      return state;
  }
};
