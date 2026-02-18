import { useState } from 'react';
import { loadAllGoods, loadFirst5Goods, loadRedGoods } from './api/goods';
import GoodsList from './GoodsList';

export default function App() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const run = async loaderFn => {
    try {
      setError('');
      setLoading(true);
      const data = await loaderFn();
      setGoods(data);
    } catch (e) {
      setError(e?.message || 'Unknown error');
      setGoods([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 16 }}>
      <div
        style={{ display: 'flex', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}
      >
        <button onClick={() => run(loadAllGoods)} disabled={loading}>
          Load All goods
        </button>

        <button onClick={() => run(loadFirst5Goods)} disabled={loading}>
          Load 5 first goods
        </button>

        <button onClick={() => run(loadRedGoods)} disabled={loading}>
          Load red goods
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'crimson' }}>{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
}
