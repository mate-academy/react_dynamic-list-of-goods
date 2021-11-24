import React from 'react';
import { GoodsList } from './components/GoodsList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

interface Good {
  id: number,
  name: string,
  color: string,
}

interface State {
  goods: Good[],
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  getGoods = async (callback: () => Promise<Good[]>) => {
    const goods = await callback();

    this.setState({ goods });
  };

  render() {
    return (
      <div>
        <h1>Dynamic list of Goods</h1>

        <button
          className="button"
          type="button"
          onClick={() => this.getGoods(getAll)}
        >
          Load All goods
        </button>

        <button
          className="button"
          type="button"
          onClick={() => this.getGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          className="button"
          type="button"
          onClick={() => this.getGoods(getRedGoods)}
        >
          Load red goods
        </button>

        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
