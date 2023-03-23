import { FC, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { get5First, getAll, getRedGoods } from './api/goods';

enum SortType {
  NONE = '',
  ALL = 'all-button',
  FIRST5 = 'first-five-button',
  RED = 'red-button',
}

type ButtonNames = {
  [key in SortType]: string;
};

const buttonNames: ButtonNames = {
  [SortType.NONE]: '',
  [SortType.ALL]: 'Load all goods',
  [SortType.FIRST5]: 'Load 5 first goods',
  [SortType.RED]: 'Load red goods',
};

export const App: FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [sortType, setSortType] = useState<SortType>(SortType.NONE);
  const [errorText, setErrorText] = useState('');

  const getGoods = async (promise: Promise<Good[]>): Promise<void> => {
    try {
      const goodsFromServer = await promise;

      setGoods(goodsFromServer);
    } catch (error) {
      setErrorText(String(error));
    }
  };

  const handleButtonClick = (newSortType: SortType) => {
    if (sortType === newSortType) {
      return;
    }

    setSortType(newSortType);

    switch (newSortType) {
      case SortType.ALL:
        getGoods(getAll());
        break;

      case SortType.FIRST5:
        getGoods(get5First());
        break;

      case SortType.RED:
        getGoods(getRedGoods());
        break;

      default:
        break;
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {Object.values(SortType).filter(Boolean).map((currentSortType) => (
        <button
          type="button"
          data-cy={currentSortType}
          onClick={() => {
            handleButtonClick(currentSortType);
          }}
        >
          {buttonNames[currentSortType]}
        </button>
      ))}

      {errorText
        ? <p>{`Error! ${errorText}`}</p>
        : <GoodsList goods={goods} />}
    </div>
  );
};
