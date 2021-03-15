import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  };

  getGoods = async(getFunc) => {
    const result = await getFunc();

    this.setState({ goods: result });
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <button
          type="button"
          onClick={() => this.getGoods(getAll)}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => this.getGoods(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => this.getGoods(getRedGoods)}
        >
          Load red goods
        </button>
        {
          goods.length > 0 && (
            <GoodsList goods={goods} />
          )
        }
      </div>
    );
  }
}

export default App;
