import { FeedItem } from './FeedItem';

export type ShowState = {
  show: FeedItem[],
  page: number,
  error: string | null,
  limit: boolean,
};

// eslint-disable-next-line
export enum ShowActionTypes {
  FETCH_SHOW = 'FETCH_SHOW',
  FETCH_SHOW_ERROR = 'FETCH_SHOW_ERROR',
  CHANGE_PAGE_SHOW = 'CHANGE_PAGE_SHOW',
  SET_LIMIT_SHOW = 'SET_LIMIT_SHOW',
}

interface fetchShowAction {
  type: ShowActionTypes.FETCH_SHOW,
  payload: FeedItem[],
}

interface fetchShowErrorAction {
  type: ShowActionTypes.FETCH_SHOW_ERROR,
}

interface changeShowPageAction {
  type: ShowActionTypes.CHANGE_PAGE_SHOW,
  payload: number,
}

interface setLimitShowAction {
  type: ShowActionTypes.SET_LIMIT_SHOW,
}

export type ShowAction = fetchShowAction
| fetchShowErrorAction
| changeShowPageAction
| setLimitShowAction;
