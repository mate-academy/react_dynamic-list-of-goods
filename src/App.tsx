import React from 'react';
import { Product } from './types/Product';
import './App.scss';

import { getAllGoods, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';

type State = {
  goods: Product[];
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Dynamic List of Goods</h1>

        <button
          type="button"
          onClick={() => getAllGoods().then((allGoods) => {
            this.setState({ goods: allGoods });
          })}
          className="App__button"
        >
          Get all the goods
        </button>

        <button
          type="button"
          onClick={() => get5First().then((fiveGoods) => {
            this.setState({ goods: fiveGoods });
          })}
          className="App__button"
        >
          Get 5 first products
        </button>

        <button
          type="button"
          onClick={() => getRedGoods().then((redGoods) => {
            this.setState({ goods: redGoods });
          })}
          className="App__button"
        >
          Get red goods
        </button>

        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
