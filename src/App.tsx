import React, { useState } from 'react';
import './App.scss';
import 'bulma/css/bulma.css';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAllGoodsClick = () => {
    getAll()
      .then(AllGoods => setGoods(AllGoods));
  };

  const handleFirst5GoodsClick = async () => {
    setGoods(await get5First());
  };

  const handleRedGoodsClick = async () => {
    setGoods(await getRedGoods());
  };

  return (
    <div
      className="App is-flex
        is-justify-content-center
        is-align-items-start"
    >
      <div className="wrapper">
        <h1
          className="title is-1 has-text-white mt-5"
        >
          Dynamic list of Goods
        </h1>

        <button
          className="button is-dark mr-3 mb-3"
          type="button"
          data-cy="all-button"
          onClick={handleLoadAllGoodsClick}
        >

          Load all goods
        </button>

        <button
          className="button is-dark mr-3"
          type="button"
          data-cy="first-five-button"
          onClick={handleFirst5GoodsClick}
        >
          Load 5 first goods
        </button>

        <button
          className="button is-dark"
          type="button"
          data-cy="red-button"
          onClick={handleRedGoodsClick}
        >
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </div>
    </div>
  );
};
