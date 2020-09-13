import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './components/GoodList/GoodList';
// or
// import * as goodsAPI from './api/goods';

export class App extends React.Component {
  state = {
    items: [],
  };

  setAllItems = () => {
    getAll()
      .then((items) => {
        this.setState({ items });
      });
  };

  set5FirstItems = () => {
    get5First()
      .then((items) => {
        this.setState({ items });
      });
  };

  setRedItems = () => {
    getRedGoods()
      .then((items) => {
        this.setState({ items });
      });
  };

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          className="button"
          onClick={this.setAllItems}
        >
          Load all
        </button>
        <button
          type="button"
          className="button"
          onClick={this.set5FirstItems}
        >
          Load first 5
        </button>
        <button
          type="button"
          className="button"
          onClick={this.setRedItems}
        >
          Load red
        </button>
        <GoodList goods={this.state.items} />
      </>
    );
  }
}
