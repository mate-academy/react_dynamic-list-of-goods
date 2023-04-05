import React, { useState } from 'react';
import './App.scss';
import 'bulma/css/bulma.min.css';
import classNames from 'classnames';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);

  const loadGoods = (getGoods: () => Promise<Good[]>) => {
    setLoading(true);
    getGoods()
      .then((loadedGoods) => setGoods(loadedGoods))
      .finally(() => setLoading(false));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        disabled={loading}
        className={classNames(
          'button',
          'is-link',
          {
            'is-loading': loading,
          },
        )}
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        disabled={loading}
        type="button"
        className={classNames(
          'button',
          'is-link',
          {
            'is-loading': loading,
          },
        )}
        data-cy="first-five-button"
        onClick={() => loadGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        disabled={loading}
        type="button"
        className={classNames(
          'button',
          'is-link',
          {
            'is-loading': loading,
          },
        )}
        data-cy="red-button"
        onClick={() => loadGoods(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />

    </div>
  );
};
