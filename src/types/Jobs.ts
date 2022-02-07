import { FeedItem } from './FeedItem';

export type JobsState = {
  jobs: FeedItem[],
  page: number,
  error: string | null,
  limit: boolean,
};

// eslint-disable-next-line
export enum JobsActionTypes {
  FETCH_JOBS = 'FETCH_JOBS',
  FETCH_JOBS_ERROR = 'FETCH_JOBS_ERROR',
  CHANGE_PAGE_JOBS = 'CHANGE_PAGE_JOBS',
  SET_LIMIT_JOBS = 'SET_LIMIT_JOBS',
}

interface fetchJobsAction {
  type: JobsActionTypes.FETCH_JOBS,
  payload: FeedItem[],
}

interface fetchJobsErrorAction {
  type: JobsActionTypes.FETCH_JOBS_ERROR,
}

interface changeJobsPageAction {
  type: JobsActionTypes.CHANGE_PAGE_JOBS,
  payload: number,
}

interface setLimitJobsAction {
  type: JobsActionTypes.SET_LIMIT_JOBS,
}

export type JobsAction = fetchJobsAction
| fetchJobsErrorAction
| changeJobsPageAction
| setLimitJobsAction;
