import React from 'react';
import './App.scss';
import GoodsList from './GoodsList/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Product } from './types/Product';

type State = {
  products: Product[] | null,
  errorMessage: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    products: null,
    errorMessage: '',
  };

  getData = async (func: () => Promise<Good[]>) => {
    try {
      const goods = await func();

      this.setState({ products: goods });
    } catch (error) {
      this.setState(
        { errorMessage: 'Ooops! Something went wrong' },
      );
      throw new Error(`Error - ${error}`);
    }
  };

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          onClick={() => {
            this.getData(getAll);
          }}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => {
            this.getData(get5First);
          }}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => {
            this.getData(getRedGoods);
          }}
        >
          Load red goods
        </button>

        {this.state.products && (
          <GoodsList goods={this.state.products} />
        )}
        <p>
          {this.state.errorMessage}
        </p>

      </>
    );
  }
}
