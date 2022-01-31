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

  loadAllGoods = async () => {
    const goods = await getAll();

    this.setState({ goods });
  };

  load5First = async () => {
    const goods = await get5First();

    this.setState({ goods });
  };

  loadRedGoods = async () => {
    const goods = await getRedGoods();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.loadAllGoods}
        >
          Load all goods
        </button>

        <button
          type="button"
          onClick={this.load5First}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={this.loadRedGoods}
        >
          Load red goods
        </button>
        <Goodlist goods={goods} />
      </div>
    );
  }
}

export default App;
