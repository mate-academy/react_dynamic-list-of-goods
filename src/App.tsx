import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() =>
          goodsAPI
            .getAll()
            .then(setVisibleGoods)
            // eslint-disable-next-line no-console
            .catch(err => console.warn(err))
        }
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() =>
          goodsAPI
            .get5First()
            .then(setVisibleGoods)
            // eslint-disable-next-line no-console
            .catch(err => console.warn(err))
        }
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() =>
          goodsAPI
            .getRedGoods()
            .then(setVisibleGoods)
            // eslint-disable-next-line no-console
            .catch(err => console.warn(err))
        }
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
