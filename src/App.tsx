import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList/GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');

  const getSuccess = (goodsFromServer: Good[]) => {
    setGoods(goodsFromServer);
    setError('');
  };

  const getError = (message: string) => {
    setError(message);
  };

  const loadAllGoods = useCallback(() => {
    getAll()
      .then(goodsList => {
        getSuccess(goodsList);
      })
      .catch(() => {
        getError('Error loading all items');
      });
  }, []);

  const loadFiveFirst = useCallback(() => {
    get5First()
      .then(goodsList => {
        getSuccess(goodsList);
      })
      .catch(() => {
        getError('Error loading five first items');
      });
  }, []);

  const loadRedGoods = useCallback(() => {
    getRedGoods()
      .then(goodsList => {
        getSuccess(goodsList);
      })
      .catch(() => {
        getError('Error loading only red items');
      });
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={loadFiveFirst}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadRedGoods}
      >
        Load red goods
      </button>

      {
        !error
          ? (<GoodsList goods={goods} />)
          : <p className="error">{error}</p>
      }
    </div>
  );
};
