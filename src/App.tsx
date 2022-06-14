import React, { useState } from 'react';
import './App.scss';
import classNames from 'classnames';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './Components/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isActiveAll, setIsActiveAll] = useState(false);
  const [isActiveFive, setIsActiveFive] = useState(false);
  const [isActiveRed, setIsActiveRed] = useState(false);

  async function goodsAllHandler() {
    setGoods(await getAll());
    setIsActiveAll(true);
    setIsActiveFive(false);
    setIsActiveRed(false);
  }

  async function goodsFiveHandler() {
    setGoods(await get5First());
    setIsActiveAll(false);
    setIsActiveFive(true);
    setIsActiveRed(false);
  }

  async function goodsRedHandler() {
    setGoods(await getRedGoods());
    setIsActiveAll(false);
    setIsActiveFive(false);
    setIsActiveRed(true);
  }

  return (
    <div className="content">
      <div className="buttons has-addons">
        <button
          type="button"
          onClick={goodsAllHandler}
          className={classNames('button', {
            'is-warning': isActiveAll,
          })}
        >
          Show All Goods
        </button>
        <button
          type="button"
          onClick={goodsFiveHandler}
          className={classNames('button', {
            'is-warning': isActiveFive,
          })}
        >
          Show 5 Goods
        </button>
        <button
          type="button"
          onClick={goodsRedHandler}
          className={classNames('button', {
            'is-warning': isActiveRed,
          })}
        >
          Show Red Goods
        </button>
      </div>
      <GoodsList goods={goods} />
    </div>
  );
};

export default App;
