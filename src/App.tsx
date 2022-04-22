import React, { useState } from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loadError, setLoadError] = useState(false);
  const [choosed, setChoosed] = useState('');

  const loadGoods = async () => {
    try {
      const loadedGoods = await getAll();

      setGoods(loadedGoods);
      setChoosed('You load All Goods');
    } catch (error) {
      setLoadError(true);
    }
  };

  const loadFiveGoods = async () => {
    try {
      const loadedFiveGoods = await get5First();

      setGoods(loadedFiveGoods);
      setChoosed('You load First 5 Goods');
    } catch (error) {
      setLoadError(true);
    }
  };

  const loadRedGoods = async () => {
    try {
      const loadedRedGoods = await getRedGoods();

      setGoods(loadedRedGoods);
      setChoosed('You load All Red Goods');
    } catch (error) {
      setLoadError(true);
    }
  };

  const clear = () => {
    setGoods([]);
    setChoosed('');
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        className="button"
        onClick={loadGoods}
      >
        Load All goods
      </button>

      <button
        type="button"
        className="button"
        onClick={loadFiveGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        className="button"
        onClick={loadRedGoods}
      >
        Load red goods
      </button>

      <button
        type="button"
        className="button"
        onClick={clear}
      >
        Clear list
      </button>

      {choosed && (
        <h3>
          {choosed}
        </h3>
      )}

      <GoodsList
        goods={goods}
        errors={loadError}
      />

      {loadError && (
        <div className="error-message">
          An error occured when loading goods
        </div>
      )}
    </>
  );
};

export default App;
