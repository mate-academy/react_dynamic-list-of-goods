import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

import { GoodsList } from './GoodsList';
import 'bulma';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [allGoods, setGoods] = useState<Good[]>([]);

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
          onClick={async () => {
            setGoods(await getAll());
          }}
        >
          Load all goods
        </button>

        <button
          type="button"
          className="button is-info"
          data-cy="first-five-button"
          onClick={async () => {
            setGoods(await get5First());
          }}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          className="button is-info"
          data-cy="red-button"
          onClick={async () => {
            setGoods(await getRedGoods());
          }}
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={allGoods} />
    </div>
  );
};
