import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

const getGoods = () => {
  return fetch(
    'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json',
  ).then(response => response.json()).catch((error) => {
    throw new Error(error);
  });
};

export const App: React.FC = () => {
  const [goods, setGoods] = useState([]);

  const renderAllGoods = () => {
    getGoods().then(json => {
      setGoods(json);
    });
  };

  const renderFiveGoods = () => {
    getGoods().then(json => {
      const sortGoodsByName = json.sort((a: Good, b: Good) => (
        a.name.localeCompare(b.name)
      ));

      setGoods(sortGoodsByName.slice(0, 5));
    });
  };

  const renderRedGoods = () => {
    getGoods().then(json => {
      const redGoods = json.filter((good: Good) => good.color === 'red');

      setGoods(redGoods);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={renderAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={renderFiveGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={renderRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
