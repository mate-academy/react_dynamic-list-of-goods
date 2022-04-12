import React, { useState } from 'react';
import './App.scss';
import 'bulma';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './GoodList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isInitialized, setInitialized] = useState(false);

  const fetchGoods = (callback:() => Promise<Good[]>) => {
    callback().then(goodsFromServer => {
      setGoods(goodsFromServer);
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
          onClick={() => fetchGoods(getAll)}
        >
          Load All goods
        </button>

        <button
          className="button is-primary button--gap"
          type="button"
          onClick={() => fetchGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          className="button is-primary"
          type="button"
          onClick={() => fetchGoods(getRedGoods)}
        >
          Load red goods
        </button>

      </div>
    </section>
  );
};

export default App;
