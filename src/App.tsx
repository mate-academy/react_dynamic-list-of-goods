import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [currentRequest, setCurrentRequest] = useState<Good[]>([]);

  const handleClickForRequest = (request: Promise<Good[]>) => {
    request
      .then(goods => setCurrentRequest(goods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleClickForRequest(getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClickForRequest(get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleClickForRequest(getRedGoods())}
      >
        Load red goods
      </button>

      <GoodsList goods={currentRequest} />
    </div>
  );
};
