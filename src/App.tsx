import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import 'bulma/css/bulma.min.css';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [good, setGood] = useState<Good[]>([]);
  const [hasResponse, setHasResponse] = useState(false);

  const getAllLoad = useCallback(async () => {
    try {
      setHasResponse(false);
      const goodFromServer = await getAll();

      setGood(goodFromServer);
    } catch (erorr) {
      setHasResponse(true);
      throw new Error('Server has no response');
    }
  }, []);

  const getFiveFirst = useCallback(async () => {
    try {
      setHasResponse(false);
      const goodFromServer = await get5First();

      setGood(goodFromServer);
    } catch (erorr) {
      setHasResponse(true);
      throw new Error('Server has no response');
    }
  }, []);

  const getRedGood = useCallback(async () => {
    try {
      setHasResponse(false);
      const goodFromServer = await getRedGoods();

      setGood(goodFromServer);
    } catch (erorr) {
      setHasResponse(true);
      throw new Error('Server has no response');
    }
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
      {hasResponse
        ? <p>Server can`t handle your request, try later</p>
        : <GoodsList goods={good} />}
    </div>
  );
};
