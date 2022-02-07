import { FeedItem } from './FeedItem';

export type NewsState = {
  news: FeedItem[],
  page: number,
  error: string | null,
  limit: boolean,
};

// eslint-disable-next-line
export enum NewsActionTypes {
  FETCH_NEWS = 'FETCH_NEWS',
  FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR',
  CHANGE_PAGE_NEWS = 'CHANGE_PAGE_NEWS',
  SET_LIMIT_NEWS = 'SET_LIMIT_NEWS',
}

interface fetchNewsAction {
  type: NewsActionTypes.FETCH_NEWS,
  payload: FeedItem[],
}

interface fetchNewsErrorAction {
  type: NewsActionTypes.FETCH_NEWS_ERROR,
}

interface changeNewsPageAction {
  type: NewsActionTypes.CHANGE_PAGE_NEWS,
  payload: number,
}

interface setLimitNewsAction {
  type: NewsActionTypes.SET_LIMIT_NEWS,
}

export type NewsAction = fetchNewsAction
| fetchNewsErrorAction
| changeNewsPageAction
| setLimitNewsAction;
