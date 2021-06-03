import React, { Component } from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import GoodList from './components/GoodList';

class App extends Component {
  state = {
    goods: [],
  }

  responseHandler = (request) => {
    request()
      .then(data => this.setState({ goods: [...data] }));
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.responseHandler(getAll)}
        >
          Load all
        </button>
        <button
          type="button"
          onClick={() => this.responseHandler(get5First)}
        >
          Load 5 first
        </button>
        <button
          type="button"
          onClick={() => this.responseHandler(getRedGoods)}
        >
          Load red
        </button>
        <GoodList goods={this.state.goods} />
      </>
    );
  }
}

export default App;
