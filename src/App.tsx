import React, { useState } from 'react';
import './App.scss';
import {
  Container,
  Stack,
  Button,
  Typography,
} from '@mui/material';

import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [
    allButtonVariant,
    setAllButtonVariant,
  ] = useState<'outlined' | 'contained'>('outlined');

  const [
    firstFiveButtonVariant,
    setFirstFiveButtonVariant,
  ] = useState<'outlined' | 'contained'>('outlined');

  const [
    redButtonVariant,
    setRedButtonVariant,
  ] = useState<'outlined' | 'contained'>('outlined');

  const handleLoadAll = async () => {
    if (allButtonVariant === 'outlined') {
      setGoods(await getAll());
      setAllButtonVariant('contained');
      setFirstFiveButtonVariant('outlined');
      setRedButtonVariant('outlined');
    } else {
      setGoods([]);
      setAllButtonVariant('outlined');
    }
  };

  const handle5First = async () => {
    if (firstFiveButtonVariant === 'outlined') {
      setGoods(await get5First());
      setAllButtonVariant('outlined');
      setFirstFiveButtonVariant('contained');
      setRedButtonVariant('outlined');
    } else {
      setGoods([]);
      setFirstFiveButtonVariant('outlined');
    }
  };

  const handleRed = async () => {
    if (redButtonVariant === 'outlined') {
      setGoods(await getRedGoods());
      setAllButtonVariant('outlined');
      setFirstFiveButtonVariant('outlined');
      setRedButtonVariant('contained');
    } else {
      setGoods([]);
      setRedButtonVariant('outlined');
    }
  };

  return (
    <div className="App">
      <Container maxWidth="sm">

        <Typography
          variant="h3"
          component="h1"
          align="center"
          sx={{
            margin: '30px 0',
          }}
        >
          Dynamic list of Goods
        </Typography>

        <Stack
          spacing={2}
          direction="row"
          sx={{
            justifyContent: 'center',
            marginBottom: '30px',
          }}
        >
          <Button
            variant={allButtonVariant}
            type="button"
            onClick={handleLoadAll}
          >
            Load all goods
          </Button>
          <Button
            variant={firstFiveButtonVariant}
            type="button"
            onClick={handle5First}
          >
            Load 5 first goods
          </Button>
          <Button
            variant={redButtonVariant}
            type="button"
            onClick={handleRed}
          >
            Load red goods
          </Button>
        </Stack>

        {goods.length > 0 && <GoodsList goods={goods} />}
      </Container>
    </div>
  );
};
