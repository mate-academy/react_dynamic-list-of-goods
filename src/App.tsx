import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);
  const [activeBtn, setActiveBtn] = useState<string>('none');

  useEffect(() => {
    switch (activeBtn) {
      case 'all':
        getAll().then(setGoodsList);
        break;

      case 'firstFive':
        get5First().then(setGoodsList);
        break;
        
      case 'red':
        getRedGoods().then(setGoodsList);
        break;

      default:
        setGoodsList([]);
    }
  }, [activeBtn]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => 
          setActiveBtn('all')
        }
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => 
          setActiveBtn('firstFive')
        }
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => 
          setActiveBtn('red')
        }
      >
        Load red goods
      </button>

      <GoodsList goods={goodsList} />
    </div>
  )
}
