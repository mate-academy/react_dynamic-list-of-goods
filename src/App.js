import React from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './GoodsList';

class App extends React.Component {
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
      <>
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          onClick={() => this.handlerForGoods(getAll)}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => this.handlerForGoods(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => this.handlerForGoods(getRedGoods)}
        >
          Load red goods
        </button>
        {products && <GoodsList products={products} />}
      </>
    );
  }
}

export default App;
