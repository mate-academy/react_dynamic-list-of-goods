import React, { useState } from 'react';
import './App.scss';

import { getAll, getRed, get5First } from './api/goods';
import { GoodsList } from './components/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const all = () => {
    getAll().then(allGoods => setGoods(allGoods))
      .catch(error => alert(error.message));
  };

  const first5 = () => {
    get5First().then(someGoods => setGoods(someGoods))
      .catch(error => alert(error.message));
  };

  const red = () => {
    getRed().then(allGoods => setGoods(allGoods))
      .catch(error => alert(error.message));
  };

  return (
    <>
      <img
        className="header-image"
        src="https://i.kym-cdn.com/photos/images/facebook/001/696/528/588.jpg"
        alt="Henlo_card"
      />
      <br />
      <button
        type="button"
        className="button"
        onClick={all}
      >
        Render ALL
      </button>
      {' '}
      <button
        type="button"
        className="button"
        onClick={red}
      >
        Render Only Red
      </button>
      {' '}
      <button
        type="button"
        className="button"
        onClick={first5}
      >
        Render First 5
      </button>
      <GoodsList goods={goods} />
    </>
  );
};

export default App;
