import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

const initialList: Good[] | [] = [];

enum ButtonActive {
  allList,
  fiveList,
  redList,
  none,
}

export const App: React.FC = () => {
  const [listToShow, setListToShow] = useState(initialList);
  const [buttonActive, setButtonActive] = useState(ButtonActive.none);

  const handleClickAll = () => {
    setButtonActive(ButtonActive.allList);

    return getAll()
      .then(goods => setListToShow([...goods]));
  };

  const handleClick5First = () => {
    setButtonActive(ButtonActive.fiveList);

    return get5First()
      .then(goods => setListToShow([...goods]));
  };

  const handleClickRedGoods = () => {
    setButtonActive(ButtonActive.redList);

    return getRedGoods()
      .then(goods => setListToShow([...goods]));
  };

  return (
    <div className="App">
      <h1 className="title">
        Dynamic list of Goods
      </h1>
      <div className="buttons">
        <button
          type="button"
          data-cy="all-button"
          onClick={handleClickAll}
          className={buttonActive === ButtonActive.allList
            ? 'button is-success'
            : 'button'}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={handleClick5First}
          className={buttonActive === ButtonActive.fiveList
            ? 'button is-success'
            : 'button'}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={handleClickRedGoods}
          className={buttonActive === ButtonActive.redList
            ? 'button is-success'
            : 'button'}
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={listToShow} />
    </div>
  );
};
