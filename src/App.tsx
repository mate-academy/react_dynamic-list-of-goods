import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [clickedButton, setClickedButton] = useState('');

  const loadAllGoods = async () => {
    try {
      const allGoods = await getAll();

      setGoods(allGoods);
    } catch (error) {
      setGoods([]);
    }
  };

  const loadFirstFiveGoods = async () => {
    try {
      const fiveFirstGoods = await get5First();

      setGoods(fiveFirstGoods);
    } catch (error) {
      setGoods([]);
    }
  };

  const loadRedGoods = async () => {
    try {
      const redGoods = await getRedGoods();

      setGoods(redGoods);
    } catch (error) {
      setGoods([]);
    }
  };

  // const loadGoods = async () => {
  //   try {
  //     switch (clickedButton) {
  //       case 'all-button':
  //         setGoods(await getAll());

  //         return;

  //       case 'first-five-button':
  //         setGoods(await get5First());

  //         return;

  //       case 'red-button':
  //         setGoods(await getRedGoods());

  //         return;

  //       default:
  //         setGoods([]);

  //         return;
  //     }
  //   } catch (error) {
  //     setGoods([]);
  //   }
  // };

  // const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   if (clickedButton !== event.currentTarget.id) {
  //     setClickedButton(event.currentTarget.id);
  //     loadGoods();
  //   }
  // };

  // useEffect(() => {
  //   loadGoods();
  // }, [clickedButton]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        id="all-button"
        onClick={(event) => {
          const { id } = event.currentTarget;

          if (clickedButton !== id) {
            setClickedButton(id);
            loadAllGoods();
          }
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        id="first-five-button"
        onClick={(event) => {
          const { id } = event.currentTarget;

          if (clickedButton !== id) {
            setClickedButton(id);
            loadFirstFiveGoods();
          }
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        id="red-button"
        onClick={(event) => {
          const { id } = event.currentTarget;

          if (clickedButton !== id) {
            setClickedButton(id);
            loadRedGoods();
          }
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
