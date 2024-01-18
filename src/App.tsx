import React, { useEffect, useState } from 'react';
import './App.scss';
import cn from 'classnames';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Conditions } from './types/Conditions';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [condition, setCondition] = useState(Conditions.all);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    setLoading(true);

    switch (condition) {
      case Conditions.first5:
        get5First()
          .then(setGoods)
          .catch(err => {
            setErrorMsg(err.message);
            setGoods([]);
          })
          .finally(() => setLoading(false));
        break;

      case Conditions.red:
        getRedGoods()
          .then(setGoods)
          .catch(err => {
            setErrorMsg(err.message);
            setGoods([]);
          })
          .finally(() => setLoading(false));
        break;

      default:
        getAll()
          .then(setGoods)
          .catch(err => {
            setErrorMsg(err.message);
          })
          .finally(() => setLoading(false));
    }
  }, [condition]);

  return (
    <div className="App box">
      <h1 className="title color-$cyan">Dynamic list of Goods</h1>

      <div className="buttons">
        <button
          type="button"
          data-cy="all-button"
          onClick={() => setCondition(Conditions.all)}
          className={cn('button', 'is-dark', {
            'is-danger': condition === Conditions.all,
          })}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={() => setCondition(Conditions.first5)}
          className={cn('button', 'is-dark', {
            'is-danger': condition === Conditions.first5,
          })}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          className={cn('button', 'is-dark', {
            'is-danger': condition === Conditions.red,
          })}
          onClick={() => setCondition(Conditions.red)}
        >
          Load red goods
        </button>
      </div>

      {loading && (
        <span className="bulma-loader-mixin" />
      )}

      {errorMsg && (
        <p className="notification is-warning">
          {errorMsg}
        </p>
      )}

      {!!goods.length && (
        <GoodsList goods={goods} />
      )}

    </div>
  );
};
