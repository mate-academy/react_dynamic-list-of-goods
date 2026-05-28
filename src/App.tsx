import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

enum ListTypeEnum {
  Empty = 'Empty',
  All = 'All',
  Five = 'Five',
  Red = 'Red',
}

export const App: React.FC = () => {
  const [listType, setListType] = useState(ListTypeEnum.Empty);
  const [visibleGoods, setVisibleGoods] = useState([]);

  useEffect(() => {
    switch (listType) {
      case ListTypeEnum.All:
        getAll().then(goods => setVisibleGoods(goods));
        break;
      case ListTypeEnum.Five:
        get5First().then(goods => setVisibleGoods(goods));
        break;
      case ListTypeEnum.Red:
        getRedGoods().then(goods => setVisibleGoods(goods));
        break;
      default:
        setVisibleGoods([]);
    }
  }, [listType]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setListType(ListTypeEnum.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setListType(ListTypeEnum.Five)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setListType(ListTypeEnum.Red)}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
