import React, { useCallback, useState } from 'react';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';
import { Button } from './components/Button';
import { GoodsList } from './components/GoodsList';
import { Loader } from './components/Loader';
import { SortType } from './types/Sort';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentClickedButton, setCurrentClickedButton] = useState('');

  const handleFetchData = useCallback(
    async (callback: () => Promise<Good[]>, type: string) => {
      if (currentClickedButton !== type && !isError) {
        setIsLoading(true);

        try {
          setGoods(await callback());
          setCurrentClickedButton(type);
          setIsError(false);
        } catch {
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      }
    }, [currentClickedButton],
  );

  return (
    <div className="App">
      <h1 className="App__title">Dynamic list of Goods</h1>

      <div className="App__buttons-wrapper">
        <Button
          data-cy="all-button"
          onClick={() => handleFetchData(getAll, SortType.ALL)}
          title="Load all goods"
        />

        <Button
          data-cy="first-five-button"
          onClick={() => handleFetchData(get5First, SortType.FIRST_FIVE)}
          title="Load 5 first goods"
        />

        <Button
          data-cy="red-button"
          onClick={() => handleFetchData(getRed, SortType.RED_ONLY)}
          title="Load red goods"
        />
      </div>

      {isLoading
        ? <Loader />
        : (
          <>
            {isError
              ? (
                <p className="App__error">
                  Error: Unable to establish a connection with the server.
                </p>
              )
              : (
                <>
                  <hr className="App__line" />

                  <GoodsList goods={goods} />
                </>
              )}
          </>
        )}
    </div>
  );
};

export default App;
