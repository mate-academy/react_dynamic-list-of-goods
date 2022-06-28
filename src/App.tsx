import React, { useState } from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loadError, setLoadError] = useState(false);
  const [choosed, setChoosed] = useState('');

  const load = async (callback: Promise<Good[]>, message: string) => {
    try {
      const loadGoods = await callback;

      setGoods(loadGoods);
      setChoosed(message);
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
        onClick={() => load(getAll(), 'You load All Goods')}
      >
        Load All goods
      </button>

      <button
        type="button"
        className="button"
        onClick={() => load(get5First(), 'You load First 5 Goods')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        className="button"
        onClick={() => load(getRedGoods(), 'You load All Red Goods')}
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

      {goods.length > 0 && (
        <GoodsList
          goods={goods}
        />
      )}

      {(!loadError && goods.length === 0) && (
        <div className="no-list">
          No goods in list, click load button to see the list
        </div>
      )}

      {loadError && (
        <div className="error-message">
          An error occured when loading goods
        </div>
      )}
    </>
  );
};

export default App;
