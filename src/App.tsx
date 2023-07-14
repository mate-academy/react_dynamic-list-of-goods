import React, { useState } from 'react';

import './App.scss';
import { GoodsList } from './components/GoodList/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { Loader } from './components/Loader/Loader';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGoods = (getGoods: () => Promise<Good[]>) => {
    setIsLoading(true);

    getGoods()
      .then(setGoods)
      .catch(() => setErrorMessage('Try again later'))
      .finally(() => setIsLoading(false));
  };

  const renderContent = () => {
    if (isLoading) {
      return <Loader />;
    }

    if (errorMessage) {
      return (
        <p>
          {errorMessage}
        </p>
      );
    }

    return <GoodsList goods={goods} />;
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleGoods(() => getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleGoods(() => get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleGoods(() => getRedGoods())}
      >
        Load red goods
      </button>

      {renderContent()}
    </div>
  );
};
