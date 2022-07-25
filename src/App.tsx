import React, { useState } from 'react';
import { get5First, getAll, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <div className="panel is-info">
            <div className="panel-heading">
              <h1 className="card-header-title">Dynamic list of Goods</h1>
            </div>

            <div className="panel-tabs is-8">
              <button
                type="button"
                data-cy="all-button"
                className="button is-info is-inverted"
                onClick={async () => {
                  setGoods(await getAll());
                }}
              >
                Load all goods
              </button>

              <button
                type="button"
                data-cy="first-five-button"
                className="button is-info is-inverted"
                onClick={async () => {
                  setGoods(await get5First());
                }}
              >
                Load 5 first goods
              </button>

              <button
                type="button"
                data-cy="red-button"
                className="button is-info is-inverted"
                onClick={async () => {
                  setGoods(await getRedGoods());
                }}
              >
                Load red goods
              </button>
            </div>
            <GoodsList goods={goods} />
          </div>
        </div>
      </div>
    </div>
  );
};
