import './App.scss';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

import { GoodsList } from './GoodsList';
import 'bulma';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [allGoods, getAllGoods] = useState<Good[]>([]);
  const [isLoaded, setLoaded] = useState(false);
  const [isSorted, setSorted] = useState(false);
  const [isFiltred, setFiltred] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      getAll()
        .then(goods => getAllGoods(goods));
    }

    if (isSorted) {
      get5First().then(goods => getAllGoods(goods));
    }

    if (isFiltred) {
      getRedGoods().then(goods => getAllGoods(goods));
    }
  }, [isLoaded, isSorted, isFiltred]);

  return (
    <div className={classNames(
      'App',
      'is-flex',
      'is-flex-direction-column',
      'is-align-items-center',
    )}
    >
      <h1 className="title">Dynamic list of Goods</h1>

      <div className="buttons">
        <button
          type="button"
          className="button is-info"
          data-cy="all-button"
          onClick={() => {
            setFiltred(false);
            setSorted(false);
            setLoaded(true);
          }}
        >
          Load all goods
        </button>

        <button
          type="button"
          className="button is-info"
          data-cy="first-five-button"
          onClick={() => {
            setFiltred(false);
            setLoaded(false);
            setSorted(true);
          }}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          className="button is-info"
          data-cy="red-button"
          onClick={() => {
            setSorted(false);
            setLoaded(false);
            setFiltred(true);
          }}
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={allGoods} />
    </div>
  );
};
