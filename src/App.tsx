import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [methodShowGoods, setMothodShowGoods] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setErrorMessage('');
    switch (methodShowGoods) {
      case 'showAllgoods':
        setLoading(true);
        getAll()
          .then(goodsFromServer => {
            setGoods(goodsFromServer);
            setLoading(false);
          })
          .catch(() => {
            setLoading(false);
            setErrorMessage('Error, try again later');
          });
        break;
      case 'showFiveFirsGoods':
        setLoading(true);
        get5First()
          .then(goodsFromServer => {
            setGoods(goodsFromServer);
            setLoading(false);
          })
          .catch(() => {
            setLoading(false);
            setErrorMessage('Error, try again later');
          });
        break;
      case 'showRedGoods':
        setLoading(true);
        getRedGoods()
          .then(goodsFromServer => {
            setGoods(goodsFromServer);
            setLoading(false);
          })
          .catch(() => {
            setLoading(false);
            setErrorMessage('Error, try again later');
          });
    }
  }, [methodShowGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setMothodShowGoods('showAllgoods')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setMothodShowGoods('showFiveFirsGoods')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setMothodShowGoods('showRedGoods')}
      >
        Load red goods
      </button>

      {!loading && !errorMessage && goods.length > 0 && (
        <GoodsList goods={goods} />
      )}
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};
