import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoadAll = useCallback(() => {
    setError(null);
    setLoading(true);
    getAll()
      .then(setGoods)
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error('LoadAll failed:', err);
        setError('Erro ao carregar os dados. Tente novamente.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleLoadFirst5 = useCallback(() => {
    setError(null);
    setLoading(true);
    get5First()
      .then(setGoods)
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error('LoadFirst5 failed:', err);
        setError('Erro ao carregar os primeiros 5 itens.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleLoadRed = useCallback(() => {
    setError(null);
    setLoading(true);
    getRedGoods()
      .then(setGoods)
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error('LoadRed failed:', err);
        setError('Erro ao carregar os itens vermelhos.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      {error && (
        <p className="error-message" data-cy="error">
          {error}
        </p>
      )}
      <button
        disabled={loading}
        type="button"
        data-cy="all-button"
        onClick={handleLoadAll}
      >
        Load all goods
      </button>

      <button
        disabled={loading}
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirst5}
      >
        Load 5 first goods
      </button>

      <button
        disabled={loading}
        type="button"
        data-cy="red-button"
        onClick={handleLoadRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
