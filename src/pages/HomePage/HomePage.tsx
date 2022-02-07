import React from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';

import classes from './HomePage.module.scss';

export const HomePage:React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <div className={classes.homeBg} />
        <h1 className={classes.title}>Welcome To Home Page :)</h1>
      </main>
      <Footer />
    </>
  );
};
