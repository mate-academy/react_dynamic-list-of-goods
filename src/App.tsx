import { FC, useState } from 'react';
import './App.scss';
import { Box } from '@mui/material';
import { FilterButton } from './Button';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = () => {
    getAll()
      .then(result => setGoods(result));
  };

  const getFirstFiveGoods = () => {
    get5First()
      .then(result => setGoods(result));
  };

  const getRedGoods = () => {
    getRed()
      .then(result => setGoods(result));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <div className="App">
        <h1 style={{ color: '#ff5722' }}>
          Dynamic list of Goods
        </h1>

        <FilterButton
          dataCy="all-button"
          onClick={getAllGoods}
        >
          Load all goods
        </FilterButton>

        <FilterButton
          dataCy="first-five-button"
          onClick={getFirstFiveGoods}
        >
          Load 5 first goods
        </FilterButton>

        <FilterButton
          dataCy="red-button"
          onClick={getRedGoods}
        >
          Load red goods
        </FilterButton>

        <GoodsList goods={goods} />
      </div>
    </Box>
  );
};
