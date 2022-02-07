import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Logo.module.scss';

export const Logo:React.FC = () => {
  return (
    <NavLink to="/">
      <img
        src="https://cdn-images-1.medium.com/max/1200/1*ydv-0BSy6iez0XYJqGYCAA.png"
        alt="logo"
        className={classes.logo}
      />
    </NavLink>
  );
};
