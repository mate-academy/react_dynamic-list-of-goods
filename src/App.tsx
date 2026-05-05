import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [all, setAll] = useState<boolean>(false);
  const [fiveFirst, setFiveFirst] = useState<boolean>(false);
  const [redAll, setRedAll] = useState<boolean>(false);

  const loadAllGoods = () => {
    if (!all) {
      setAll(true);
      setFiveFirst(false);
      setRedAll(false);

      return getAll()
        .then(setGoods)
        .catch(error => error);
    }

    return;
  };

  const load5First = () => {
    if (!fiveFirst) {
      setAll(false);
      setFiveFirst(true);
      setRedAll(false);

      return get5First()
        .then(setGoods)
        .catch(error => error);
    }

    return;
  };

  const loadRedGoods = () => {
    if (!redAll) {
      setAll(false);
      setFiveFirst(false);
      setRedAll(true);

      return getRedGoods()
        .then(setGoods)
        .catch(error => error);
    }

    return;
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" onClick={loadAllGoods} data-cy="all-button">
        Load all goods
      </button>

      <button type="button" onClick={load5First} data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button type="button" onClick={loadRedGoods} data-cy="red-button">
        Load red goods
      </button>
      <GoodsList goods={goods} />
    </div>
  );
};
