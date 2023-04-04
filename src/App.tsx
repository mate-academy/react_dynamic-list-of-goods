import React, { useCallback, useState } from 'react';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';
import { Button } from './components/Button';
import { GoodsList } from './components/GoodsList';
import { Loader } from './components/Loader';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentClickedButton, setCurrentClickedButton] = useState('');

  const handleFetchData = useCallback(
    async (callback: () => Promise<Good[]>, type: string) => {
      if (currentClickedButton !== type) {
        setIsLoading(true);

        try {
          setGoods(await callback());
          setCurrentClickedButton(type);
          setError(false);
        } catch {
          setError(true);
        } finally {
          setIsLoading(false);
        }
      }
    }, [currentClickedButton],
  );

  return (
    <div className="app">
      <h1 className="app__title">Dynamic list of Goods</h1>

      <div className="app__buttons-wrapper">
        <Button
          data-cy="all-button"
          onClick={() => handleFetchData(getAll, 'all')}
          title="Load all goods"
        />

        <Button
          data-cy="first-five-button"
          onClick={() => handleFetchData(get5First, 'firstFive')}
          title="Load 5 first goods"
        />

        <Button
          data-cy="red-button"
          onClick={() => handleFetchData(getRed, 'red')}
          title="Load red goods"
        />
      </div>

      {isLoading
        ? <Loader />
        : (
          <>
            {error && (
              <p className="app__error">
                Error: Unable to establish a connection with the server.
              </p>
            )}

            <hr className="app__line" />

            <GoodsList goods={goods} />
          </>
        )}
    </div>
  );
};
