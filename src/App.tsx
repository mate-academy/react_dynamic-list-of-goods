import React, { useState } from 'react';
import './App.scss';
import classNames from 'classnames';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

import 'bulma/css/bulma.css';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isAllGoodsVisible, setAllGoodsVisible] = useState(false);
  const [isFiveGoodsVisible, setFiveGoodsVisible] = useState(false);
  const [isRedGoodsVisible, setRedGoodsVisible] = useState(false);

  const handleAllGoodsButton = async () => {
    const visibleGood = await getAll();

    setGoods(visibleGood);
    setAllGoodsVisible(true);
    setFiveGoodsVisible(false);
    setRedGoodsVisible(false);
  };

  const handleFiveGoodsButton = async () => {
    const visibleGood = await get5First();

    setGoods(visibleGood);
    setAllGoodsVisible(false);
    setFiveGoodsVisible(true);
    setRedGoodsVisible(false);
  };

  const handleRedGoodsButton = async () => {
    const visibleGood = await getRedGoods();

    setGoods(visibleGood);
    setAllGoodsVisible(false);
    setFiveGoodsVisible(false);
    setRedGoodsVisible(true);
  };

  return (
    <div className="App">
      <h1 className="title is-2">Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAllGoodsButton}
        className={classNames('button', 'is-info',
          { 'is-success': isAllGoodsVisible })}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFiveGoodsButton}
        className={classNames('button', 'is-info',
          { 'is-success': isFiveGoodsVisible })}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRedGoodsButton}
        className={classNames('button', 'is-info',
          { 'is-success': isRedGoodsVisible })}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
