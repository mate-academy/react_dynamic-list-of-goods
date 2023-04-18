import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { Loader } from './Loader';

enum FilterOptions {
  LOAD_ALL = 'all-button',
  LOAD_FIRST_5 = 'first-five-button',
  LOAD_RED = 'red-button',
}

type ButtonNames = Record<FilterOptions, string>;

const buttonNames: ButtonNames = {
  [FilterOptions.LOAD_ALL]: 'Load all goods',
  [FilterOptions.LOAD_FIRST_5]: 'Load 5 first goods',
  [FilterOptions.LOAD_RED]: 'Load red goods',
};

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [currentFilter, setCurrentFilter] = useState('');
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

  const handleButtonClick = useCallback((filterOption: FilterOptions) => {
    if (currentFilter === filterOption) {
      return;
    }

    setCurrentFilter(filterOption);

    switch (filterOption) {
      case FilterOptions.LOAD_ALL:
        getGoods(getAll());
        break;
      case FilterOptions.LOAD_FIRST_5:
        getGoods(get5First());
        break;
      case FilterOptions.LOAD_RED:
        getGoods(getRedGoods());
        break;
      default:
        break;
    }
  }, [currentFilter]);

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
            key={currentSortType}
            disabled={currentFilter === currentSortType}
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
