import React from 'react';
import { GoodsList } from './components/GoodsList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

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

  handleClick = async (callback: () => Promise<Good[]>) => {
    const goods = await callback();

    this.setState({ goods });
  };

  render() {
    return (
      <div>
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          onClick={() => this.handleClick(getAll)}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => this.handleClick(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => this.handleClick(getRedGoods)}
        >
          Load red goods
        </button>

        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
