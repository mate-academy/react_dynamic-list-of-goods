import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

const enum Actions {
  AllGoods = 'All goods',
  FirstFive = 'first-five',
  OnlyRed = 'red',
}

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);
  const [handleAction, setHandleAction] = useState(Actions.AllGoods);

  useEffect(() => {
    // eslint-disable-next-line default-case
    switch (handleAction) {
      case Actions.AllGoods:
        getAll()
          .then(goodsFromServer => {
            setVisibleGoods(goodsFromServer);
          });
        break;
      case Actions.FirstFive:
        get5First()
          .then(goodsFromServer => {
            setVisibleGoods(goodsFromServer);
          });

        break;

      case Actions.OnlyRed:
        getRedGoods()
          .then(goodsFromServer => {
            setVisibleGoods(goodsFromServer);
          });

        break;
    }
  }, [handleAction]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setHandleAction(Actions.AllGoods)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setHandleAction(Actions.FirstFive)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setHandleAction(Actions.OnlyRed)}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
