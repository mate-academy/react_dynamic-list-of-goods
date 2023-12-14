import React, { useState } from 'react';
import './App.scss';
import { Good } from './types/Good';
import { GoodsList } from './GoodsList';
import { get5First, getRedGoods, getAll } from './api/goods';

const LOAD_ALL = 'Load all';
const LOAD_FIVE_FIRST = 'Load first 5';
const LOAD_RED = 'Load red';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good []>([]);
  // const [typeOfRender, setTypeOfRender] = useState('');

  const handleList = (event: React.MouseEvent<HTMLButtonElement>) => {
    const currentValue = event.currentTarget.value;

    if (currentValue === LOAD_ALL) {
      getAll()
        .then((godsFS) => {
          setGoods(godsFS);
        });
    }

    if (currentValue === LOAD_FIVE_FIRST) {
      get5First()
        .then((godsFS) => {
          setGoods(godsFS);
        });
    }

    if (currentValue === LOAD_RED) {
      getRedGoods()
        .then((godsFS) => {
          setGoods(godsFS);
        });
    }
  };

  // useEffect(() => {
  //   if (typeOfRender === LOAD_FIVE_FIRST) {
  //     get5First()
  //       .then((goodsFS) => {
  //         setGoods(goodsFS);
  //       });
  //   } else if (typeOfRender === LOAD_RED) {
  //     getRedGoods()
  //       .then((goodsFS) => {
  //         setGoods(goodsFS);
  //       });
  //   } else {
  //     getAll()
  //       .then((goodsFS) => {
  //         setGoods(goodsFS);
  //       });
  //   }
  // }, [typeOfRender]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        value={LOAD_ALL}
        onClick={(handleList)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        value={LOAD_FIVE_FIRST}
        onClick={handleList}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        value={LOAD_RED}
        onClick={handleList}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
