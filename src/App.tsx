import React, { useState } from 'react';
import classNames from 'classnames';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './react-app-env';
import './App.scss';
import { Goods } from './components/Goods/Goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [unactive, setUnactive] = useState({
    unactiveAll: false,
    unactive5: false,
    unactiveRed: false,
  });

  const getGoods = async () => {
    const goodsAll = await getAll();

    setUnactive({ unactiveAll: true, unactiveRed: false, unactive5: false });
    setGoods(goodsAll);
  };

  const getGoods5 = async () => {
    const goods5 = await get5First();

    setUnactive({ unactiveAll: false, unactiveRed: false, unactive5: true });
    setGoods(goods5);
  };

  const getGoodsRed = async () => {
    const goodsRed = await getRedGoods();

    setUnactive({ unactiveAll: false, unactiveRed: true, unactive5: false });
    setGoods(goodsRed);
  };

  return (
    <div className="good">
      <h1 className="title auto is-centered">Dynamic list of Goods</h1>
      <div className="good__button-box">
        <button
          type="button"
          className={classNames(
            'button is-primary mx-2',
            {
              'is-static': unactive.unactiveAll,
            },
          )}
          onClick={getGoods}
        >
          Load All goods
        </button>
        <button
          type="button"
          className={classNames(
            'button is-primary mx-2',
            {
              'is-static': unactive.unactive5,
            },
          )}
          onClick={getGoods5}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          className={classNames(
            'button is-primary mx-2',
            {
              'is-static': unactive.unactiveRed,
            },
          )}
          onClick={getGoodsRed}
        >
          Load red goods
        </button>
      </div>

      <Goods goodsProp={goods} />
    </div>
  );
};

export default App;
