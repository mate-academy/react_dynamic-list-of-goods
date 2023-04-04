import React, { useCallback, useState } from 'react';
import 'bulma/css/bulma.min.css';
import { Vortex } from 'react-loader-spinner';
import './App.scss';
import { GoodsList } from './components/GoodList';
import { Button } from './components/Button';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [clickedButton, setClickedButton] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleClick = useCallback(
    async (sortedGoods: () => Promise<Good[]>, buttonName: string) => {
      if (clickedButton === buttonName) {
        return;
      }

      setIsLoading(true);

      try {
        setGoods(await sortedGoods());
        setClickedButton(buttonName);
        setIsLoading(false);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }, [clickedButton],
  );

  return (
    <div className="App page page__container">
      <h1 className="page page__title">
        Dynamic list of Goods
      </h1>

      <div className="buttons">
        <Button
          dataCy="all-button"
          onClick={() => handleClick(getAll, 'all-button')}
          clickedButton={clickedButton}
        >
          Load all goods
        </Button>

        <Button
          dataCy="first-five-button"
          onClick={() => handleClick(get5First, 'first-five-button')}
          clickedButton={clickedButton}
        >
          Load 5 first goods
        </Button>

        <Button
          dataCy="red-button"
          onClick={() => handleClick(getRedGoods, 'red-button')}
          clickedButton={clickedButton}
        >
          Load red goods
        </Button>
      </div>

      {isLoading
        ? (
          <div>
            <Vortex
              height="80"
              width="80"
              ariaLabel="vortex-loading"
              wrapperStyle={{}}
              wrapperClass="vortex-wrapper"
              colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
          </div>
        )
        : (
          <>
            {hasError && (
              <p>Sorry, something went wrong</p>
            )}

            <GoodsList goods={goods} />
          </>
        )}
    </div>
  );
};
