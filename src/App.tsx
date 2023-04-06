import React, { useCallback, useState } from 'react';
import 'bulma/css/bulma.min.css';
import { Vortex } from 'react-loader-spinner';

import './App.scss';
import './reset.scss';
import './normalize.scss';

import { GoodsList } from './components/GoodList';
import { Button } from './components/Button';

import { Good } from './types/Good';
import { ButtonType } from './types/ButtonType';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [clickedButton, setClickedButton] = useState(ButtonType.NONE);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleClick = useCallback(
    async (loadGoods: () => Promise<Good[]>, buttonName: ButtonType) => {
      if (clickedButton === buttonName && !hasError) {
        return;
      }

      setIsLoading(true);
      setHasError(false);

      try {
        setGoods(await loadGoods());
        setClickedButton(buttonName);
      } catch {
        setHasError(true);
      }

      setIsLoading(false);
    }, [clickedButton],
  );

  return (
    <div className="App page page__container">
      <h1 className="page page__title">
        Dynamic list of Goods
      </h1>

      <div className="buttons">
        <Button
          dataCy={ButtonType.ALL}
          onClick={() => handleClick(getAll, ButtonType.ALL)}
          clickedButton={clickedButton}
        >
          Load all goods
        </Button>

        <Button
          dataCy={ButtonType.FIVE}
          onClick={() => handleClick(get5First, ButtonType.FIVE)}
          clickedButton={clickedButton}
        >
          Load 5 first goods
        </Button>

        <Button
          dataCy={ButtonType.RED}
          onClick={() => handleClick(getRedGoods, ButtonType.RED)}
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
            {hasError ? (
              <p className="page page__error">
                Sorry, something went wrong
              </p>
            ) : (
              <GoodsList goods={goods} />
            )}
          </>
        )}
    </div>
  );
};
