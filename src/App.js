import React from 'react';
import Container from '@material-ui/core/Container';

import { ButtonAllGoods } from './components/ButtonAllGoods/ButtonAllGoods';
import { ButtonFiveGoods } from './components/ButtonFiveGoods/ButtonFiveGoods';
import { ButtonRedGoods } from './components/ButtonRedGoods/ButtonRedGoods';
import { GoodsList } from './components/GoodsList/GoodsList';

import './App.scss';

export class App extends React.Component {
  state = {
    products: null,
  }

  handlerForGoods = (callback) => {
    callback().then((products) => {
      this.setState({ products });
    });
  }

  render() {
    const { products } = this.state;

    return (
      <Container maxWidth="sm">
        <h1>Dynamic list of Goods</h1>
        <ButtonAllGoods handlerForGoods={this.handlerForGoods} />
        <ButtonFiveGoods handlerForGoods={this.handlerForGoods} />
        <ButtonRedGoods handlerForGoods={this.handlerForGoods} />
        {products && <GoodsList products={products} />}
      </Container>
    );
  }
}
