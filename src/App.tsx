import React, { useState } from 'react';
import { GoodsList } from './Components/GoodsList/GoodsList';
import { Loading } from './Components/Loading/Loading';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import './App.scss';

const GoodsLoader: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);

  const loadGoods = async (callback: () => Promise<Good[]>) => {
    try {
      setLoading(true);

      const loadedGoods = await callback();

      setGoods(loadedGoods);
    } catch {
      alert('An error occured when loading goods! Check internet connection');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Dynamic list of Goods</h1>
      <div className="btnContainer">
        <button
          className="button"
          type="button"
          data-cy="all-button"
          onClick={() => loadGoods(getAll)}
          disabled={loading}
        >
          Load All goods
        </button>
        <button
          className="button"
          type="button"
          data-cy="first-five-button"
          onClick={() => loadGoods(get5First)}
          disabled={loading}
        >
          Load 5 first goods
        </button>
        <button
          className="button"
          type="button"
          data-cy="red-button"
          onClick={() => loadGoods(getRedGoods)}
          disabled={loading}
        >
          Load red goods
        </button>
      </div>
      {loading ? <Loading /> : <GoodsList goods={goods} />}
    </div>
  );
};

export const App = React.memo(GoodsLoader);
