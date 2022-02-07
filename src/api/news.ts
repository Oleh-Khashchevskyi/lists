import axios from 'axios';
import { Dispatch } from 'react';
import { BASE_URL } from '.';
import { NewsAction, NewsActionTypes } from '../types/News';

export const fetchNews = (page: number) => {
  return async (dispatch: Dispatch<NewsAction>) => {
    try {
      const response = await axios.get(`${BASE_URL}/news/${page}.json`);

      dispatch({ type: NewsActionTypes.FETCH_NEWS, payload: response.data });
      if (!response.data.length) {
        dispatch({ type: NewsActionTypes.SET_LIMIT_NEWS });
      }
    } catch {
      dispatch({ type: NewsActionTypes.FETCH_NEWS_ERROR });
    }
  };
};
