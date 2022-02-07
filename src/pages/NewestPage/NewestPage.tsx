import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNewest } from '../../api/newest';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { List } from '../../components/List/List';
import { SortButton } from '../../components/SortButton/SortButton';
import { useTypedSelector } from '../../hooks/useTypesSelector';
import { NewestActionTypes } from '../../types/Newest';

export const NewestPage:React.FC = () => {
  const dispatch = useDispatch();
  const [fetching, setFetching] = useState(true);
  const {
    newest,
    page,
    error,
    limit,
  } = useTypedSelector(state => state.newestReducer);

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
      dispatch(fetchNewest(page));
      dispatch({ type: NewestActionTypes.CHANGE_PAGE_NEWEST, payload: page + 1 });
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
          <List list={newest} />
        )}
        <SortButton />
      </main>
      <Footer />
    </>
  );
};
