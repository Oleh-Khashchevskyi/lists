import classNames from 'classnames';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { toTop } from '../../utils/toTop';

import classes from './MobileNavigation.module.scss';

export const MobileNavigation:React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={classes.mobileNav}>
      <button
        type="button"
        className={classNames(classes.menuBtn, {
          [classes.active]: active,
        })}
        onClick={() => setActive(!active)}
      >
        <span
          className={classNames(classes.line, {
            [classes.activeLine]: active,
          })}
        />
        <span
          className={classNames(classes.line, {
            [classes.activeLine]: active,
          })}
        />
        <span
          className={classNames(classes.line, {
            [classes.activeLine]: active,
          })}
        />
      </button>
      <nav>
        <ul
          className={classNames(classes.menu, {
            [classes.activeMenu]: active,
          })}
        >
          <li>
            <NavLink
              to="/"
              onClick={() => {
                toTop();
                setActive(false);
              }}
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
              onClick={() => {
                toTop();
                setActive(false);
              }}
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
              onClick={() => {
                toTop();
                setActive(false);
              }}
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
    </div>
  );
};
