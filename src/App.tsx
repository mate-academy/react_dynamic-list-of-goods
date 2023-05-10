import { FC, useCallback, useState } from 'react';
import './App.scss';
import 'bulma/css/bulma.min.css';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClickLoadGoods = useCallback(
    (goodsGetter: () => Promise<Good[]>) => {
      goodsGetter()
        .then(setGoods)
        .catch(error => `Error: ${error}`);
    }, [goods],
  );

  return (
    <div className="App content box">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        className="button is-primary is-light m-1"
        data-cy="all-button"
        onClick={() => handleClickLoadGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        className="button is-light m-1"
        data-cy="first-five-button"
        onClick={() => handleClickLoadGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        className="button is-danger is-light m-1"
        data-cy="red-button"
        onClick={() => handleClickLoadGoods(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
