import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchJobs } from '../../api/jobs';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { List } from '../../components/List/List';
import { SortButton } from '../../components/SortButton/SortButton';
import { useTypedSelector } from '../../hooks/useTypesSelector';
import { JobsActionTypes } from '../../types/Jobs';

export const JobsPage:React.FC = () => {
  const dispatch = useDispatch();
  const [fetching, setFetching] = useState(true);
  const {
    jobs,
    page,
    error,
    limit,
  } = useTypedSelector(state => state.jobsReducer);

  const scrollHandler = (e: any) => {
    const docElem = e.target.documentElement;

    if (docElem.scrollHeight - (docElem.scrollTop + window.innerHeight) < 100) {
      setFetching(true);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (limit) {
      return;
    }

    if (fetching) {
      dispatch(fetchJobs(page));
      dispatch({ type: JobsActionTypes.CHANGE_PAGE_JOBS, payload: page + 1 });
    }

    setFetching(false);
  }, [fetching]);

  return (
    <>
      <Header />
      <main>
        {error ? (
          <h2 className="title">{error}</h2>
        ) : (
          <List list={jobs} />
        )}
        <SortButton />
      </main>
      <Footer />
    </>
  );
};
