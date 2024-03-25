import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [items, setItems] = useState<Good[]>([]);
  const [allItems, setAllItems] = useState(false);
  const [fiveFirstItems, setFiveFirstItems] = useState(false);
  const [redItems, setRedItems] = useState(false);

  useEffect(() => {
    if (allItems) {
      getAll().then(setItems);
    }

    if (fiveFirstItems) {
      get5First().then(setItems);
    }

    if (redItems) {
      getRedGoods().then(setItems);
    }
  }, [allItems, fiveFirstItems, redItems]);

  const handleAllButton = () => {
    setAllItems(!allItems);
    setFiveFirstItems(false);
    setRedItems(false);
  };

  const handleFirst5Button = () => {
    setFiveFirstItems(!fiveFirstItems);
    setAllItems(false);
    setRedItems(false);
  };

  const handleRedButton = () => {
    setRedItems(!redItems);
    setFiveFirstItems(false);
    setAllItems(false);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllButton}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirst5Button}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedButton}>
        Load red goods
      </button>

      <GoodsList goods={items} />
    </div>
  );
};
