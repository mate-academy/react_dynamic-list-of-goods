import React, { useState } from 'react';
import classNames from 'classnames';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [filteredGoods, setFilteredGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [activeButton, setActiveButton] = useState<string>(''); // Додали стан для активної кнопки

  const handleAllGoods = () => {
    getAll()
      .then(setFilteredGoods)
      .catch(error => setErrorMessage(error.message));
    setActiveButton('all');
  };

  const handleFiveFirst = () => {
    get5First()
      .then(setFilteredGoods)
      .catch(error => setErrorMessage(error.message));
    setActiveButton('five');
  };

  const handleRedGoods = () => {
    getRedGoods()
      .then(setFilteredGoods)
      .catch(error => setErrorMessage(error.message));
    setActiveButton('red');
  };

  return (
    <div className="App box">
      <h1 className="title">Dynamic list of Goods</h1>

      <div className="App__buttons">
        <button
          type="button"
          data-cy="all-button"
          className={classNames('button', 'is-primary',
            { 'is-warning': activeButton === 'all' })}
          onClick={handleAllGoods}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          className={classNames('button', 'is-primary',
            { 'is-warning': activeButton === 'five' })}
          onClick={handleFiveFirst}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          className={classNames('button', 'is-primary',
            { 'is-warning': activeButton === 'red' })}
          onClick={handleRedGoods}
        >
          Load red goods
        </button>
      </div>
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <GoodsList goods={filteredGoods} />
      )}
    </div>
  );
};
