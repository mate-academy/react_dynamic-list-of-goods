import React, { useState } from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLoadAll = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAll();

      setGoods(data);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLoad5First = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await get5First();

      setGoods(data);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLoadRed = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getRedGoods();

      setGoods(data);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={handleLoadAll} disabled={loading}>
        Load all goods
      </button>
      <button onClick={handleLoad5First} disabled={loading}>
        Load 5 first goods
      </button>
      <button onClick={handleLoadRed} disabled={loading}>
        Load red goods
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && <GoodsList goods={goods} />}
    </div>
  );
};
