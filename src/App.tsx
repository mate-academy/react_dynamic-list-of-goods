import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';
import { useState } from 'react';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          return getAll()
            .then(data => setGoods(data))
            .catch(() => {
              setError('Not found goods');
            });
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          return get5First()
            .then(data => setGoods(data))
            .catch(() => {
              setError('Not found first five goods');
            });
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          return getRedGoods()
            .then(data => setGoods(data))
            .catch(() => {
              setError('Not found red goods');
            });
        }}
      >
        Load red goods
      </button>

      {error && (
        <p className="notification is-danger">
          {error}
        </p>
      )}

      <GoodsList goods={goods} />
    </div>
  );
};
