import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const getAllGoods = async () => {
    const goodsFromServer = await getAll();

    setVisibleGoods(goodsFromServer);
  };

  const getFirstFive = async () => {
    const goodsFromServer = await get5First();

    await setVisibleGoods(goodsFromServer);
  };

  const getAllRead = async () => {
    const goodsFromServer = await getRedGoods();

    await setVisibleGoods(goodsFromServer);
  };

  return (
    <div className="App content">
      <h1 className="App__title title">
        Dynamic list of Goods
      </h1>

      <div className="App__buttons">
        <button
          className="button is-success"
          type="button"
          data-cy="all-button"
          onClick={getAllGoods}
        >
          Load all goods
        </button>

        <button
          className="button is-warning"
          type="button"
          data-cy="first-five-button"
          onClick={getFirstFive}
        >
          Load 5 first goods
        </button>

        <button
          className="button is-danger"
          type="button"
          data-cy="red-button"
          onClick={getAllRead}
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
