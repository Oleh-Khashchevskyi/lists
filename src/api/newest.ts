import axios from 'axios';
import { Dispatch } from 'react';
import { BASE_URL } from '.';
import { NewestAction, NewestActionTypes } from '../types/Newest';

export const fetchNewest = (page: number) => {
  return async (dispatch: Dispatch<NewestAction>) => {
    try {
      const response = await axios.get(`${BASE_URL}/newest/${page}.json`);

      dispatch({ type: NewestActionTypes.FETCH_NEWEST, payload: response.data });
      if (!response.data.length) {
        dispatch({ type: NewestActionTypes.SET_LIMIT_NEWEST });
      }
    } catch {
      dispatch({ type: NewestActionTypes.FETCH_NEWEST_ERROR });
    }
  };
};
