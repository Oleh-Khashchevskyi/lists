import axios from 'axios';
import { Dispatch } from 'react';
import { BASE_URL } from '.';
import { AskAction, AskActionTypes } from '../types/Ask';

export const fetchAsk = (page: number) => {
  return async (dispatch: Dispatch<AskAction>) => {
    try {
      const response = await axios.get(`${BASE_URL}/ask/${page}.json`);

      dispatch({ type: AskActionTypes.FETCH_ASK, payload: response.data });
      if (!response.data.length) {
        dispatch({ type: AskActionTypes.SET_LIMIT_ASK });
      }
    } catch {
      dispatch({ type: AskActionTypes.FETCH_ASK_ERROR });
    }
  };
};
