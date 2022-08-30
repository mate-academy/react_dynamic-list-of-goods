import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';
import 'bulma';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const style = 'button is-primary is-outlined';

  const all = () => {
    goodsAPI.getAll()
      .then(res => {
        setGoods(res);
      });
  };

  const five = () => {
    goodsAPI.get5First()
      .then(res => {
        setGoods(res);
      });
  };

  const red = () => {
    goodsAPI.getRedGoods()
      .then(res => {
        setGoods(res);
      });
  };

  return (
    <div className="App">
      <h1 className="title">Dynamic list of Goods</h1>

      <div className="button_container">
        <button
          className={style}
          type="button"
          data-cy="all-button"
          onClick={all}
        >
          Load all goods
        </button>

        <button
          className={style}
          type="button"
          data-cy="first-five-button"
          onClick={five}
        >
          Load 5 first goods
        </button>

        <button
          className={style}
          type="button"
          data-cy="red-button"
          onClick={red}
        >
          Load red goods
        </button>
      </div>
      <GoodsList goods={goods} />
    </div>
  );
};
