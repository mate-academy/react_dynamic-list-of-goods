import React, { useState } from 'react';
import className from 'classnames';
import 'bulma/css/bulma.min.css';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import './App.scss';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isClicked, setIsClicked] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);

  const getGoods = async (goodsFromServer: Promise<Good[]>) => {
    setLoading(true);
    setHasError(false);

    try {
      const goodsList = await goodsFromServer;

      setGoods(goodsList);
      setIsInitialized(true);
      setLoading(false);
    } catch {
      setHasError(true);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1 className="App__title title">
        Dynamic list of Goods
      </h1>

      <div
        className="
          App__options
          list__options
          options"
      >
        <button
          className={className(
            'options__button',
            'button',
            'is-info',
            { 'is-loading': loading && isClicked === 'all-button' },
          )}
          type="button"
          data-cy="all-button"
          onClick={() => {
            getGoods(getAll());
            setIsClicked('all-button');
          }}
        >
          Load all goods
        </button>

        <button
          className={className(
            'options__button',
            'button',
            'is-warning',
            { 'is-loading': loading && isClicked === 'first-five-button' },
          )}
          type="button"
          data-cy="first-five-button"
          onClick={() => {
            getGoods(get5First());
            setIsClicked('first-five-button');
          }}
        >
          Load 5 first goods
        </button>

        <button
          className={className(
            'options__button',
            'button',
            'is-danger',
            { 'is-loading': loading && isClicked === 'red-button' },
          )}
          type="button"
          data-cy="red-button"
          onClick={() => {
            getGoods(getRedGoods());
            setIsClicked('red-button');
          }}
        >
          Load red goods
        </button>
      </div>

      {isInitialized
        && <GoodsList goods={goods} />}

      {loading && (
        <div
          className="
            App__notification
            notification
            is-primary
            is-light"
        >
          Loading data from server...
        </div>
      )}

      {hasError && (
        <div
          className="
            App__notification
            notification
            is-danger
            is-light"
        >
          Oh, no! Error during loading data from server!
        </div>
      )}
    </div>
  );
};
