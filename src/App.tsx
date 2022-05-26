import React, { useState } from 'react';
import './App.scss';
import { GoodList } from './components/GoodList';


import * as goodsAPI from './api/goods';

import Class from 'classnames';

const App: React.FC = () => {

  const [goods, changeGoods] = useState<Good[]>([]);
  const [isWaitingForResult, setWaiting] = useState(false);

  const handleButton = async (asyncronicFunc: () => Promise<Good[]>) => {

    if (isWaitingForResult) {
      return;
    }

    setWaiting(true);

    const totalGoods = await asyncronicFunc();

    changeGoods(totalGoods);
    setWaiting(false);
  }

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <button
        className={
          Class("button",
            {"is-loading": isWaitingForResult},
            {"is-primary": !isWaitingForResult}
          )}
        type="button"
        onClick={() => handleButton(goodsAPI.getAll)}
      >
        ShowAll
      </button>

      <button
        className={
          Class("button",
            {"is-loading": isWaitingForResult},
            {"is-primary": !isWaitingForResult}
          )}
        type="button"
        onClick={() => handleButton(goodsAPI.get5First)}
      >
        First5
      </button>
      <button
        className={
          Class("button",
            {"is-loading": isWaitingForResult},
            {"is-primary": !isWaitingForResult}
          )}
        type="button"
        onClick={() => handleButton(goodsAPI.getRedGoods)}
      >
        Only Red
      </button>
      <GoodList goods={goods} />
    </>
  )
}

export default App;
