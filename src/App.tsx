import React, { useEffect, useState } from 'react';
// import React, { useEffect } from 'react';

import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
// import * as goodsAPI from './api/goods';

import { getAll, get5First, getRedGoods } from './api/goods';

enum BUTTON {
  ALL_USER,
  FIRST_FIVE,
  ONLY_RED,
}

export const App: React.FC = () => {
  const [activeButton, setActiveButton] = useState<BUTTON | null>(null);
  const [selectedList, setSelectedList] = useState<Good[]>([]);

  useEffect(() => {
    switch (activeButton) {
      case BUTTON.ALL_USER:
        getAll().then(goods => setSelectedList(goods));
        break;

      case BUTTON.FIRST_FIVE:
        get5First().then(goods => setSelectedList(goods));
        break;

      case BUTTON.ONLY_RED:
        getRedGoods().then(goods => setSelectedList(goods));
        break;

      default:
        return;
    }
  }, [activeButton]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          setActiveButton(BUTTON.ALL_USER);
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          setActiveButton(BUTTON.FIRST_FIVE);
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          setActiveButton(BUTTON.ONLY_RED);
        }}
      >
        Load red goods
      </button>

      {true && <GoodsList goods={selectedList} />}
    </div>
  );
};
