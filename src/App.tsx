import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bulma';
import '@fortawesome/fontawesome-free/css/all.css';
import { HomePage } from './pages/HomePage/HomePage';
import { NewsPage } from './pages/NewsPage/NewsPage';
import { NewestPage } from './pages/NewestPage/NewestPage';
import { AskPage } from './pages/AskPage/AskPage';
import { ShowPage } from './pages/ShowPage/ShowPage';
import { JobsPage } from './pages/JobsPage/JobsPage';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';

export const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/newest" element={<NewestPage />} />
        <Route path="/ask" element={<AskPage />} />
        <Route path="/show" element={<ShowPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
