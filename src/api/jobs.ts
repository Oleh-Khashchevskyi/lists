import axios from 'axios';
import { Dispatch } from 'react';
import { BASE_URL } from '.';
import { JobsAction, JobsActionTypes } from '../types/Jobs';

export const fetchJobs = (page: number) => {
  return async (dispatch: Dispatch<JobsAction>) => {
    try {
      const response = await axios.get(`${BASE_URL}/jobs/${page}.json`);

      dispatch({ type: JobsActionTypes.FETCH_JOBS, payload: response.data });
      if (!response.data.length) {
        dispatch({ type: JobsActionTypes.SET_LIMIT_JOBS });
      }
    } catch {
      dispatch({ type: JobsActionTypes.FETCH_JOBS_ERROR });
    }
  };
};
