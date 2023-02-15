import React, { useState } from 'react';
import './App.scss';
import classNames from 'classnames';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { ActiveButton } from './types/ActiveButton';

import 'bulma/css/bulma.css';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [
    activeButton,
    setButtonType,
  ] = useState<ActiveButton>(ActiveButton.NONE);

  const handleAllGoodsButton = async () => {
    try {
      const visibleGood = await getAll();

      setButtonType(ActiveButton.ALL);
      setGoods(visibleGood);
    } catch (error) {
      throw new Error('There is problem with loading data, please try later');
    }
  };

  const handleFiveGoodsButton = async () => {
    try {
      const visibleGood = await get5First();

      setButtonType(ActiveButton.FIVE);
      setGoods(visibleGood);
    } catch (error) {
      throw new Error('There is problem with loading data, please try later');
    }
  };

  const handleRedGoodsButton = async () => {
    try {
      const visibleGood = await getRedGoods();

      setButtonType(ActiveButton.RED);
      setGoods(visibleGood);
    } catch (error) {
      throw new Error('There is problem with loading data, please try later');
    }
  };

  return (
    <div className="App">
      <h1 className="title is-2">Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAllGoodsButton}
        className={classNames('button', 'is-info',
          { 'is-success': activeButton === ActiveButton.ALL })}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFiveGoodsButton}
        className={classNames('button', 'is-info',
          { 'is-success': activeButton === ActiveButton.FIVE })}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRedGoodsButton}
        className={classNames('button', 'is-info',
          { 'is-success': activeButton === ActiveButton.RED })}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
