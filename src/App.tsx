import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = React.memo(() => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [selected5First, setSelected5First] = useState(false);
  const [selectedRed, setSelectedRed] = useState(false);

  useEffect(() => {
    if (selected5First) {
      get5First()
        .then(setGoods);
    } else if (selectedRed) {
      getRedGoods()
        .then(setGoods);
    } else {
      getAll()
        .then(setGoods);
    }
  }, [goods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          setSelected5First(false);
          setSelectedRed(false);
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          setSelected5First(true);
          setSelectedRed(false);
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          setSelected5First(false);
          setSelectedRed(true);
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
});
