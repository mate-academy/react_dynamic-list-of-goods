import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum FUNCS {
  GET_ALL = 'getAll',
  GET_FIRST_5 = 'getFirstFive',
  GET_RED = 'getRed',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [functionGetData, setFunctionGetData] = useState(FUNCS.GET_ALL);

  useEffect(() => {
    if (functionGetData === FUNCS.GET_RED) {
      getRedGoods()
        .then(goodsFromServer => {
          setGoods(goodsFromServer);
        });
    } else if (functionGetData === FUNCS.GET_FIRST_5) {
      get5First()
        .then(goodsFromServer => {
          setGoods(goodsFromServer);
        });
    } else {
      getAll()
        .then(goodsFromServer => {
          setGoods(goodsFromServer);
        });
    }
  }, [functionGetData]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setFunctionGetData(FUNCS.GET_ALL)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setFunctionGetData(FUNCS.GET_FIRST_5)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setFunctionGetData(FUNCS.GET_RED)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
