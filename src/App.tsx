import React, { useCallback, useState } from 'react';
import 'bulma/css/bulma.css';
import classNames from 'classnames';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isChoosedType, setIsChoosedType] = useState({
    all: false,
    fiveFirst: false,
    onlyRed: false,
  });
  const [getError, setGetError] = useState(false);

  const handleGetGoods = useCallback(async (sortType: string) => {
    let goodsFromServer: React.SetStateAction<Good[]> = [];

    // setChoosedType(prev => ({
    //   ...prev,
    //   [sortType]: true,
    // }));

    try {
      switch (sortType) {
        case 'all':
          goodsFromServer = await getAll();
          break;
        case 'fiveFirst':
          goodsFromServer = await get5First();
          break;
        case 'onlyRed':
          goodsFromServer = await getRed();
          break;
        default:
          goodsFromServer = [];
          break;
      }

      setGoods(goodsFromServer);
    } catch {
      setGetError(true);
    } finally {
      setIsChoosedType(prev => ({
        ...prev,
        [sortType]: false,
      }));
    }
  }, []);

  return (
    <div className="App">
      <h1 className="h1">Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        className={classNames('button',
          { 'is-loading': isChoosedType.all })}
        onClick={() => handleGetGoods('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className={classNames('button',
          { 'is-loading': isChoosedType.fiveFirst })}
        onClick={() => handleGetGoods('fiveFirst')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className={classNames('button',
          { 'is-loading': isChoosedType.onlyRed })}
        onClick={() => handleGetGoods('onlyRed')}
      >
        Load red goods
      </button>

      {getError
        ? (
          <h1 className="notification is-danger is-light">
            Oops, something went wrong!
          </h1>
        ) : (
          <GoodsList goods={goods} />
        )}
    </div>
  );
};
