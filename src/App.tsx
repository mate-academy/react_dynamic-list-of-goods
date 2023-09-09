import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [selectedGoods, setSelectedGoods] = useState<Good[]>([]);
  const [currentButton, setCurrentButton] = useState('');

  useEffect(() => {
    if (!currentButton) {
      setSelectedGoods([]);
    } else {
      
    }
  }, [currentButton]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.dataset.cy);
  };

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   const buttonText = event.currentTarget.textContent;

  //   switch (buttonText) {
  //     case 'Load all goods':
  //       setCurrentButton(getAll());
  //       break;

  //     case 'Load 5 first goods':
  //       setCurrentButton(get5First);
  //       break;

  //     case 'Load red goods':
  //       setCurrentButton(getRedGoods);
  //       break;

  //     default:
  //       setCurrentButton([]);
  //   }
  // };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={handleClick}
        // onClick={(event) => {
        //   setCurrentButton(event.currentTarget.textContent || '')
        // }}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={handleClick}
        // onClick={(event) => setCurrentButton(event.currentTarget.textContent || '')}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={handleClick}
        // onClick={(event) => setCurrentButton(event.currentTarget.textContent || '')}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={selectedGoods} />
    </div>
  );
};
