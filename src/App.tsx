import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum PressedButton {
  None,
  AllGoods,
  FirstFive,
  RedColor,
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  return String(error);
}

function getGoodsByButton(selectedButton: PressedButton) {
  switch (selectedButton) {
    case PressedButton.AllGoods:
      return getAll();

    case PressedButton.FirstFive:
      return get5First();

    case PressedButton.RedColor:
      return getRedGoods();

    default:
      return [];
  }
}

export const App: React.FC = () => {
  const [allGoods, setAllGoods] = useState<Good[]>([]);
  const [currentButton, setCurrentButton] = useState(PressedButton.None);
  const [error, setError] = useState('');

  const getGoods = async (selectedButton: PressedButton) => {
    if (selectedButton === currentButton) {
      return;
    }

    setCurrentButton(selectedButton);
    try {
      const goods = await getGoodsByButton(selectedButton);

      setAllGoods(goods);
    } catch (e) {
      setError(getErrorMessage(e));
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <Button
        type="button"
        data-cy="all-button"
        variant="outline-primary"
        className="Button"
        onClick={() => {
          if (currentButton !== PressedButton.AllGoods) {
            getGoods(PressedButton.AllGoods);
          }
        }}
      >
        Load all goods
      </Button>

      <Button
        type="button"
        data-cy="first-five-button"
        variant="outline-warning"
        className="Button"
        onClick={() => {
          if (currentButton !== PressedButton.FirstFive) {
            getGoods(PressedButton.FirstFive);
          }
        }}
      >
        Load 5 first goods
      </Button>

      <Button
        type="button"
        data-cy="red-button"
        variant="outline-danger"
        className="Button"
        onClick={() => {
          if (currentButton !== PressedButton.RedColor) {
            getGoods(PressedButton.RedColor);
          }
        }}
      >
        Load red goods
      </Button>
      {error !== '' && <span>{getErrorMessage(error)}</span> }
      {currentButton === PressedButton.None && allGoods.length === 0
        ? <div className="lds-hourglass" />
        : <GoodsList goods={allGoods} />}
    </div>
  );
};
