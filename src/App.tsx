// import React from 'react';
// import './App.scss';
// import { GoodsList } from './GoodsList';

// // import { getAll, get5First, getRed } from './api/goods';
// // or
// // import * as goodsAPI from './api/goods';

// export const App: React.FC = () => (
//   <div className="App">
//     <h1>Dynamic list of Goods</h1>

//     <button type="button" data-cy="all-button">
//       Load all goods
//     </button>

//     <button type="button" data-cy="first-five-button">
//       Load 5 first goods
//     </button>

//     <button type="button" data-cy="red-button">
//       Load red goods
//     </button>

//     <GoodsList goods={[]} />
//   </div>
// );

import React, { useState } from 'react';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';
import './App.scss';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = () => {
    goodsAPI.getAll().then(setGoods);
  };

  const handleLoadFirstFive = () => {
    goodsAPI.getFirst5().then(setGoods);
  };

  const handleLoadRed = () => {
    goodsAPI.getRed().then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirstFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      {goods.length > 0 && <GoodsList goods={goods} />}
      {goods.length === 0 && <p>Натисніть кнопку, щоб завантажити товари.</p>}
    </div>
  );
};
