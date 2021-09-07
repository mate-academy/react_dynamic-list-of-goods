import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

interface State {
  goods: Good[],
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  selectAllGood = () => {
    getAll()
      .then(goods => {
        this.setState({ goods });
      });
  };

  select5FirstGood = () => {
    get5First()
      .then(goods => {
        const sortGoods = [...goods]
          .sort((goodA, goodB) => goodA.name.localeCompare(goodB.name))
          .slice(0, 5);

        this.setState({ goods: sortGoods });
      });
  };

  selectRedGood = () => {
    getRedGoods()
      .then(goods => {
        const redGoods = goods.filter(({ color }) => color === 'red');

        this.setState({ goods: redGoods });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          onClick={this.selectAllGood}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={this.select5FirstGood}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={this.selectRedGood}
        >
          Load red goods
        </button>

        {goods.length > 0 && <GoodsList goods={goods} />}
      </div>
    );
  }
}

export default App;
