import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum TypeOfGoods {
  None = 'none',
  AllGoods = 'all-button',
  FirstFiveGoods = 'first-five-button',
  RedGoods = 'red-button',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [currentType, setCurrentType] = useState(TypeOfGoods.None);
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoadingError, setHasLoadingError] = useState(false);

  const handleClickButton = (
    getGoods: () => Promise<Good[]>,
    typeOfGoods = TypeOfGoods.None,
  ) => {
    return () => {
      if (currentType !== typeOfGoods) {
        setIsLoading(true);
        getGoods()
          .then(setGoods)
          .catch(() => (setHasLoadingError(true)))
          .finally(() => {
            setIsLoading(false);
          });
        setCurrentType(typeOfGoods);
      }
    };
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleClickButton(getAll, TypeOfGoods.AllGoods)}
        className="buttonload"
      >
        {isLoading && currentType === TypeOfGoods.AllGoods
          ? (
            <>
              <i className="fa fa-spinner fa-spin" />
              <span>Loading</span>
            </>
          )
          : 'Load all goods'}
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleClickButton(get5First, TypeOfGoods.FirstFiveGoods)}
      >
        {isLoading && currentType === TypeOfGoods.FirstFiveGoods
          ? (
            <>
              <i className="fa fa-spinner fa-spin" />
              <span>Loading</span>
            </>
          )
          : 'Load 5 first goods'}
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleClickButton(getRedGoods, TypeOfGoods.RedGoods)}
      >
        {isLoading && currentType === TypeOfGoods.RedGoods
          ? (
            <>
              <i className="fa fa-spinner fa-spin" />
              <span>Loading</span>
            </>
          )
          : 'Load red goods'}
      </button>

      {hasLoadingError
        ? (
          <div>
            An error occored when loadin goods!
          </div>
        )
        : (
          <>
            {!isLoading && (
              <GoodsList goods={goods} />
            )}
          </>
        )}
    </div>
  );
};
