import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import 'bulma/css/bulma.min.css';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [good, setGood] = useState<Good[]>([]);

  const getAllLoad = useCallback(async () => {
    const goodFromServer = await getAll();

    setGood(goodFromServer);
  }, []);

  const getFiveFirst = useCallback(async () => {
    const goodFromServer = await get5First();

    setGood(goodFromServer);
  }, []);

  const getRedGood = useCallback(async () => {
    const goodFromServer = await getRedGoods();

    setGood(goodFromServer);
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={getAllLoad}
        className="button is-primary is-outlined"
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={getFiveFirst}
        className="button is-info is-outlined"
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={getRedGood}
        className="button is-danger is-outlined"
      >
        Load red goods
      </button>

      <GoodsList goods={good} />
    </div>
  );
};
