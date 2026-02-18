import React, { useState } from 'react';
import GoodsList from './GoodsList';
import { Good } from './types/Good';
import { loadAllGoods, loadFirst5Goods, loadRedGoods } from './api/goods';

export default function App() {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const run = async (loaderFn: () => Promise<Good[]>) => {
    try {
      setError('');
      setLoading(true);

      const data = await loaderFn();

      if (!Array.isArray(data)) {
        throw new Error('Invalid response: expected an array of goods');
      }

      setGoods(data);
    } catch (e) {
      setGoods([]);
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App" style={{ padding: 16 }}>
      <h1>Dynamic list of Goods</h1>

      <div
        style={{ display: 'flex', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}
      >
        <button
          type="button"
          onClick={() => run(loadAllGoods)}
          disabled={loading}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => run(loadFirst5Goods)}
          disabled={loading}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => run(loadRedGoods)}
          disabled={loading}
        >
          Load red goods
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'crimson' }}>{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
}
