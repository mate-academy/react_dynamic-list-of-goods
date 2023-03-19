import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { Button } from './components/Button';
// or
// import * as goodsAPI from './api/goods';

const defaultGoods: Good[] = [];

export const App: React.FC = () => {
  const [goods, setGoods] = useState(defaultGoods);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGoodsLoad = async (callback: () => Promise<Good[]>) => {
    setLoading(true);
    try {
      const loadedGoods = await callback();

      setGoods(loadedGoods);
    } catch (err) {
      const typedError = err as Error;

      setError(typedError.message);
    }

    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <Button
        dataCy="all-button"
        loadGoods={() => handleGoodsLoad(getAll)}
        isLoading={loading}
        content="Load all goods"
      />

      <Button
        dataCy="first-five-button"
        loadGoods={() => handleGoodsLoad(get5First)}
        isLoading={loading}
        content="Load 5 first goods"
      />

      <Button
        dataCy="red-button"
        loadGoods={() => handleGoodsLoad(getRedGoods)}
        isLoading={loading}
        content="Load red goods"
      />

      {
        error
          ? <h2>{error}</h2>
          : <GoodsList goods={goods} />
      }
    </div>
  );
};
