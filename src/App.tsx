import React, { useState } from 'react';
import './App.scss';
import { Button, Card } from 'semantic-ui-react';

import { GoodsList } from './GoodsList';
import 'semantic-ui-css/semantic.min.css';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from "./api/goods";

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);

  const handlerGetGoods = async (promise: Promise<Good[]>) => {
    try {
      setLoading(true);
      const myGoods = await promise;

      setGoods(myGoods);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Card>
        <Card.Content>
          <h1>Dynamic list of Goods</h1>
        </Card.Content>

        <Card.Content extra textAlign="center">
          <Button.Group vertical widths="3">
            <Button
              type="button"
              data-cy="all-button"
              color="green"
              onClick={() => handlerGetGoods(getAll())}
            >
              Load all goods
            </Button>

            <Button
              type="button"
              data-cy="first-five-button"
              color="teal"
              onClick={() => handlerGetGoods(get5First())}
            >
              Load 5 first goods
            </Button>

            <Button
              type="button"
              data-cy="red-button"
              color="red"
              onClick={() => handlerGetGoods(getRedGoods())}
            >
              Load red goods
            </Button>
          </Button.Group>
        </Card.Content>
        <Card.Content>
          {!goods.length ? (
            <p style={{ textAlign: 'center' }}>please press the button</p>
          ) : (
            <GoodsList goods={goods} loading={loading} />
          )}
        </Card.Content>
      </Card>
    </div>
  );
};
