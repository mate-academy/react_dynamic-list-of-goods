import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import 'bulma/css/bulma.css';

import { get5First, getAll, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);
  const handleButtonSubmit = async (loadedGoods: Promise<Good[]>) => {
    setVisibleGoods(await loadedGoods);
  };

  return (
    <div className="section content box">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        className="button is-info is-rounded"
        onClick={() => handleButtonSubmit(getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className="button is-warning is-rounded"
        onClick={() => handleButtonSubmit(get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className="button is-danger is-rounded"
        onClick={() => handleButtonSubmit(getRedGoods())}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
