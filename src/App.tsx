import React, { useState, useCallback } from 'react';
import './App.scss';
import { Oval } from 'react-loader-spinner';
import { GoodsList } from './components/GoodsList/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

import { Good } from './types/Good';
import { ButtonType } from './types/ButtonType';
import { Button } from './components/Button/Button';
import { LoadFn } from './types/LoadF';

const buttons: ButtonType[] = [
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
  const [loadError, setLoadError] = useState(false);

  const loadGoods
    = useCallback(async (loadFunction: LoadFn) => {
      setLoading(true);
      setLoadError(false);

      try {
        const initialGoods = await loadFunction();

        setGoods(initialGoods);
        setLoading(false);
      } catch (error) {
        setLoadError(true);
        setLoading(false);
      }
    }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="box has-text-centered">
          <h1 className="title">Dynamic list of Goods</h1>

          <div className="buttons-box">
            {
              buttons.map(({ text, loadFunction, dataCy }) => (
                <Button
                  key={text}
                  text={text}
                  dataCy={dataCy}
                  handleClick={() => loadGoods(loadFunction)}
                />
              ))
            }
          </div>
        </div>

        { loadError && (
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
