import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';
import 'bulma/css/bulma.css';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClickGoods = async () => {
    getAll()
      .then((allGoods: Good[]) => {
        window.console.log(allGoods);

        return setGoods(allGoods);
      });
  };

  const handleClick5First = async () => {
    get5First()
      .then((first5Goods: Good[]) => (
        setGoods(first5Goods)
      ));
  };

  const handleClickRedGoods = async () => {
    getRedGoods()
      .then(redGoods => (
        setGoods(redGoods)
      ));
  };

  return (
    <div className="App">
      <h1>
        Dynamic list of Goods
      </h1>

      <button
        className="button"
        type="button"
        data-cy="all-button"
        onClick={handleClickGoods}
      >
        Load all goods
      </button>

      <button
        className="button"
        type="button"
        data-cy="first-five-button"
        onClick={handleClick5First}
      >
        Load 5 first goods
      </button>

      <button
        className="button"
        type="button"
        data-cy="red-button"
        onClick={handleClickRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
