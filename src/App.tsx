import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Button, Good } from './types';
import { getAll, get5First, getRedGoods } from './api/goods';

const buttons: Button[] = [
  {
    label: 'Load all goods',
    dataCy: 'all-button',
    getGoods: getAll,
    style: 'is-primary',
  },
  {
    label: 'Load 5 first goods',
    dataCy: 'first-five-button',
    getGoods: get5First,
    style: 'is-info',
  },
  {
    label: 'Load red goods',
    dataCy: 'red-button',
    getGoods: getRedGoods,
    style: 'is-danger',
  },
];

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  type GetGoods = () => Promise<Good[]>;

  const onButtonClick = (getGoods:GetGoods) => {
    setIsLoading(true);
    setError(null);

    setTimeout(() => {
      getGoods()
        .then((data) => {
          setGoods(data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 1000);
  };

  return (
    <div className="App section">
      <h1 className="title">Dynamic list of Goods</h1>
      {buttons.map(({
        label, dataCy, getGoods, style,
      }) => (
        <button
          key={label}
          type="button"
          data-cy={dataCy}
          onClick={
            () => onButtonClick(getGoods)
          }
          className={`button mr-2 ${style}`}
        >
          {label}
        </button>
      ))}

      <div className="section is-size-4 is-half">

        {isLoading && <p className="has-text-info">Loading...</p>}
        {error && <p className="has-text-danger-dark">{error.message}</p>}

        {!isLoading && !error && <GoodsList goods={goods} />}
      </div>

    </div>
  );
};
