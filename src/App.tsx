import React, { useEffect, useState } from 'react';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRed } from './api/goods';
import './App.scss';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [goodsData, setGoodsData] = useState<{
    all: Good[] | null;
    first5: Good[] | null;
    red: Good[] | null;
  }>({
    all: null,
    first5: null,
    red: null,
  });
  const [error, setError] = useState<null | string>(null);
  const [showGoods, setShowGoods] = useState<Good[] | null>(null);

  useEffect(() => {
    const loadGoods = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const [usersAll, first5users, getRedUsers] = await Promise.all([
          getAll(),
          get5First(),
          getRed(),
        ]);

        setGoodsData({
          all: usersAll,
          first5: first5users,
          red: getRedUsers,
        });
        setShowGoods(usersAll);
        // eslint-disable-next-line
      } catch (e: any) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadGoods();
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setShowGoods(goodsData.all)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setShowGoods(goodsData.first5)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setShowGoods(goodsData.red)}
      >
        Load red goods
      </button>
      {isLoading && <p>Loading</p>}
      {error && <p>{error}</p>}
      <GoodsList goods={showGoods} />
    </div>
  );
};
