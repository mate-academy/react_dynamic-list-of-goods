import React, { useState } from 'react';
import './App.scss';
import { Paper, Button, ButtonGroup } from '@mui/material';

import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getGoods = (goodsFromServer: Promise<Good[]>) => (
    goodsFromServer.then(setGoods)
  );

  return (
    <div className="App">
      <Paper
        className="App__paper"
        elevation={20}
        sx={{
          padding: '50px 80px',
          width: 'max-content',
          margin: '0 auto',
          borderRadius: '10px',
        }}
      >
        <h1 className="App__title">Dynamic list of Goods</h1>

        <ButtonGroup
          variant="outlined"
          color="primary"
          size="large"
          aria-label="outlined primary button group"
        >
          <Button
            type="button"
            data-cy="all-button"
            onClick={() => getGoods(goodsAPI.getAll())}
          >
            Load all goods
          </Button>

          <Button
            type="button"
            data-cy="first-five-button"
            onClick={() => getGoods(goodsAPI.get5First())}
          >
            Load 5 first goods
          </Button>

          <Button
            type="button"
            data-cy="red-button"
            onClick={() => getGoods(goodsAPI.getRedGoods())}
          >
            Load red goods
          </Button>
        </ButtonGroup>
        <GoodsList goods={goods} />
      </Paper>
    </div>
  );
};
