import React from 'react';

import './App.scss';

import { GoodsList } from './components/GoodsList';

import { getGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  loadAllGoods = async() => {
    this.setState({
      goods: await getGoods(),
    });
  }

  load5first = async() => {
    this.setState({
      goods: (await getGoods())
        .sort((goodA, goodB) => goodA.name.localeCompare(goodB.name))
        .slice(0, 5),
    });
  }

  loadRedGoods = async() => {
    this.setState({
      goods: (await getGoods())
        .filter(good => good.color === 'red'),
    });
  }

  render() {
    return (
      <div>
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          onClick={this.loadAllGoods}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={this.load5first}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.loadRedGoods}
        >
          Load red only
        </button>

        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
