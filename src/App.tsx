import React, { useCallback, useState } from 'react';
import './App.scss';
import 'bulma';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

const App: React.FC = () => {
  const [goodsToShow, setGoodsToShow] = useState<Good[]>([]);

  const showAll = useCallback(
    () => {
      getAll()
        .then(goods => {
          setGoodsToShow(goods);
        });
    },
    [],
  );

  const show5First = useCallback(
    () => {
      get5First()
        .then(goods => {
          setGoodsToShow(goods);
        });
    },
    [],
  );

  const showReds = useCallback(
    () => {
      getRedGoods()
        .then((goods: Good[]) => {
          setGoodsToShow(goods);
        });
    },
    [],
  );

  return (
    <div className="has-text-centered">
      <h1 className="title m-4">
        Dynamic list of Goods
      </h1>

      <button
        className="button is-success m-2"
        type="button"
        onClick={showAll}
      >
        All Goods
      </button>

      <button
        className="button is-success m-2"
        type="button"
        onClick={show5First}
      >
        First Five Goods
      </button>

      <button
        className="button is-success m-2"
        type="button"
        onClick={showReds}
      >
        Red Goods
      </button>

      <GoodsList shownGoods={goodsToShow} />
    </div>
  );
};

export default App;
