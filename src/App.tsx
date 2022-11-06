import React, { useState } from 'react';
import 'bulma';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

type GetGoodsCallback = () => Promise<Good[]>;

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const setGoodsFromServer = (getGoods: GetGoodsCallback) => {
    getGoods()
      .then(newGoods => setGoods(newGoods))
      .catch(error => {
        throw new Error(error);
      });
  };

  return (
    <div className="App hero is-danger is-fullheight">
      <div className="hero-body is-align-items-flex-start">
        <div>
          <h1 className="title is-1">
            Dynamic list of Goods
          </h1>

          <div className="buttons block">
            <button
              type="button"
              className="button is-primary mr-5"
              data-cy="all-button"
              onClick={() => setGoodsFromServer(getAll)}
            >
              Load all goods
            </button>

            <button
              type="button"
              className="button is-primary mr-5"
              data-cy="first-five-button"
              onClick={() => setGoodsFromServer(get5First)}
            >
              Load 5 first goods
            </button>

            <button
              type="button"
              className="button is-primary"
              data-cy="red-button"
              onClick={() => setGoodsFromServer(getRedGoods)}
            >
              Load red goods
            </button>
          </div>

          {goods.length > 0 && (
            <GoodsList goods={goods} />
          )}
        </div>
      </div>
    </div>
  );
};
