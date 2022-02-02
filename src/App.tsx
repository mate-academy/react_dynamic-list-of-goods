import React from 'react';
import './App.scss';
import 'bulma';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList';

type State = {
  goods: Good[],
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  getGoods(callback: () => Promise<Good[]>) {
    callback()
      .then((goods: Good[]) => {
        this.setState({ goods });
      });
  }

  render() {
    return (
      <div className="content">
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.getGoods(getAll)}
          className="button"
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => this.getGoods(get5First)}
          className="button"
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => this.getGoods(getRed)}
          className="button"
        >
          Load red goods
        </button>

        {this.state.goods.length > 0 && <GoodsList goods={this.state.goods} />}
      </div>

    );
  }
}
export default App;
