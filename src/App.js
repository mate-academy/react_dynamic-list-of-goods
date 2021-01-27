import React from 'react';

import './App.scss';
import { getAll, get5First, getRed } from './api/goods';
import { ListOfGoods } from './components/ListOfGoods';

class App extends React.Component {
  state = {
    goods: [],
  }

  setGoods = (method) => {
    method().then(goods => this.setState({ goods }));
  }

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic List of Goods</h1>

        <button
          type="button"
          onClick={() => this.setGoods(getAll)}
        >
          Get all the goods
        </button>

        <button
          type="button"
          onClick={() => this.setGoods(get5First)}
        >
          Get all the goods
        </button>

        <button
          type="button"
          onClick={() => this.setGoods(getRed)}
        >
          Get all the goods
        </button>

        <ListOfGoods goods={goods} />
      </div>
    );
  }
}

export default App;
