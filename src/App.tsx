import React from 'react';
import './App.scss';
import { Goodlist } from './Component/GoodsList/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[],
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadGoods = async (callback: () => Promise<Good[]>) => {
    const goods = await callback();

    this.setState({
      goods: [...goods],
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.loadGoods(getAll)}
        >
          Load all goods
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
        <Goodlist goods={goods} />
      </div>
    );
  }
}

export default App;
