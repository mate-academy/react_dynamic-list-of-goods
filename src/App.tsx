import React, { useCallback, useState } from 'react';
import './App.scss';

import { get5First, getAll, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getGoods = useCallback((get: () => Promise<Good[]>) => {
    get()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
  }, []);

  return (
    <div className="app">
      <h1 className="app__title">Dynamic list of Goods</h1>
      <div className="container">
        <GoodsList preparedGoods={goods} />
        <div className="app__buttons">
          <button
            className="app__buttons__button"
            type="button"
            onClick={() => getGoods(getAll)}
          >
            Load all goods
          </button>
          <button
            className="app__buttons__button"
            type="button"
            onClick={() => getGoods(get5First)}
          >
            Load 5 first goods
          </button>
          <button
            className="app__buttons__button"
            type="button"
            onClick={() => getGoods(getRedGoods)}
          >
            Load red goods
          </button>
        </div>
      </div>

    </div>
  );
};

export default App;
