import React from 'react';
import { GoodsList } from './component/GoodsList';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  loadList = (promise) => {
    promise()
      .then((goods) => {
        this.setState({
          goods,
        });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>
          List of goods
        </h1>
        <GoodsList goods={goods} />
        <button
          type="button"
          onClick={() => this.loadList(getAll)}
        >
          show all
        </button>
        <button
          type="button"
          onClick={() => this.loadList(get5First)}
        >
          show first five
        </button>
        <button
          type="button"
          onClick={() => this.loadList(getRed)}
        >
          show red goods
        </button>
      </div>
    );
  }
}

export default App;
