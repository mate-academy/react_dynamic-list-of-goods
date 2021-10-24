import React from 'react';
import './App.scss';

import { GoodsList } from './components/GoodsList/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

interface State {
  goods: Good[],
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  loadGoods = async (getGoods: () => Promise<Good[]>) => {
    const goods = await getGoods();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <button
          type="button"
          onClick={() => this.loadGoods(getAll)}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => this.loadGoods(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => this.loadGoods(getRedGoods)}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;
