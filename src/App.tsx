import React, { useState } from 'react';
import './App.scss';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);
  const [isError, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const loadGoodsFromServer = async (data: Promise<Good[]>) => {
    setError(false);
    setLoading(true);
    setButtonDisabled(true);
    try {
      const currentGoods = await data;

      setTimeout(() => {
        setLoading(false);
        setGoods(currentGoods);
        setButtonDisabled(false);
      }, 1500);
    } catch (err) {
      setError(true);
    }
  };

  let displayElement;

  if (isError) {
    displayElement = (
      <Alert severity="error">
        Error loading data. Please try again later.
      </Alert>
    );
  } else if (loading) {
    displayElement = <span className="loader" />;
  } else {
    displayElement = <GoodsList goods={goods} />;
  }

  return (
    <div className="App">
      <h1 className="title">Dynamic list of Goods</h1>

      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button
          type="button"
          data-cy="all-button"
          onClick={() => loadGoodsFromServer(getAll())}
          className="button2"
          variant="contained"
          disabled={buttonDisabled}
        >
          Load all goods
        </Button>

        <Button
          type="button"
          data-cy="first-five-button"
          onClick={() => loadGoodsFromServer(get5First())}
          className="button2"
          variant="contained"
          disabled={buttonDisabled}
        >
          Load 5 first goods
        </Button>

        <Button
          type="button"
          data-cy="red-button"
          onClick={() => loadGoodsFromServer(getRedGoods())}
          className="button2"
          variant="contained"
          disabled={buttonDisabled}
        >
          Load red goods
        </Button>
      </ButtonGroup>

      {displayElement}
    </div>
  );
};
