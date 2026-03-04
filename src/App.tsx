import * as React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsFromServer, setGoodsFromServer] = React.useState<Good[]>();
  const [errorMessage, setErrorMessage] = React.useState('');

  const loadAllGoods = () => {
    getAll()
      .then(setGoodsFromServer)
      .catch(() => {
        setErrorMessage('Can not load goods');
      });
  };

  const loadFiveGoods = () => {
    get5First()
      .then(setGoodsFromServer)
      .catch(() => {
        setErrorMessage('Can not load goods');
      });
  };

  const handleLoadRed = () => {
    getRedGoods()
      .then(setGoodsFromServer)
      .catch(() => {
        setErrorMessage('Can not load goods');
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {errorMessage && (
        <p style={{ color: 'red' }} data-cy="error-message">
          {errorMessage}
        </p>
      )}

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          loadAllGoods();
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          loadFiveGoods();
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          handleLoadRed();
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goodsFromServer || []} />
    </div>
  );
};
