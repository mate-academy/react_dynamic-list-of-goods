import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

export const App: React.FC = () => {
  const [sortBy, setSortBy] = useState<string>('');

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setSortBy('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setSortBy('first-five')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setSortBy('red')}
      >
        Load red goods
      </button>

      <GoodsList sortBy={sortBy} />
    </div>
  );
};
