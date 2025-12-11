import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import type { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goodsAll, setGoodsAll] = useState<Good[]>([]);
  const [goodsFive, setGoodsFive] = useState<Good[]>([]);
  const [redGoods, setRedGoods] = useState<Good[]>([]);

  const [switchGoods, setSwitchGoods] = useState<string>('');

  const handleAllGoods = () => {
    getAll().then(goodsFromServer => {
      setGoodsAll(goodsFromServer);
    });
    setSwitchGoods('all');
  };

  const handleFirst5Goods = () => {
    get5First().then(fiveGoodsFromServer => {
      setGoodsFive(fiveGoodsFromServer);
    });
    setSwitchGoods('five');
  };

  const handleRedGoods = () => {
    getRedGoods().then(redsFromServer => {
      setRedGoods(redsFromServer);
    });
    setSwitchGoods('red');
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleAllGoods()}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleFirst5Goods()}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleRedGoods()}
      >
        Load red goods
      </button>
      {switchGoods === '' ? <GoodsList goods={[]} /> : null}

      {switchGoods === 'all' ? <GoodsList goods={goodsAll} /> : null}
      {switchGoods === 'five' ? <GoodsList goods={goodsFive} /> : null}
      {switchGoods === 'red' ? <GoodsList goods={redGoods} /> : null}
    </div>
  );
};
