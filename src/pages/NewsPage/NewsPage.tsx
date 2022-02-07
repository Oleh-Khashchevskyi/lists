import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNews } from '../../api/news';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { List } from '../../components/List/List';
import { SortButton } from '../../components/SortButton/SortButton';
import { useTypedSelector } from '../../hooks/useTypesSelector';
import { NewsActionTypes } from '../../types/News';

export const NewsPage:React.FC = () => {
  const dispatch = useDispatch();
  const [fetching, setFetching] = useState(true);
  const {
    news,
    page,
    error,
    limit,
  } = useTypedSelector(state => state.newsReducer);

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
      dispatch(fetchNews(page));
      dispatch({ type: NewsActionTypes.CHANGE_PAGE_NEWS, payload: page + 1 });
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
          <List list={news} />
        )}
        <SortButton />
      </main>
      <Footer />
    </>
  );
};
