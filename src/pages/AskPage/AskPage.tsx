import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsk } from '../../api/ask';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { List } from '../../components/List/List';
import { SortButton } from '../../components/SortButton/SortButton';
import { useTypedSelector } from '../../hooks/useTypesSelector';
import { AskActionTypes } from '../../types/Ask';

export const AskPage:React.FC = () => {
  const dispatch = useDispatch();
  const [fetching, setFetching] = useState(true);
  const {
    ask,
    page,
    error,
    limit,
  } = useTypedSelector(state => state.askReducer);

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
      dispatch(fetchAsk(page));
      dispatch({ type: AskActionTypes.CHANGE_PAGE_ASK, payload: page + 1 });
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
          <List list={ask} />
        )}
        <SortButton />
      </main>
      <Footer />
    </>
  );
};
