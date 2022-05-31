import { Button, ButtonGroup, Typography } from '@mui/material';
import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import GoodsList from './api/components/GoodsList';

const App: React.FC = () => {
  const [dataFromServer, setDataFromServer] = useState([{
    id: 0,
    name: '',
    color: '',
  }]);

  return (
    <div className="app">
      <Typography variant="h2">Dynamic list of Goods</Typography>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button
          onClick={() => {
            getAll().then(goods => {
              setDataFromServer(goods);
            });
          }}
        >
          Show all goods
        </Button>

        <Button
          onClick={() => {
            get5First().then(goods => {
              setDataFromServer(goods);
            });
          }}
        >
          Show 5 first goods
        </Button>

        <Button
          onClick={() => {
            getRedGoods().then(goods => {
              setDataFromServer(goods);
            });
          }}
        >
          Show only red goods
        </Button>
      </ButtonGroup>

      <GoodsList dataFromServer={dataFromServer} />
    </div>
  );
};

export default App;
