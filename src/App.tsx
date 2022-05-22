import React, { useCallback, useState } from 'react';
import './App.scss';

import { get5First, getAll, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = useCallback(() => {
    getAll()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
  }, []);

  const getFirstSortedGoods = useCallback(() => {
    get5First()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
  }, []);

  const getAllRedGoods = useCallback(() => {
    getRedGoods()
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
            onClick={getAllGoods}
          >
            Load all goods
          </button>
          <button
            className="app__buttons__button"
            type="button"
            onClick={getFirstSortedGoods}
          >
            Load 5 first goods
          </button>
          <button
            className="app__buttons__button"
            type="button"
            onClick={getAllRedGoods}
          >
            Load red goods
          </button>
        </div>
      </div>

    </div>
  );
};

export default App;
