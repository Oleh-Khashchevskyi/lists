import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import classes from './SortButton.module.scss';

export const SortButton: React.FC = () => {
  const searchParams = new URLSearchParams(useLocation().search);
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className={classes.button}
      onClick={() => {
        searchParams.set('sortBy', 'time');
        navigate({
          search: searchParams.toString(),
        });
      }}
    >
      Sort
    </button>
  );
};
