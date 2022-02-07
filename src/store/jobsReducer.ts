import { JobsAction, JobsActionTypes, JobsState } from '../types/Jobs';

const defaultState: JobsState = {
  jobs: [],
  page: 1,
  error: null,
  limit: false,
};

export const jobsReducer = (state = defaultState, action: JobsAction) => {
  switch (action.type) {
    case JobsActionTypes.FETCH_JOBS:
      return {
        ...state,
        loading: false,
        jobs: [...state.jobs, ...action.payload],
      };

    case JobsActionTypes.FETCH_JOBS_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Виникла помилка при завантаженні з сервера',
      };

    case JobsActionTypes.CHANGE_PAGE_JOBS:
      return {
        ...state,
        page: state.page + 1,
      };

    case JobsActionTypes.SET_LIMIT_JOBS:
      return {
        ...state,
        limit: true,
      };

    default:
      return state;
  }
};
