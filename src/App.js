import React from 'react';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import GoodsList from './components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  getGoods = async(callback) => {
    const prepearedGoods = await callback();

    this.setState({ goods: prepearedGoods });
  }

  render() {
    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <GoodsList goods={this.state.goods} />

        <button
          type="button"
          onClick={() => this.getGoods(getAll)}
        >
          Display all goods
        </button>

        <button
          type="button"
          onClick={() => this.getGoods(get5First)}
        >
          Display 5 firs goods
        </button>

        <button
          type="button"
          onClick={() => this.getGoods(getRed)}
        >
          Display all red goods
        </button>
      </div>
    );
  }
}

export default App;
