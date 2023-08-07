import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isSendRequest, setIsSendRequest] = useState(false);

  useEffect(() => {
    if (isSendRequest) {
      getAll()
        .then((good) => {
          setGoods(good);
          setIsSendRequest(false);
        });
    }
  }, [isSendRequest]);

  const handlerAllGoods = () => {
    getAll().then(user => setGoods(user));
  };

  const handlerFirstFiveGoods = () => {
    get5First().then(user => setGoods(user));
  };

  const handlerOnlyRed = () => {
    getRedGoods().then(user => setGoods(user));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handlerAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handlerFirstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handlerOnlyRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
