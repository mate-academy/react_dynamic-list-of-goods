import React, { useState } from 'react';
import './App.scss';

import * as goodsAPI from './api/goods';
import { GoodsList } from './components/GoodList';
import All from './image/All.png';
import Five from './image/Five.png';
import Red from './image/Red.png';

const App: React.FC = () => {
  const [state, SetState] = useState<Good[]>([]);

  const all = async () => {
    SetState(await goodsAPI.getAll());
  };

  const getFive = async () => {
    SetState(await goodsAPI.get5First());
  };

  const getRed = async () => {
    SetState(await goodsAPI.getRedGoods());
  };

  return (
    <div className="app">
      <div className="app__block">

        {
          state.length !== 0 && <GoodsList state={state} />
        }

        <div className="app__buttons">
          <button
            type="button"
            onClick={all}
            className="app__button"
          >
            <img
              src={All}
              alt="All"
              className="app__button--image"
            />
          </button>

          <button
            type="button"
            onClick={getFive}
            className="app__button"
          >
            <img
              src={Five}
              alt="Five"
              className="app__button--image"
            />
          </button>

          <button
            type="button"
            onClick={getRed}
            className="app__button"
          >
            <img
              src={Red}
              alt="Red"
              className="app__button--image"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
