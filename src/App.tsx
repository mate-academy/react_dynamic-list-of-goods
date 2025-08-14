import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [allGoods, setAllGoods] = useState<Good[]>([]);
  const [goodsToShow, setGoodsToShow] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGoods = async () => {
      try {
        const data = await goodsAPI.getAll();

        setAllGoods(data);
        setError(null);
      } catch (err) {
        setError('Failed to load goods. Please try again.');
      }
    };

    fetchGoods();
  }, []);

  const handleShowAll = () => {
    setGoodsToShow(allGoods);
    setError(null);
  };

  const handleShowFirst5 = () => {
    setGoodsToShow(goodsAPI.get5First(allGoods));
    setError(null);
  };

  const handleShowRed = () => {
    setGoodsToShow(goodsAPI.getRedGoods(allGoods));
    setError(null);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {error ? (
        <div className="notification is-danger">{error}</div>
      ) : (
        <>
          <button onClick={handleShowAll} type="button" data-cy="all-button">
            Load all goods
          </button>

          <button
            onClick={handleShowFirst5}
            type="button"
            data-cy="first-five-button"
          >
            Load 5 first goods
          </button>

          <button onClick={handleShowRed} type="button" data-cy="red-button">
            Load red goods
          </button>

          <GoodsList goods={goodsToShow} />
        </>
      )}
    </div>
  );
};
