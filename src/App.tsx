import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);
  const [isError, setIsError] = useState(false);

  const getAllGoods = async () => {
    try {
      const goodsFromServer = await getAll();

      setVisibleGoods(goodsFromServer);
    } catch (error) {
      setIsError(true);
      throw new Error('No data from server');
    }
  };

  const getFirstFive = async () => {
    try {
      const goodsFromServer = await get5First();

      setVisibleGoods(goodsFromServer);
    } catch (error) {
      setIsError(true);
      throw new Error('No data from server');
    }
  };

  const getAllRead = async () => {
    try {
      const goodsFromServer = await getRedGoods();

      setVisibleGoods(goodsFromServer);
    } catch (error) {
      setIsError(true);
      throw new Error('No data from server');
    }
  };

  return (
    <div className="App content">
      <h1 className="App__title title">
        Dynamic list of Goods
      </h1>

      <div className="App__buttons">
        <button
          className="button is-success"
          type="button"
          data-cy="all-button"
          onClick={getAllGoods}
        >
          Load all goods
        </button>

        <button
          className="button is-warning"
          type="button"
          data-cy="first-five-button"
          onClick={getFirstFive}
        >
          Load 5 first goods
        </button>

        <button
          className="button is-danger"
          type="button"
          data-cy="red-button"
          onClick={getAllRead}
        >
          Load red goods
        </button>
      </div>
      {isError
        ? (
          <div className="notification is-danger">
            No data on server !
          </div>
        )
        : <GoodsList goods={visibleGoods} />}
    </div>
  );
};
