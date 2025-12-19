import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [messageError, setMessageError] = useState<string>('');

  const loadData = useCallback(async (fetcher: () => Promise<Good[]>) => {
    try {
      const data = await fetcher();

      setGoods(data);
      setMessageError('');
    } catch (err) {
      setMessageError((err as Error).message);
      setGoods([]);
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadData(goodsAPI.getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadData(goodsAPI.get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadData(goodsAPI.getRedGoods)}
      >
        Load red goods
      </button>

      {messageError && <p className="error">Error: {messageError}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
