import React, { useState } from 'react';
import './App.scss';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GoodsList } from './GoodsList/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const handleClickAllGoods = async () => {
    const response = await getAll();

    setVisibleGoods(response);
  };

  const handleClick5FirstGoods = async () => {
    const response = await get5First();

    setVisibleGoods(response);
  };

  const handleClickRedGoods = async () => {
    const response = await getRedGoods();

    setVisibleGoods(response);
  };

  return (
    <div className="App">
      <Typography
        variant="h4"
        noWrap
        component="div"
        sx={{
          margin: '30px',
          textTransform: 'uppercase',
          color: '#3688D8',
        }}
      >
        Dynamic list of Goods
      </Typography>

      <div className="App_btn-container">
        <Button
          variant="outlined"
          sx={{ margin: '10px' }}
          type="button"
          data-cy="all-button"
          onClick={handleClickAllGoods}
        >
          Load all goods
        </Button>

        <Button
          variant="outlined"
          sx={{ margin: '10px' }}
          type="button"
          data-cy="first-five-button"
          onClick={handleClick5FirstGoods}
        >
          Load 5 first goods
        </Button>

        <Button
          variant="outlined"
          sx={{ margin: '10px' }}
          type="button"
          data-cy="red-button"
          onClick={handleClickRedGoods}
        >
          Load red goods
        </Button>
      </div>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};
