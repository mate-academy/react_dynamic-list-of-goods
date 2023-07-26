import React, { useCallback, useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

const enum Action {
  AllGoods = 'all-goods',
  FirstFive = 'first-five',
  OnlyRed = 'red',
}

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);
  const [handleAction, setHandleAction] = useState(Action.AllGoods);

  const listOfGoods = useCallback(() => getAll(), []);
  const listOfFiveGoods = useCallback(() => get5First(), []);
  const listOfRedGoods = useCallback(() => getRedGoods(), []);

  useEffect(() => {
    // eslint-disable-next-line default-case
    switch (handleAction) {
      case Action.AllGoods:
        listOfGoods()
          .then(goodsFromServer => {
            setVisibleGoods(goodsFromServer);
          });
        break;
      case Action.FirstFive:
        listOfFiveGoods()
          .then(goodsFromServer => {
            setVisibleGoods(goodsFromServer);
          });

        break;

      case Action.OnlyRed:
        listOfRedGoods()
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
        onClick={() => setHandleAction(Action.AllGoods)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setHandleAction(Action.FirstFive)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setHandleAction(Action.OnlyRed)}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
