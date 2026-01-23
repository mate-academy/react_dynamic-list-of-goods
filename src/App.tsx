import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum GoodSelection {
  All,
  FirstFive,
  Red,
  None,
}

export const App: React.FC = () => {
  const [goodSelection, setGoodSelection] = useState<GoodSelection>(
    GoodSelection.None,
  );
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    switch (goodSelection) {
      case GoodSelection.All:
        getAll()
          .then(setGoods)
          .catch((error: unknown) =>
            setErrorMsg(
              error instanceof Error ? error.message : 'Unknown Error',
            ),
          );
        break;

      case GoodSelection.FirstFive:
        get5First()
          .then(setGoods)
          .catch((error: unknown) =>
            setErrorMsg(
              error instanceof Error ? error.message : 'Unknown Error',
            ),
          );
        break;

      case GoodSelection.Red:
        getRedGoods()
          .then(setGoods)
          .catch((error: unknown) =>
            setErrorMsg(
              error instanceof Error ? error.message : 'Unknown Error',
            ),
          );
        break;

      default:
        setGoods([]);
        break;
    }
  }, [goodSelection]);

  const handleGoodSelection = (selection: GoodSelection) => {
    setErrorMsg('');
    setGoodSelection(selection);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleGoodSelection(GoodSelection.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleGoodSelection(GoodSelection.FirstFive)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleGoodSelection(GoodSelection.Red)}
      >
        Load red goods
      </button>

      {errorMsg ? (
        <p style={{ color: 'crimson' }}>{errorMsg}</p>
      ) : (
        <GoodsList goods={goods} />
      )}
    </div>
  );
};
