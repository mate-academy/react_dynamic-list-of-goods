import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [all, setAll] = useState<Good[] | null>([]);
  const [first5, setFirst5] = useState<Good[] | null>([]);
  const [red, setRed] = useState<Good[] | null>([]);
  const [error, setError] = useState<null | string>(null);

  const [showGoods, setShowGoods] = useState(all);

  useEffect(() => {
    const loadGoods = async () => {
      setIsLoading(true);
      setError(null);
      setAll(null);
      setFirst5(null);
      setRed(null);

      const p1 = getAll();
      const p2 = get5First();
      const p3 = getRed();

      Promise.all([p1, p2, p3])
        .then(([usersAll, first5users, getRedUsers]) => {
          setAll(usersAll);
          setFirst5(first5users);
          setRed(getRedUsers);
        })
        .catch(e => {
          setError(e.message);
        })
        .finally(() => setIsLoading(false));
    };

    loadGoods();
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setShowGoods(all)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setShowGoods(first5)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setShowGoods(red)}
      >

        Load red goods
      </button>
      {isLoading && <p>Loading</p>}
      {error && <p>{error}</p>}
      <GoodsList goods={showGoods} />
    </div>
  );
};
