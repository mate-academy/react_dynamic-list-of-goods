import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import 'bulma/css/bulma.css';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleButtonClick = (request: Promise<Good[]>) => {
    request
      .then(setGoods);
  };

  return (
    <div className="App">
      <h1 className="title is-1 has-text-centered">Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        className="button is-primary is-rounded"
        onClick={() => handleButtonClick(getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className="button is-info is-rounded"
        onClick={() => handleButtonClick(get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className="button is-link is-rounded"
        onClick={() => handleButtonClick(getRedGoods())}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
