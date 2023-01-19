import React, { useState } from 'react';
import './App.scss';
import 'bulma';

import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [selectedButton, setSelectedButton] = useState('');

  const openAllGoods = () => {
    getAll()
      .then((allGoods: Good[]) => {
        if (selectedButton !== 'all') {
          setSelectedButton('all');

          return setGoods(allGoods);
        }

        setSelectedButton('');

        return setGoods([]);
      });
  };

  const openFiveFirstGoods = () => {
    get5First()
      .then((firstFiveGoods: Good[]) => {
        if (selectedButton !== 'fiveGoods') {
          setSelectedButton('fiveGoods');

          return setGoods(firstFiveGoods);
        }

        setSelectedButton('');

        return setGoods([]);
      });
  };

  const openRedGoods = () => {
    getRedGoods()
      .then(redGoods => {
        if (selectedButton !== 'redGoods') {
          setSelectedButton('redGoods');

          return setGoods(redGoods);
        }

        setSelectedButton('');

        return setGoods([]);
      });
  };

  return (
    <div className="App box">
      <h1 className="title">Dynamic list of Goods</h1>

      <div className="App__buttons buttons">
        <button
          className={`button ${selectedButton === 'all' && 'is-warning is-light'}`}
          type="button"
          data-cy="all-button"
          onClick={openAllGoods}
        >
          Load all goods
        </button>

        <button
          className={`button ${selectedButton === 'fiveGoods' && 'is-primary is-light'}`}
          type="button"
          data-cy="first-five-button"
          onClick={openFiveFirstGoods}
        >
          Load 5 first goods
        </button>

        <button
          className={`button ${selectedButton === 'redGoods' && 'is-danger is-light'}`}
          type="button"
          data-cy="red-button"
          onClick={openRedGoods}
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};
