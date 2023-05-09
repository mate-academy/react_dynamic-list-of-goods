import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState({
    all: false,
    first5: false,
    red: false,
  });
  const errorMessage = 'No goods yet';

  const loadAllGoods = async () => {
    setLoading({ ...loading, all: true });
    setError('');
    try {
      const goodsFromServer = await getAll();

      setGoods(goodsFromServer);
    } catch {
      setError(errorMessage);
    }

    setLoading({ ...loading, all: false });
  };

  const load5Goods = async () => {
    setLoading({ ...loading, first5: true });
    setError('');

    try {
      const goodsFromServer = await get5First();

      setGoods(goodsFromServer);
    } catch {
      setError(errorMessage);
    }

    setLoading({ ...loading, first5: false });
  };

  const loadRedGoods = async () => {
    setLoading({ ...loading, red: true });
    setError('');

    try {
      const goodsFromServer = await getRedGoods();

      setGoods(goodsFromServer);
    } catch {
      setError(errorMessage);
    }

    setLoading({ ...loading, red: false });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={loadAllGoods}
      >
        {!loading.all ? 'Load all goods' : 'loadind...'}
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={load5Goods}
      >
        {!loading.first5 ? 'Load 5 first goods' : 'loadind...'}
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={loadRedGoods}
      >
        {!loading.red ? 'Load red goods' : 'loadind...'}
      </button>

      {!error ? (
        <GoodsList goods={goods} />
      ) : (
        <h2 style={{ color: 'red' }}>No goods yet</h2>
      )}
    </div>
  );
};
