import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

const initialGood: Good = {
  id: 0,
  name: '',
  color: '',
};

enum ListOfOptions {
  allGoods,
  listOfSortedFirst5Goods,
  listOfRedGoods,
}

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([initialGood]);
  const [selectedOption, setSelectedOption] = useState(ListOfOptions.allGoods);

  useEffect(() => {
    switch (selectedOption) {
      case ListOfOptions.allGoods:
        getAll().then(setVisibleGoods);
        break;
      case ListOfOptions.listOfSortedFirst5Goods:
        get5First().then(setVisibleGoods);
        break;
      case ListOfOptions.listOfRedGoods:
        getRedGoods().then(setVisibleGoods);
        break;
      default:
        getAll().then(setVisibleGoods);
    }
  }, [selectedOption]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          setSelectedOption(ListOfOptions.allGoods);
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          setSelectedOption(ListOfOptions.listOfSortedFirst5Goods);
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          setSelectedOption(ListOfOptions.listOfRedGoods);
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
