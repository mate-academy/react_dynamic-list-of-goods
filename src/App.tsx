import React, { useEffect, useState } from 'react';
import './styles/App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { GoodsList } from './components/GoodsList';

export const App: React.FC = () => {
  const [goodsFromServer, setGoodsFromServer] = useState<Good[] | null>(null);
  const [requestedGoods, setRequestedGoods] = useState<Promise<Good[]>>(getAll);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    requestedGoods
      .then(goods => {
        setGoodsFromServer(goods);

        if (errorMessage.length > 0) {
          setErrorMessage('');
        }
      })
      .catch(setErrorMessage);
  }, [requestedGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setRequestedGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setRequestedGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setRequestedGoods(getRedGoods)}
      >
        Load red goods
      </button>

      {
        errorMessage && (
          <p>
            {errorMessage}
          </p>
        )
      }

      {
        !errorMessage && goodsFromServer?.length === 0
          && <p>There are no goods!</p>
      }

      {
        !errorMessage && goodsFromServer && goodsFromServer.length > 0
          && <GoodsList goods={goodsFromServer} />
      }
    </div>
  );
};
