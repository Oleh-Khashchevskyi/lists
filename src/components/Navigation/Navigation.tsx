import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { toTop } from '../../utils/toTop';

import classes from './Navigation.module.scss';

export const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className={classes.list}>
        <li>
          <NavLink
            to="/"
            onClick={toTop}
            className={({ isActive }) => classNames(classes.link, {
              [classes.activeLink]: isActive,
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            onClick={toTop}
            className={({ isActive }) => classNames(classes.link, {
              [classes.activeLink]: isActive,
            })}
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/newest"
            onClick={toTop}
            className={({ isActive }) => classNames(classes.link, {
              [classes.activeLink]: isActive,
            })}
          >
            Newest
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ask"
            onClick={toTop}
            className={({ isActive }) => classNames(classes.link, {
              [classes.activeLink]: isActive,
            })}
          >
            Ask
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/show"
            onClick={toTop}
            className={({ isActive }) => classNames(classes.link, {
              [classes.activeLink]: isActive,
            })}
          >
            Show
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jobs"
            onClick={toTop}
            className={({ isActive }) => classNames(classes.link, {
              [classes.activeLink]: isActive,
            })}
          >
            Jobs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
