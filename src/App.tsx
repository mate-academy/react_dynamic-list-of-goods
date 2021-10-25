import React from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';

type State = {
  goods: Good[],
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  showGoods = async (props: () => Promise<Good[]>) => {
    const goods = await props();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.showGoods(getAll)}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => this.showGoods(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => this.showGoods(getRedGoods)}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;
