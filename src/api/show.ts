import axios from 'axios';
import { Dispatch } from 'react';
import { BASE_URL } from '.';
import { ShowAction, ShowActionTypes } from '../types/Show';

export const fetchShow = (page: number) => {
  return async (dispatch: Dispatch<ShowAction>) => {
    try {
      const response = await axios.get(`${BASE_URL}/show/${page}.json`);

      dispatch({ type: ShowActionTypes.FETCH_SHOW, payload: response.data });
      if (!response.data.length) {
        dispatch({ type: ShowActionTypes.SET_LIMIT_SHOW });
      }
    } catch {
      dispatch({ type: ShowActionTypes.FETCH_SHOW_ERROR });
    }
  };
};
