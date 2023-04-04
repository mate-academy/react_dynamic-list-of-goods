import React, { useState } from 'react';
import './App.scss';
import classNames from 'classnames';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { LoadingError } from './LoadingError';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoad] = useState({
    all: false,
    five: false,
    red: false,
  });
  const [loadingError, setloadingError] = useState(false);

  const handleGoods = async (type: string) => {
    let goodsFromServer: React.SetStateAction<Good[]>;

    setLoad((prevState) => ({
      ...prevState,
      [type]: true,
    }));
    setloadingError(false);

    try {
      switch (type) {
        case 'all':
          goodsFromServer = await getAll();
          break;
        case 'five':
          goodsFromServer = await get5First();
          break;
        case 'red':
          goodsFromServer = await getRedGoods();
          break;
        default:
          goodsFromServer = [];
          break;
      }

      setGoods(goodsFromServer);
    } catch {
      setloadingError(true);
    } finally {
      setLoad((prevState) => ({
        ...prevState,
        [type]: false,
      }
      ));
    }
  };

  return (
    <div className="App">
      <h1 className="title">
        Dynamic list of Goods
      </h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleGoods('all')}
        className={classNames('button', 'is-light',
          { 'is-loading': loading.all })}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleGoods('five')}
        className={classNames('button', 'is-light',
          { 'is-loading': loading.five })}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleGoods('red')}
        className={classNames('button', 'is-light',
          { 'is-loading': loading.red })}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
      {loadingError && <LoadingError />}
    </div>
  );
};
