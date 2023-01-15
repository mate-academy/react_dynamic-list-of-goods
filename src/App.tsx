import 'bulma/css/bulma.css';
import React, { useState } from 'react';
import { get5First, getAll, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [selectedButton, setSelectedButton] = useState('');

  const handleClickGoods = async () => {
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

  const handleClick5First = async () => {
    get5First()
      .then((first5Goods: Good[]) => {
        if (selectedButton !== 'five') {
          setSelectedButton('five');

          return setGoods(first5Goods);
        }

        setSelectedButton('');

        return setGoods([]);
      });
  };

  const handleClickRedGoods = async () => {
    getRedGoods()
      .then(redGoods => {
        if (selectedButton !== 'red') {
          setSelectedButton('red');

          return setGoods(redGoods);
        }

        setSelectedButton('');

        return setGoods([]);
      });
  };

  return (
    <div className="columns">
      <div className="column"></div>
      <div
        className="App box"
      >
        <h1 className="title">
          Dynamic list of Goods
        </h1>

        <button
          className={`button ${selectedButton === 'all' && 'is-primary'}`}
          type="button"
          data-cy="all-button"
          onClick={handleClickGoods}
        >
          Load all goods
        </button>

        <button
          className={`button ${selectedButton === 'five' && 'is-primary'}`}
          type="button"
          data-cy="first-five-button"
          onClick={handleClick5First}
        >
          Load 5 first goods
        </button>

        <button
          className={`button ${selectedButton === 'red' && 'is-primary'}`}
          type="button"
          data-cy="red-button"
          onClick={handleClickRedGoods}
        >
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </div>
      <div className="column"></div>
    </div>
  );
};
