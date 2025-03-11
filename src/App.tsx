import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';



export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [activeList, setActiveList] = useState<string | null>(null);
  useEffect(() => {
    if (activeList === 'all'){
      getAll().then(setGoods);
    }
    else if(activeList === '5FirstGoods'){
      get5First().then((goods : Good[]) => goods.sort((good1 , good2)=> good1.name.localeCompare(good2.name)).slice(0,5)).then(setGoods)
    }
    else if(activeList === 'RedGoods'){
      getRedGoods().then((goods : Good[]) => goods.filter(((good)=> good.color.includes('red')))).then(setGoods)
    }

  }, [activeList]);


  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setActiveList('all')}
      >
        Load all goods
      </button>

      <button type="button"
              data-cy= "first-five-button"
              onClick={
                () => setActiveList('5FirstGoods')}>Load 5 first goods
      </button>

      <button type="button"
              data-cy="red-button"
              onClick={
                () => setActiveList('RedGoods')}>Load 5 first goods
      </button>


      <GoodsList goods={goods} />


    </div>
  );
};
