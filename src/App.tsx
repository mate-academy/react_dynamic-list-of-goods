import React, { useState } from 'react';

import './App.scss';

import GoodsList from './components/GoodsList';

import * as goodsAPI from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsLoading(true);
    switch (event.currentTarget.value) {
      case '0': {
        const response = await goodsAPI.getAll();

        setGoods(response);
        break;
      }

      case '1': {
        const response = await goodsAPI.get5First();

        setGoods(response);
        break;
      }

      case '2': {
        const response = await goodsAPI.getRedGoods();

        setGoods(response);
        break;
      }

      default:
        break;
    }

    setIsLoading(false);
  };

  return (
    <div className="container w-25 d-flex flex-column align-items-center">
      <h1 className="text-center">Dynamic list of Goods</h1>

      <div className="btn-group w-100" role="group">
        <button
          type="button"
          className="btn btn-outline-primary"
          value={0}
          onClick={handleClick}
          disabled={isLoading}
        >
          Load all goods
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          value={1}
          onClick={handleClick}
          disabled={isLoading}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          value={2}
          onClick={handleClick}
          disabled={isLoading}
        >
          Load red goods
        </button>
      </div>

      {isLoading
        ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )
        : (
          <GoodsList goods={goods} />
        )}
    </div>
  );
};

export default App;
