import React, { useState } from 'react';
import './App.scss';
import 'bulma';
import { GoodsList } from './components/GoodsList/GoodsList';
import { Good } from './types/Good';

import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <div className="section">
        <div className="container has-text-centered">
          <h1 className="title is-1 has-text-weight-bold">
            Dynamic list of Goods
          </h1>
          <div className="buttons is-centered">
            <button
              type="button"
              className="button has-text-weight-medium has-text-black"
              data-cy="all-button"
              onClick={() => {
                goodsAPI.getAll()
                  .then(goodsFromServer => setGoods(goodsFromServer));
              }}
            >
              Load all goods
            </button>
            <button
              type="button"
              className="button has-text-weight-medium has-text-black"
              data-cy="first-five-button"
              onClick={() => {
                goodsAPI.get5First()
                  .then(goodsFromServer => setGoods(goodsFromServer));
              }}
            >
              Load 5 first goods
            </button>
            <button
              type="button"
              className="button has-text-weight-medium has-text-black"
              data-cy="red-button"
              onClick={() => {
                goodsAPI.getRedGoods()
                  .then(goodsFromServer => setGoods(goodsFromServer));
              }}
            >
              Load red goods
            </button>
          </div>
          <GoodsList goods={goods} />
        </div>
      </div>
    </div>
  );
};
