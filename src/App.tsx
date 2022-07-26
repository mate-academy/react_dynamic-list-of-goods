import React, { useState } from 'react';
import 'bulma';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [itemsGoods, setItemsGoods] = useState<Good[]>([]);

  const handleAllGoods = async () => {
    getAll().then(allArray => setItemsGoods(allArray));
  };

  const handleFiveElGoods = async () => {
    get5First().then(firstFiveElArray => setItemsGoods(firstFiveElArray));
  };

  const onlyRedElGood = async () => {
    getRedGoods().then(onlyRedArray => setItemsGoods(onlyRedArray));
  };

  return (
    <div className="App">
      <h1 className="App__title has-text-link">
        Dynamic list of Goods
      </h1>

      <div className="App__button-container">
        <button
          className="button is-link is-outlined"
          type="button"
          data-cy="all-button"
          onClick={handleAllGoods}
        >
          Load all goods
        </button>

        <button
          className="button is-link is-outlined"
          type="button"
          data-cy="first-five-button"
          onClick={handleFiveElGoods}
        >
          Load 5 first goods
        </button>

        <button
          className="button is-link is-outlined"
          type="button"
          data-cy="red-button"
          onClick={onlyRedElGood}
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={itemsGoods} />
    </div>
  );
};
