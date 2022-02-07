import React from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';

export const PageNotFound:React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <h2 className="title">PageNotFound</h2>
      </main>
      <Footer />
    </>
  );
};
