import React from 'react';
import GoodsList from './components/GoodsList';

import './App.scss';

import { getResponse, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goodsList: [],
  }

  getALlGoods = () => {
    getResponse().then(goodsList => this.setState({ goodsList }));
  }

  getFirstFiveGoods = () => {
    get5First().then(goodsList => this.setState({ goodsList }));
  }

  getRedGoods = () => {
    getRedGoods().then(goodsList => this.setState({ goodsList }));
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.getALlGoods}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={this.getFirstFiveGoods}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.getRedGoods}
        >
          Load red goods
        </button>
        <GoodsList
          goodsList={this.state.goodsList}
          getALlGoods={this.getALlGoods}
          getFirstFiveGoods={this.getFirstFiveGoods}
          getRedGoods={this.getRedGoods}
        />
      </>
    );
  }
}

export default App;
