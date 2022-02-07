import { FeedItem } from './FeedItem';

export type NewestState = {
  newest: FeedItem[],
  page: number,
  error: string | null,
  limit: boolean,
};

// eslint-disable-next-line
export enum NewestActionTypes {
  FETCH_NEWEST = 'FETCH_NEWEST',
  FETCH_NEWEST_ERROR = 'FETCH_NEWEST_ERROR',
  CHANGE_PAGE_NEWEST = 'CHANGE_PAGE_NEWEST',
  SET_LIMIT_NEWEST = 'SET_LIMIT_NEWEST',
}

interface fetchNewestAction {
  type: NewestActionTypes.FETCH_NEWEST,
  payload: FeedItem[],
}

interface fetchNewestErrorAction {
  type: NewestActionTypes.FETCH_NEWEST_ERROR,
}

interface changeNewestPageAction {
  type: NewestActionTypes.CHANGE_PAGE_NEWEST,
  payload: number,
}

interface setLimitNewestAction {
  type: NewestActionTypes.SET_LIMIT_NEWEST,
}

export type NewestAction = fetchNewestAction
| fetchNewestErrorAction
| changeNewestPageAction
| setLimitNewestAction;
