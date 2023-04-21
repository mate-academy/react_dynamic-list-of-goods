import React, { useCallback, useState } from 'react';

import { ColorRing } from 'react-loader-spinner';
import 'bulma/css/bulma.min.css';
import './App.scss';

import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

import { GoodsList } from './GoodsList';

enum FilterBy {
  ALL = 'all-button',
  FirstFive = 'first-five-button',
  RED = 'red-button',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filterBy, setFilterBy] = useState<FilterBy | null>();

  const handleError = () => {
    setIsError(true);
    setIsLoading(false);
  };

  const getGoods = useCallback(async (
    callback: () => Promise<Good[]>,
  ): Promise<void> => {
    setIsError(false);
    setIsLoading(true);

    callback()
      .then(result => {
        setGoods(result);
      })
      .catch(handleError)
      .finally(() => setIsLoading(false));
  }, []);

  const handleButtonClick = (filterType: FilterBy) => {
    if (filterBy === filterType) {
      return;
    }

    switch (filterType) {
      case FilterBy.ALL:
        getGoods(getAll);
        break;

      case FilterBy.FirstFive:
        getGoods(get5First);
        break;

      case FilterBy.RED:
        getGoods(getRedGoods);
        break;

      default:
        break;
    }

    setFilterBy(filterType);
  };

  return (
    <div className="App">
      <h1 className="title is-3">Dynamic list of Goods</h1>

      {isError
        ? (
          <>
            <p>Oops! Something went wrong!</p>
            <button
              type="button"
              className="button is-primary"
              onClick={() => {
                setIsError(false);
                setFilterBy(null);
              }}
            >
              Try again
            </button>
          </>
        )
        : (
          <>
            <div className="buttons">
              <button
                type="button"
                className="button is-primary"
                data-cy="all-button"
                onClick={() => handleButtonClick(FilterBy.ALL)}
              >
                Load all goods
              </button>

              <button
                type="button"
                className="button is-warning"
                data-cy="first-five-button"
                onClick={() => handleButtonClick(FilterBy.FirstFive)}
              >
                Load 5 first goods
              </button>

              <button
                type="button"
                className="button is-danger"
                data-cy="red-button"
                onClick={() => handleButtonClick(FilterBy.RED)}
              >
                Load red goods
              </button>
            </div>

            {isLoading
              ? (
                <ColorRing
                  height="50"
                  width="50"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={
                    ['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']
                  }
                />
              )
              : (
                <GoodsList goods={goods} />
              )}
          </>
        )}
    </div>
  );
};
