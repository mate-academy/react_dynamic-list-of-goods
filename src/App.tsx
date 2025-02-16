import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { ShowGoods } from './types/ShowGoods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null | string>(null);
  const [showedGoods, setShowedGoods] = useState<ShowGoods | null>(null);

  useEffect(() => {
    switch (showedGoods) {
      case 'all':
        getAll()
          .then(setGoods)
          .catch(e => setGoods(e));

        break;
      case 'first5':
        get5First()
          .then(data => setGoods(data))
          .catch(e => setGoods(e));

        break;
      case 'red':
        getRedGoods()
          .then(data => setGoods(data))
          .catch(e => setGoods(e));

        break;
      default:
        setGoods(null);
        break;
    }
  }, [showedGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setShowedGoods('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setShowedGoods('first5')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setShowedGoods('red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
