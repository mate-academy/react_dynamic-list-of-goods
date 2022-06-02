import React from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './components/GoodList';
import { Goods } from './types/Goods';
import './App.scss';
// or
// import * as goodsAPI from './api/goods';

type Props = {};

type State = {
  goods: Goods[],
};

class App extends React.Component<Props, State> {
  state = {
    goods: [],
  };

  loadGoods = async () => {
    const goods = await getAll();

    this.setState({ goods });
  };

  loadFiveGoods = async () => {
    const goods = await getAll();
    const fiveGoods = get5First(goods);

    this.setState({ goods: fiveGoods });
  };

  loadRedGoods = async () => {
    const goods = await getAll();
    const redGoods = getRedGoods(goods);

    this.setState({ goods: redGoods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="container">
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.loadGoods}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={this.loadFiveGoods}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={this.loadRedGoods}
        >
          Load red goods
        </button>

        <GoodList goods={goods} />
      </div>
    );
  }
}

export default App;
