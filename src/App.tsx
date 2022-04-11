import React, { useState } from 'react';
import './App.scss';
import 'bulma';

import { getAll } from './api/goods';
import { GoodList } from './GoodList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isInitialized, setInitialized] = useState(false);

  const getAllGoods = () => {
    getAll()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
        setInitialized(true);
      });
  };

  const get5First = () => {
    getAll()
      .then(goodsFromServer => {
        goodsFromServer.sort((good1, good2) => {
          return good1.name.localeCompare(good2.name);
        });

        setGoods(goodsFromServer.slice(0, 5));
        setInitialized(true);
      });
  };

  const getRedGoods = () => {
    getAll()
      .then(goodsFromServer => {
        const filteredGoods = goodsFromServer.filter(
          good => good.color === 'red',
        );

        setGoods(filteredGoods);
        setInitialized(true);
      });
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Dynamic list of Goods</h1>

        {isInitialized && (
          <div className="columns">
            <div className="column">
              <p className="subtitle">Goods table</p>

              <GoodList goods={goods} />
            </div>
          </div>
        )}

        <button
          className="button is-primary button--gap"
          type="button"
          onClick={getAllGoods}
        >
          Load All goods
        </button>

        <button
          className="button is-primary button--gap"
          type="button"
          onClick={get5First}
        >
          Load 5 first goods
        </button>

        <button
          className="button is-primary"
          type="button"
          onClick={getRedGoods}
        >
          Load red goods
        </button>

      </div>
    </section>
  );
};

export default App;
