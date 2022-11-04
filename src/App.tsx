import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { LoadButton } from './types/LoadBtn';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadGoods = (loadButton: LoadButton) => {
    switch (loadButton) {
      case LoadButton.ALL:
        getAll()
          .then(loadedGoods => setGoods(loadedGoods));
        break;
      case LoadButton.GETFIRST5:
        get5First()
          .then(loadedGoods => setGoods(loadedGoods));
        break;

      case LoadButton.GETRED:
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
        onClick={() => handleLoadGoods(LoadButton.ALL)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoadGoods(LoadButton.GETFIRST5)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleLoadGoods(LoadButton.GETRED)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
