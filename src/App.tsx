import React, { useEffect, useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [currentShowing, setCurrentShowing] = useState('none');

  async function finder() {
    let result;

    console.log(currentShowing);
    switch (currentShowing) {
      case 'all': {
        console.log(result);
        result = await getAll();
        setGoods(result);
        break;
      }

      case 'five': {
        result = await get5First();
        setGoods(result);
        break;
      }

      case 'red': {
        result = await getRedGoods();
        setGoods(result);
        break;
      }

      default: {
        setCurrentShowing('none');
      }
    }
  }

  useEffect(() => {
    finder();
  }, [currentShowing]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setCurrentShowing('all');
        }}
      >
        List Of Goods
      </button>
      <button
        type="button"
        onClick={() => {
          setCurrentShowing('five');
        }}
      >
        First 5 Goods
      </button>
      <button
        type="button"
        onClick={() => {
          setCurrentShowing('red');
        }}
      >
        Red Goods
      </button>
      <GoodsList goodsArray={goods} />
    </>
  );
};

export default App;
