import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum Mode {
  All,
  First5,
  Red,
  None,
}
export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [mode, setMode] = useState<Mode>(Mode.None);
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    async function fetchData(callback: () => Promise<Good[]>) {
      try {
        const data = await callback();

        setGoods(data);
      } catch (error) {
        if (error instanceof Error) {
          setFetchError('Failed to load goods.');
        }
      }
    }

    switch (mode) {
      case Mode.All: {
        fetchData(getAll);
        break;
      }

      case Mode.First5: {
        fetchData(get5First);
        break;
      }

      case Mode.Red: {
        fetchData(getRedGoods);
        break;
      }

      default:
        setGoods([]);
    }
  }, [mode]);

  function handleModeChange(newMode: Mode) {
    if (newMode !== mode) {
      setMode(newMode);
    }
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleModeChange(Mode.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleModeChange(Mode.First5)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleModeChange(Mode.Red)}
      >
        Load red goods
      </button>

      {fetchError && <p className="has-text-danger">{fetchError}</p>}
      {!fetchError && <GoodsList goods={goods} />}
    </div>
  );
};
