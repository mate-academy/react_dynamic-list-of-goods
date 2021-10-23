import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

//

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

interface State {
  goods: Good[]
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadFiveGoods() {
    get5First()
      .then(goods => this.setState({ goods }));
  }

  loadGoods() {
    getAll()
      .then(goods => this.setState({ goods }));
  }

  loadRedGoods() {
    getRedGoods()
      .then(goods => this.setState({ goods }));
  }

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.loadGoods()}
        >
          Load goods
        </button>
        <button
          type="button"
          onClick={() => this.loadFiveGoods()}
        >
          Load first 5 goods
        </button>
        <button
          type="button"
          onClick={() => this.loadRedGoods()}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
