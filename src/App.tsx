import { useState } from 'react';
import './App.scss';
import { Good } from './types/Good';
import GoodsList from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() =>
          getAll()
            .then(goods => setGoodsList(goods))
            .catch(error => error)
        }
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() =>
          get5First()
            .then(goods => setGoodsList(goods))
            .catch(error => error)
        }
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() =>
          getRedGoods()
            .then(goods => setGoodsList(goods))
            .catch(error => error)
        }
      >
        Load red goods
      </button>

      <GoodsList goods={goodsList} />
    </div>
  );
};
