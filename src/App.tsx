import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { Loader } from './Loader';

enum FilterOptions {
  ALL = 'all-button',
  FIRST5 = 'first-five-button',
  RED = 'red-button',
}

type ButtonNames = {
  [key in FilterOptions]: string;
};

const buttonNames: ButtonNames = {
  [FilterOptions.ALL]: 'Load all goods',
  [FilterOptions.FIRST5]: 'Load 5 first goods',
  [FilterOptions.RED]: 'Load red goods',
};

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [filterOptions, setFilterOptions] = useState('');
  const [errorText, setErrorText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getGoods = async (promise: Promise<Good[]>): Promise<void> => {
    setIsLoading(true);
    setErrorText('');
    try {
      const goodsFromServer = await promise;

      setGoods(goodsFromServer);
    } catch (error) {
      setErrorText(String(error));
    } finally {
      setIsLoading(false);
    }
  };

  const handleButtonClick = useCallback((sort: FilterOptions) => {
    if (filterOptions === sort) {
      return;
    }

    setFilterOptions(sort);

    switch (sort) {
      case FilterOptions.ALL:
        getGoods(getAll());
        break;
      case FilterOptions.FIRST5:
        getGoods(get5First());
        break;
      case FilterOptions.RED:
        getGoods(getRedGoods());
        break;
      default:
        break;
    }
  }, [filterOptions]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <div className="field is-grouped">
        {Object.values(FilterOptions).map((currentSortType) => (
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

      {isLoading && (
        <Loader />
      )}

      {errorText
        ? <p>{`Error! ${errorText}`}</p>
        : <GoodsList goods={goods} />}
    </div>
  );
};
