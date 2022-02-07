import { FeedItem } from './FeedItem';

export type AskState = {
  ask: FeedItem[],
  page: number,
  error: string | null,
  limit: boolean,
};

// eslint-disable-next-line
export enum AskActionTypes {
  FETCH_ASK = 'FETCH_ASK',
  FETCH_ASK_ERROR = 'FETCH_ASK_ERROR',
  CHANGE_PAGE_ASK = 'CHANGE_PAGE_ASK',
  SET_LIMIT_ASK = 'SET_LIMIT_ASK',
}

interface fetchAskAction {
  type: AskActionTypes.FETCH_ASK,
  payload: FeedItem[],
}

interface fetchAskErrorAction {
  type: AskActionTypes.FETCH_ASK_ERROR,
}

interface changeAskPageAction {
  type: AskActionTypes.CHANGE_PAGE_ASK,
  payload: number,
}

interface setLimitAskAction {
  type: AskActionTypes.SET_LIMIT_ASK,
}

export type AskAction = fetchAskAction
| fetchAskErrorAction
| changeAskPageAction
| setLimitAskAction;
