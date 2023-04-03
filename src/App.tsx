import './App.scss';
import { Oval } from 'react-loader-spinner';
import 'bulma';

import React, { useCallback, useState } from 'react';
import { GoodsList } from './components/GoodsList';
import { Button } from './types/Button';
import { Good } from './types/Good';

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
      <div className="container">
        <div className="box has-text-centered">
          <h1 className="title">Dynamic list of Goods</h1>

          <div className="buttons-box">
            {buttons.map(({ text, dataCy, loadFunction }) => (
              <button
                className="button is-link"
                type="button"
                data-cy={dataCy}
                onClick={() => handleClick(loadFunction)}
                key={text}
              >
                {text}
              </button>
            ))}
          </div>
        </div>

        {hasLoadingError && (
          <div className="notification is-danger">
            An error occured when loading data!
          </div>
        )}

        {loading ? (
          <div className="is-flex is-justify-content-center">
            <Oval width={70} />
          </div>
        ) : (
          <GoodsList goods={goods} />
        )}
      </div>
    </div>
  );
};
