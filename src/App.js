import React from 'react';

import './App.scss';
import { Goods } from './Goods';

import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  displayAll = () => {
    getAll().then((goodsFromServer) => {
      this.setState({ goods: goodsFromServer });
    });
  }

  display5First = () => {
    get5First().then((goodsFromServer) => {
      this.setState({ goods: goodsFromServer });
    });
  }

  displayRed = () => {
    getRed().then((goodsFromServer) => {
      this.setState({ goods: goodsFromServer });
    });
  }

  render() {
    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => {
            this.displayAll();
          }}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => {
            this.display5First();
          }}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => {
            this.displayRed();
          }}
        >
          Load red goods
        </button>
        <Goods goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
