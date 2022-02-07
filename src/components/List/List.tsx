import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FeedItem } from '../../types/FeedItem';

import classes from './List.module.scss';

type Props = {
  list: FeedItem[],
};

export const List:React.FC<Props> = ({ list }) => {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(useLocation().search);

  const setDate = (time: number) => {
    const date = new Date(time).toString().split(' ').splice(4, 1);

    return date.join(' ');
  };

  const sortList = (a: FeedItem, b:FeedItem) => {
    const value = searchParams.get('sortBy');

    switch (value) {
      case 'domain':
        if (a.domain && b.domain) {
          return a.domain.localeCompare(b.domain);
        }

        return !a.domain ? 1 : -1;

      case 'title':
        return a.title.localeCompare(b.title);

      case 'time':
        return a.time - b.time;

      default:
        return 0;
    }
  };

  return (
    <table className="table">
      <thead>
        <tr
          className={classes.loader}
          onClick={(e: any) => {
            searchParams.set('sortBy', e.target.textContent.toLowerCase());
            navigate({
              search: searchParams.toString(),
            });
          }}
        >
          <th className={classes.column1}>Time</th>
          <th className={classes.column2}>Title</th>
          <th className={classes.column3}>Domain</th>
        </tr>
      </thead>
      <tbody>
        {list.sort(sortList).map(item => (
          <tr key={uuidv4()}>
            <th className={classes.column1}>{setDate(item.time)}</th>
            <td className={classes.column2}>
              <a
                href={`https://news.ycombinator.com/item?id=${item.id}`}
                target="_blank"
                rel="noreferrer"
              >
                {item.title}
              </a>
            </td>
            <td className={classes.column3}>{item.domain || '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
