import React, { useState, useEffect } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

enum Sort {
  ALL = 'all',
  FIVEFIRST = 'fivefirst',
  REDGOODS = 'redgoods',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [modGood, setModGood] = useState<Sort | undefined>(undefined);

  useEffect(() => {
    const funcGoodsInfo = async () => {
      let result;

      switch (modGood) {
        case Sort.ALL:
          result = await getAll().then(allGoods => setGoods(allGoods));
          break;

        case Sort.FIVEFIRST:
          result = await get5First().then(items => setGoods(items
            .sort((item1, item2) => item1.name.localeCompare(item2.name))
            .slice(0, 5)));
          break;

        case Sort.REDGOODS:
          result = await getRedGoods().then(goodsInfo => setGoods(
            goodsInfo.filter(good => good.color === 'red'),
          ));
          break;

        default:
          result = 0;
      }

      return result;
    };

    funcGoodsInfo();
  }, [modGood]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setModGood(Sort.ALL)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setModGood(Sort.FIVEFIRST)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setModGood(Sort.REDGOODS)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
