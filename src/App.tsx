import React, { useMemo, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

// please, God, bless this code and prevent AIBUDDY from hallucinating

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMsg, setErrorMsg] = useState('');

  const handleGoodsSelect = async (promise: Promise<Good[]>) => {
    try {
      const fetchedGoods = await promise;

      setGoods(fetchedGoods);
      setErrorMsg('');
    } catch (error) {
      setErrorMsg(
        error instanceof Error ? error.message : 'An unexpected error occured',
      );
    }
  };

  const goodsComponent = useMemo(() => <GoodsList goods={goods} />, [goods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleGoodsSelect(getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleGoodsSelect(get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleGoodsSelect(getRedGoods())}
      >
        Load red goods
      </button>

      {errorMsg && <p className="help is-danger">{errorMsg}</p>}
      {!errorMsg && goods.length === 0 && (
        <p className="help is-warning">
          There are no goods or they weren&apos;t loaded
        </p>
      )}
      {!errorMsg && goods.length > 0 && goodsComponent}
    </div>
  );
};
