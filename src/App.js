import React from 'react';

import { GoodsList } from './components/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

export class App extends React.Component {
  state = {
    goodsFromServer: [],
  }

  handleButtonSubmit = (loadGoods) => {
    loadGoods()
      .then(goodsFromServer => this.setState({ goodsFromServer }));
  }

  render() {
    const { goodsFromServer } = this.state;

    return (
      <>
        <h1> Dynamic list of Goods</h1>
        <GoodsList
          goods={goodsFromServer}
        />
        <button
          type="submit"
          onClick={() => this.handleButtonSubmit(getAll)}
        >
          Load All goods
        </button>
        <button
          type="submit"
          onClick={() => this.handleButtonSubmit(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="submit"
          onClick={() => this.handleButtonSubmit(getRedGoods)}
        >
          Load red goods
        </button>
      </>
    );
  }
}

export default App;
