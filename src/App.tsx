import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';
import { FilterType } from './types/FilterType';
import { DEFAULT_ERROR_MESSAGE } from './constants/api';

export const App: React.FC = () => {
  const [isSelected, setIsSelected] = useState<Good[]>([]);
  const [selected, setSelected] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    switch (selected) {
      case FilterType.allGoods: {
        goodsAPI
          .getAll()
          .then(setIsSelected)
          .catch(() => setErrorMessage(DEFAULT_ERROR_MESSAGE));

        break;
      }

      case FilterType.firstFive: {
        goodsAPI
          .get5First()
          .then(setIsSelected)
          .catch(() => setErrorMessage(DEFAULT_ERROR_MESSAGE));

        break;
      }

      case FilterType.allRed: {
        goodsAPI
          .getRedGoods()
          .then(setIsSelected)
          .catch(() => setErrorMessage(DEFAULT_ERROR_MESSAGE));

        break;
      }
    }
  }, [selected]);

  return (
    <>
      <div className="App">
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          data-cy="all-button"
          onClick={() => setSelected(FilterType.allGoods)}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={() => setSelected(FilterType.firstFive)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={() => {
            setSelected(FilterType.allRed);
          }}
        >
          Load red goods
        </button>

        <GoodsList goods={isSelected} name={selected} />
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </>
  );
};
