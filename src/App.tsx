import { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App = () => {
  const [state, setState] = useState<Good[]>([]);

  const handleLoadAll = () => {
    getAll()
      .then(data => {
        setState(data);
      })
      .catch(() => {});
  };

  const handleLoadFirst = () => {
    get5First()
      .then(data => setState(data))
      .catch(() => {});
  };

  const handleLoadRed = () => {
    getRedGoods().then(data => setState(data));
  };

  /*for myself, so that I understand that there is a second way
  const handleLoadFirst = () => {
    getAll().then(data => {
      const copyData = [...data];

      setState(
        copyData.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
      );
    });
  };
  */

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirst}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      <GoodsList goods={state} />
    </div>
  );
};
