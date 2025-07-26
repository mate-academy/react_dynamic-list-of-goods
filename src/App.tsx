import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLoadAll = async () => {
    setLoading(true);
    try {
      const allGoods = await getAll();

      setGoods(allGoods);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadFirst5 = async () => {
    setLoading(true);
    try {
      const first5 = await get5First();

      setGoods(first5);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadRed = async () => {
    setLoading(true);
    try {
      const redGoods = await getRedGoods();

      setGoods(redGoods);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleLoadAll}
        disabled={loading}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirst5}
        disabled={loading}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleLoadRed}
        disabled={loading}
      >
        Load red goods
      </button>

      {loading ? <p>Loading...</p> : <GoodsList goods={goods} />}
    </div>
  );
};
