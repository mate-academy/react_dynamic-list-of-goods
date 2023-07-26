import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getGoods } from './api/goods';
import { Good } from './types/Good';
import { Color } from './types/Color';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = React.memo(() => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [amount, setAmount] = useState(0);
  const [color, setColor] = useState('');

  useEffect(() => {
    getGoods(amount, color)
      .then(setGoods);
  }, [amount, color]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          setAmount(0);
          setColor('');
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          setAmount(5);
          setColor('');
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          setAmount(0);
          setColor(Color.Red);
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
});
