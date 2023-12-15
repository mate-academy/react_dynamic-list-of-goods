import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

// import * as goodsAPI from './api/goods';

type Type = 'all' | 'five' | 'red' | null;

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [type, setType] = useState<Type>(null);

  const handleStateType = (value: string) => {
    const buttonType: Type = value as Type;

    return type !== buttonType ? setType(buttonType) : setType(null);
  };

  useEffect(() => {
    switch (type) {
      case 'all':
        getAll().then(goodsFromServer => {
          setGoods(goodsFromServer);
        });
        break;
      case 'five':
        get5First().then(goodsFromServer => {
          setGoods(goodsFromServer);
        });
        break;

      case 'red':
        getRedGoods().then(goodsFromServer => {
          setGoods(goodsFromServer);
        });
        break;

      default:
        break;
    }
  }, [type]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        value="all"
        onClick={(event) => handleStateType(event.currentTarget.value)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        value="five"
        onClick={(event) => handleStateType(event.currentTarget.value)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        value="red"
        onClick={(event) => handleStateType(event.currentTarget.value)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
