import './App.scss';
import { Oval } from 'react-loader-spinner';

import React, { useCallback, useState } from 'react';
import { GoodsList } from './components/GoodsList';
import { Good } from './types/Good';
import { Button } from './types/Button';

import { getAll, get5First, getRedGoods } from './api/goods';

const buttons: Button[] = [
  {
    text: 'Load all goods',
    loadFunction: getAll,
    dataCy: 'all-button',
  },
  {
    text: 'Load 5 first goods',
    loadFunction: get5First,
    dataCy: 'first-five-button',
  },
  {
    text: 'Load red goods',
    loadFunction: getRedGoods,
    dataCy: 'red-button',
  },
];

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasLoadingError, setHasLoadingError] = useState(false);

  const loadGoods = useCallback(async (loadFunction: () => Promise<Good[]>) => {
    setLoading(true);
    setHasLoadingError(false);

    try {
      const initialGoods = await loadFunction();

      setGoods(initialGoods);
      setLoading(false);
      setHasLoadingError(false);
    } catch (error) {
      setHasLoadingError(true);
      setLoading(false);
    }
  }, []);

  const handleClick = useCallback((
    loadFunction: () => Promise<Good[]>,
  ): void => {
    loadGoods(loadFunction);
  }, [loadGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      {buttons.map(({ text, dataCy, loadFunction }) => (
        <button
          type="button"
          className="buttton"
          data-cy={dataCy}
          onClick={() => handleClick(loadFunction)}
          key={text}
        >
          {text}
        </button>
      ))}

      {hasLoadingError && (
        <p>An error occured when loading data!</p>
      )}

      {goods.length === 0 && loading && (
        <Oval width={40} />
      )}

      <GoodsList goods={goods} />
    </div>
  );
};
