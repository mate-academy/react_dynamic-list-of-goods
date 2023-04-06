import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';
import { Loader } from './Loader';

enum SortBy {
  ALL = 'all-button',
  FIRST5 = 'first-five-button',
  RED = 'red-button',
}

type ButtonNames = {
  [key in SortBy]: string;
};

const buttonNames: ButtonNames = {
  [SortBy.ALL]: 'Load all goods',
  [SortBy.FIRST5]: 'Load 5 first goods',
  [SortBy.RED]: 'Load red goods',
};

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [sortBy, setSortBy] = useState('');
  const [errorText, setErrorText] = useState('');
  const [loading, setLoading] = useState(false);

  const getGoods = async (promise: Promise<Good[]>): Promise<void> => {
    setLoading(true);
    setErrorText('');

    try {
      const goodsFromServer = await promise;

      setGoods(goodsFromServer);
    } catch (error) {
      setErrorText(String(error));
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = (sort: SortBy) => {
    if (sortBy === sort) {
      return;
    }

    setSortBy(sort);

    switch (sort) {
      case SortBy.ALL:
        getGoods(goodsAPI.getAll());
        break;
      case SortBy.FIRST5:
        getGoods(goodsAPI.get5First());
        break;
      case SortBy.RED:
        getGoods(goodsAPI.getRedGoods());
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <div className="field is-grouped">
        {Object.values(SortBy).map((currentSortType) => (
          <button
            className="button is-light mr-3 is-medium"
            type="button"
            data-cy={currentSortType}
            onClick={() => {
              handleButtonClick(currentSortType);
            }}
          >
            {buttonNames[currentSortType]}
          </button>
        ))}
      </div>

      {loading && (
        <Loader />
      )}

      {errorText
        ? <p>{`Error! ${errorText}`}</p>
        : <GoodsList goods={goods} />}
    </div>
  );
};
