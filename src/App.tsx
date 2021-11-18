import React from 'react';
import './App.scss';
import { GoodList } from './components/GoodList';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types';

interface State {
  goods: Good[],
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  getGoods = async (callback: () => Promise<Good[]>) => {
    callback()
      .then((goods) => this.setState({ goods }));
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>

        <div className="App__buttons">
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
            onClick={() => this.getGoods(getRed)}
          >
            Load red goods
          </button>
        </div>

        {goods.length > 0 && (
          <GoodList goods={goods} />
        )}
      </div>
    );
  }
}

export default App;
