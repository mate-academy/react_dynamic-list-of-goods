import React from 'react';
import GoodsList from './GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    products: [],
  }

  productsFromServer = (callback) => {
    callback()
      .then(response => (
        this.setState({
          products: response,
        })
      ));
  }

  render() {
    const { products } = this.state;

    return (

      <div>
        <h1>Dynamic list of Goods</h1>
        <button
          type="submit"
          onClick={() => this.productsFromServer(getAll)}
        >
          Load All goods
        </button>
        <button
          type="submit"
          onClick={() => this.productsFromServer(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="submit"
          onClick={() => this.productsFromServer(getRedGoods)}
        >
          Load red goods
        </button>

        <GoodsList products={products} />
      </div>
    );
  }
}

export default App;
