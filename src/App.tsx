import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';
import { useCallback, useState } from 'react';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [preparedGoods, setPreparedGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleLoadAllGoods = useCallback(() => {
    setError(null);
    getAll()
      .then(setPreparedGoods)
      .catch(() => setError('Failed to load data.'));
  }, [setError, setPreparedGoods]);

  const handleLoad5First = useCallback(() => {
    setError(null);
    get5First()
      .then(setPreparedGoods)
      .catch(() => setError('Failed to load data.'));
  }, [setError, setPreparedGoods]);

  const handleLoadRedGoods = useCallback(() => {
    setError(null);
    getRedGoods()
      .then(setPreparedGoods)
      .catch(() => setError('Failed to load data.'));
  }, [setError, setPreparedGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoad5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRedGoods}>
        Load red goods
      </button>

      {error && <p className="notification is-danger">{error}</p>}

      <GoodsList goods={preparedGoods} />
    </div>
  );
};
