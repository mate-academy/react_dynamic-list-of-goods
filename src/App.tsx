import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll } from './utils/httpClients';
import { Good } from './types/Good';
import { getFirstFive } from './servises/firstFiveButton';
import { getRed } from './servises/red';

export const App: React.FC = () => {
  const [hasClick, setHasClick] = useState(false);
  const [buttonType, setButtonType] = useState('');
  const [goods, setGoods] = useState<Good[]>([]);

  useEffect(() => {
    if (buttonType === 'all') {
      getAll().then(setGoods);
    } else if (buttonType === 'first-five') {
      getFirstFive().then(setGoods);
    } else if (buttonType === 'red') {
      getRed().then(setGoods);
    }
  }, [buttonType]);

  function handleAllButton() {
    setButtonType('all');
    setHasClick(true);
  }

  function handleFirstFiveButon() {
    setButtonType('first-five');
    setHasClick(true);
  }

  function handleRedButton() {
    setButtonType('red');
    setHasClick(true);
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllButton}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirstFiveButon}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedButton}>
        Load red goods
      </button>

      {hasClick && <GoodsList goods={goods} />}
    </div>
  );
};
