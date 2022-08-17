import React, { useState, useEffect } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

type SelectedType = 'getAll' | 'get5First' | 'getRedGoods' | null;

// import { getAll, get5First, getRedGoods } from './api/goods';
// or

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [selectedGoods, setSelectedGoods] = useState<SelectedType>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedGoods) {
      goodsAPI[selectedGoods]()
        .then(_goods => setGoods(_goods))
        .catch(err => setError(err));
    }
  }, [selectedGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setSelectedGoods('getAll')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setSelectedGoods('get5First')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setSelectedGoods('getRedGoods')}
      >
        Load red goods
      </button>

      { goods.length > 0 && <GoodsList goods={goods} />}

      { error !== null && (
        <p>{`Здається я заблукав! ${error}`}</p>
      )}
    </div>
  );
};
