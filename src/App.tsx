import React, { useState } from 'react';
import './App.scss';
import 'bulma/css/bulma.min.css';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClick = async (newGoods: () => Promise<Good[]>) => {
    const editedGoods = await newGoods();

    setGoods(editedGoods);
  }

  return (
    <div className="App">
    <h1 className='title is-1'>Dynamic list of Goods</h1>

    <button
      type="button"
      data-cy="all-button"
      onClick={() => handleClick(getAll)}
      className='button is-success'
    >
      Load all goods
    </button>

    <button
      type="button"
      data-cy="first-five-button"
      onClick={() => handleClick(get5First)}
      className='button is-warning'
    >
      Load 5 first goods
    </button>

    <button
      type="button"
      data-cy="red-button"
      onClick={() => handleClick(getRedGoods)}
      className='button is-danger'
    >
      Load red goods
    </button>

      <GoodsList goods={goods} />
  </div>
  )
};
