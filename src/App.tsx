import React, { useState } from 'react';
import './App.scss';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Loader } from './Components/Loader';
import { AlertMessage } from './Components/Alert/Alert';

function getErrorMessage(error: unknown) {
  return error instanceof Error
    ? error.message
    : String(error);
}

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleGetGoods = async (getGood: () => Promise<Good[]>) => {
    setIsLoading(true);

    try {
      const goods = await getGood();

      setGoodsList(goods);
    } catch (error) {
      setErrorMessage(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1 className="App__title">Dynamic list of Goods</h1>

      <ButtonGroup>
        <Button
          variant="secondary"
          onClick={() => handleGetGoods(getAll)}
          type="button"
          data-cy="all-button"
        >
          Load all goods
        </Button>

        <Button
          variant="warning"
          onClick={() => handleGetGoods(get5First)}
          type="button"
          data-cy="first-five-button"
        >
          Load 5 first goods
        </Button>

        <Button
          variant="danger"
          onClick={() => handleGetGoods(getRedGoods)}
          type="button"
          data-cy="red-button"
        >
          Load red goods
        </Button>
      </ButtonGroup>

      {!isLoading ? <GoodsList goods={goodsList} /> : <Loader />}
      {errorMessage && <AlertMessage error={errorMessage} />}
    </div>
  );
};
