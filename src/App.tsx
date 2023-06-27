import React, { useState } from 'react';
import { GoodsList } from './components/GoodsList';
import './App.scss';
import './global.css';

import { getAll, getRedOnly, get5First } from './api/goods';
import { Good } from './types/Good';

enum SelectionType {
  getAllGoods,
  getRedGoods,
  get5FisrtGoods,
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const isEmptyGoods = goods.length === 0;

  const handleGoodsSelection = async (selectionType: SelectionType) => {
    switch (selectionType) {
      case SelectionType.getAllGoods:
        setGoods(await getAll());
        break;

      case SelectionType.getRedGoods:
        setGoods(await getRedOnly());
        break;

      case SelectionType.get5FisrtGoods:
        setGoods(await get5First());
        break;

      default:
        break;
    }
  };

  return (
    <div className="App">
      <h1 className="title">
        Dynamic list of Goods
      </h1>

      <button
        className="button"
        type="button"
        data-cy="all-button"
        onClick={() => handleGoodsSelection(SelectionType.getAllGoods)}
      >
        Load all goods
      </button>

      <button
        className="button"
        type="button"
        data-cy="first-five-button"
        onClick={() => handleGoodsSelection(SelectionType.get5FisrtGoods)}
      >
        Load 5 first goods
      </button>

      <button
        className="button"
        type="button"
        data-cy="red-button"
        onClick={() => handleGoodsSelection(SelectionType.getRedGoods)}
      >
        Load red goods
      </button>

      {!isEmptyGoods && (
        <GoodsList goods={goods} />
      )}
    </div>
  );
};
