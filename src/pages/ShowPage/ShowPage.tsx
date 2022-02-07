import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchShow } from '../../api/show';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { List } from '../../components/List/List';
import { SortButton } from '../../components/SortButton/SortButton';
import { useTypedSelector } from '../../hooks/useTypesSelector';
import { ShowActionTypes } from '../../types/Show';

export const ShowPage:React.FC = () => {
  const dispatch = useDispatch();
  const [fetching, setFetching] = useState(true);
  const {
    show,
    page,
    error,
    limit,
  } = useTypedSelector(state => state.showReducer);

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
      dispatch(fetchShow(page));
      dispatch({ type: ShowActionTypes.CHANGE_PAGE_SHOW, payload: page + 1 });
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
          <List list={show} />
        )}
        <SortButton />
      </main>
      <Footer />
    </>
  );
};
