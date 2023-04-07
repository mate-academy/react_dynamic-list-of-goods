import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  function usePromiseState(
    promise: Promise<Good[]>,
  ): [Good[], React.Dispatch<React.SetStateAction<Good[]>>] {
    const [state, setState] = useState<Good[]>([]);

    useEffect(() => {
      promise.then(result => setState(result));
    }, []);

    return [state, setState];
  }

  const [first5] = usePromiseState(get5First());
  const [allGoods] = usePromiseState(getAll());
  const [redGoods] = usePromiseState(getRedGoods());
  const [listTypes, setList] = useState('');
  let goodsToShow: Good[] = [];

  const handleListType = (listType: string) => {
    setList(listType);
  };

  switch (listTypes) {
    case 'all':
      goodsToShow = allGoods;
      break;
    case '5First':
      goodsToShow = first5;
      break;
    case 'red':
      goodsToShow = redGoods;
      break;
    default:
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleListType('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleListType('5First')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleListType('red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goodsToShow} />
    </div>
  );
};
