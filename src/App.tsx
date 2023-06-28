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

  enum ButtonVariant {
    outlined = 'outlined',
    contained = 'contained',
  }

  const [buttonVariants, setButtonVariants] = useState({
    all: ButtonVariant.outlined,
    firstFive: ButtonVariant.outlined,
    red: ButtonVariant.outlined,
  });

  const handleLoadAll = async () => {
    if (buttonVariants.all !== ButtonVariant.outlined) {
      setGoods([]);
      setButtonVariants({
        all: ButtonVariant.outlined,
        firstFive: ButtonVariant.outlined,
        red: ButtonVariant.outlined,
      });

      return;
    }

    setGoods(await getAll());
    setButtonVariants({
      all: ButtonVariant.contained,
      firstFive: ButtonVariant.outlined,
      red: ButtonVariant.outlined,
    });
  };

  const handle5First = async () => {
    if (buttonVariants.firstFive !== ButtonVariant.outlined) {
      setGoods([]);
      setButtonVariants({
        all: ButtonVariant.outlined,
        firstFive: ButtonVariant.outlined,
        red: ButtonVariant.outlined,
      });

      return;
    }

    setGoods(await get5First());
    setButtonVariants({
      all: ButtonVariant.outlined,
      firstFive: ButtonVariant.contained,
      red: ButtonVariant.outlined,
    });
  };

  const handleRed = async () => {
    if (buttonVariants.red !== ButtonVariant.outlined) {
      setGoods([]);
      setButtonVariants({
        all: ButtonVariant.outlined,
        firstFive: ButtonVariant.outlined,
        red: ButtonVariant.outlined,
      });

      return;
    }

    setGoods(await getRedGoods());
    setButtonVariants({
      all: ButtonVariant.outlined,
      firstFive: ButtonVariant.outlined,
      red: ButtonVariant.contained,
    });
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
            variant={buttonVariants.all}
            type="button"
            onClick={handleLoadAll}
          >
            Load all goods
          </Button>
          <Button
            variant={buttonVariants.firstFive}
            type="button"
            onClick={handle5First}
          >
            Load 5 first goods
          </Button>
          <Button
            variant={buttonVariants.red}
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
