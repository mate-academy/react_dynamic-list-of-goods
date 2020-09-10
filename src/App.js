import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  getGoods = async(callback) => {
    const goods = await callback();

    this.setState({ goods });
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className="button"
          onClick={() => this.getGoods(getAll)}
        >
          Load All goods
        </button>
        <button
          type="button"
          className="button"
          onClick={() => this.getGoods(getRedGoods)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          className="button"
          onClick={() => this.getGoods(get5First)}
        >
          Load red goods
        </button>
        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
