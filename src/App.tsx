import React, { useEffect, useState } from 'react';
import './App.scss';

import { get5First, getAll, getRedGoods } from './api/goods';
import { GoodList } from './components/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [hasAll, setHasAll] = useState(false);
  const [hasFive, setHasFive] = useState(false);
  const [hasRed, setHasRed] = useState(false);

  useEffect(() => {
    if (hasAll) {
      getAll()
        .then(shownGoods => {
          setGoods(shownGoods);
        });
    }

    if (hasRed) {
      getRedGoods()
        .then(shownGoods => {
          const redGoods = shownGoods
            .filter((good: Good) => good.color === 'red');

          setGoods(redGoods);
        });
    }

    if (hasFive) {
      get5First()
        .then(shownGoods => {
          const shown5Goods = shownGoods
            .sort((a: Good, b: Good | any) => a.name.localeCompare(b.name))
            .splice(0, 5);

          setGoods(shown5Goods);
        });
    }
  });

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setHasFive(false);
          setHasRed(false);
          setHasAll(true);
        }}
      >
        All goods
      </button>

      <button
        type="button"
        onClick={() => {
          setHasAll(false);
          setHasRed(false);
          setHasFive(true);
        }}
      >
        5 goods
      </button>

      <button
        type="button"
        onClick={() => {
          setHasAll(false);
          setHasFive(false);
          setHasRed(true);
        }}
      >
        Red goods
      </button>

      <GoodList goods={goods} />
    </>
  );
};

export default App;
