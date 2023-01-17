import React, { useState } from 'react';
import './App.scss';
import 'bulma/css/bulma.min.css';
import { Button, Container, Heading } from 'react-bulma-components';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleTableRender = async (getGoods: Promise<Good[]>) => {
    setGoods(await getGoods);
  };

  return (
    <div className="App">
      <Container breakpoint="fullhd">
        <Heading
          size={1}
          spaced
          weight="light"
        >
          Dynamic list of Goods
        </Heading>
        <Button
          color="success is-light"
          renderAs="span"
          data-cy="all-button"
          onClick={() => handleTableRender(getAll())}
        >
          Load all goods
        </Button>
        <Button
          color="info is-light"
          renderAs="span"
          data-cy="first-five-button"
          onClick={() => handleTableRender(get5First())}
        >
          Load 5 first goods
        </Button>
        <Button
          color="danger is-light"
          renderAs="span"
          data-cy="red-button"
          onClick={() => handleTableRender(getRedGoods())}
        >
          Load red goods
        </Button>
        <GoodsList goods={goods} />
      </Container>
    </div>
  );
};
