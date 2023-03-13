import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Button } from './Button';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getGoods = (loadGoods:() => Promise<Good[]>) => {
    loadGoods()
      .then(data => setGoods(data));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <Button
        action={() => getGoods(getAll)}
        data="all-button"
      >
        Load all goods
      </Button>

      <Button
        action={() => getGoods(get5First)}
        data="first-five-button"
      >
        Load 5 first goods
      </Button>

      <Button
        action={() => getGoods(getRedGoods)}
        data="red-button"
      >
        Load red goods
      </Button>

      <GoodsList goods={goods} />
    </div>
  );
};
