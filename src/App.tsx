import React, { useState } from 'react';
import './App.scss';
import classNames from 'classnames';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './Components/GoodsList';

enum Active {
  ActiveAll = 'activeAll',
  ActiveFive = 'activeFive',
  ActiveRed = 'activeRed',
}

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [activState, setActiveState] = useState('');

  async function goodsAllHandler() {
    setGoods(await getAll());
    setActiveState(Active.ActiveAll);
  }

  async function goodsFiveHandler() {
    setGoods(await get5First());
    setActiveState(Active.ActiveFive);
  }

  async function goodsRedHandler() {
    setGoods(await getRedGoods());
    setActiveState(Active.ActiveRed);
  }

  return (
    <div className="content">
      <div className="buttons has-addons">
        <button
          type="button"
          onClick={goodsAllHandler}
          className={classNames('button', {
            'is-warning': activState === 'activeAll',
          })}
        >
          Show All Goods
        </button>
        <button
          type="button"
          onClick={goodsFiveHandler}
          className={classNames('button', {
            'is-warning': activState === 'activeFive',
          })}
        >
          Show 5 Goods
        </button>
        <button
          type="button"
          onClick={goodsRedHandler}
          className={classNames('button', {
            'is-warning': activState === 'activeRed',
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
