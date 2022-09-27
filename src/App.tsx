import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { LoadButton } from './types/LoadButton';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadGoods = (loadButton: LoadButton) => {
    switch (loadButton) {
      case LoadButton.all:
        getAll()
          .then(loadedGoods => setGoods(loadedGoods));
        break;
      case LoadButton.onlyfirst5:
        get5First()
          .then(loadedGoods => setGoods(loadedGoods));
        break;

      case LoadButton.onlyred:
        getRedGoods()
          .then(loadedGoods => setGoods(loadedGoods));
        break;

      default:
        break;
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleLoadGoods(LoadButton.all)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoadGoods(LoadButton.onlyfirst5)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleLoadGoods(LoadButton.onlyred)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
