import {
  useState,
  FC,
  useCallback,
} from 'react';
import './App.scss';

import _ from 'lodash';

import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

type GetAllFunction = () => Promise<Good[]>;

export const App: FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const loadGoods = useCallback(async (func: GetAllFunction) => {
    try {
      const goodsFromServer = await func();

      setVisibleGoods((prevVisibleGoods) => {
        return _.isEqual(prevVisibleGoods, goodsFromServer)
          ? prevVisibleGoods
          : goodsFromServer;
      });
    } catch {
      throw new Error('Сannot be loaded');
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
