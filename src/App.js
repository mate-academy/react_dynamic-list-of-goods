import React from 'react';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { Button } from './componets/Button';
import { ProductsList } from './componets/ProductsList';

export class App extends React.Component {
  state = {
    products: [],
  }

  loadedProducts = (callback) => {
    callback()
      .then(response => this.setState({
        products: response,
      }));
  }

  render() {
    const { products } = this.state;

    return (
      <>
        <Button
          name="Load All goods"
          loadedProducts={() => this.loadedProducts(getAll)}
        />

        <Button
          name="Load 5 first goods"
          loadedProducts={() => this.loadedProducts(get5First)}
        />

        <Button
          name="Load red goods"
          loadedProducts={() => this.loadedProducts(getRed)}
        />

        <ProductsList products={products} />
      </>
    );
  }
}
