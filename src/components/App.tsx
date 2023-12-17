import React, { useEffect, useState } from 'react';
import 'bulma';
import '../App.scss';
import { GoodsList } from './GoodsList';
import { Good } from '../types/Good';
import { Buttons } from '../types/Buttons';

import { getAll, get5First, getRedGoods } from '../api/goods';
import { Loader } from './Loader/Loader';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [goodsButton, setgoodsButton] = useState<Buttons | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showNoGoodsMessage, setShowNoGoodsMessage] = useState(false);

  useEffect(() => {
    let goodsFromServer;

    switch (goodsButton) {
      case Buttons.All:
        goodsFromServer = getAll();
        break;
      case Buttons.fistFive:
        goodsFromServer = get5First();
        break;
      case Buttons.Red:
        goodsFromServer = getRedGoods();
        break;
      default:
        return;
    }

    setLoading(true);

    goodsFromServer
      .then((response: Good[]) => setTimeout(() => {
        setGoods(response);
        setShowNoGoodsMessage(true);
      }, 200))
      .catch(() => {
        setErrorMessage(`There was a problem with data collection.
        Please try again later`);
        setTimeout(() => {
          setErrorMessage('');
        }, 2000);
        setShowErrorMessage(true);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 200);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [goodsButton]);

  return (
    <div className="App m-3">
      <h1 className="title is-2">Dynamic list of Goods</h1>

      <button
        className="subtitle is-6"
        type="button"
        data-cy="all-button"
        onClick={() => setgoodsButton(Buttons.All)}
      >
        Load all goods
      </button>

      <button
        className="subtitle is-6"
        type="button"
        data-cy="first-five-button"
        onClick={() => setgoodsButton(Buttons.fistFive)}
      >

        Load 5 first goods
      </button>

      <button
        className="subtitle is-6"
        type="button"
        data-cy="red-button"
        onClick={() => setgoodsButton(Buttons.Red)}
      >
        Load red goods
      </button>

      {loading
      && !errorMessage.length
      && (
        <Loader />
      )}

      {goodsButton !== null
      && !loading
      && goods.length > 0
      && (
        <GoodsList goods={goods} />
      )}

      {
        showErrorMessage === false
        && showNoGoodsMessage
        && !errorMessage.length
        && goods.length === 0
        && (
          <p
            className="title is-2"
            style={
              { textAlign: 'center' }
            }
          >
            There are no goods
          </p>
        )
      }

      {errorMessage
      && (
        <p
          className="notification is-danger"
          style={
            { textAlign: 'center' }
          }
        >
          {errorMessage}
        </p>
      )}

    </div>
  );
};
