import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { WhatShouldBeSorted } from './constants/whatShouldBeEarn';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [whatEarnFromServer, setWhatEarnFromServer] = useState(
    WhatShouldBeSorted.ALL,
  );

  useEffect(() => {
    let goodsForLoading;

    if (whatEarnFromServer === WhatShouldBeSorted.ALL) {
      goodsForLoading = getAll();
    }

    if (whatEarnFromServer === WhatShouldBeSorted.FIRST_FIVE) {
      goodsForLoading = get5First();
    }

    if (whatEarnFromServer === WhatShouldBeSorted.ONLY_RED) {
      goodsForLoading = getRedGoods();
    }

    if (goodsForLoading) {
      goodsForLoading.then(loadedGoods => {
        setGoods(loadedGoods);
      });
    }
  }, [whatEarnFromServer]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setWhatEarnFromServer(WhatShouldBeSorted.ALL)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setWhatEarnFromServer(WhatShouldBeSorted.FIRST_FIVE)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setWhatEarnFromServer(WhatShouldBeSorted.ONLY_RED)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
