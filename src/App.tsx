import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [preparedGoodsList, setPreparedGoodsList] = React.useState<Good[]>([]);
  const [hasError, setHasError] = React.useState<boolean>(false);

  const getDataToRender = (source: Promise<Good[]>): void => {
    setHasError(false);

    source.then(setPreparedGoodsList).catch(() => {
      setHasError(true);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => getDataToRender(getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          getDataToRender(get5First());
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          getDataToRender(getRedGoods());
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={preparedGoodsList} />
      {hasError && <p>Something went wrong</p>}
    </div>
  );
};
