import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import 'bulma';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadedGoods = (loadCallback: () => Promise<Good[]>) => {
    loadCallback().then(visibleGoods => setGoods(visibleGoods));
  };

  return (
    <div className="App box">
      <h1
        className="title is-2"
      >
        Dynamic list of Goods
      </h1>

      <div
        className="block"
      >
        <button
          type="button"
          data-cy="all-button"
          onClick={() => loadedGoods(getAll)}
          className="button is-info is-outlined"
          style={{ marginLeft: 10 }}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={() => loadedGoods(get5First)}
          className="button is-info is-outlined"
          style={{ marginLeft: 10 }}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={() => loadedGoods(getRedGoods)}
          className="button is-info is-outlined"
          style={{ marginLeft: 10 }}
        >
          Load red goods
        </button>
      </div>

      {(goods.length > 1)
        ? <GoodsList goods={goods} />
        : (
          <article className="message is-warning">
            <div className="message-body">
              Please press any button
            </div>
          </article>
        )}
    </div>
  );
};
