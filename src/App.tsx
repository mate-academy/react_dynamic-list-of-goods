import React from 'react';
import './App.scss';
import { GoodsList } from './component/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[],
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  showGoods = async (callback: () => Promise<Good[]>) => {
    const goods = await callback();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="container">
        <h1>Dynamic list of Goods</h1>
        <button
          className="btn btn-info"
          type="button"
          onClick={() => this.showGoods(getAll)}
        >
          Load All goods
        </button>

        <button
          className="btn btn-success"
          type="button"
          onClick={() => this.showGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          className="btn btn-danger"
          type="button"
          onClick={() => this.showGoods(getRedGoods)}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
