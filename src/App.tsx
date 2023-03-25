import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { Button as ButtonComponent } from './components/Button';
import { Loader } from './components/Loader';
import { Button } from './types/Button';

const defaultButtons: Button[] = [
  {
    id: 'all-button',
    action: getAll,
    title: 'Load all goods',
  },
  {
    id: 'first-five-button',
    action: get5First,
    title: 'Load 5 first goods',
  },
  {
    id: 'red-button',
    action: getRedGoods,
    title: 'Load red goods',
  },
];

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeButton, setActiveButton] = useState('');

  const handleGoodsLoad = async (callback: () => Promise<Good[]>) => {
    try {
      setLoading(true);
      const loadedGoods = await callback();

      setGoods(loadedGoods);
      if (error) {
        setError('');
      }
    } catch (err) {
      const typedError = err as Error;

      setError(typedError.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1
        className="App__title"
      >
        Dynamic list of Goods
      </h1>

      <ul className="App__buttons-list">
        {defaultButtons.map(({ id, title, action }) => (
          <li key={id} className="App__buttons-item">
            <ButtonComponent
              id={id}
              loadGoods={() => handleGoodsLoad(action)}
              setSelected={setActiveButton}
              selected={activeButton === id}
              isLoading={loading}
              content={title}
            />
          </li>
        ))}
      </ul>

      {loading && (
        <Loader />
      )}

      {error
        ? <h2>{error}</h2>
        : <GoodsList goods={goods} />}
    </div>
  );
};
